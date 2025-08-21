import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { AppLayout } from "@/components/layout/AppLayout";
import Calendar from "./pages/Calendar";
import Projects from "./pages/Projects";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Timesheets from "./pages/Timesheets";
import Expenses from "./pages/Expenses";
import Payslips from "./pages/Payslips";
import ContractorInvoices from "./pages/ContractorInvoices";
import Profile from "./pages/Profile";
import Employees from "./pages/Employees";
import Approvals from "./pages/Approvals";
import Reports from "./pages/Reports";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={
              <AppLayout>
                <Index />
              </AppLayout>
            } />
            <Route path="/timesheets" element={
              <AppLayout>
                <Timesheets />
              </AppLayout>
            } />
            <Route path="/expenses" element={
              <AppLayout>
                <Expenses />
              </AppLayout>
            } />
            <Route path="/payslips" element={
              <AppLayout>
                <Payslips />
              </AppLayout>
            } />
            <Route path="/contractor-invoices" element={
              <AppLayout>
                <ContractorInvoices />
              </AppLayout>
            } />
            <Route path="/calendar" element={
              <AppLayout>
                <Calendar />
              </AppLayout>
            } />
            <Route path="/projects" element={
              <AppLayout>
                <Projects />
              </AppLayout>
            } />
            <Route path="/profile" element={
              <AppLayout>
                <Profile />
              </AppLayout>
            } />
            <Route path="/employees" element={
              <AppLayout>
                <Employees />
              </AppLayout>
            } />
            <Route path="/approvals" element={
              <AppLayout>
                <Approvals />
              </AppLayout>
            } />
            <Route path="/reports" element={
              <AppLayout>
                <Reports />
              </AppLayout>
            } />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
