-- Create comprehensive sample timesheets with correct enum values
INSERT INTO timesheets (id, employee_id, period_start, period_end, status, total_hours, submitted_at) VALUES
  -- John Doe timesheets
  ('880e8400-e29b-41d4-a716-446655440001', '770e8400-e29b-41d4-a716-446655440001', '2024-07-29', '2024-08-04', 'MANAGER_APPROVED', 42.0, '2024-08-05 09:00:00+00'),
  ('880e8400-e29b-41d4-a716-446655440002', '770e8400-e29b-41d4-a716-446655440001', '2024-08-05', '2024-08-11', 'SUBMITTED', 40.0, '2024-08-12 09:00:00+00'),
  ('880e8400-e29b-41d4-a716-446655440003', '770e8400-e29b-41d4-a716-446655440001', '2024-08-12', '2024-08-18', 'DRAFT', 32.5, null),
  ('880e8400-e29b-41d4-a716-446655440004', '770e8400-e29b-41d4-a716-446655440001', '2024-08-19', '2024-08-25', 'DRAFT', 0.0, null),
  
  -- Jane Smith timesheets  
  ('880e8400-e29b-41d4-a716-446655440005', '770e8400-e29b-41d4-a716-446655440002', '2024-07-29', '2024-08-04', 'FINANCE_APPROVED', 20.0, '2024-08-05 10:30:00+00'),
  ('880e8400-e29b-41d4-a716-446655440006', '770e8400-e29b-41d4-a716-446655440002', '2024-08-05', '2024-08-11', 'SUBMITTED', 18.5, '2024-08-12 10:30:00+00'),
  ('880e8400-e29b-41d4-a716-446655440007', '770e8400-e29b-41d4-a716-446655440002', '2024-08-12', '2024-08-18', 'DRAFT', 15.0, null),
  
  -- Bob Wilson timesheets
  ('880e8400-e29b-41d4-a716-446655440008', '770e8400-e29b-41d4-a716-446655440003', '2024-07-29', '2024-08-04', 'LOCKED', 35.0, '2024-08-05 11:15:00+00'),
  ('880e8400-e29b-41d4-a716-446655440009', '770e8400-e29b-41d4-a716-446655440003', '2024-08-05', '2024-08-11', 'DRAFT', 40.0, '2024-08-12 11:15:00+00'),
  ('880e8400-e29b-41d4-a716-446655440010', '770e8400-e29b-41d4-a716-446655440003', '2024-08-12', '2024-08-18', 'SUBMITTED', 38.0, '2024-08-19 09:30:00+00');

-- Add comprehensive timesheet entries for testing
INSERT INTO timesheet_entries (id, timesheet_id, work_date, hours, overtime_hours, project, task, notes) VALUES
  -- John Doe's manager approved timesheet (July 29 - Aug 4)
  ('990e8400-e29b-41d4-a716-446655440001', '880e8400-e29b-41d4-a716-446655440001', '2024-07-29', 8.0, 0, 'Website Redesign', 'Frontend Development', 'Worked on user dashboard components'),
  ('990e8400-e29b-41d4-a716-446655440002', '880e8400-e29b-41d4-a716-446655440001', '2024-07-30', 8.0, 0, 'Website Redesign', 'Frontend Development', 'Implemented responsive design'),
  ('990e8400-e29b-41d4-a716-446655440003', '880e8400-e29b-41d4-a716-446655440001', '2024-07-31', 8.0, 2.0, 'Website Redesign', 'Bug Fixes', 'Fixed critical production issues'),
  ('990e8400-e29b-41d4-a716-446655440004', '880e8400-e29b-41d4-a716-446655440001', '2024-08-01', 8.0, 0, 'Mobile App', 'API Integration', 'Connected payment gateway'),
  ('990e8400-e29b-41d4-a716-446655440005', '880e8400-e29b-41d4-a716-446655440001', '2024-08-02', 8.0, 0, 'Mobile App', 'Testing', 'QA testing and bug fixes'),
  
  -- John Doe's submitted timesheet (Aug 5-11)
  ('990e8400-e29b-41d4-a716-446655440006', '880e8400-e29b-41d4-a716-446655440002', '2024-08-05', 8.0, 0, 'Website Redesign', 'Backend Development', 'Database optimization'),
  ('990e8400-e29b-41d4-a716-446655440007', '880e8400-e29b-41d4-a716-446655440002', '2024-08-06', 8.0, 0, 'Website Redesign', 'Backend Development', 'API development'),
  ('990e8400-e29b-41d4-a716-446655440008', '880e8400-e29b-41d4-a716-446655440002', '2024-08-07', 8.0, 0, 'Mobile App', 'Development', 'New feature implementation'),
  ('990e8400-e29b-41d4-a716-446655440009', '880e8400-e29b-41d4-a716-446655440002', '2024-08-08', 8.0, 0, 'Mobile App', 'Testing', 'Integration testing'),
  ('990e8400-e29b-41d4-a716-446655440010', '880e8400-e29b-41d4-a716-446655440002', '2024-08-09', 8.0, 0, 'Code Review', 'Quality Assurance', 'Peer code reviews'),
  
  -- John Doe's draft timesheet (Aug 12-18)
  ('990e8400-e29b-41d4-a716-446655440011', '880e8400-e29b-41d4-a716-446655440003', '2024-08-12', 8.0, 0, 'Website Redesign', 'Frontend Development', 'Working on new UI components'),
  ('990e8400-e29b-41d4-a716-446655440012', '880e8400-e29b-41d4-a716-446655440003', '2024-08-13', 7.5, 0, 'Website Redesign', 'Code Review', 'Reviewing team submissions'),
  ('990e8400-e29b-41d4-a716-446655440013', '880e8400-e29b-41d4-a716-446655440003', '2024-08-14', 8.0, 0, 'Mobile App', 'Development', 'Adding authentication features'),
  ('990e8400-e29b-41d4-a716-446655440014', '880e8400-e29b-41d4-a716-446655440003', '2024-08-15', 9.0, 0, 'Mobile App', 'Testing', 'End-to-end testing'),
  
  -- Jane Smith's finance approved timesheet (July 29 - Aug 4)
  ('990e8400-e29b-41d4-a716-446655440015', '880e8400-e29b-41d4-a716-446655440005', '2024-07-30', 4.0, 0, 'Marketing Campaign', 'Design', 'Created promotional materials'),
  ('990e8400-e29b-41d4-a716-446655440016', '880e8400-e29b-41d4-a716-446655440005', '2024-08-01', 4.0, 0, 'Marketing Campaign', 'Content Writing', 'Wrote blog posts and articles'),
  ('990e8400-e29b-41d4-a716-446655440017', '880e8400-e29b-41d4-a716-446655440005', '2024-08-02', 4.0, 0, 'Website Redesign', 'UI/UX Design', 'Designed user interfaces'),
  ('990e8400-e29b-41d4-a716-446655440018', '880e8400-e29b-41d4-a716-446655440005', '2024-07-31', 8.0, 0, 'Client Meeting', 'Consultation', 'Met with potential clients'),
  
  -- Jane Smith's submitted timesheet (Aug 5-11)
  ('990e8400-e29b-41d4-a716-446655440019', '880e8400-e29b-41d4-a716-446655440006', '2024-08-06', 4.5, 0, 'Marketing Campaign', 'Social Media', 'Social media content creation'),
  ('990e8400-e29b-41d4-a716-446655440020', '880e8400-e29b-41d4-a716-446655440006', '2024-08-08', 4.0, 0, 'Marketing Campaign', 'Analytics', 'Campaign performance analysis'),
  ('990e8400-e29b-41d4-a716-446655440021', '880e8400-e29b-41d4-a716-446655440006', '2024-08-09', 5.0, 0, 'Client Support', 'Training', 'Client onboarding sessions'),
  ('990e8400-e29b-41d4-a716-446655440022', '880e8400-e29b-41d4-a716-446655440006', '2024-08-07', 5.0, 0, 'Website Redesign', 'Design Review', 'Reviewing design mockups'),
  
  -- Jane Smith's draft timesheet (Aug 12-18)
  ('990e8400-e29b-41d4-a716-446655440023', '880e8400-e29b-41d4-a716-446655440007', '2024-08-13', 3.0, 0, 'Marketing Campaign', 'Strategy', 'Planning new campaign strategy'),
  ('990e8400-e29b-41d4-a716-446655440024', '880e8400-e29b-41d4-a716-446655440007', '2024-08-14', 4.0, 0, 'Marketing Campaign', 'Content Creation', 'Creating video content'),
  ('990e8400-e29b-41d4-a716-446655440025', '880e8400-e29b-41d4-a716-446655440007', '2024-08-15', 4.0, 0, 'Client Support', 'Documentation', 'Updating user guides'),
  ('990e8400-e29b-41d4-a716-446655440026', '880e8400-e29b-41d4-a716-446655440007', '2024-08-16', 4.0, 0, 'Website Redesign', 'Testing', 'User experience testing'),
  
  -- Bob Wilson's locked timesheet (July 29 - Aug 4)
  ('990e8400-e29b-41d4-a716-446655440027', '880e8400-e29b-41d4-a716-446655440008', '2024-07-29', 7.0, 0, 'System Integration', 'Backend Development', 'API development and testing'),
  ('990e8400-e29b-41d4-a716-446655440028', '880e8400-e29b-41d4-a716-446655440008', '2024-07-31', 8.0, 0, 'System Integration', 'Database Design', 'Optimized database queries'),
  ('990e8400-e29b-41d4-a716-446655440029', '880e8400-e29b-41d4-a716-446655440008', '2024-08-01', 8.0, 0, 'System Integration', 'Testing', 'Unit and integration testing'),
  ('990e8400-e29b-41d4-a716-446655440030', '880e8400-e29b-41d4-a716-446655440008', '2024-08-02', 6.0, 0, 'Documentation', 'Technical Writing', 'Updated system documentation'),
  ('990e8400-e29b-41d4-a716-446655440031', '880e8400-e29b-41d4-a716-446655440008', '2024-07-30', 6.0, 0, 'Client Support', 'Bug Fixes', 'Resolved critical client issues'),
  
  -- Bob Wilson's draft timesheet (Aug 5-11)
  ('990e8400-e29b-41d4-a716-446655440032', '880e8400-e29b-41d4-a716-446655440009', '2024-08-05', 8.0, 0, 'System Integration', 'Development', 'Microservices architecture'),
  ('990e8400-e29b-41d4-a716-446655440033', '880e8400-e29b-41d4-a716-446655440009', '2024-08-06', 8.0, 0, 'System Integration', 'Security', 'Security audit and fixes'),
  ('990e8400-e29b-41d4-a716-446655440034', '880e8400-e29b-41d4-a716-446655440009', '2024-08-07', 8.0, 0, 'System Integration', 'Performance', 'Performance optimization'),
  ('990e8400-e29b-41d4-a716-446655440035', '880e8400-e29b-41d4-a716-446655440009', '2024-08-08', 8.0, 0, 'System Integration', 'Deployment', 'Production deployment'),
  ('990e8400-e29b-41d4-a716-446655440036', '880e8400-e29b-41d4-a716-446655440009', '2024-08-09', 8.0, 0, 'Client Support', 'Training', 'Team training sessions'),
  
  -- Bob Wilson's submitted timesheet (Aug 12-18)
  ('990e8400-e29b-41d4-a716-446655440037', '880e8400-e29b-41d4-a716-446655440010', '2024-08-12', 8.0, 0, 'System Integration', 'Research', 'Technology research and evaluation'),
  ('990e8400-e29b-41d4-a716-446655440038', '880e8400-e29b-41d4-a716-446655440010', '2024-08-13', 7.5, 0, 'System Integration', 'Development', 'New feature development'),
  ('990e8400-e29b-41d4-a716-446655440039', '880e8400-e29b-41d4-a716-446655440010', '2024-08-14', 8.0, 0, 'System Integration', 'Testing', 'Automated testing setup'),
  ('990e8400-e29b-41d4-a716-446655440040', '880e8400-e29b-41d4-a716-446655440010', '2024-08-15', 7.5, 0, 'Documentation', 'Architecture', 'System architecture documentation'),
  ('990e8400-e29b-41d4-a716-446655440041', '880e8400-e29b-41d4-a716-446655440010', '2024-08-16', 7.0, 0, 'Client Support', 'Consultation', 'Technical consultation calls');