import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Plus, Clock, Users } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { Badge } from '@/components/ui/badge';

interface Holiday {
  id: string;
  name: string;
  date: string;
  type: 'COMPANY' | 'NATIONAL';
}

interface LeaveRequest {
  id: string;
  employee_id: string;
  type: 'SICK' | 'VACATION' | 'PERSONAL';
  start_date: string;
  end_date: string;
  status: 'PENDING' | 'APPROVED' | 'DECLINED';
  reason?: string;
}

const mockHolidays: Holiday[] = [
  {
    id: 'h1',
    name: 'New Year\'s Day',
    date: '2024-01-01',
    type: 'NATIONAL'
  },
  {
    id: 'h2',
    name: 'Company Retreat',
    date: '2024-03-15',
    type: 'COMPANY'
  },
  {
    id: 'h3',
    name: 'Independence Day',
    date: '2024-07-04',
    type: 'NATIONAL'
  }
];

const mockLeaveRequests: LeaveRequest[] = [
  {
    id: 'lr1',
    employee_id: 'emp1',
    type: 'SICK',
    start_date: '2024-08-25',
    end_date: '2024-08-26',
    status: 'PENDING',
    reason: 'Doctor appointment'
  }
];

const Calendar = () => {
  const { profile } = useAuth();
  const [holidays] = useState<Holiday[]>(mockHolidays);
  const [leaveRequests] = useState<LeaveRequest[]>(mockLeaveRequests);

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Calendar</h1>
          <p className="text-muted-foreground">
            View holidays and manage leave requests
          </p>
        </div>
        {profile?.role === 'EMPLOYEE' && (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Request Leave
          </Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="h-5 w-5 text-primary" />
              Upcoming Holidays
            </CardTitle>
            <CardDescription>
              Company and national holidays
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {holidays.map((holiday) => (
              <div key={holiday.id} className="flex items-center justify-between p-3 border border-border rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{holiday.name}</p>
                  <p className="text-sm text-muted-foreground">{new Date(holiday.date).toLocaleDateString()}</p>
                </div>
                <Badge variant={holiday.type === 'COMPANY' ? 'default' : 'secondary'}>
                  {holiday.type}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Leave Requests
            </CardTitle>
            <CardDescription>
              Your leave requests and status
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {leaveRequests.map((request) => (
              <div key={request.id} className="p-3 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-foreground capitalize">{request.type.toLowerCase()}</span>
                  <Badge variant={
                    request.status === 'APPROVED' ? 'default' : 
                    request.status === 'DECLINED' ? 'destructive' : 'secondary'
                  }>
                    {request.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {new Date(request.start_date).toLocaleDateString()} - {new Date(request.end_date).toLocaleDateString()}
                </p>
                {request.reason && (
                  <p className="text-sm text-muted-foreground">{request.reason}</p>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {profile?.role === 'COMPANY' && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Manage Holidays
            </CardTitle>
            <CardDescription>
              Set company holidays and manage employee leave requests
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Holiday
              </Button>
              <Button variant="outline">
                View All Requests
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Calendar;