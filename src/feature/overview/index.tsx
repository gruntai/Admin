import { Building2, Clock, CreditCard, ListChecks, Percent, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import RevenueChart from "./revenue"

export default function Overview() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1 space-y-4 p-8 pt-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Active Clinics</CardTitle>
              <Building2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">New clinics this month: +3</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue Recovered</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$347,392</div>
              <p className="text-xs text-muted-foreground">Avg. per clinic: $7,479</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Usage Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,458 hrs</div>
              <p className="text-xs text-muted-foreground">Avg. 5.2 hours/day per clinic</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Retention Rate</CardTitle>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88%</div>
              <p className="text-xs text-muted-foreground text-red-500">Change from last month: -5%</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Actions This Month</CardTitle>
              <ListChecks className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">Last Month: 5391</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Billing Collection Rate</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">Overdue: 8 clinics ($24,392)</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
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
              <CardTitle>Top Performing Clinics</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Clinic</TableHead>
                    <TableHead>Revenue</TableHead>
                    <TableHead>Success Rate</TableHead>
                    <TableHead>Usage</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Metro Clinic</TableCell>
                    <TableCell>$124,392</TableCell>
                    <TableCell>92%</TableCell>
                    <TableCell>42h/w</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">City Health</TableCell>
                    <TableCell>$98,847</TableCell>
                    <TableCell>88%</TableCell>
                    <TableCell>38h/w</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">West Medical</TableCell>
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
              <CardTitle>System Health & Activity</CardTitle>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                All Systems Operational
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">API Requests/min</h3>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Error Rate</h3>
                <p className="text-2xl font-bold">0.02%</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Uptime</h3>
                <p className="text-2xl font-bold">99.99%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

