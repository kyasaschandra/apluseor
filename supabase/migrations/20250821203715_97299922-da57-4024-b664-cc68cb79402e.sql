-- First create employees
INSERT INTO employees (id, user_id, company_id, employee_type, start_date, country, status, tax_meta) VALUES
  ('770e8400-e29b-41d4-a716-446655440001', '550e8400-e29b-41d4-a716-446655440001', '660e8400-e29b-41d4-a716-446655440001', 'FT', '2024-01-15', 'USA', 'ACTIVE', '{"w4_status": "single", "allowances": 1}'),
  ('770e8400-e29b-41d4-a716-446655440002', '550e8400-e29b-41d4-a716-446655440002', '660e8400-e29b-41d4-a716-446655440001', 'FT', '2024-02-01', 'USA', 'ACTIVE', '{"w4_status": "married", "allowances": 2}'),
  ('770e8400-e29b-41d4-a716-446655440003', '550e8400-e29b-41d4-a716-446655440003', '660e8400-e29b-41d4-a716-446655440002', 'CTR', '2024-03-01', 'UK', 'ACTIVE', '{"tax_code": "1257L"}');