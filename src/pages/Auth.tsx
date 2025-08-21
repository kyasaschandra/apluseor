import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { getUserTypeFromSubdomain } from '@/utils/subdomain';
import { EmployeeAuth } from '@/components/auth/EmployeeAuth';
import { CompanyAuth } from '@/components/auth/CompanyAuth';
import { AdminAuth } from '@/components/auth/AdminAuth';

const Auth = () => {
  const { user, loading } = useAuth();
  const userType = getUserTypeFromSubdomain();

  // Redirect if already authenticated
  if (user && !loading) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Render the appropriate auth component based on subdomain
  switch (userType) {
    case 'EMPLOYEE':
      return <EmployeeAuth />;
    case 'COMPANY':
      return <CompanyAuth />;
    case 'ADMIN':
      return <AdminAuth />;
    default:
      return <EmployeeAuth />;
  }
};

export default Auth;