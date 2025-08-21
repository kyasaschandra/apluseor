-- Clear existing data
DELETE FROM approvals;
DELETE FROM expense_lines;
DELETE FROM expenses;
DELETE FROM timesheet_entries;
DELETE FROM timesheets;
DELETE FROM employees;
DELETE FROM companies;
DELETE FROM profiles;

-- Create sample profiles (these will need to match real auth.users created through signup)
-- Note: These UUIDs should correspond to actual users created through the auth system
INSERT INTO profiles (id, user_id, first_name, last_name, role, phone) VALUES
  ('550e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', 'John', 'Doe', 'EMPLOYEE', '+1-555-0101'),
  ('550e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', 'Jane', 'Smith', 'EMPLOYEE', '+1-555-0102'),
  ('550e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440003', 'Bob', 'Wilson', 'EMPLOYEE', '+1-555-0103'),
  ('550e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440004', 'Sarah', 'Johnson', 'COMPANY', '+1-555-0201'),
  ('550e8400-e29b-41d4-a716-446655440005', '550e8400-e29b-41d4-a716-446655440005', 'Mike', 'Brown', 'COMPANY', '+1-555-0202'),
  ('550e8400-e29b-41d4-a716-446655440006', '550e8400-e29b-41d4-a716-446655440006', 'Admin', 'User', 'ADMIN', '+1-555-0301');

-- Create sample companies
INSERT INTO companies (id, legal_name, country, ein_cin, billing_email, base_currency, settings) VALUES
  ('660e8400-e29b-41d4-a716-446655440001', 'Tech Innovators Inc.', 'USA', '12-3456789', 'billing@techinnovators.com', 'USD', '{"vacation_days": 20, "sick_days": 10}'),
  ('660e8400-e29b-41d4-a716-446655440002', 'Global Solutions Ltd.', 'UK', 'GB123456789', 'accounts@globalsolutions.co.uk', 'GBP', '{"vacation_days": 25, "sick_days": 12}');

-- Create sample employees linking users to companies
INSERT INTO employees (id, user_id, company_id, employee_type, start_date, country, status, tax_meta) VALUES
  ('770e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'FULL_TIME', '2024-01-15', 'USA', 'ACTIVE', '{"w4_status": "single", "allowances": 1}'),
  ('770e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', 'PART_TIME', '2024-02-01', 'USA', 'ACTIVE', '{"w4_status": "married", "allowances": 2}'),
  ('770e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440002', 'CONTRACTOR', '2024-03-01', 'UK', 'ACTIVE', '{"tax_code": "1257L"}');

-- Create sample timesheets
INSERT INTO timesheets (id, employee_id, period_start, period_end, status, total_hours, submitted_at) VALUES
  ('880e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', '2024-08-05', '2024-08-11', 'SUBMITTED', 40.0, '2024-08-12 09:00:00+00'),
  ('880e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', '2024-08-12', '2024-08-18', 'DRAFT', 32.5, null),
  ('880e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440002', '2024-08-05', '2024-08-11', 'APPROVED', 20.0, '2024-08-12 10:30:00+00'),
  ('880e8400-e29b-41d4-a716-446655440004', '770e8400-e29b-41d4-a716-446655440003', '2024-08-05', '2024-08-11', 'SUBMITTED', 35.0, '2024-08-12 11:15:00+00');

-- Create sample timesheet entries
INSERT INTO timesheet_entries (id, timesheet_id, work_date, hours, overtime_hours, project, task, notes) VALUES
  -- John Doe's submitted timesheet
  ('990e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', '2024-08-05', 8.0, 0, 'Website Redesign', 'Frontend Development', 'Worked on user dashboard'),
  ('990e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440001', '2024-08-06', 8.0, 0, 'Website Redesign', 'Frontend Development', 'Implemented responsive design'),
  ('990e8400-e29b-41d4-a716-446655440003', '880e8400-e29b-41d4-a716-446655440001', '2024-08-07', 8.0, 2.0, 'Website Redesign', 'Bug Fixes', 'Fixed critical production issues'),
  ('990e8400-e29b-41d4-a716-446655440004', '880e8400-e29b-41d4-a716-446655440001', '2024-08-08', 8.0, 0, 'Mobile App', 'API Integration', 'Connected payment gateway'),
  ('990e8400-e29b-41d4-a716-446655440005', '880e8400-e29b-41d4-a716-446655440001', '2024-08-09', 8.0, 0, 'Mobile App', 'Testing', 'QA testing and bug fixes'),
  
  -- John Doe's draft timesheet
  ('990e8400-e29b-41d4-a716-446655440006', '880e8400-e29b-41d4-a716-446655440002', '2024-08-12', 8.0, 0, 'Website Redesign', 'Frontend Development', 'Working on new features'),
  ('990e8400-e29b-41d4-a716-446655440007', '880e8400-e29b-41d4-a716-446655440002', '2024-08-13', 7.5, 0, 'Website Redesign', 'Code Review', 'Reviewing team code'),
  ('990e8400-e29b-41d4-a716-446655440008', '880e8400-e29b-41d4-a716-446655440002', '2024-08-14', 8.0, 0, 'Mobile App', 'Development', 'Adding new functionality'),
  ('990e8400-e29b-41d4-a716-446655440009', '880e8400-e29b-41d4-a716-446655440002', '2024-08-15', 9.0, 0, 'Mobile App', 'Testing', 'Integration testing'),
  
  -- Jane Smith's approved timesheet
  ('990e8400-e29b-41d4-a716-446655440010', '880e8400-e29b-41d4-a716-446655440003', '2024-08-05', 4.0, 0, 'Marketing Campaign', 'Design', 'Created promotional materials'),
  ('990e8400-e29b-41d4-a716-446655440011', '880e8400-e29b-41d4-a716-446655440003', '2024-08-07', 4.0, 0, 'Marketing Campaign', 'Content Writing', 'Wrote blog posts'),
  ('990e8400-e29b-41d4-a716-446655440012', '880e8400-e29b-41d4-a716-446655440003', '2024-08-09', 4.0, 0, 'Website Redesign', 'UI/UX Design', 'Designed user interfaces'),
  ('990e8400-e29b-41d4-a716-446655440013', '880e8400-e29b-41d4-a716-446655440003', '2024-08-11', 8.0, 0, 'Client Meeting', 'Consultation', 'Met with potential clients'),
  
  -- Bob Wilson's submitted timesheet
  ('990e8400-e29b-41d4-a716-446655440014', '880e8400-e29b-41d4-a716-446655440004', '2024-08-05', 7.0, 0, 'System Integration', 'Backend Development', 'API development'),
  ('990e8400-e29b-41d4-a716-446655440015', '880e8400-e29b-41d4-a716-446655440004', '2024-08-07', 8.0, 0, 'System Integration', 'Database Design', 'Optimized database queries'),
  ('990e8400-e29b-41d4-a716-446655440016', '880e8400-e29b-41d4-a716-446655440004', '2024-08-09', 8.0, 0, 'System Integration', 'Testing', 'Unit and integration testing'),
  ('990e8400-e29b-41d4-a716-446655440017', '880e8400-e29b-41d4-a716-446655440004', '2024-08-11', 6.0, 0, 'Documentation', 'Technical Writing', 'Updated system documentation'),
  ('990e8400-e29b-41d4-a716-446655440018', '880e8400-e29b-41d4-a716-446655440004', '2024-08-06', 6.0, 0, 'Client Support', 'Bug Fixes', 'Resolved client issues');

-- Create sample expenses
INSERT INTO expenses (id, employee_id, status, total_amount, currency, submitted_at) VALUES
  ('aa0e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', 'SUBMITTED', 287.50, 'USD', '2024-08-10 14:30:00+00'),
  ('aa0e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', 'DRAFT', 45.00, 'USD', null),
  ('aa0e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440002', 'APPROVED', 125.75, 'USD', '2024-08-08 11:20:00+00'),
  ('aa0e8400-e29b-41d4-a716-446655440004', '770e8400-e29b-41d4-a716-446655440003', 'SUBMITTED', 180.00, 'GBP', '2024-08-09 16:45:00+00');

-- Create sample expense lines
INSERT INTO expense_lines (id, expense_id, amount, expense_date, category, description, gl_code, tax_code, receipt_url) VALUES
  -- John Doe's submitted expense
  ('bb0e8400-e29b-41d4-a716-446655440001', 'aa0e8400-e29b-41d4-a716-446655440001', 125.00, '2024-08-05', 'Travel', 'Flight to client meeting', '6200', 'TRAVEL', 'https://example.com/receipt1.pdf'),
  ('bb0e8400-e29b-41d4-a716-446655440002', 'aa0e8400-e29b-41d4-a716-446655440001', 87.50, '2024-08-05', 'Meals', 'Client dinner', '6250', 'MEALS', 'https://example.com/receipt2.pdf'),
  ('bb0e8400-e29b-41d4-a716-446655440003', 'aa0e8400-e29b-41d4-a716-446655440001', 75.00, '2024-08-06', 'Accommodation', 'Hotel stay', '6210', 'LODGING', 'https://example.com/receipt3.pdf'),
  
  -- John Doe's draft expense
  ('bb0e8400-e29b-41d4-a716-446655440004', 'aa0e8400-e29b-41d4-a716-446655440002', 45.00, '2024-08-12', 'Office Supplies', 'Notebooks and pens', '6300', 'SUPPLIES', null),
  
  -- Jane Smith's approved expense
  ('bb0e8400-e29b-41d4-a716-446655440005', 'aa0e8400-e29b-41d4-a716-446655440003', 85.75, '2024-08-07', 'Software', 'Design software subscription', '6400', 'SOFTWARE', 'https://example.com/receipt4.pdf'),
  ('bb0e8400-e29b-41d4-a716-446655440006', 'aa0e8400-e29b-41d4-a716-446655440003', 40.00, '2024-08-08', 'Meals', 'Working lunch with team', '6250', 'MEALS', 'https://example.com/receipt5.pdf'),
  
  -- Bob Wilson's submitted expense
  ('bb0e8400-e29b-41d4-a716-446655440007', 'aa0e8400-e29b-41d4-a716-446655440004', 120.00, '2024-08-06', 'Training', 'Technical certification', '6500', 'TRAINING', 'https://example.com/receipt6.pdf'),
  ('bb0e8400-e29b-41d4-a716-446655440008', 'aa0e8400-e29b-41d4-a716-446655440004', 60.00, '2024-08-08', 'Travel', 'Taxi to client office', '6200', 'TRAVEL', 'https://example.com/receipt7.pdf');

-- Create sample approvals for submitted items
INSERT INTO approvals (id, object_type, object_id, approver_user_id, level, decision, comment, decided_at) VALUES
  -- Timesheet approvals
  ('cc0e8400-e29b-41d4-a716-446655440001', 'timesheet', '880e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', 1, 'PENDING', null, null),
  ('cc0e8400-e29b-41d4-a716-446655440002', 'timesheet', '880e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 1, 'APPROVED', 'Approved - good work this week', '2024-08-13 09:15:00+00'),
  ('cc0e8400-e29b-41d4-a716-446655440003', 'timesheet', '880e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005', 1, 'PENDING', null, null),
  
  -- Expense approvals
  ('cc0e8400-e29b-41d4-a716-446655440004', 'expense', 'aa0e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440004', 1, 'PENDING', null, null),
  ('cc0e8400-e29b-41d4-a716-446655440005', 'expense', 'aa0e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440004', 1, 'APPROVED', 'All receipts look good', '2024-08-12 15:30:00+00'),
  ('cc0e8400-e29b-41d4-a716-446655440006', 'expense', 'aa0e8400-e29b-41d4-a716-446655440004', '550e8400-e29b-41d4-a716-446655440005', 1, 'PENDING', null, null);