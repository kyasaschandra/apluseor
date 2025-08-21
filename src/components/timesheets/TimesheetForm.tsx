import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useTimesheets, type TimesheetEntry } from '@/hooks/useTimesheets';

interface TimesheetFormProps {
  timesheetId?: string;
  onClose: () => void;
}

export function TimesheetForm({ timesheetId, onClose }: TimesheetFormProps) {
  const { addTimeEntry, isAddingEntry } = useTimesheets();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TimesheetEntry>();

  const onSubmit = (data: TimesheetEntry) => {
    if (!timesheetId) return;

    addTimeEntry({
      timesheetId,
      entry: {
        work_date: data.work_date,
        project: data.project || '',
        task: data.task || '',
        hours: Number(data.hours),
        overtime_hours: Number(data.overtime_hours) || 0,
        notes: data.notes || '',
      }
    });

    reset();
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="work_date">Date</Label>
          <Input
            id="work_date"
            type="date"
            {...register('work_date', { required: 'Date is required' })}
          />
          {errors.work_date && (
            <p className="text-sm text-destructive">{errors.work_date.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="hours">Regular Hours</Label>
          <Input
            id="hours"
            type="number"
            step="0.25"
            min="0"
            max="24"
            placeholder="8.0"
            {...register('hours', { 
              required: 'Hours are required',
              min: { value: 0, message: 'Hours must be positive' },
              max: { value: 24, message: 'Hours cannot exceed 24' }
            })}
          />
          {errors.hours && (
            <p className="text-sm text-destructive">{errors.hours.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="project">Project</Label>
          <Input
            id="project"
            placeholder="Project name"
            {...register('project')}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="overtime_hours">Overtime Hours</Label>
          <Input
            id="overtime_hours"
            type="number"
            step="0.25"
            min="0"
            placeholder="0"
            {...register('overtime_hours')}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="task">Task Description</Label>
        <Input
          id="task"
          placeholder="Brief description of work performed"
          {...register('task')}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes">Notes</Label>
        <Textarea
          id="notes"
          placeholder="Additional notes or comments"
          rows={3}
          {...register('notes')}
        />
      </div>

      <div className="flex gap-2 justify-end">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isAddingEntry}>
          {isAddingEntry ? 'Adding...' : 'Add Entry'}
        </Button>
      </div>
    </form>
  );
}