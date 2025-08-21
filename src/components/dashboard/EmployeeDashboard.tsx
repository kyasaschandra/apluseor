import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Receipt, FileText, DollarSign, AlertCircle } from 'lucide-react';

export function EmployeeDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Employee Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your timesheets, expenses, and view your payslips
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Timesheet</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5 hrs</div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
            <Button size="sm" className="mt-2 w-full">
              Add Time Entry
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Expenses</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$245.30</div>
            <p className="text-xs text-muted-foreground">
              3 reports pending
            </p>
            <Button size="sm" variant="outline" className="mt-2 w-full">
              Submit Expenses
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Latest Payslip</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,200</div>
            <p className="text-xs text-muted-foreground">
              December 2024
            </p>
            <Button size="sm" variant="outline" className="mt-2 w-full">
              View Payslip
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-medium transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contractor Invoice</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,800</div>
            <p className="text-xs text-muted-foreground">
              November invoice
            </p>
            <Button size="sm" variant="outline" className="mt-2 w-full">
              Create Invoice
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Notifications */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest submissions and approvals</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Timesheet approved</p>
                  <p className="text-xs text-muted-foreground">Week ending Dec 15, 2024</p>
                </div>
                <Badge variant="secondary">Approved</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Expense report pending</p>
                  <p className="text-xs text-muted-foreground">Travel expenses - $345.67</p>
                </div>
                <Badge variant="outline">Pending</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payslip generated</p>
                  <p className="text-xs text-muted-foreground">December 2024 salary</p>
                </div>
                <Badge variant="secondary">Available</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Action Items</CardTitle>
            <CardDescription>Tasks that need your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-4 w-4 text-warning mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Complete this week's timesheet</p>
                  <p className="text-xs text-muted-foreground">Due: Friday, Dec 22</p>
                  <Button size="sm" className="mt-2">Complete</Button>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertCircle className="h-4 w-4 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Update tax declarations</p>
                  <p className="text-xs text-muted-foreground">Annual tax filing due soon</p>
                  <Button size="sm" variant="outline" className="mt-2">Update</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}