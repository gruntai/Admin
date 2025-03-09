"use client";
import React from "react";
import { Button } from "./ui/button";
import { Bell, Link, Menu, PlayCircle, Search, Trash2 } from "lucide-react";
import { Switch } from "./ui/switch";
import Image from "next/image";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();
  const [checked, setChecked] = React.useState(true);
  return (
    <nav className="bg-white fixed left-0 top-0 z-40 w-full lg:pl-72 flex items-center justify-between px-5 py-3 pt-5 border-b border-[#E5E7EB] ">
      <Image
        src="/assets/images/logos/grunt_logo.png"
        alt="grunt logo"
        width={120}
        height={30}
        className="pl-5 block lg:hidden  "
      />
      <div className="flex items-start md:items-center justify-end lg:justify-between gap-4 px-5 flex-1 w-full">
        <div className="relative w-full max-w-md hidden lg:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <Input
            type="text"
            placeholder="Search for page here"
            className="pl-10 border-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-500"
          />
        </div>{" "}
        <div className=" flex-wrap gap-5 items-center hidden sm:flex">
          <div className="flex items-center gap-2">
            <Image
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full"
              src="/assets/images/avatar.svg"
            />
            <p className="text-black-heading">Amnike L</p>
          </div>
          <Button
            // variant={"outline"}
            className="border rounded-[10px] flex items-center gap-2 bg-[#F3F4F6] hover:bg-[#eff0f2]"
            onClick={() => {
              router.push("/login");
            }}
          >
            <Bell className="w-5 h-5 text-black" color="black" />
            <span className="text-black-heading">End Session </span>
          </Button>
        </div>
        <Menu className="block sm:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
