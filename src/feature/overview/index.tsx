import {
  Building2,
  Clock,
  CreditCard,
  ListChecks,
  Percent,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import RevenueChart from "./revenue";

export default function Overview() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-3 py-2">
              <CardTitle className="text-sm text-[#1F2937] font-normal">
                Total Active Clinics
              </CardTitle>
              <Building2 className="h-4 w-4 text-[#4b5563]" />
            </CardHeader>
            <CardContent className="mt-3 px-3">
              <div className="text-2xl  text-[#1F2937] font-normal">32</div>
              <p className="text-xs text-[#4B5563] mt-1">
                New clinics this month: +3
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-3 py-2">
              <CardTitle className="text-sm text-[#1F2937] font-normal">
                Total Revenue Recovered
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-[#4b5563]" />
            </CardHeader>
            <CardContent className="mt-3 px-3">
              <div className="text-2xl  text-[#1F2937] font-normal">
                $347,392
              </div>
              <p className="text-xs text-[#4B5563] mt-1">
                Avg. per clinic: $7,479
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-3 py-2">
              <CardTitle className="text-sm text-[#1F2937] font-normal">
                Total Usage Time
              </CardTitle>
              <Clock className="h-4 w-4 text-[#4b5563]" />
            </CardHeader>
            <CardContent className="mt-3 px-3">
              <div className="text-2xl  text-[#1F2937] font-normal">
                12,458 hrs
              </div>
              <p className="text-xs text-[#4B5563] mt-1">
                Avg. 5.2 hours/day per clinic
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-3 py-2">
              <CardTitle className="text-sm text-[#1F2937] font-normal">
                Retention Rate
              </CardTitle>
              <Percent className="h-4 w-4 text-[#4b5563]" />
            </CardHeader>
            <CardContent className="mt-3 px-3">
              <div className="text-2xl  text-[#1F2937] font-normal">88%</div>
              <p className="text-xs text-[#4B5563] mt-1">
                Change from last month: -5%
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-3 py-2">
              <CardTitle className="text-sm text-[#1F2937] font-normal">
                Total Actions This Month
              </CardTitle>
              <ListChecks className="h-4 w-4 text-[#4b5563]" />
            </CardHeader>
            <CardContent className="mt-3 px-3">
              <div className="text-2xl  text-[#1F2937] font-normal">78%</div>
              <p className="text-xs text-[#4B5563] mt-1">Last Month: 5391</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 px-3 py-2">
              <CardTitle className="text-sm text-[#1F2937] font-normal">
                Billing Collection Rate
              </CardTitle>
              <CreditCard className="h-4 w-4 text-[#4b5563]" />
            </CardHeader>
            <CardContent className="mt-3 px-3">
              <div className="text-2xl  text-[#1F2937] font-normal">95%</div>
              <p className="text-xs text-[#4B5563] mt-1">
                Overdue: 8 clinics ($24,392)
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-xl font-normal">
                Monthly Revenue
              </CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <Tabs defaultValue="30days">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="30days">30 Days</TabsTrigger>
                  <TabsTrigger value="quarter">Quarter</TabsTrigger>
                  <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <TabsContent value="30days" className="h-[300px]">
                  <RevenueChart />
                </TabsContent>
                <TabsContent value="quarter" className="h-[300px]">
                  <RevenueChart />
                </TabsContent>
                <TabsContent value="year" className="h-[300px]">
                  <RevenueChart />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="col-span-1">
            <CardHeader>
              <CardTitle className="text-xl font-normal">
                Top Performing Clinics
              </CardTitle>
            </CardHeader>
            <CardContent className="mt-3 px-3">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Clinic</TableHead>
                    <TableHead className="font-bold">Revenue</TableHead>
                    <TableHead className="font-bold">Success Rate</TableHead>
                    <TableHead className="font-bold">Usage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-normal text-[#1F2937]">
                      Metro Clinic
                    </TableCell>
                    <TableCell>$124,392</TableCell>
                    <TableCell>92%</TableCell>
                    <TableCell>42h/w</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal text-[#1F2937]">
                      City Health
                    </TableCell>
                    <TableCell>$98,847</TableCell>
                    <TableCell>88%</TableCell>
                    <TableCell>38h/w</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-normal text-[#1F2937]">
                      West Medical
                    </TableCell>
                    <TableCell>$87,234</TableCell>
                    <TableCell>85%</TableCell>
                    <TableCell>35h/w</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-normal">
                System Health & Activity
              </CardTitle>
              <p className="text-sm text-black-heading flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-black-heading block"></span>
                All Systems Operational
              </p>
            </div>
          </CardHeader>
          <CardContent className="mt-3 px-3">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-[#F9FAFB] rounded-md  p-4">
                <h3 className="text-xs font-normal text-[#4b5563] mb-2">
                  API Requests/min
                </h3>
                <p className="text-2xl  text-[#1F2937] font-normal">1,247</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-md  p-4">
                <h3 className="text-xs font-normal text-[#4b5563] mb-2">
                  Error Rate
                </h3>
                <p className="text-2xl  text-[#1F2937] font-normal">0.02%</p>
              </div>
              <div className="bg-[#F9FAFB] rounded-md  p-4">
                <h3 className="text-xs font-normal text-[#4b5563] mb-2">
                  Uptime
                </h3>
                <p className="text-xs  text-[#1F2937] font-normal">99.99%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
