import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, FileText, Eye, DollarSign, TrendingUp } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { mockPayslips, type Payslip } from '@/data/mockData';

const Payslips = () => {
  const { toast } = useToast();
  const { profile } = useAuth();
  const [payslips] = useState<Payslip[]>(mockPayslips);

  // Only show payslips for full-time employees
  if (profile?.employee_type === 'CONTRACTOR') {
    return (
      <div className="container mx-auto p-6">
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">Payslips Not Available</h3>
            <p className="text-muted-foreground text-center">
              Payslips are only available for full-time employees. As a contractor, please check your invoices section.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: Payslip['status']): 'default' | 'secondary' | 'outline' | 'destructive' => {
    switch (status) {
      case 'PAID':
        return 'default';
      case 'PROCESSING':
        return 'secondary';
      case 'PENDING':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  const totalEarnings = payslips
    .filter(p => p.status === 'PAID')
    .reduce((sum, p) => sum + p.net_pay, 0);

  const pendingAmount = payslips
    .filter(p => p.status !== 'PAID')
    .reduce((sum, p) => sum + p.net_pay, 0);

  const currentYear = new Date().getFullYear();
  const ytdGross = payslips.filter(p => p.pay_period_start.includes(currentYear.toString())).reduce((sum, p) => sum + p.gross_pay, 0);
  const ytdNet = payslips.filter(p => p.pay_period_start.includes(currentYear.toString())).reduce((sum, p) => sum + p.net_pay, 0);
  const ytdDeductions = payslips.filter(p => p.pay_period_start.includes(currentYear.toString())).reduce((sum, p) => sum + (p.deductions.tax + p.deductions.health_insurance + p.deductions.retirement), 0);

  const handleDownload = (payslipId: string, period: string) => {
    toast({
      title: "Download Started",
      description: `Downloading payslip for ${period}`
    });
  };

  const handleView = (payslipId: string, period: string) => {
    toast({
      title: "Opening Payslip",
      description: `Viewing payslip for ${period}`
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payslips</h1>
        <p className="text-muted-foreground">View and download your salary payslips</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">YTD Gross Pay</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${ytdGross.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              {currentYear} total
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">YTD Net Pay</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${ytdNet.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              After deductions
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">YTD Deductions</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${ytdDeductions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Taxes & benefits
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Amount</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${pendingAmount.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting payment
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Payslip History</CardTitle>
          <CardDescription>View and download your payslips</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pay Period</TableHead>
                <TableHead>Pay Date</TableHead>
                <TableHead>Hours</TableHead>
                <TableHead>Gross Pay</TableHead>
                <TableHead>Deductions</TableHead>
                <TableHead>Net Pay</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {payslips.map((payslip) => (
                <TableRow key={payslip.id}>
                  <TableCell className="font-medium">
                    {new Date(payslip.pay_period_start).toLocaleDateString()} - {new Date(payslip.pay_period_end).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{payslip.pay_date ? new Date(payslip.pay_date).toLocaleDateString() : 'Pending'}</TableCell>
                  <TableCell>{payslip.hours_worked}h</TableCell>
                  <TableCell>${payslip.gross_pay.toLocaleString()}</TableCell>
                  <TableCell>${(payslip.deductions.tax + payslip.deductions.health_insurance + payslip.deductions.retirement).toLocaleString()}</TableCell>
                  <TableCell className="font-semibold">${payslip.net_pay.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusColor(payslip.status)}>
                      {payslip.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleView(payslip.id, `${new Date(payslip.pay_period_start).toLocaleDateString()} - ${new Date(payslip.pay_period_end).toLocaleDateString()}`)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        disabled={payslip.status === 'PENDING'}
                        onClick={() => handleDownload(payslip.id, `${new Date(payslip.pay_period_start).toLocaleDateString()} - ${new Date(payslip.pay_period_end).toLocaleDateString()}`)}
                      >
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Payslips;