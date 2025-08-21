import { useAuth } from '@/hooks/useAuth';
import { EmployeeDashboard } from '@/components/dashboard/EmployeeDashboard';
import { CompanyDashboard } from '@/components/dashboard/CompanyDashboard';
import { AdminDashboard } from '@/components/dashboard/AdminDashboard';

const Index = () => {
  const { profile } = useAuth();

  const renderDashboard = () => {
    switch (profile?.role) {
      case 'EMPLOYEE':
        return <EmployeeDashboard />;
      case 'COMPANY':
        return <CompanyDashboard />;
      case 'ADMIN':
        return <AdminDashboard />;
      default:
        return <EmployeeDashboard />;
    }
  };

  return renderDashboard();
};

export default Index;
