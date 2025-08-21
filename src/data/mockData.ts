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
  clock_in_time?: string;
  clock_out_time?: string;
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
    notes: 'Worked on login component',
    clock_in_time: '09:00',
    clock_out_time: '17:00'
  },
  {
    id: '2',
    timesheet_id: '1',
    work_date: '2024-08-20',
    project: 'Project Alpha',
    task: 'API Integration',
    hours: 7,
    overtime_hours: 1,
    notes: 'Integrated authentication API',
    clock_in_time: '09:00',
    clock_out_time: '17:00'
  },
  {
    id: '3',
    timesheet_id: '2',
    work_date: '2024-08-12',
    project: 'Project Beta',
    task: 'UI Design',
    hours: 6,
    overtime_hours: 0,
    notes: 'Created dashboard mockups',
    clock_in_time: '10:00',
    clock_out_time: '16:00'
  },
  {
    id: '4',
    timesheet_id: '3',
    work_date: '2024-08-05',
    project: 'Project Gamma',
    task: 'Database Setup',
    hours: 8,
    overtime_hours: 2,
    notes: 'Set up production database',
    clock_in_time: '08:00',
    clock_out_time: '18:00'
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

export interface Employee {
  id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: 'EMPLOYEE' | 'COMPANY' | 'ADMIN';
  department: string;
  status: 'ACTIVE' | 'INACTIVE';
  employee_type: 'FULLTIME' | 'CONTRACTOR' | 'BOTH';
  start_date?: string;
  hourly_rate?: number;
  position?: string;
  manager_id?: string;
  phone?: string;
  address?: string;
  emergency_contact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  bank_details?: {
    account_number: string;
    routing_number: string;
    bank_name: string;
  };
}

export const mockEmployees: Employee[] = [
  {
    id: 'emp1',
    user_id: 'user1',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@company.com',
    role: 'EMPLOYEE',
    department: 'Engineering',
    status: 'ACTIVE',
    employee_type: 'FULLTIME',
    start_date: '2023-01-15',
    hourly_rate: 75,
    position: 'Senior Developer',
    phone: '+1-555-0101',
    address: '123 Main St, City, State 12345',
    emergency_contact: {
      name: 'Jane Doe',
      phone: '+1-555-0102',
      relationship: 'Spouse'
    },
    bank_details: {
      account_number: '****1234',
      routing_number: '123456789',
      bank_name: 'First National Bank'
    }
  },
  {
    id: 'emp2',
    user_id: 'user2',
    first_name: 'Jane',
    last_name: 'Smith',
    email: 'jane.smith@company.com',
    role: 'EMPLOYEE', 
    department: 'Design',
    status: 'ACTIVE',
    employee_type: 'CONTRACTOR',
    start_date: '2023-03-01',
    hourly_rate: 65,
    position: 'UI/UX Designer',
    phone: '+1-555-0201',
    address: '456 Oak Ave, City, State 12345',
    emergency_contact: {
      name: 'Bob Smith',
      phone: '+1-555-0202',
      relationship: 'Brother'
    }
  },
  {
    id: 'emp3',
    user_id: 'user3',
    first_name: 'Mike',
    last_name: 'Johnson',
    email: 'mike.johnson@company.com',
    role: 'EMPLOYEE',
    department: 'Marketing',
    status: 'ACTIVE',
    employee_type: 'BOTH',
    start_date: '2023-02-01',
    hourly_rate: 80,
    position: 'Marketing Manager',
    phone: '+1-555-0301',
    address: '789 Pine St, City, State 12345',
    emergency_contact: {
      name: 'Sarah Johnson',
      phone: '+1-555-0302',
      relationship: 'Spouse'
    },
    bank_details: {
      account_number: '****5678',
      routing_number: '987654321',
      bank_name: 'Community Bank'
    }
  }
];

export interface Expense {
  id: string;
  employee_id: string;
  amount: number;
  category: string;
  description: string;
  date: string;
  status: 'PENDING' | 'APPROVED' | 'PAID' | 'DECLINED';
  receipt_url?: string;
  submitted_at?: string;
  approved_at?: string;
  paid_at?: string;
}

export const mockExpenses: Expense[] = [
  {
    id: '1',
    employee_id: 'emp1',
    amount: 125.50,
    category: 'Travel',
    description: 'Client meeting transportation',
    date: '2024-08-20',
    status: 'PENDING',
    submitted_at: '2024-08-20T10:30:00Z'
  },
  {
    id: '2', 
    employee_id: 'emp1',
    amount: 45.00,
    category: 'Meals',
    description: 'Business lunch',
    date: '2024-08-19',
    status: 'APPROVED',
    submitted_at: '2024-08-19T14:15:00Z',
    approved_at: '2024-08-20T09:00:00Z'
  },
  {
    id: '3',
    employee_id: 'emp2',
    amount: 89.99,
    category: 'Office Supplies',
    description: 'Design software subscription',
    date: '2024-08-18',
    status: 'PAID',
    submitted_at: '2024-08-18T16:20:00Z',
    approved_at: '2024-08-19T08:30:00Z',
    paid_at: '2024-08-21T11:15:00Z'
  }
];

export interface Payslip {
  id: string;
  employee_id: string;
  pay_period_start: string;
  pay_period_end: string;
  gross_pay: number;
  net_pay: number;
  deductions: {
    tax: number;
    health_insurance: number;
    retirement: number;
  };
  status: 'PENDING' | 'PROCESSING' | 'PAID';
  pay_date?: string;
  hours_worked: number;
}

export const mockPayslips: Payslip[] = [
  {
    id: 'ps1',
    employee_id: 'emp1',
    pay_period_start: '2024-08-01',
    pay_period_end: '2024-08-15',
    gross_pay: 6000,
    net_pay: 4200,
    deductions: {
      tax: 1200,
      health_insurance: 300,
      retirement: 300
    },
    status: 'PAID',
    pay_date: '2024-08-20',
    hours_worked: 80
  },
  {
    id: 'ps2',
    employee_id: 'emp1',
    pay_period_start: '2024-08-16',
    pay_period_end: '2024-08-31',
    gross_pay: 6000,
    net_pay: 4200,
    deductions: {
      tax: 1200,
      health_insurance: 300,
      retirement: 300
    },
    status: 'PROCESSING',
    hours_worked: 80
  }
];

export interface Project {
  id: string;
  name: string;
  description: string;
  start_date: string;
  end_date?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'ON_HOLD';
  assigned_employees: string[];
}

export const mockProjects: Project[] = [
  {
    id: 'proj1',
    name: 'Project Alpha',
    description: 'Main product development',
    start_date: '2024-01-01',
    status: 'ACTIVE',
    assigned_employees: ['emp1', 'emp2']
  },
  {
    id: 'proj2',
    name: 'Project Beta',
    description: 'Marketing campaign',
    start_date: '2024-03-01',
    status: 'ACTIVE',
    assigned_employees: ['emp3']
  }
];