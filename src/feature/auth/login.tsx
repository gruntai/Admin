"use client";

import type React from "react";

import { useState, useTransition } from "react";
import { Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });

    startTransition(async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          router.push("/overview");
          resolve("Success");
        }, 1500);
      }).then((res) => console.log(res));
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md mx-auto shadow-md">
        <CardContent className="pt-6 pb-10 ">
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Image
                src={"/assets/images/icons/rocket.svg"}
                width={30}
                height={30}
                alt="rocket"
              />
              <h1 className="text-2xl font-normal text-black-heading">
                Mission Control
              </h1>
            </div>

            <p className="text-[#4B5563] font-normal">Super Admin Access</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#374151] text-sm">
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#374151] text-sm">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full disabled:bg-primary/80"
              disabled={isPending}
            >
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
