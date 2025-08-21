import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { TimesheetForm } from './TimesheetForm';
import { useTimesheets, type Timesheet } from '@/hooks/useTimesheets';
import { format } from 'date-fns';
import { ChevronDown, ChevronRight, Plus, Send, Clock, User } from 'lucide-react';

interface TimesheetListProps {
  timesheets: Timesheet[];
  onAddEntry: (timesheetId: string) => void;
}

export function TimesheetList({ timesheets }: TimesheetListProps) {
  const [openTimesheets, setOpenTimesheets] = useState<Record<string, boolean>>({});
  const [showFormFor, setShowFormFor] = useState<string | null>(null);
  const { submitTimesheet, isSubmitting } = useTimesheets();

  const toggleTimesheet = (timesheetId: string) => {
    setOpenTimesheets(prev => ({
      ...prev,
      [timesheetId]: !prev[timesheetId]
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DRAFT':
        return 'secondary';
      case 'SUBMITTED':
        return 'outline';
      case 'MANAGER_APPROVED':
        return 'default';
      case 'FINANCE_APPROVED':
        return 'default';
      case 'LOCKED':
      case 'PAID':
      case 'PROCESSED':
        return 'secondary';
      default:
        return 'secondary';
    }
  };

  const canEdit = (status: string) => {
    return status === 'DRAFT';
  };

  const canSubmit = (status: string) => {
    return status === 'DRAFT';
  };

  const formatStatus = (status: string) => {
    return status.split('_').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  return (
    <div className="space-y-4">
      {timesheets.map((timesheet) => (
        <Card key={timesheet.id}>
          <Collapsible
            open={openTimesheets[timesheet.id]}
            onOpenChange={() => toggleTimesheet(timesheet.id)}
          >
            <CollapsibleTrigger asChild>
              <CardHeader className="hover:bg-muted/50 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {openTimesheets[timesheet.id] ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    <div>
                      <CardTitle className="text-lg">
                        Week {format(new Date(timesheet.period_start), 'MMM d')} - {format(new Date(timesheet.period_end), 'MMM d, yyyy')}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {timesheet.total_hours} hours
                        </span>
                        {timesheet.employees?.profiles && (
                          <span className="flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {timesheet.employees.profiles.first_name} {timesheet.employees.profiles.last_name}
                          </span>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={getStatusColor(timesheet.status)}>
                      {formatStatus(timesheet.status)}
                    </Badge>
                    {canSubmit(timesheet.status) && (
                      <Button
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          submitTimesheet(timesheet.id);
                        }}
                        disabled={isSubmitting}
                        className="ml-2"
                      >
                        <Send className="h-3 w-3 mr-1" />
                        Submit
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
            </CollapsibleTrigger>

            <CollapsibleContent>
              <CardContent>
                {showFormFor === timesheet.id && canEdit(timesheet.status) ? (
                  <div className="mb-6">
                    <h4 className="font-medium mb-4">Add Time Entry</h4>
                    <TimesheetForm
                      timesheetId={timesheet.id}
                      onClose={() => setShowFormFor(null)}
                    />
                  </div>
                ) : null}

                {timesheet.timesheet_entries && timesheet.timesheet_entries.length > 0 ? (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Time Entries</h4>
                      {canEdit(timesheet.status) && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setShowFormFor(timesheet.id)}
                        >
                          <Plus className="h-3 w-3 mr-1" />
                          Add Entry
                        </Button>
                      )}
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Project</TableHead>
                          <TableHead>Task</TableHead>
                          <TableHead>Regular Hours</TableHead>
                          <TableHead>Overtime</TableHead>
                          <TableHead>Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {timesheet.timesheet_entries.map((entry) => (
                          <TableRow key={entry.id}>
                            <TableCell>
                              {format(new Date(entry.work_date), 'MMM d')}
                            </TableCell>
                            <TableCell>{entry.project || '-'}</TableCell>
                            <TableCell>{entry.task || '-'}</TableCell>
                            <TableCell>{entry.hours}h</TableCell>
                            <TableCell>{entry.overtime_hours || 0}h</TableCell>
                            <TableCell className="max-w-xs truncate">
                              {entry.notes || '-'}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Clock className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground mb-4">No time entries yet</p>
                    {canEdit(timesheet.status) && (
                      <Button
                        onClick={() => setShowFormFor(timesheet.id)}
                        size="sm"
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Add First Entry
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}
    </div>
  );
}