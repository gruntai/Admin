import { CarouselInfo } from "@/example/example.features/auth/carouselInfo";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-svh flex bg-gray-light">
      <div className="flex flex-1 flex-col gap-20 items-center justify-center w-full">
        <div className="w-full max-w-2xl 2xl:max-w-4xl">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
