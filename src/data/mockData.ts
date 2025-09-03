// Mock data for development - Multi-tenant HR System

export interface Company {
  id: string;
  name: string;
  legal_name: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  currency: string;
  settings: {
    working_hours_per_day: number;
    working_days_per_week: number;
    overtime_rate_multiplier: number;
  };
}

export const mockCompanies: Company[] = [
  {
    id: 'company1',
    name: 'TechCorp Solutions',
    legal_name: 'TechCorp Solutions Inc.',
    email: 'hr@techcorp.com',
    phone: '+1-555-TECH-001',
    address: '123 Tech Street, Silicon Valley, CA 94000',
    country: 'USA',
    currency: 'USD',
    settings: {
      working_hours_per_day: 8,
      working_days_per_week: 5,
      overtime_rate_multiplier: 1.5
    }
  },
  {
    id: 'company2',
    name: 'Design Studio Pro',
    legal_name: 'Design Studio Pro LLC',
    email: 'contact@designstudiopro.com',
    phone: '+1-555-DESIGN-02',
    address: '456 Creative Ave, Austin, TX 78701',
    country: 'USA',
    currency: 'USD',
    settings: {
      working_hours_per_day: 8,
      working_days_per_week: 5,
      overtime_rate_multiplier: 1.5
    }
  },
  {
    id: 'company3',
    name: 'Global Marketing Inc',
    legal_name: 'Global Marketing Incorporated',
    email: 'hr@globalmarketing.com',
    phone: '+1-555-MARKET-03',
    address: '789 Business Blvd, New York, NY 10001',
    country: 'USA',
    currency: 'USD',
    settings: {
      working_hours_per_day: 8,
      working_days_per_week: 5,
      overtime_rate_multiplier: 1.5
    }
  }
];

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
  // John Doe (emp1) - TechCorp - Current Week
  {
    id: 'te1',
    timesheet_id: '1',
    work_date: '2024-08-19',
    project: 'E-Commerce Platform Redesign',
    task: 'Frontend Development - Product Pages',
    hours: 8,
    overtime_hours: 0,
    notes: 'Implemented responsive product grid and detail pages'
  },
  {
    id: 'te2',
    timesheet_id: '1',
    work_date: '2024-08-20',
    project: 'E-Commerce Platform Redesign',
    task: 'API Integration - Payment Gateway',
    hours: 7,
    overtime_hours: 1,
    notes: 'Integrated Stripe payment system, debugging checkout flow'
  },
  {
    id: 'te3',
    timesheet_id: '1',
    work_date: '2024-08-21',
    project: 'Mobile App Development',
    task: 'User Authentication Module',
    hours: 8,
    overtime_hours: 0,
    notes: 'Developed login/register screens and JWT implementation'
  },
  
  // John Doe (emp1) - Previous Week
  {
    id: 'te4',
    timesheet_id: '2',
    work_date: '2024-08-12',
    project: 'E-Commerce Platform Redesign',
    task: 'Database Schema Design',
    hours: 8,
    overtime_hours: 0,
    notes: 'Designed product catalog and user management tables'
  },
  {
    id: 'te5',
    timesheet_id: '2',
    work_date: '2024-08-13',
    project: 'E-Commerce Platform Redesign',
    task: 'Backend API Development',
    hours: 7.5,
    overtime_hours: 0.5,
    notes: 'Created REST endpoints for product management'
  },
  {
    id: 'te6',
    timesheet_id: '2',
    work_date: '2024-08-14',
    project: 'Mobile App Development',
    task: 'Project Setup and Architecture',
    hours: 6,
    overtime_hours: 0,
    notes: 'Set up React Native project structure and navigation'
  },

  // Alex Chen (emp3) - Design Studio Pro - Current Week
  {
    id: 'te7',
    timesheet_id: '3',
    work_date: '2024-08-19',
    project: 'Website UI/UX Design',
    task: 'Wireframe Creation',
    hours: 8,
    overtime_hours: 0,
    notes: 'Created low-fi wireframes for all main pages'
  },
  {
    id: 'te8',
    timesheet_id: '3',
    work_date: '2024-08-20',
    project: 'Brand Identity Refresh',
    task: 'Logo Design Iterations',
    hours: 7,
    overtime_hours: 0,
    notes: 'Developed 5 logo concepts based on client feedback'
  },
  {
    id: 'te9',
    timesheet_id: '3',
    work_date: '2024-08-21',
    project: 'Website UI/UX Design',
    task: 'High-fidelity Mockups',
    hours: 8,
    overtime_hours: 1,
    notes: 'Created detailed mockups for homepage and product pages'
  },

  // David Kim (emp5) - Global Marketing - Current Week
  {
    id: 'te10',
    timesheet_id: '4',
    work_date: '2024-08-19',
    project: 'Digital Marketing Campaign',
    task: 'Campaign Strategy Development',
    hours: 8,
    overtime_hours: 0,
    notes: 'Analyzed target audience and developed multi-channel strategy'
  },
  {
    id: 'te11',
    timesheet_id: '4',
    work_date: '2024-08-20',
    project: 'SEO Optimization Project',
    task: 'Keyword Research and Analysis',
    hours: 6,
    overtime_hours: 0,
    notes: 'Conducted comprehensive keyword research for target markets'
  },
  {
    id: 'te12',
    timesheet_id: '4',
    work_date: '2024-08-21',
    project: 'Digital Marketing Campaign',
    task: 'Content Creation and Ad Copy',
    hours: 7.5,
    overtime_hours: 0.5,
    notes: 'Wrote ad copy for Google Ads and social media campaigns'
  }
];

export const mockTimesheets: Timesheet[] = [
  // John Doe (emp1) - TechCorp Solutions
  {
    id: '1',
    employee_id: 'emp1',
    period_start: '2024-08-19',
    period_end: '2024-08-25',
    status: 'DRAFT',
    total_hours: 24,
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
    total_hours: 21.5,
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
  
  // Alex Chen (emp3) - Design Studio Pro
  {
    id: '3',
    employee_id: 'emp3',
    period_start: '2024-08-19',
    period_end: '2024-08-25',
    status: 'DRAFT',
    total_hours: 24,
    timesheet_entries: mockTimesheetEntries.filter(e => e.timesheet_id === '3'),
    employees: {
      id: 'emp3',
      profiles: {
        first_name: 'Alex',
        last_name: 'Chen'
      }
    }
  },
  
  // David Kim (emp5) - Global Marketing
  {
    id: '4',
    employee_id: 'emp5',
    period_start: '2024-08-19',
    period_end: '2024-08-25',
    status: 'SUBMITTED',
    total_hours: 22,
    submitted_at: '2024-08-21T18:00:00Z',
    timesheet_entries: mockTimesheetEntries.filter(e => e.timesheet_id === '4'),
    employees: {
      id: 'emp5',
      profiles: {
        first_name: 'David',
        last_name: 'Kim'
      }
    }
  }
];

export interface Employee {
  id: string;
  user_id: string;
  company_id: string;
  first_name: string;
  last_name: string;
  email: string;
  role: 'EMPLOYEE' | 'COMPANY' | 'ADMIN';
  department: string;
  status: 'ACTIVE' | 'INACTIVE' | 'TERMINATED';
  employee_type: 'FULLTIME' | 'CONTRACTOR' | 'BOTH';
  start_date: string;
  end_date?: string;
  hourly_rate: number;
  salary?: number;
  position: string;
  manager_id?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  emergency_contact: {
    name: string;
    phone: string;
    relationship: string;
  };
  bank_details?: {
    account_number: string;
    routing_number: string;
    bank_name: string;
  };
  permissions: string[];
}

export const mockEmployees: Employee[] = [
  // TechCorp Solutions Employees
  {
    id: 'emp1',
    user_id: 'user1',
    company_id: 'company1',
    first_name: 'John',
    last_name: 'Doe',
    email: 'john.doe@techcorp.com',
    role: 'EMPLOYEE',
    department: 'Engineering',
    status: 'ACTIVE',
    employee_type: 'FULLTIME',
    start_date: '2023-01-15',
    hourly_rate: 75,
    salary: 156000,
    position: 'Senior Full Stack Developer',
    phone: '+1-555-0101',
    address: '123 Main St',
    city: 'Palo Alto',
    state: 'CA',
    country: 'USA',
    zip_code: '94301',
    emergency_contact: {
      name: 'Jane Doe',
      phone: '+1-555-0102',
      relationship: 'Spouse'
    },
    bank_details: {
      account_number: '****1234',
      routing_number: '123456789',
      bank_name: 'First National Bank'
    },
    permissions: ['timesheet.create', 'expense.create', 'profile.edit']
  },
  {
    id: 'emp2',
    user_id: 'user2',
    company_id: 'company1',
    first_name: 'Sarah',
    last_name: 'Wilson',
    email: 'sarah.wilson@techcorp.com',
    role: 'COMPANY',
    department: 'Management',
    status: 'ACTIVE',
    employee_type: 'FULLTIME',
    start_date: '2022-06-01',
    hourly_rate: 95,
    salary: 198000,
    position: 'Engineering Manager',
    phone: '+1-555-0201',
    address: '456 Oak Ave',
    city: 'Mountain View',
    state: 'CA',
    country: 'USA',
    zip_code: '94041',
    emergency_contact: {
      name: 'Michael Wilson',
      phone: '+1-555-0202',
      relationship: 'Spouse'
    },
    bank_details: {
      account_number: '****5678',
      routing_number: '123456789',
      bank_name: 'First National Bank'
    },
    permissions: ['timesheet.approve', 'expense.approve', 'employee.manage', 'project.manage']
  },
  {
    id: 'emp3',
    user_id: 'user3',
    company_id: 'company2',
    first_name: 'Alex',
    last_name: 'Chen',
    email: 'alex.chen@designstudiopro.com',
    role: 'EMPLOYEE',
    department: 'Design',
    status: 'ACTIVE',
    employee_type: 'CONTRACTOR',
    start_date: '2023-03-01',
    hourly_rate: 85,
    position: 'Senior UI/UX Designer',
    phone: '+1-555-0301',
    address: '789 Creative St',
    city: 'Austin',
    state: 'TX',
    country: 'USA',
    zip_code: '78701',
    emergency_contact: {
      name: 'Lisa Chen',
      phone: '+1-555-0302',
      relationship: 'Sister'
    },
    permissions: ['timesheet.create', 'invoice.create', 'profile.edit']
  },
  {
    id: 'emp4',
    user_id: 'user4',
    company_id: 'company2',
    first_name: 'Maria',
    last_name: 'Rodriguez',
    email: 'maria.rodriguez@designstudiopro.com',
    role: 'COMPANY',
    department: 'Management',
    status: 'ACTIVE',
    employee_type: 'FULLTIME',
    start_date: '2021-11-15',
    hourly_rate: 88,
    salary: 183000,
    position: 'Creative Director',
    phone: '+1-555-0401',
    address: '321 Design Blvd',
    city: 'Austin',
    state: 'TX',
    country: 'USA',
    zip_code: '78702',
    emergency_contact: {
      name: 'Carlos Rodriguez',
      phone: '+1-555-0402',
      relationship: 'Husband'
    },
    bank_details: {
      account_number: '****9012',
      routing_number: '987654321',
      bank_name: 'Austin Community Bank'
    },
    permissions: ['timesheet.approve', 'expense.approve', 'employee.manage', 'project.manage', 'invoice.approve']
  },
  {
    id: 'emp5',
    user_id: 'user5',
    company_id: 'company3',
    first_name: 'David',
    last_name: 'Kim',
    email: 'david.kim@globalmarketing.com',
    role: 'EMPLOYEE',
    department: 'Marketing',
    status: 'ACTIVE',
    employee_type: 'BOTH',
    start_date: '2023-02-01',
    hourly_rate: 72,
    salary: 150000,
    position: 'Digital Marketing Specialist',
    phone: '+1-555-0501',
    address: '567 Marketing Ave',
    city: 'New York',
    state: 'NY',
    country: 'USA',
    zip_code: '10001',
    emergency_contact: {
      name: 'Jennifer Kim',
      phone: '+1-555-0502',
      relationship: 'Wife'
    },
    bank_details: {
      account_number: '****3456',
      routing_number: '111222333',
      bank_name: 'New York First Bank'
    },
    permissions: ['timesheet.create', 'expense.create', 'invoice.create', 'profile.edit']
  },
  {
    id: 'admin1',
    user_id: 'admin_user1',
    company_id: 'admin_company',
    first_name: 'Amanda',
    last_name: 'Foster',
    email: 'amanda.foster@aplusor.com',
    role: 'ADMIN',
    department: 'Administration',
    status: 'ACTIVE',
    employee_type: 'FULLTIME',
    start_date: '2020-01-01',
    hourly_rate: 125,
    salary: 260000,
    position: 'System Administrator',
    phone: '+1-555-ADMIN-01',
    address: '999 Admin Plaza',
    city: 'San Francisco',
    state: 'CA',
    country: 'USA',
    zip_code: '94105',
    emergency_contact: {
      name: 'Robert Foster',
      phone: '+1-555-ADMIN-02',
      relationship: 'Spouse'
    },
    bank_details: {
      account_number: '****ADMIN',
      routing_number: '999888777',
      bank_name: 'Corporate Central Bank'
    },
    permissions: ['admin.all']
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
  // John Doe (emp1) - TechCorp Solutions
  {
    id: 'exp1',
    employee_id: 'emp1',
    amount: 125.50,
    category: 'Travel',
    description: 'Uber to client meeting - RetailCorp downtown office',
    date: '2024-08-20',
    status: 'APPROVED',
    receipt_url: '/receipts/uber-receipt-001.pdf',
    submitted_at: '2024-08-20T10:30:00Z',
    approved_at: '2024-08-21T09:15:00Z'
  },
  {
    id: 'exp2', 
    employee_id: 'emp1',
    amount: 67.89,
    category: 'Meals',
    description: 'Business lunch with RetailCorp stakeholders',
    date: '2024-08-20',
    status: 'APPROVED',
    receipt_url: '/receipts/restaurant-receipt-001.pdf',
    submitted_at: '2024-08-20T15:45:00Z',
    approved_at: '2024-08-21T09:20:00Z'
  },
  {
    id: 'exp3',
    employee_id: 'emp1',
    amount: 89.99,
    category: 'Software',
    description: 'Adobe Creative Suite monthly subscription',
    date: '2024-08-15',
    status: 'PAID',
    receipt_url: '/receipts/adobe-invoice-001.pdf',
    submitted_at: '2024-08-15T16:20:00Z',
    approved_at: '2024-08-16T08:30:00Z',
    paid_at: '2024-08-18T11:15:00Z'
  },
  {
    id: 'exp4',
    employee_id: 'emp1',
    amount: 45.00,
    category: 'Office Supplies',
    description: 'Ergonomic mouse pad and wrist rest',
    date: '2024-08-12',
    status: 'PENDING',
    receipt_url: '/receipts/office-supplies-001.pdf',
    submitted_at: '2024-08-12T14:00:00Z'
  },
  
  // Alex Chen (emp3) - Design Studio Pro
  {
    id: 'exp5',
    employee_id: 'emp3',
    amount: 156.75,
    category: 'Software',
    description: 'Figma Professional Plan - Annual subscription',
    date: '2024-08-10',
    status: 'APPROVED',
    receipt_url: '/receipts/figma-invoice-001.pdf',
    submitted_at: '2024-08-10T11:30:00Z',
    approved_at: '2024-08-11T10:00:00Z'
  },
  {
    id: 'exp6',
    employee_id: 'emp3',
    amount: 234.50,
    category: 'Equipment',
    description: 'Wacom Intuos Pro tablet for design work',
    date: '2024-08-05',
    status: 'PAID',
    receipt_url: '/receipts/wacom-receipt-001.pdf',
    submitted_at: '2024-08-05T16:45:00Z',
    approved_at: '2024-08-06T09:30:00Z',
    paid_at: '2024-08-08T14:20:00Z'
  },
  
  // David Kim (emp5) - Global Marketing
  {
    id: 'exp7',
    employee_id: 'emp5',
    amount: 299.00,
    category: 'Software',
    description: 'SEMrush Pro subscription for SEO analysis',
    date: '2024-08-18',
    status: 'APPROVED',
    receipt_url: '/receipts/semrush-invoice-001.pdf',
    submitted_at: '2024-08-18T13:15:00Z',
    approved_at: '2024-08-19T08:45:00Z'
  },
  {
    id: 'exp8',
    employee_id: 'emp5',
    amount: 75.00,
    category: 'Travel',
    description: 'Parking for client presentation meeting',
    date: '2024-08-16',
    status: 'PENDING',
    receipt_url: '/receipts/parking-receipt-001.pdf',
    submitted_at: '2024-08-16T17:30:00Z'
  },
  {
    id: 'exp9',
    employee_id: 'emp5',
    amount: 112.45,
    category: 'Marketing',
    description: 'Stock photos for campaign materials',
    date: '2024-08-14',
    status: 'PAID',
    receipt_url: '/receipts/shutterstock-invoice-001.pdf',
    submitted_at: '2024-08-14T10:20:00Z',
    approved_at: '2024-08-15T09:00:00Z',
    paid_at: '2024-08-17T12:30:00Z'
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
  // John Doe (emp1) - TechCorp Solutions - Full-time
  {
    id: 'ps1',
    employee_id: 'emp1',
    pay_period_start: '2024-08-01',
    pay_period_end: '2024-08-15',
    gross_pay: 6000,
    net_pay: 4284,
    deductions: {
      tax: 1200,
      health_insurance: 316,
      retirement: 200
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
    net_pay: 4284,
    deductions: {
      tax: 1200,
      health_insurance: 316,
      retirement: 200
    },
    status: 'PROCESSING',
    hours_worked: 80
  },
  {
    id: 'ps3',
    employee_id: 'emp1',
    pay_period_start: '2024-07-16',
    pay_period_end: '2024-07-31',
    gross_pay: 6150,
    net_pay: 4389.5,
    deductions: {
      tax: 1230,
      health_insurance: 316,
      retirement: 214.5
    },
    status: 'PAID',
    pay_date: '2024-08-05',
    hours_worked: 82
  },
  
  // Sarah Wilson (emp2) - TechCorp Solutions - Manager/Full-time
  {
    id: 'ps4',
    employee_id: 'emp2',
    pay_period_start: '2024-08-01',
    pay_period_end: '2024-08-15',
    gross_pay: 7600,
    net_pay: 5396,
    deductions: {
      tax: 1520,
      health_insurance: 316,
      retirement: 368
    },
    status: 'PAID',
    pay_date: '2024-08-20',
    hours_worked: 80
  },
  {
    id: 'ps5',
    employee_id: 'emp2',
    pay_period_start: '2024-08-16',
    pay_period_end: '2024-08-31',
    gross_pay: 7600,
    net_pay: 5396,
    deductions: {
      tax: 1520,
      health_insurance: 316,
      retirement: 368
    },
    status: 'PROCESSING',
    hours_worked: 80
  },

  // Maria Rodriguez (emp4) - Design Studio Pro - Manager/Full-time
  {
    id: 'ps6',
    employee_id: 'emp4',
    pay_period_start: '2024-08-01',
    pay_period_end: '2024-08-15',
    gross_pay: 7040,
    net_pay: 4999.2,
    deductions: {
      tax: 1408,
      health_insurance: 280,
      retirement: 352.8
    },
    status: 'PAID',
    pay_date: '2024-08-20',
    hours_worked: 80
  },

  // David Kim (emp5) - Global Marketing - Both full-time and contractor
  {
    id: 'ps7',
    employee_id: 'emp5',
    pay_period_start: '2024-08-01',
    pay_period_end: '2024-08-15',
    gross_pay: 5760,
    net_pay: 4147.2,
    deductions: {
      tax: 1152,
      health_insurance: 250,
      retirement: 210.8
    },
    status: 'PAID',
    pay_date: '2024-08-20',
    hours_worked: 80
  },
  {
    id: 'ps8',
    employee_id: 'emp5',
    pay_period_start: '2024-08-16',
    pay_period_end: '2024-08-31',
    gross_pay: 5760,
    net_pay: 4147.2,
    deductions: {
      tax: 1152,
      health_insurance: 250,
      retirement: 210.8
    },
    status: 'PENDING',
    hours_worked: 80
  }
];

export interface Project {
  id: string;
  company_id: string;
  name: string;
  description: string;
  start_date: string;
  end_date?: string;
  status: 'ACTIVE' | 'COMPLETED' | 'ON_HOLD' | 'CANCELLED';
  assigned_employees: string[];
  budget?: number;
  billable_rate?: number;
  client_name?: string;
  manager_id?: string;
}

export const mockProjects: Project[] = [
  // TechCorp Projects
  {
    id: 'proj1',
    company_id: 'company1',
    name: 'E-Commerce Platform Redesign',
    description: 'Complete overhaul of the client e-commerce platform with modern UI/UX',
    start_date: '2024-01-15',
    end_date: '2024-06-30',
    status: 'ACTIVE',
    assigned_employees: ['emp1'],
    budget: 250000,
    billable_rate: 150,
    client_name: 'RetailCorp Inc',
    manager_id: 'emp2'
  },
  {
    id: 'proj2',
    company_id: 'company1',
    name: 'Mobile App Development',
    description: 'Native iOS and Android app for client inventory management',
    start_date: '2024-02-01',
    status: 'ACTIVE',
    assigned_employees: ['emp1'],
    budget: 180000,
    billable_rate: 140,
    client_name: 'LogisticsPro LLC',
    manager_id: 'emp2'
  },
  // Design Studio Projects
  {
    id: 'proj3',
    company_id: 'company2',
    name: 'Brand Identity Refresh',
    description: 'Complete rebranding including logo, color palette, and style guide',
    start_date: '2024-01-08',
    end_date: '2024-04-15',
    status: 'ACTIVE',
    assigned_employees: ['emp3'],
    budget: 75000,
    billable_rate: 120,
    client_name: 'StartupXYZ',
    manager_id: 'emp4'
  },
  {
    id: 'proj4',
    company_id: 'company2',
    name: 'Website UI/UX Design',
    description: 'Modern responsive website design with user experience optimization',
    start_date: '2024-03-01',
    status: 'ACTIVE',
    assigned_employees: ['emp3'],
    budget: 95000,
    billable_rate: 110,
    client_name: 'TechStartup Pro',
    manager_id: 'emp4'
  },
  // Marketing Projects
  {
    id: 'proj5',
    company_id: 'company3',
    name: 'Digital Marketing Campaign',
    description: 'Multi-channel digital marketing strategy and execution',
    start_date: '2024-02-15',
    end_date: '2024-08-31',
    status: 'ACTIVE',
    assigned_employees: ['emp5'],
    budget: 120000,
    billable_rate: 95,
    client_name: 'Enterprise Solutions Corp',
    manager_id: 'emp5'
  },
  {
    id: 'proj6',
    company_id: 'company3',
    name: 'SEO Optimization Project',
    description: 'Comprehensive SEO audit and optimization for client website',
    start_date: '2024-01-22',
    end_date: '2024-05-22',
    status: 'ACTIVE',
    assigned_employees: ['emp5'],
    budget: 45000,
    billable_rate: 85,
    client_name: 'Local Business Hub',
    manager_id: 'emp5'
  }
];

export interface Holiday {
  id: string;
  company_id: string;
  name: string;
  date: string;
  type: 'COMPANY' | 'NATIONAL' | 'REGIONAL';
  is_mandatory: boolean;
}

export const mockHolidays: Holiday[] = [
  // National holidays (all companies)
  { id: 'h1', company_id: 'all', name: 'New Year\'s Day', date: '2024-01-01', type: 'NATIONAL', is_mandatory: true },
  { id: 'h2', company_id: 'all', name: 'Martin Luther King Jr. Day', date: '2024-01-15', type: 'NATIONAL', is_mandatory: true },
  { id: 'h3', company_id: 'all', name: 'Presidents\' Day', date: '2024-02-19', type: 'NATIONAL', is_mandatory: true },
  { id: 'h4', company_id: 'all', name: 'Memorial Day', date: '2024-05-27', type: 'NATIONAL', is_mandatory: true },
  { id: 'h5', company_id: 'all', name: 'Independence Day', date: '2024-07-04', type: 'NATIONAL', is_mandatory: true },
  { id: 'h6', company_id: 'all', name: 'Labor Day', date: '2024-09-02', type: 'NATIONAL', is_mandatory: true },
  { id: 'h7', company_id: 'all', name: 'Thanksgiving', date: '2024-11-28', type: 'NATIONAL', is_mandatory: true },
  { id: 'h8', company_id: 'all', name: 'Christmas Day', date: '2024-12-25', type: 'NATIONAL', is_mandatory: true },
  
  // Company-specific holidays
  { id: 'h9', company_id: 'company1', name: 'TechCorp Founders Day', date: '2024-03-15', type: 'COMPANY', is_mandatory: false },
  { id: 'h10', company_id: 'company1', name: 'TechCorp Summer Break', date: '2024-07-05', type: 'COMPANY', is_mandatory: true },
  { id: 'h11', company_id: 'company2', name: 'Design Studio Anniversary', date: '2024-05-10', type: 'COMPANY', is_mandatory: false },
  { id: 'h12', company_id: 'company3', name: 'Global Marketing Retreat', date: '2024-04-22', type: 'COMPANY', is_mandatory: true }
];

export interface LeaveRequest {
  id: string;
  employee_id: string;
  company_id: string;
  type: 'SICK' | 'VACATION' | 'PERSONAL' | 'MATERNITY' | 'PATERNITY' | 'BEREAVEMENT';
  start_date: string;
  end_date: string;
  days_requested: number;
  status: 'PENDING' | 'APPROVED' | 'DECLINED' | 'CANCELLED';
  reason?: string;
  submitted_at: string;
  reviewed_at?: string;
  reviewed_by?: string;
  reviewer_comments?: string;
}

export const mockLeaveRequests: LeaveRequest[] = [
  {
    id: 'lr1',
    employee_id: 'emp1',
    company_id: 'company1',
    type: 'VACATION',
    start_date: '2024-09-15',
    end_date: '2024-09-22',
    days_requested: 6,
    status: 'PENDING',
    reason: 'Family vacation to Europe',
    submitted_at: '2024-08-15T10:30:00Z'
  },
  {
    id: 'lr2',
    employee_id: 'emp1',
    company_id: 'company1',
    type: 'SICK',
    start_date: '2024-08-20',
    end_date: '2024-08-21',
    days_requested: 2,
    status: 'APPROVED',
    reason: 'Doctor appointment and recovery',
    submitted_at: '2024-08-19T08:45:00Z',
    reviewed_at: '2024-08-19T14:20:00Z',
    reviewed_by: 'emp2',
    reviewer_comments: 'Approved. Hope you feel better soon.'
  },
  {
    id: 'lr3',
    employee_id: 'emp3',
    company_id: 'company2',
    type: 'PERSONAL',
    start_date: '2024-09-03',
    end_date: '2024-09-03',
    days_requested: 1,
    status: 'APPROVED',
    reason: 'Moving to new apartment',
    submitted_at: '2024-08-25T16:15:00Z',
    reviewed_at: '2024-08-26T09:00:00Z',
    reviewed_by: 'emp4',
    reviewer_comments: 'Approved. Good luck with the move!'
  },
  {
    id: 'lr4',
    employee_id: 'emp5',
    company_id: 'company3',
    type: 'VACATION',
    start_date: '2024-10-14',
    end_date: '2024-10-18',
    days_requested: 5,
    status: 'PENDING',
    reason: 'Wedding anniversary trip',
    submitted_at: '2024-08-20T11:00:00Z'
  }
];

export interface Invoice {
  id: string;
  employee_id: string;
  company_id: string;
  invoice_number: string;
  issue_date: string;
  due_date: string;
  amount: number;
  tax_amount: number;
  total_amount: number;
  status: 'DRAFT' | 'SENT' | 'APPROVED' | 'PAID' | 'OVERDUE' | 'CANCELLED';
  description: string;
  line_items: {
    description: string;
    quantity: number;
    rate: number;
    amount: number;
  }[];
  payment_date?: string;
  notes?: string;
}

export const mockInvoices: Invoice[] = [
  {
    id: 'inv1',
    employee_id: 'emp3',
    company_id: 'company2',
    invoice_number: 'INV-2024-001',
    issue_date: '2024-08-01',
    due_date: '2024-08-31',
    amount: 8500,
    tax_amount: 765,
    total_amount: 9265,
    status: 'PAID',
    description: 'Design services for July 2024',
    line_items: [
      { description: 'UI/UX Design - Brand Identity Project', quantity: 85, rate: 85, amount: 7225 },
      { description: 'Design Consultation', quantity: 15, rate: 85, amount: 1275 }
    ],
    payment_date: '2024-08-28',
    notes: 'Excellent work on the brand identity project'
  },
  {
    id: 'inv2',
    employee_id: 'emp3',
    company_id: 'company2',
    invoice_number: 'INV-2024-002',
    issue_date: '2024-08-15',
    due_date: '2024-09-15',
    amount: 6800,
    tax_amount: 612,
    total_amount: 7412,
    status: 'APPROVED',
    description: 'Design services for August 2024 (partial)',
    line_items: [
      { description: 'Website UI Design', quantity: 60, rate: 85, amount: 5100 },
      { description: 'Design System Creation', quantity: 20, rate: 85, amount: 1700 }
    ],
    notes: 'Payment processing'
  },
  {
    id: 'inv3',
    employee_id: 'emp5',
    company_id: 'company3',
    invoice_number: 'INV-2024-003',
    issue_date: '2024-08-10',
    due_date: '2024-09-10',
    amount: 4320,
    tax_amount: 388.80,
    total_amount: 4708.80,
    status: 'SENT',
    description: 'Digital marketing consulting - August 2024',
    line_items: [
      { description: 'SEO Strategy Development', quantity: 30, rate: 72, amount: 2160 },
      { description: 'Campaign Management', quantity: 30, rate: 72, amount: 2160 }
    ],
    notes: 'Monthly retainer for digital marketing services'
  }
];

export interface Approval {
  id: string;
  object_type: 'TIMESHEET' | 'EXPENSE' | 'PAYSLIP' | 'INVOICE' | 'LEAVE_REQUEST';
  object_id: string;
  employee_id: string;
  company_id: string;
  approver_id: string;
  status: 'PENDING' | 'APPROVED' | 'DECLINED' | 'ESCALATED';
  level: number;
  submitted_at: string;
  reviewed_at?: string;
  comments?: string;
  metadata?: {
    billable?: boolean;
    billable_hours?: number;
    non_billable_hours?: number;
    amount?: number;
  };
}

export const mockApprovals: Approval[] = [
  {
    id: 'app1',
    object_type: 'TIMESHEET',
    object_id: '1',
    employee_id: 'emp1',
    company_id: 'company1',
    approver_id: 'emp2',
    status: 'PENDING',
    level: 1,
    submitted_at: '2024-08-20T17:00:00Z',
    metadata: {
      billable_hours: 15,
      non_billable_hours: 0
    }
  },
  {
    id: 'app2',
    object_type: 'EXPENSE',
    object_id: '1',
    employee_id: 'emp1',
    company_id: 'company1',
    approver_id: 'emp2',
    status: 'APPROVED',
    level: 1,
    submitted_at: '2024-08-19T14:30:00Z',
    reviewed_at: '2024-08-20T09:15:00Z',
    comments: 'Approved - valid business expense',
    metadata: {
      amount: 125.50
    }
  },
  {
    id: 'app3',
    object_type: 'INVOICE',
    object_id: 'inv2',
    employee_id: 'emp3',
    company_id: 'company2',
    approver_id: 'emp4',
    status: 'APPROVED',
    level: 1,
    submitted_at: '2024-08-15T16:00:00Z',
    reviewed_at: '2024-08-16T10:30:00Z',
    comments: 'Quality work completed on time',
    metadata: {
      amount: 7412
    }
  }
];