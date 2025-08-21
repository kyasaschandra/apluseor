import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTimesheets } from '@/hooks/useTimesheets';
import { TimesheetForm } from '@/components/timesheets/TimesheetForm';
import { TimesheetList } from '@/components/timesheets/TimesheetList';
import { Plus, Clock, Calendar } from 'lucide-react';
import { format, startOfWeek, endOfWeek } from 'date-fns';

const Timesheets = () => {
  const [showForm, setShowForm] = useState(false);
  const { timesheets, isLoading, createTimesheet, isCreating } = useTimesheets();

  const getCurrentWeekPeriod = () => {
    const now = new Date();
    const start = startOfWeek(now, { weekStartsOn: 1 }); // Monday
    const end = endOfWeek(now, { weekStartsOn: 1 }); // Sunday
    
    return {
      period_start: format(start, 'yyyy-MM-dd'),
      period_end: format(end, 'yyyy-MM-dd'),
    };
  };

  const handleCreateWeeklyTimesheet = () => {
    const period = getCurrentWeekPeriod();
    createTimesheet(period);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DRAFT':
        return 'secondary';
      case 'SUBMITTED':
        return 'outline';
      case 'MANAGER_APPROVED':
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Timesheets</h1>
          <p className="text-muted-foreground">
            Track your working hours and manage time entries
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={handleCreateWeeklyTimesheet}
            disabled={isCreating}
            className="flex items-center gap-2"
          >
            <Plus className="h-4 w-4" />
            {isCreating ? 'Creating...' : 'New Weekly Timesheet'}
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {timesheets?.find(t => {
                const currentPeriod = getCurrentWeekPeriod();
                return t.period_start === currentPeriod.period_start;
              })?.total_hours || 0} hrs
            </div>
            <p className="text-xs text-muted-foreground">
              Current week total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {timesheets?.filter(t => t.status === 'DRAFT').length || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Draft timesheets
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {timesheets?.reduce((total, t) => {
                const entryDate = new Date(t.period_start);
                const currentMonth = new Date().getMonth();
                const currentYear = new Date().getFullYear();
                
                if (entryDate.getMonth() === currentMonth && entryDate.getFullYear() === currentYear) {
                  return total + (t.total_hours || 0);
                }
                return total;
              }, 0) || 0} hrs
            </div>
            <p className="text-xs text-muted-foreground">
              Monthly total
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="timesheets" className="w-full">
        <TabsList>
          <TabsTrigger value="timesheets">My Timesheets</TabsTrigger>
          <TabsTrigger value="entries" disabled>Time Entries</TabsTrigger>
        </TabsList>

        <TabsContent value="timesheets" className="space-y-4">
          {showForm ? (
            <Card>
              <CardHeader>
                <CardTitle>Add Time Entry</CardTitle>
                <CardDescription>
                  Log your working hours for a specific date
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TimesheetForm onClose={() => setShowForm(false)} />
              </CardContent>
            </Card>
          ) : null}

          {timesheets && timesheets.length > 0 ? (
            <TimesheetList
              timesheets={timesheets}
              onAddEntry={(timesheetId) => {
                // This would open a form for the specific timesheet
                setShowForm(true);
              }}
            />
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <Clock className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">No timesheets found</h3>
                <p className="text-muted-foreground mb-4 text-center">
                  Get started by creating your first weekly timesheet
                </p>
                <Button onClick={handleCreateWeeklyTimesheet} disabled={isCreating}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Weekly Timesheet
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Timesheets;