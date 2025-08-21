-- Fix security issues from linter

-- Add missing RLS policies for expenses
CREATE POLICY "Employees can manage their own expenses" 
ON public.expenses FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.employees e 
    WHERE e.id = expenses.employee_id AND e.user_id = auth.uid()
  )
);

CREATE POLICY "Admins can manage all expenses" 
ON public.expenses FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() AND p.role = 'ADMIN'
  )
);

-- Add missing RLS policies for expense_lines
CREATE POLICY "Users can manage expense lines through expense access" 
ON public.expense_lines FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.expenses exp
    JOIN public.employees e ON e.id = exp.employee_id
    WHERE exp.id = expense_lines.expense_id 
    AND (e.user_id = auth.uid() OR EXISTS (
      SELECT 1 FROM public.profiles p 
      WHERE p.user_id = auth.uid() AND p.role = 'ADMIN'
    ))
  )
);

-- Add missing RLS policies for approvals
CREATE POLICY "Approvers can view their approval tasks" 
ON public.approvals FOR SELECT 
USING (approver_user_id = auth.uid());

CREATE POLICY "Approvers can update their approval decisions" 
ON public.approvals FOR UPDATE 
USING (approver_user_id = auth.uid());

CREATE POLICY "Admins can manage all approvals" 
ON public.approvals FOR ALL 
USING (
  EXISTS (
    SELECT 1 FROM public.profiles p 
    WHERE p.user_id = auth.uid() AND p.role = 'ADMIN'
  )
);

-- Fix function security by setting proper search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, role, first_name, last_name)
  VALUES (
    NEW.id, 
    COALESCE(NEW.raw_user_meta_data ->> 'role', 'EMPLOYEE')::public.user_role,
    NEW.raw_user_meta_data ->> 'first_name', 
    NEW.raw_user_meta_data ->> 'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;