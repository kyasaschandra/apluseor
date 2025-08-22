import { createContext, useContext, useState } from 'react';
import { toast } from '@/hooks/use-toast';

// Mock user and session types for development
interface MockUser {
  id: string;
  email: string;
}

interface MockSession {
  user: MockUser;
}

interface Profile {
  id: string;
  user_id: string;
  role: 'EMPLOYEE' | 'COMPANY' | 'ADMIN';
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  employee_type?: 'FULLTIME' | 'CONTRACTOR' | 'BOTH';
}

interface AuthContextType {
  user: MockUser | null;
  session: MockSession | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: any }>;
  signUp: (email: string, password: string, userData: { first_name: string; last_name: string; role: string }) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Mock user data for development - authentication disabled  
  const [user] = useState<MockUser>({
    id: '550e8400-e29b-41d4-a716-446655440001',
    email: 'john.doe@company.com'
  });
  
  const [session] = useState<MockSession>({
    user: {
      id: '550e8400-e29b-41d4-a716-446655440001',
      email: 'john.doe@company.com'
    }
  });
  
  const [profile] = useState<Profile>({
    id: '550e8400-e29b-41d4-a716-446655440001',
    user_id: '550e8400-e29b-41d4-a716-446655440001',
    role: 'EMPLOYEE', // Change this to 'COMPANY' or 'ADMIN' to test different roles
    first_name: 'John',
    last_name: 'Doe',
    phone: '+1-555-0101',
    address: '123 Main St, Palo Alto, CA 94301',
    employee_type: 'FULLTIME'
  });
  
  const [loading] = useState(false);

  const signIn = async (email: string, password: string) => {
    // Mock sign in - always succeed
    toast({
      title: "Signed in successfully",
      description: `Welcome back, ${email}!`,
    });
    return { error: null };
  };

  const signUp = async (
    email: string, 
    password: string, 
    userData: { first_name: string; last_name: string; role: string }
  ) => {
    // Mock sign up - always succeed  
    toast({
      title: "Account created!",
      description: `Welcome ${userData.first_name}! Your account has been created.`,
    });
    return { error: null };
  };

  const signOut = async () => {
    // Mock sign out
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};