-- Create function to update timesheet total hours
CREATE OR REPLACE FUNCTION public.update_timesheet_total_hours(timesheet_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.timesheets 
  SET total_hours = (
    SELECT COALESCE(SUM(hours + COALESCE(overtime_hours, 0)), 0)
    FROM public.timesheet_entries 
    WHERE timesheet_entries.timesheet_id = update_timesheet_total_hours.timesheet_id
  )
  WHERE id = update_timesheet_total_hours.timesheet_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;