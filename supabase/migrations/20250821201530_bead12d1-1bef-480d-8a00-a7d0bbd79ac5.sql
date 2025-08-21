-- Clear existing profiles and create dev sample data
DELETE FROM profiles;

-- Insert sample profiles for development
-- Admin user
INSERT INTO profiles (user_id, role, first_name, last_name, phone) VALUES 
('11111111-1111-1111-1111-111111111111', 'ADMIN', 'Admin', 'User', '+1-555-0100');

-- Company user  
INSERT INTO profiles (user_id, role, first_name, last_name, phone) VALUES 
('22222222-2222-2222-2222-222222222222', 'COMPANY', 'Company', 'Manager', '+1-555-0200');

-- Employee user
INSERT INTO profiles (user_id, role, first_name, last_name, phone) VALUES 
('33333333-3333-3333-3333-333333333333', 'EMPLOYEE', 'John', 'Employee', '+1-555-0300');