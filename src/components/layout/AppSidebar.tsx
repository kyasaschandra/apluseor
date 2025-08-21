import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import {
  Home,
  Clock,
  Receipt,
  FileText,
  DollarSign,
  Users,
  Settings,
  Building2,
  BarChart3,
  UserCheck,
  CalendarCheck,
  FolderOpen,
} from 'lucide-react';

const getMenuItems = (role: string, userType: string, employeeType?: string) => {
  const commonItems = [
    { title: 'Dashboard', url: '/', icon: Home },
  ];

  const employeeItems = [
    { title: 'Timesheets', url: '/timesheets', icon: Clock },
    { title: 'Expenses', url: '/expenses', icon: Receipt },
    { title: 'Calendar', url: '/calendar', icon: CalendarCheck },
    { title: 'Projects', url: '/projects', icon: FolderOpen },
    ...(employeeType === 'FULLTIME' || employeeType === 'BOTH' 
      ? [{ title: 'Payslips', url: '/payslips', icon: FileText }] 
      : []),
    ...(employeeType === 'CONTRACTOR' || employeeType === 'BOTH' 
      ? [{ title: 'Invoices', url: '/contractor-invoices', icon: DollarSign }] 
      : []),
    { title: 'Profile', url: '/profile', icon: UserCheck },
  ];

  const companyItems = [
    { title: 'Employees', url: '/employees', icon: Users },
    { title: 'Approvals', url: '/approvals', icon: UserCheck },
    { title: 'Invoices', url: '/company-invoices', icon: FileText },
    { title: 'Bulk Uploads', url: '/bulk-uploads', icon: Receipt },
    { title: 'Reports', url: '/reports', icon: BarChart3 },
    { title: 'Settings', url: '/company-settings', icon: Settings },
  ];

  const adminItems = [
    { title: 'Companies', url: '/admin/companies', icon: Building2 },
    { title: 'All Employees', url: '/admin/employees', icon: Users },
    { title: 'Payroll', url: '/admin/payroll', icon: DollarSign },
    { title: 'Billing', url: '/admin/billing', icon: FileText },
    { title: 'Compliance', url: '/admin/compliance', icon: UserCheck },
    { title: 'Reports', url: '/admin/reports', icon: BarChart3 },
    { title: 'System Settings', url: '/admin/settings', icon: Settings },
  ];

  switch (role) {
    case 'EMPLOYEE':
      return [...commonItems, ...employeeItems];
    case 'COMPANY':
      return [...commonItems, ...companyItems];
    case 'ADMIN':
      return [...commonItems, ...adminItems];
    default:
      return commonItems;
  }
};

export function AppSidebar() {
  const { profile } = useAuth();
  const location = useLocation();

  const menuItems = getMenuItems(profile?.role || 'EMPLOYEE', 'EMPLOYEE', profile?.employee_type);

  const isActive = (url: string) => {
    if (url === '/') return location.pathname === '/';
    return location.pathname.startsWith(url);
  };

  return (
    <Sidebar>
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Building2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold">EOR Platform</h1>
            <p className="text-xs text-muted-foreground capitalize">
              {profile?.role?.toLowerCase()} Portal
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive: navIsActive }) => 
                        `flex items-center gap-2 ${
                          navIsActive || isActive(item.url) 
                            ? 'bg-primary text-primary-foreground' 
                            : 'hover:bg-muted'
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}