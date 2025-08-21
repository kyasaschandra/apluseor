import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Download, FileText, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Payslips = () => {
  const { toast } = useToast();

  // Sample data - in a real app this would come from Supabase
  const payslips = [
    {
      id: '1',
      period: 'January 2024',
      payDate: '2024-01-31',
      grossPay: 5000.00,
      netPay: 3750.00,
      deductions: 1250.00,
      status: 'PAID'
    },
    {
      id: '2',
      period: 'December 2023',
      payDate: '2023-12-31',
      grossPay: 5000.00,
      netPay: 3750.00,
      deductions: 1250.00,
      status: 'PAID'
    },
    {
      id: '3',
      period: 'November 2023',
      payDate: '2023-11-30',
      grossPay: 4800.00,
      netPay: 3600.00,
      deductions: 1200.00,
      status: 'PAID'
    }
  ];

  const currentYear = new Date().getFullYear();
  const ytdGross = payslips.filter(p => p.period.includes(currentYear.toString())).reduce((sum, p) => sum + p.grossPay, 0);
  const ytdNet = payslips.filter(p => p.period.includes(currentYear.toString())).reduce((sum, p) => sum + p.netPay, 0);
  const ytdDeductions = payslips.filter(p => p.period.includes(currentYear.toString())).reduce((sum, p) => sum + p.deductions, 0);

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

      <div className="grid gap-4 md:grid-cols-3">
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
            <FileText className="h-4 w-4 text-muted-foreground" />
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
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${ytdDeductions.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              Taxes & benefits
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
                  <TableCell className="font-medium">{payslip.period}</TableCell>
                  <TableCell>{payslip.payDate}</TableCell>
                  <TableCell>${payslip.grossPay.toLocaleString()}</TableCell>
                  <TableCell>${payslip.deductions.toLocaleString()}</TableCell>
                  <TableCell className="font-semibold">${payslip.netPay.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge variant="default">
                      {payslip.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleView(payslip.id, payslip.period)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(payslip.id, payslip.period)}
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