import { Check, LineChart, Wallet2, Settings2, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="container max-w-5xl mx-auto py-12 px-4">
      <div className="flex flex-col items-center text-center mb-12">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-[#0f172a] rounded-full flex items-center justify-center mb-6">
          <Check className="w-8 h-8 text-white" />
        </div>

        {/* Success Message */}
        <h1 className="text-[27px] font-normal mb-4 text-black-heading">
          Clinic Successfully Added!
        </h1>
        <div className="text-[#4B5563] text-sm">
          <p>Nice Smiles has been successfully registered in the system.</p>
          <p>Payment link has been sent via email.</p>
        </div>
      </div>

      {/* Status Cards */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {/* Billing Status Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Wallet2 className="w-5 h-5 mt-0.5 text-muted-foreground" />
              <div className="space-y-2">
                <h2 className="font-semibold text-lg">
                  Billing Status: Pending Payment
                </h2>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>Monthly Billing Activated</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Plan: Premium - $1285/month
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* System Settings Card */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <Settings2 className="w-5 h-5 mt-0.5 text-muted-foreground" />
              <div className="space-y-2">
                <h2 className="font-semibold text-lg">System Settings</h2>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span>1500 actions per month</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Default rules applied
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Link href="/dashboard" className="block">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <LineChart className="w-5 h-5 text-muted-foreground mb-2" />
                <h3 className="font-medium">View Clinic Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Access clinic analytics and data
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/billing" className="block">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <Wallet2 className="w-5 h-5 text-muted-foreground mb-2" />
                <h3 className="font-medium">Manage Billing</h3>
                <p className="text-sm text-muted-foreground">
                  View and update subscription
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/settings" className="block">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <Settings2 className="w-5 h-5 text-muted-foreground mb-2" />
                <h3 className="font-medium">Edit Settings</h3>
                <p className="text-sm text-muted-foreground">
                  Customize rules and settings
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/invite" className="block">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <UserPlus className="w-5 h-5 text-muted-foreground mb-2" />
                <h3 className="font-medium">Invite Admins</h3>
                <p className="text-sm text-muted-foreground">
                  Add users to the clinic
                </p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          asChild
          className="min-w-[200px] bg-[#0f172a] hover:bg-[#1e293b]"
        >
          <Link href="/clinics">View All Clinics</Link>
        </Button>
        <Button asChild variant="outline" className="min-w-[200px]">
          <Link href="/add-clinic">Add Another Clinic</Link>
        </Button>
      </div>
    </main>
  );
}
