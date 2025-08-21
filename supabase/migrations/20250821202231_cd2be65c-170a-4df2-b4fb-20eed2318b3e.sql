-- Clear existing data
DELETE FROM approvals;
DELETE FROM expense_lines;
DELETE FROM expenses;
DELETE FROM timesheet_entries;
DELETE FROM timesheets;
DELETE FROM employees;
DELETE FROM companies;
DELETE FROM profiles;

-- Create sample companies first (no user dependencies)
INSERT INTO companies (id, legal_name, country, ein_cin, billing_email, base_currency, settings) VALUES
  ('660e8400-e29b-41d4-a716-446655440001', 'Tech Innovators Inc.', 'USA', '12-3456789', 'billing@techinnovators.com', 'USD', '{"vacation_days": 20, "sick_days": 10}'),
  ('660e8400-e29b-41d4-a716-446655440002', 'Global Solutions Ltd.', 'UK', 'GB123456789', 'accounts@globalsolutions.co.uk', 'GBP', '{"vacation_days": 25, "sick_days": 12}');