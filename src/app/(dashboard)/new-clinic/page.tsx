"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CreditCard } from "lucide-react";
import { useRouter } from "next/navigation";

// Form validation schema
const formSchema = z.object({
  clinicName: z.string().min(1, { message: "Clinic name is required" }),
  adminContact: z.string().min(1, { message: "Admin contact is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  website: z.string().optional(),
  billingPlan: z.string().min(1, { message: "Billing plan is required" }),
  paymentMethod: z.string().min(1, { message: "Payment method is required" }),
  enableAutoPay: z.boolean().default(false),
  teamSize: z.string().min(1, { message: "Team size is required" }),
  totalActions: z.string().min(1, { message: "Total actions is required" }),
  accessWeb: z.boolean().default(false),
  accessApp: z.boolean().default(false),
  accessDesktop: z.boolean().default(false),
  confirmInformation: z.boolean().refine((val) => val === true, {
    message: "You must confirm the information",
  }),
});

type FormValues = z.infer<typeof formSchema>;

function NewClinicPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with default values
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clinicName: "",
      adminContact: "",
      address: "",
      phoneNumber: "",
      email: "",
      website: "",
      billingPlan: "free-trial",
      paymentMethod: "credit-card",
      enableAutoPay: false,
      teamSize: "2-seats",
      totalActions: "1500",
      accessWeb: false,
      accessApp: false,
      accessDesktop: false,
      confirmInformation: false,
    },
  });
  const router = useRouter();
  // Form submission handler
  function onSubmit() {
    router.push("/success");
    // values: FormValues
    // setIsSubmitting(true);
    // console.log(values);
    // // Simulate API call
    // setTimeout(() => {
    //   setIsSubmitting(false);
    //   // Handle success - redirect or show success message
    // }, 1500);
  }

  // Cancel handler
  function handleCancel() {
    // Navigate back or clear form
    console.log("Form cancelled");
  }

  return (
    <div className="xl:px-10 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <h1 className="text-2xl font-normal text-primary">Add New Clinic</h1>
        <Badge
          variant="outline"
          className="bg-[#E5E7EB] text-black-heading text-sm"
        >
          Draft
        </Badge>
      </div>

      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-8">
          {/* Clinic Information Section */}
          <Card>
            <CardContent className="pt-2 px-3">
              <h2 className="text-[18px] font-normal mb-4 text-black-heading">
                Clinic Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="clinicName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Clinic Name*
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Enter clinic name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="adminContact"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Admin Contact*
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="(000) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Address*
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Street address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Phone Number*
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="(000) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Email*
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="clinic@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Website
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="https://" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* Billing & Subscription Section */}
          <Card>
            <CardContent className="pt-2 px-3">
              <h2 className="text-[18px] font-normal text-black-heading mb-4">
                Billing & Subscription
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="billingPlan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Billing Plan*
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a billing plan" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="free-trial">
                            Free Trial (30 days)
                          </SelectItem>
                          <SelectItem value="premium">Premium 1230$</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="paymentMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Payment Method*
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a payment method" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="credit-card">
                            Credit Card
                          </SelectItem>
                          <SelectItem value="direct-deposit">
                            Direct Deposit
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-6 bg-[#F3F4F6] px-4 py-[14px] rounded-md flex items-center justify-between">
                <div className="flex items-center gap-2 text-black-heading">
                  <CreditCard className="h-5 w-5 " />
                  <span className="">Enable Auto-Pay</span>
                </div>
                <FormField
                  control={form.control}
                  name="enableAutoPay"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Switch
                          checked={true}
                          //   checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>

          {/* System Configuration Section */}
          <Card>
            <CardContent className="pt-2 px-3">
              <h2 className="text-[18px] font-normal mb-4">
                System Configuration
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="teamSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Team Size
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select team size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1-seat">1 - 1 Seat</SelectItem>
                          <SelectItem value="2-seats">2 Seats</SelectItem>
                          <SelectItem value="3-seats">3 Seats</SelectItem>
                          <SelectItem value="5-seats">5 Seats</SelectItem>
                          <SelectItem value="7-seats">7 Seats</SelectItem>
                          <SelectItem value="9-seats">9 Seats</SelectItem>
                          <SelectItem value="12-seats">12 Seats</SelectItem>
                          <SelectItem value="15-seats">15 Seats</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="totalActions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black-heading text-sm font-normal">
                        Total Actions Per Month
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="mt-6">
                <FormLabel className="text-black-heading text-sm font-normal">
                  Access
                </FormLabel>
                <div className="flex gap-6 mt-2">
                  <FormField
                    control={form.control}
                    name="accessWeb"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-black-heading text-sm font-normal !mt-0">
                          Web
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="accessApp"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-black-heading text-sm font-normal !mt-0">
                          App
                        </FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="accessDesktop"
                    render={({ field }) => (
                      <FormItem className="flex items-center gap-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel className="text-black-heading text-sm font-normal !mt-0">
                          Desktop
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Confirmation and Submit */}
          <Card>
            <CardContent className="pt-2 px-3">
              <div className="space-y-6">
                <FormField
                  control={form.control}
                  name="confirmInformation"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="text-black-heading text-sm font-normal !mt-0">
                        I confirm that all the information provided is correct
                        and I understand that this will create a new clinic in
                        the system.
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button
                    // type="submit"
                    className="bg-[#0f172a] hover:bg-[#1e293b] min-w-36"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating..." : "Create Clinic"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}

export default NewClinicPage;
