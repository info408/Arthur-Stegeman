import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Contract } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PlusCircle, FileText, CheckCircle, Clock } from "lucide-react";

const mockContracts: Contract[] = [
  { id: "c7a8b9", freelancerName: "Jan de Vries", status: "Signed", createdAt: new Date('2023-10-26') },
  { id: "d1e2f3", freelancerName: "Amina El Idrissi", status: "Sent", createdAt: new Date('2023-10-24') },
  { id: "g4h5i6", freelancerName: "Pieter Jansen", status: "Draft", createdAt: new Date('2023-10-28') },
];

const statusConfig = {
    'Signed': { icon: CheckCircle, color: 'bg-green-500', variant: 'default' as const },
    'Sent': { icon: Clock, color: 'bg-blue-500', variant: 'secondary' as const },
    'Draft': { icon: FileText, color: 'bg-yellow-500', variant: 'outline' as const },
}

export default function AdminDashboard() {
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-headline font-bold text-primary">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage contracts for your freelancers.</p>
        </div>
        <Button asChild>
          <Link href="/admin/new-contract">
            <PlusCircle className="mr-2 h-4 w-4" />
            New Contract
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Contract Overview</CardTitle>
          <CardDescription>A list of all recent contracts.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Freelancer</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created At</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockContracts.map((contract) => {
                const { icon: Icon, variant } = statusConfig[contract.status];
                return (
                  <TableRow key={contract.id}>
                    <TableCell className="font-medium">{contract.freelancerName}</TableCell>
                    <TableCell>
                      <Badge variant={variant}>
                         <Icon className="mr-2 h-3 w-3" />
                         {contract.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{contract.createdAt.toLocaleDateString()}</TableCell>
                    <TableCell className="text-right">
                       <Button variant="ghost" size="sm" asChild>
                           <Link href={`/freelancer/${contract.id}`}>View</Link>
                       </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
