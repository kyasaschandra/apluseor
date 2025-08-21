import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FolderOpen, Plus, Users, Calendar, MoreHorizontal } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { mockProjects, mockEmployees, type Project } from '@/data/mockData';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Projects = () => {
  const { profile } = useAuth();
  const [projects] = useState<Project[]>(mockProjects);

  const getEmployeeNames = (employeeIds: string[]) => {
    return employeeIds
      .map(id => {
        const emp = mockEmployees.find(e => e.id === id);
        return emp ? `${emp.first_name} ${emp.last_name}` : 'Unknown';
      })
      .join(', ');
  };

  const getStatusColor = (status: Project['status']): 'default' | 'secondary' | 'outline' | 'destructive' => {
    switch (status) {
      case 'ACTIVE':
        return 'default';
      case 'COMPLETED':
        return 'secondary';
      case 'ON_HOLD':
        return 'outline';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Projects</h1>
          <p className="text-muted-foreground">
            Manage projects and task assignments
          </p>
        </div>
        {(profile?.role === 'COMPANY' || profile?.role === 'ADMIN') && (
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-medium transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                </div>
                {(profile?.role === 'COMPANY' || profile?.role === 'ADMIN') && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>Edit Project</DropdownMenuItem>
                      <DropdownMenuItem>Assign Members</DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        Delete Project
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Badge variant={getStatusColor(project.status)}>
                  {project.status.replace('_', ' ')}
                </Badge>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {new Date(project.start_date).toLocaleDateString()}
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-1 text-sm font-medium text-foreground mb-2">
                  <Users className="h-3 w-3" />
                  Assigned Team ({project.assigned_employees.length})
                </div>
                <p className="text-sm text-muted-foreground">
                  {getEmployeeNames(project.assigned_employees)}
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  View Details
                </Button>
                {profile?.role === 'EMPLOYEE' && (
                  <Button size="sm" className="flex-1">
                    Log Time
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {projects.length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FolderOpen className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">No Projects Found</h3>
            <p className="text-muted-foreground text-center mb-4">
              Get started by creating your first project
            </p>
            {(profile?.role === 'COMPANY' || profile?.role === 'ADMIN') && (
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Create Project
              </Button>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Projects;