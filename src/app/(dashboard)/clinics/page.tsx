"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

// Define the clinic data type
interface Clinic {
  id: number;
  name: string;
  teamSize: number;
  adminContact: string;
  revenue: number;
  patients: number;
  billingDate: string;
  status: "Healthy" | "Warning" | "Pilot Stage";
}

// Sample data
const clinicData: Clinic[] = [
  {
    id: 1,
    name: "ABC Dental",
    teamSize: 4,
    adminContact: "Dr. John Smith",
    revenue: 12500,
    patients: 320,
    billingDate: "09/01/2024",
    status: "Healthy",
  },
  {
    id: 2,
    name: "SmileCare",
    teamSize: 2,
    adminContact: "Dr. Sarah Lee",
    revenue: 8900,
    patients: 215,
    billingDate: "09/01/2024",
    status: "Warning",
  },
  {
    id: 3,
    name: "Bright Smiles",
    teamSize: 1,
    adminContact: "Dr. David Kim",
    revenue: 15300,
    patients: 410,
    billingDate: "09/01/2024",
    status: "Pilot Stage",
  },
];

export default function ClinicDashboard() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalEntries = 43;
  const entriesPerPage = 3;

  // Function to handle adding a new clinic
  const handleAddClinic = () => {
    console.log("Add new clinic clicked");
    // Implementation would go here
  };

  // Function to handle exporting data
  const handleExportData = () => {
    console.log("Export data clicked");
    // Implementation would go here
  };

  // Function to handle manage action
  const handleManage = (clinicId: number) => {
    console.log(`Manage clinic ${clinicId} clicked`);
    // Implementation would go here
  };

  return (
    <div className="space-y-6">
      {/* Action buttons */}
      <div className="flex gap-4">
        <Button
          className="bg-[#0f172a] hover:bg-[#1e293b]"
          onClick={handleAddClinic}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New Clinic
        </Button>
        <Button
          variant="outline"
          onClick={handleExportData}
          className="text-black-heading"
        >
          <Download className="mr-2 h-4 w-4" /> Export Data
        </Button>
      </div>

      {/* Clinics table */}
      <div className="border rounded-md">
        <Table className="w-[1200px] xl:w-full">
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-sm font-bold">Clinic Name</TableHead>
              <TableHead className="text-sm font-bold">Team Size</TableHead>
              <TableHead className="text-sm font-bold">Admin Contact</TableHead>
              <TableHead className="text-sm font-bold">Revenue</TableHead>
              <TableHead className="text-sm font-bold">Patients</TableHead>
              <TableHead className="text-sm font-bold">Billing Date</TableHead>
              <TableHead className="text-sm font-bold">Status</TableHead>
              <TableHead className="text-sm font-bold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clinicData.map((clinic) => (
              <TableRow key={clinic.id}>
                <TableCell className="py-2">{clinic.name}</TableCell>
                <TableCell className="py-2">{clinic.teamSize}</TableCell>
                <TableCell className="py-2">{clinic.adminContact}</TableCell>
                <TableCell className="py-2">
                  ${clinic.revenue.toLocaleString()}
                </TableCell>
                <TableCell className="py-2">{clinic.patients}</TableCell>
                <TableCell className="py-2">{clinic.billingDate}</TableCell>
                <TableCell className="py-2">
                  <StatusBadge status={clinic.status} />
                </TableCell>
                <TableCell className="py-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        className="text-primary font-medium  p-0 bg-[#F3F4F6] hover:bg-[#e7e8ea] rounded-md px-3 h-8"
                        onClick={() => handleManage(clinic.id)}
                      >
                        Manage
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-40 p-2">
                      <div className="flex flex-col space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-start"
                          onClick={() => console.log("Edit clicked")}
                        >
                          Edit
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-red-600 hover:text-red-700"
                          onClick={() => console.log("Delete clicked")}
                        >
                          Delete
                        </Button>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing 1 to {Math.min(entriesPerPage, totalEntries)} of{" "}
          {totalEntries} entries
        </div>
        <Pagination className="justify-end w-fit mx-0">
          <PaginationContent>
            <PaginationItem className="border-[#D1D5DB] h-[38px] border rounded-sm">
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) setCurrentPage(currentPage - 1);
                }}
                className={
                  currentPage === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive={true}
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(1);
                }}
                className="bg-primary text-white hover:bg-primary/90 hover:text-white"
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="border-[#D1D5DB] h-[38px] border rounded-sm">
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < Math.ceil(totalEntries / entriesPerPage)) {
                    setCurrentPage(currentPage + 1);
                  }
                }}
                className={
                  currentPage === Math.ceil(totalEntries / entriesPerPage)
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

// Status badge component
function StatusBadge({ status }: { status: Clinic["status"] }) {
  let badgeVariant: "default" | "secondary" | "outline" = "default";
  let badgeClass = "";

  switch (status) {
    case "Healthy":
      badgeVariant = "outline";
      badgeClass =
        "bg-green-50 text-green-700 border-green-200 hover:bg-green-100";
      break;
    case "Warning":
      badgeVariant = "outline";
      badgeClass =
        "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100";
      break;
    case "Pilot Stage":
      badgeVariant = "outline";
      badgeClass = "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100";
      break;
  }

  return (
    <Badge variant={badgeVariant} className={badgeClass}>
      {status}
    </Badge>
  );
}
