import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart3, Download, TrendingUp, Users, DollarSign, Clock, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Reports = () => {
  const { toast } = useToast();

  // Sample data - in a real app this would come from Supabase
  const reportData = {
    payroll: {
      totalCost: 125000,
      avgSalary: 62500,
      employeeCount: 25,
      growth: '+8.5%'
    },
    time: {
      totalHours: 4200,
      avgHoursPerEmployee: 168,
      overtimeHours: 180,
      utilization: '95%'
    },
    expenses: {
      totalExpenses: 15750,
      avgExpensePerEmployee: 630,
      topCategory: 'Travel',
      pendingApprovals: 12
    }
  };

  const handleDownloadReport = (reportType: string) => {
    toast({
      title: "Report Downloaded",
      description: `${reportType} report has been downloaded successfully.`
    });
  };

  const handleGenerateReport = (reportType: string) => {
    toast({
      title: "Report Generated",
      description: `${reportType} report is being generated...`
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">View insights and generate reports</p>
        </div>
        
        <div className="flex items-center gap-2">
          <Select defaultValue="current-month">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${reportData.payroll.totalCost.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              {reportData.payroll.growth} from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.time.totalHours.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {reportData.time.utilization} utilization rate
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${reportData.expenses.totalExpenses.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {reportData.expenses.pendingApprovals} pending approval
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Employees</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reportData.payroll.employeeCount}</div>
            <p className="text-xs text-muted-foreground">
              ${reportData.payroll.avgSalary.toLocaleString()} avg salary
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="payroll" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="payroll">Payroll Reports</TabsTrigger>
          <TabsTrigger value="time">Time Reports</TabsTrigger>
          <TabsTrigger value="expenses">Expense Reports</TabsTrigger>
          <TabsTrigger value="compliance">Compliance</TabsTrigger>
        </TabsList>

        <TabsContent value="payroll" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Payroll Summary</CardTitle>
                <CardDescription>Monthly payroll overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Gross Pay</span>
                  <span className="font-semibold">${reportData.payroll.totalCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Deductions</span>
                  <span className="font-semibold">$31,250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Net Pay</span>
                  <span className="font-semibold">$93,750</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span>Employer Taxes</span>
                  <span className="font-semibold">$12,500</span>
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleDownloadReport('Payroll Summary')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Department Breakdown</CardTitle>
                <CardDescription>Payroll costs by department</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Engineering</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">12 employees</Badge>
                      <span className="font-semibold">$75,000</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Product</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">5 employees</Badge>
                      <span className="font-semibold">$30,000</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Marketing</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">4 employees</Badge>
                      <span className="font-semibold">$20,000</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sales</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">4 employees</Badge>
                      <span className="font-semibold">$18,000</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleDownloadReport('Department Breakdown')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="time" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Time Summary</CardTitle>
                <CardDescription>Working hours overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Regular Hours</span>
                  <span className="font-semibold">{(reportData.time.totalHours - reportData.time.overtimeHours).toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Overtime Hours</span>
                  <span className="font-semibold">{reportData.time.overtimeHours}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Total Hours</span>
                  <span className="font-semibold">{reportData.time.totalHours.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span>Utilization Rate</span>
                  <Badge variant="default">{reportData.time.utilization}</Badge>
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleDownloadReport('Time Summary')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Attendance Trends</CardTitle>
                <CardDescription>Employee attendance patterns</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Perfect Attendance</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="default">18 employees</Badge>
                      <span className="font-semibold">72%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Late Arrivals</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">5 employees</Badge>
                      <span className="font-semibold">20%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Absences</span>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">2 employees</Badge>
                      <span className="font-semibold">8%</span>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleDownloadReport('Attendance Report')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="expenses" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Expense Summary</CardTitle>
                <CardDescription>Employee expenses overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Approved</span>
                  <span className="font-semibold">${reportData.expenses.totalExpenses.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Pending Approval</span>
                  <span className="font-semibold">$2,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Average per Employee</span>
                  <span className="font-semibold">${reportData.expenses.avgExpensePerEmployee}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t">
                  <span>Top Category</span>
                  <Badge variant="secondary">{reportData.expenses.topCategory}</Badge>
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleDownloadReport('Expense Summary')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expense Categories</CardTitle>
                <CardDescription>Breakdown by expense type</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Travel</span>
                    <span className="font-semibold">$7,200 (46%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Meals</span>
                    <span className="font-semibold">$3,800 (24%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Office Supplies</span>
                    <span className="font-semibold">$2,100 (13%)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Other</span>
                    <span className="font-semibold">$2,650 (17%)</span>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleDownloadReport('Category Breakdown')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
                <CardDescription>Regulatory compliance overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Tax Filings</span>
                    <Badge variant="default">Up to Date</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Labor Law Compliance</span>
                    <Badge variant="default">Compliant</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Employee Classifications</span>
                    <Badge variant="secondary">Review Required</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Overtime Regulations</span>
                    <Badge variant="default">Compliant</Badge>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleDownloadReport('Compliance Report')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Audit Trail</CardTitle>
                <CardDescription>Recent compliance activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-green-500 pl-3">
                    <div className="font-medium">Quarterly Tax Filing</div>
                    <div className="text-muted-foreground">Completed on Jan 15, 2024</div>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-3">
                    <div className="font-medium">Employee Handbook Update</div>
                    <div className="text-muted-foreground">Updated on Jan 10, 2024</div>
                  </div>
                  <div className="border-l-2 border-yellow-500 pl-3">
                    <div className="font-medium">Classification Review</div>
                    <div className="text-muted-foreground">Due: Feb 1, 2024</div>
                  </div>
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleDownloadReport('Audit Trail')}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;