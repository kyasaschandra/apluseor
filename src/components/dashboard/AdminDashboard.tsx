import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building2, Users, DollarSign, FileText, AlertTriangle, TrendingUp, Globe, Shield } from 'lucide-react';

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Platform overview, compliance monitoring, and system management
        </p>
      </div>

      {/* Platform Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Companies</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">
              <TrendingUp className="inline h-3 w-3 mr-1" />
              +3 this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,247</div>
            <p className="text-xs text-muted-foreground">
              Across all companies
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$89,400</div>
            <p className="text-xs text-muted-foreground">
              December 2024
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Issues</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">3</div>
            <p className="text-xs text-muted-foreground">
              Require attention
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Compliance & Alerts */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Compliance Alerts</CardTitle>
            <CardDescription>Items requiring immediate attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-4 w-4 text-destructive mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">I-9 Reverification Due</p>
                  <p className="text-xs text-muted-foreground">
                    TechCorp Inc. - 2 employees require reverification
                  </p>
                  <Badge variant="destructive" className="mt-1">Critical</Badge>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-4 w-4 text-warning mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Tax Declaration Missing</p>
                  <p className="text-xs text-muted-foreground">
                    StartupXYZ - 3 employees haven't submitted declarations
                  </p>
                  <Badge variant="outline" className="mt-1">Warning</Badge>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-4 w-4 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Document Expiring</p>
                  <p className="text-xs text-muted-foreground">
                    5 visa documents expiring in 30 days
                  </p>
                  <Badge variant="secondary" className="mt-1">Monitor</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Platform Activity</CardTitle>
            <CardDescription>Latest system events and transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payroll processed</p>
                  <p className="text-xs text-muted-foreground">TechCorp Inc. - $45,600</p>
                </div>
                <Badge variant="secondary">Completed</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New company onboarded</p>
                  <p className="text-xs text-muted-foreground">InnovateNow LLC registered</p>
                </div>
                <Badge variant="outline">New</Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment failed</p>
                  <p className="text-xs text-muted-foreground">StartupXYZ - Invoice #INV-001</p>
                </div>
                <Badge variant="destructive">Failed</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Country Operations */}
      <Card>
        <CardHeader>
          <CardTitle>Country Operations</CardTitle>
          <CardDescription>EOR operations across different jurisdictions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">United States</p>
                    <p className="text-xs text-muted-foreground">687 employees</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$52,400</p>
                  <p className="text-xs text-muted-foreground">Monthly payroll</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">India</p>
                    <p className="text-xs text-muted-foreground">560 employees</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">$37,000</p>
                  <p className="text-xs text-muted-foreground">Monthly payroll</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-medium">Quick Actions</h4>
              <div className="grid gap-2">
                <Button variant="outline" className="justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Compliance Report
                </Button>
                <Button variant="outline" className="justify-start">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Process Payroll Batch
                </Button>
                <Button variant="outline" className="justify-start">
                  <Building2 className="mr-2 h-4 w-4" />
                  Add New Company
                </Button>
                <Button variant="outline" className="justify-start">
                  <Shield className="mr-2 h-4 w-4" />
                  Review Compliance Issues
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}