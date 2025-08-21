import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Clock, CheckCircle, XCircle, Eye, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Approvals = () => {
  const { toast } = useToast();

  // Sample data - in a real app this would come from Supabase
  const approvalItems = [
    {
      id: '1',
      type: 'TIMESHEET',
      employeeName: 'John Smith',
      employeeId: 'EMP-001',
      description: 'Weekly timesheet - Jan 15-21, 2024',
      amount: null,
      submittedDate: '2024-01-22',
      status: 'PENDING',
      details: {
        period: 'Jan 15-21, 2024',
        totalHours: 40,
        overtime: 5
      }
    },
    {
      id: '2',
      type: 'EXPENSE',
      employeeName: 'Sarah Johnson',
      employeeId: 'EMP-002',
      description: 'Business lunch with client',
      amount: 85.50,
      submittedDate: '2024-01-20',
      status: 'PENDING',
      details: {
        category: 'Meals & Entertainment',
        date: '2024-01-18'
      }
    },
    {
      id: '3',
      type: 'TIMESHEET',
      employeeName: 'Mike Davis',
      employeeId: 'EMP-003',
      description: 'Weekly timesheet - Jan 8-14, 2024',
      amount: null,
      submittedDate: '2024-01-15',
      status: 'APPROVED',
      details: {
        period: 'Jan 8-14, 2024',
        totalHours: 38,
        overtime: 0
      }
    },
    {
      id: '4',
      type: 'EXPENSE',
      employeeName: 'Lisa Chen',
      employeeId: 'EMP-004',
      description: 'Office supplies purchase',
      amount: 120.75,
      submittedDate: '2024-01-18',
      status: 'REJECTED',
      details: {
        category: 'Office Supplies',
        date: '2024-01-16'
      }
    }
  ];

  const pendingItems = approvalItems.filter(item => item.status === 'PENDING');
  const approvedItems = approvalItems.filter(item => item.status === 'APPROVED');
  const rejectedItems = approvalItems.filter(item => item.status === 'REJECTED');

  const getStatusBadge = (status: string) => {
    const config = {
      PENDING: { variant: 'secondary', icon: Clock, label: 'Pending' },
      APPROVED: { variant: 'default', icon: CheckCircle, label: 'Approved' },
      REJECTED: { variant: 'destructive', icon: XCircle, label: 'Rejected' }
    };
    
    const statusConfig = config[status as keyof typeof config];
    const Icon = statusConfig.icon;
    
    return (
      <Badge variant={statusConfig.variant as any} className="flex items-center gap-1">
        <Icon className="h-3 w-3" />
        {statusConfig.label}
      </Badge>
    );
  };

  const getTypeBadge = (type: string) => {
    return type === 'TIMESHEET' 
      ? <Badge variant="outline">Timesheet</Badge>
      : <Badge variant="outline">Expense</Badge>;
  };

  const handleApprove = (itemId: string, itemType: string) => {
    toast({
      title: "Item Approved",
      description: `${itemType} has been approved successfully.`
    });
  };

  const handleReject = (itemId: string, itemType: string) => {
    toast({
      title: "Item Rejected",
      description: `${itemType} has been rejected.`
    });
  };

  const handleViewDetails = (itemId: string) => {
    toast({
      title: "View Details",
      description: "Opening detailed view..."
    });
  };

  const ApprovalTable = ({ items }: { items: typeof approvalItems }) => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Employee</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Submitted</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="" />
                  <AvatarFallback>
                    {item.employeeName.split(' ').map(n => n.charAt(0)).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{item.employeeName}</div>
                  <div className="text-sm text-muted-foreground">{item.employeeId}</div>
                </div>
              </div>
            </TableCell>
            <TableCell>{getTypeBadge(item.type)}</TableCell>
            <TableCell>
              <div>
                <div className="font-medium">{item.description}</div>
                {item.type === 'TIMESHEET' && item.details && (
                  <div className="text-sm text-muted-foreground">
                    {item.details.totalHours}h + {item.details.overtime}h OT
                  </div>
                )}
              </div>
            </TableCell>
            <TableCell>
              {item.amount ? `$${item.amount}` : '-'}
            </TableCell>
            <TableCell>{item.submittedDate}</TableCell>
            <TableCell>{getStatusBadge(item.status)}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewDetails(item.id)}
                >
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                {item.status === 'PENDING' && (
                  <>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleApprove(item.id, item.type)}
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Approve
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleReject(item.id, item.type)}
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      Reject
                    </Button>
                  </>
                )}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Approvals</h1>
        <p className="text-muted-foreground">Review and approve employee submissions</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingItems.length}</div>
            <p className="text-xs text-muted-foreground">
              Requires action
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Items processed
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Value</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${pendingItems.reduce((sum, item) => sum + (item.amount || 0), 0).toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground">
              Awaiting approval
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3h</div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">
            Pending ({pendingItems.length})
          </TabsTrigger>
          <TabsTrigger value="approved">
            Approved ({approvedItems.length})
          </TabsTrigger>
          <TabsTrigger value="rejected">
            Rejected ({rejectedItems.length})
          </TabsTrigger>
          <TabsTrigger value="all">
            All ({approvalItems.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
              <CardDescription>Items requiring your review and approval</CardDescription>
            </CardHeader>
            <CardContent>
              <ApprovalTable items={pendingItems} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="approved">
          <Card>
            <CardHeader>
              <CardTitle>Approved Items</CardTitle>
              <CardDescription>Previously approved submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <ApprovalTable items={approvedItems} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="rejected">
          <Card>
            <CardHeader>
              <CardTitle>Rejected Items</CardTitle>
              <CardDescription>Submissions that were rejected</CardDescription>
            </CardHeader>
            <CardContent>
              <ApprovalTable items={rejectedItems} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>All Approvals</CardTitle>
              <CardDescription>Complete approval history</CardDescription>
            </CardHeader>
            <CardContent>
              <ApprovalTable items={approvalItems} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Approvals;