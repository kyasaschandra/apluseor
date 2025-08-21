// Mock data for development
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

export const mockTimesheetEntries: TimesheetEntry[] = [
  {
    id: '1',
    timesheet_id: '1',
    work_date: '2024-08-19',
    project: 'Project Alpha',
    task: 'Frontend Development',
    hours: 8,
    overtime_hours: 0,
    notes: 'Worked on login component'
  },
  {
    id: '2',
    timesheet_id: '1',
    work_date: '2024-08-20',
    project: 'Project Alpha',
    task: 'API Integration',
    hours: 7,
    overtime_hours: 1,
    notes: 'Integrated authentication API'
  },
  {
    id: '3',
    timesheet_id: '2',
    work_date: '2024-08-12',
    project: 'Project Beta',
    task: 'UI Design',
    hours: 6,
    overtime_hours: 0,
    notes: 'Created dashboard mockups'
  },
  {
    id: '4',
    timesheet_id: '3',
    work_date: '2024-08-05',
    project: 'Project Gamma',
    task: 'Database Setup',
    hours: 8,
    overtime_hours: 2,
    notes: 'Set up production database'
  }
];

export const mockTimesheets: Timesheet[] = [
  {
    id: '1',
    employee_id: 'emp1',
    period_start: '2024-08-19',
    period_end: '2024-08-25',
    status: 'DRAFT',
    total_hours: 15,
    timesheet_entries: mockTimesheetEntries.filter(e => e.timesheet_id === '1'),
    employees: {
      id: 'emp1',
      profiles: {
        first_name: 'John',
        last_name: 'Doe'
      }
    }
  },
  {
    id: '2',
    employee_id: 'emp1',
    period_start: '2024-08-12',
    period_end: '2024-08-18',
    status: 'SUBMITTED',
    total_hours: 6,
    submitted_at: '2024-08-19T09:00:00Z',
    timesheet_entries: mockTimesheetEntries.filter(e => e.timesheet_id === '2'),
    employees: {
      id: 'emp1',
      profiles: {
        first_name: 'John',
        last_name: 'Doe'
      }
    }
  },
  {
    id: '3',
    employee_id: 'emp1',
    period_start: '2024-08-05',
    period_end: '2024-08-11',
    status: 'MANAGER_APPROVED',
    total_hours: 10,
    submitted_at: '2024-08-12T10:30:00Z',
    timesheet_entries: mockTimesheetEntries.filter(e => e.timesheet_id === '3'),
    employees: {
      id: 'emp1',
      profiles: {
        first_name: 'John',
        last_name: 'Doe'
      }
    }
  }
];

export const mockEmployees = [
  {
    id: 'emp1',
    user_id: 'user1',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@company.com',
    role: 'EMPLOYEE',
    department: 'Engineering',
    status: 'ACTIVE'
  },
  {
    id: 'emp2',
    user_id: 'user2',
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane.smith@company.com',
    role: 'EMPLOYEE', 
    department: 'Design',
    status: 'ACTIVE'
  },
  {
    id: 'emp3',
    user_id: 'user3',
    first_name: 'Mike',
    last_name: 'Johnson',
    email: 'mike.johnson@company.com',
    role: 'EMPLOYEE',
    department: 'Marketing',
    status: 'ACTIVE'
  }
];

export const mockExpenses = [
  {
    id: '1',
    employee_id: 'emp1',
    amount: 125.50,
    category: 'Travel',
    description: 'Client meeting transportation',
    date: '2024-08-20',
    status: 'PENDING'
  },
  {
    id: '2', 
    employee_id: 'emp1',
    amount: 45.00,
    category: 'Meals',
    description: 'Business lunch',
    date: '2024-08-19',
    status: 'APPROVED'
  }
];