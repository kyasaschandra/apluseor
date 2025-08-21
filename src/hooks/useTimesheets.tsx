import { useState } from 'react';
import { toast } from '@/hooks/use-toast';
import { useAuth } from './useAuth';
import { mockTimesheets, mockTimesheetEntries, type Timesheet, type TimesheetEntry } from '@/data/mockData';

// Re-export types from mockData
export type { TimesheetEntry, Timesheet } from '@/data/mockData';

export function useTimesheets() {
  const { profile } = useAuth();
  const [timesheets, setTimesheets] = useState<Timesheet[]>(mockTimesheets);
  const [isLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [isAddingEntry, setIsAddingEntry] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const createTimesheet = async ({ period_start, period_end }: { period_start: string; period_end: string }) => {
    setIsCreating(true);
    
    try {
      const newTimesheet: Timesheet = {
        id: Math.random().toString(36).substr(2, 9),
        employee_id: 'emp1',
        period_start,
        period_end,
        status: 'DRAFT',
        total_hours: 0,
        timesheet_entries: [],
        employees: {
          id: 'emp1',
          profiles: {
            first_name: 'John',
            last_name: 'Doe'
          }
        }
      };

      setTimesheets(prev => [newTimesheet, ...prev]);
      
      toast({
        title: "Timesheet created",
        description: "New timesheet has been created successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Failed to create timesheet",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const addTimeEntry = async ({ timesheetId, entry }: { timesheetId: string; entry: TimesheetEntry }) => {
    setIsAddingEntry(true);
    
    try {
      const newEntry: TimesheetEntry = {
        ...entry,
        id: Math.random().toString(36).substr(2, 9),
        timesheet_id: timesheetId,
        overtime_hours: entry.overtime_hours || 0,
      };

      setTimesheets(prev => prev.map(timesheet => {
        if (timesheet.id === timesheetId) {
          const newEntries = [...(timesheet.timesheet_entries || []), newEntry];
          const totalHours = newEntries.reduce((sum, e) => sum + e.hours + (e.overtime_hours || 0), 0);
          
          return {
            ...timesheet,
            timesheet_entries: newEntries,
            total_hours: totalHours
          };
        }
        return timesheet;
      }));

      toast({
        title: "Time entry added",
        description: "Time entry has been added successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Failed to add time entry",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsAddingEntry(false);
    }
  };

  const submitTimesheet = async (timesheetId: string) => {
    setIsSubmitting(true);
    
    try {
      setTimesheets(prev => prev.map(timesheet => {
        if (timesheet.id === timesheetId) {
          return {
            ...timesheet,
            status: 'SUBMITTED' as const,
            submitted_at: new Date().toISOString()
          };
        }
        return timesheet;
      }));

      toast({
        title: "Timesheet submitted",
        description: "Your timesheet has been submitted for approval.",
      });
    } catch (error: any) {
      toast({
        title: "Failed to submit timesheet",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    timesheets,
    isLoading,
    createTimesheet,
    isCreating,
    addTimeEntry,
    isAddingEntry,
    submitTimesheet,
    isSubmitting,
  };
}