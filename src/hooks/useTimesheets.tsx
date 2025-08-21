import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { useAuth } from './useAuth';

export interface TimesheetEntry {
  id?: string;
  timesheet_id?: string;
  work_date: string;
  project?: string;
  task?: string;
  hours: number;
  overtime_hours?: number;
  notes?: string;
}

export interface Timesheet {
  id: string;
  employee_id: string;
  period_start: string;
  period_end: string;
  status: 'DRAFT' | 'SUBMITTED' | 'MANAGER_APPROVED' | 'FINANCE_APPROVED' | 'LOCKED' | 'PAID' | 'PROCESSED';
  total_hours: number;
  submitted_at?: string;
  timesheet_entries?: TimesheetEntry[];
  employees?: {
    id: string;
    profiles?: {
      first_name?: string;
      last_name?: string;
    };
  };
}

export function useTimesheets() {
  const { profile } = useAuth();
  const queryClient = useQueryClient();

  const { data: timesheets, isLoading } = useQuery({
    queryKey: ['timesheets', profile?.user_id],
    queryFn: async () => {
      let query = supabase
        .from('timesheets')
        .select(`
          *,
          timesheet_entries(*),
          employees(
            id,
            profiles(first_name, last_name)
          )
        `)
        .order('period_start', { ascending: false });

      // If user is an employee, only show their timesheets
      if (profile?.role === 'EMPLOYEE') {
        const { data: employeeRecord } = await supabase
          .from('employees')
          .select('id')
          .eq('user_id', profile.user_id)
          .single();
        
        if (employeeRecord) {
          query = query.eq('employee_id', employeeRecord.id);
        }
      }

      const { data, error } = await query;

      if (error) throw error;
      return data as Timesheet[];
    },
    enabled: !!profile?.user_id,
  });

  const createTimesheet = useMutation({
    mutationFn: async ({ period_start, period_end }: { period_start: string; period_end: string }) => {
      // Get employee record
      const { data: employeeRecord, error: employeeError } = await supabase
        .from('employees')
        .select('id')
        .eq('user_id', profile?.user_id)
        .single();

      if (employeeError || !employeeRecord) {
        throw new Error('Employee record not found');
      }

      const { data, error } = await supabase
        .from('timesheets')
        .insert([{
          employee_id: employeeRecord.id,
          period_start,
          period_end,
        }])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timesheets'] });
      toast({
        title: "Timesheet created",
        description: "New timesheet has been created successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to create timesheet",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const addTimeEntry = useMutation({
    mutationFn: async ({ timesheetId, entry }: { timesheetId: string; entry: TimesheetEntry }) => {
      const { data, error } = await supabase
        .from('timesheet_entries')
        .insert([{
          timesheet_id: timesheetId,
          work_date: entry.work_date,
          project: entry.project,
          task: entry.task,
          hours: entry.hours,
          overtime_hours: entry.overtime_hours || 0,
          notes: entry.notes,
        }])
        .select()
        .single();

      if (error) throw error;

      // Update total hours on timesheet
      const { error: updateError } = await supabase.rpc('update_timesheet_total_hours', {
        timesheet_id: timesheetId
      });

      if (updateError) console.error('Failed to update total hours:', updateError);

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timesheets'] });
      toast({
        title: "Time entry added",
        description: "Time entry has been added successfully.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to add time entry",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const submitTimesheet = useMutation({
    mutationFn: async (timesheetId: string) => {
      const { data, error } = await supabase
        .from('timesheets')
        .update({
          status: 'SUBMITTED',
          submitted_at: new Date().toISOString(),
        })
        .eq('id', timesheetId)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['timesheets'] });
      toast({
        title: "Timesheet submitted",
        description: "Your timesheet has been submitted for approval.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to submit timesheet",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  return {
    timesheets,
    isLoading,
    createTimesheet: createTimesheet.mutate,
    isCreating: createTimesheet.isPending,
    addTimeEntry: addTimeEntry.mutate,
    isAddingEntry: addTimeEntry.isPending,
    submitTimesheet: submitTimesheet.mutate,
    isSubmitting: submitTimesheet.isPending,
  };
}