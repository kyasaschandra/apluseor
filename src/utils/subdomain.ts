export type UserType = 'EMPLOYEE' | 'COMPANY' | 'ADMIN';

export const getUserTypeFromSubdomain = (): UserType => {
  const hostname = window.location.hostname;
  
  if (hostname.startsWith('employee.')) {
    return 'EMPLOYEE';
  } else if (hostname.startsWith('company.')) {
    return 'COMPANY';
  } else if (hostname.startsWith('admin.')) {
    return 'ADMIN';
  }
  
  // Default based on localhost ports for development
  if (hostname === 'localhost') {
    const port = window.location.port;
    if (port === '5174') return 'COMPANY';
    if (port === '5175') return 'ADMIN';
    return 'EMPLOYEE'; // Default port 5173
  }
  
  // Default to employee for main domain
  return 'EMPLOYEE';
};

export const getSubdomainConfig = (userType: UserType) => {
  const configs = {
    EMPLOYEE: {
      title: 'Employee Portal',
      description: 'Access your timesheets and expense reports',
      allowedRole: 'EMPLOYEE' as const,
      primaryColor: 'hsl(var(--primary))',
      accentColor: 'hsl(var(--secondary))'
    },
    COMPANY: {
      title: 'Company Dashboard',
      description: 'Manage your employees and company operations',
      allowedRole: 'COMPANY' as const,
      primaryColor: 'hsl(217 91% 60%)',
      accentColor: 'hsl(217 91% 85%)'
    },
    ADMIN: {
      title: 'Admin Console',
      description: 'System administration and oversight',
      allowedRole: 'ADMIN' as const,
      primaryColor: 'hsl(0 72% 51%)',
      accentColor: 'hsl(0 72% 85%)'
    }
  };
  
  return configs[userType];
};