import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Clock, Receipt, FileText, DollarSign, TrendingUp, AlertTriangle } from 'lucide-react';

export function CompanyDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Company Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your workforce, approvals, and company billing
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +2 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$124,800</div>
            <p className="text-xs text-muted-foreground">
              December 2024
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">7</div>
            <p className="text-xs text-muted-foreground">
              Timesheets & expenses
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Outstanding Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$15,400</div>
            <p className="text-xs text-muted-foreground">
              2 invoices due
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Action Items */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pending Approvals</CardTitle>
            <CardDescription>Items requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">John Smith - Timesheet</p>
                  <p className="text-xs text-muted-foreground">Week ending Dec 15 - 40 hours</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Reject</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Receipt className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Sarah Johnson - Expenses</p>
                  <p className="text-xs text-muted-foreground">Travel expenses - $567.89</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Reject</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <DollarSign className="h-4 w-4 text-primary" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Mike Chen - Contractor Invoice</p>
                  <p className="text-xs text-muted-foreground">November services - $2,400</p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Reject</Button>
                  <Button size="sm">Approve</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Company Notifications</CardTitle>
            <CardDescription>Important updates and alerts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Invoice Payment Overdue</p>
                  <p className="text-xs text-muted-foreground">
                    Invoice #INV-2024-11-001 is 5 days overdue
                  </p>
                  <Badge variant="outline" className="mt-1">Due: $8,200</Badge>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileText className="h-4 w-4 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New Invoice Generated</p>
                  <p className="text-xs text-muted-foreground">
                    December 2024 payroll invoice ready
                  </p>
                  <Badge variant="secondary" className="mt-1">$124,800</Badge>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Users className="h-4 w-4 text-success mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New Employee Onboarded</p>
                  <p className="text-xs text-muted-foreground">
                    Alice Brown completed onboarding process
                  </p>
                  <Badge variant="secondary" className="mt-1">Active</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks and operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            <Button className="h-auto p-4 flex flex-col gap-2">
              <Users className="h-5 w-5" />
              <span>Add Employee</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <Receipt className="h-5 w-5" />
              <span>Bulk Upload</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <FileText className="h-5 w-5" />
              <span>Generate Report</span>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2">
              <DollarSign className="h-5 w-5" />
              <span>Pay Invoices</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}