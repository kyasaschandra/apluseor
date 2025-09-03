import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Receipt, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Expenses = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Sample data - in a real app this would come from Supabase
  const expenses = [
    {
      id: '1',
      date: '2024-01-15',
      description: 'Business lunch with client',
      category: 'Meals & Entertainment',
      amount: 85.50,
      status: 'PENDING',
      receipt: true
    },
    {
      id: '2',
      date: '2024-01-10',
      description: 'Taxi to airport',
      category: 'Transportation',
      amount: 45.00,
      status: 'APPROVED',
      receipt: true
    },
    {
      id: '3',
      date: '2024-01-08',
      description: 'Office supplies',
      category: 'Supplies',
      amount: 120.75,
      status: 'REJECTED',
      receipt: false
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      PENDING: { variant: 'secondary', label: 'Pending' },
      APPROVED: { variant: 'default', label: 'Approved' },
      REJECTED: { variant: 'destructive', label: 'Rejected' }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge variant={config.variant as any}>{config.label}</Badge>;
  };

  const handleSubmitExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Expense Submitted",
      description: "Your expense has been submitted for approval."
    });
    setIsDialogOpen(false);
  };

  const totalPending = expenses.filter(e => e.status === 'PENDING').reduce((sum, e) => sum + e.amount, 0);
  const totalApproved = expenses.filter(e => e.status === 'APPROVED').reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Expenses</h1>
          <p className="text-muted-foreground">Submit and track your business expenses</p>
        </div>
        
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              New Expense
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Submit New Expense</DialogTitle>
              <DialogDescription>
                Add details for your expense claim
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitExpense} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meals">Meals & Entertainment</SelectItem>
                    <SelectItem value="transportation">Transportation</SelectItem>
                    <SelectItem value="supplies">Office Supplies</SelectItem>
                    <SelectItem value="accommodation">Accommodation</SelectItem>
                    <SelectItem value="insurance">Insurance</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="amount">Amount ($)</Label>
                <Input id="amount" type="number" step="0.01" min="0" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Describe the business purpose" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="receipt">Receipt</Label>
                <Input id="receipt" type="file" accept="image/*,.pdf" />
              </div>
              
              <Button type="submit" className="w-full">
                Submit Expense
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPending.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {expenses.filter(e => e.status === 'PENDING').length} expenses
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved This Month</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalApproved.toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {expenses.filter(e => e.status === 'APPROVED').length} expenses
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Submitted</CardTitle>
            <Receipt className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${expenses.reduce((sum, e) => sum + e.amount, 0).toFixed(2)}</div>
            <p className="text-xs text-muted-foreground">
              {expenses.length} total expenses
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Expense History</CardTitle>
          <CardDescription>View all your submitted expenses</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Receipt</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expenses.map((expense) => (
                <TableRow key={expense.id}>
                  <TableCell>{expense.date}</TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell>{expense.category}</TableCell>
                  <TableCell>${expense.amount.toFixed(2)}</TableCell>
                  <TableCell>
                    {expense.receipt ? (
                      <Badge variant="outline">
                        <Upload className="h-3 w-3 mr-1" />
                        Uploaded
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Missing</Badge>
                    )}
                  </TableCell>
                  <TableCell>{getStatusBadge(expense.status)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Expenses;