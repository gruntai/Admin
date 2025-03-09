import React from "react";

import { cn } from "@/lib/utils";

import { Clock, Hospital, PanelsTopLeft, Plus, Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

function Sidebar({
  isOpened,
  handleOpenState,
}: {
  isOpened: boolean;
  handleOpenState: (arg: boolean) => void;
}) {
  return (
    <aside
      className={cn(
        "w-72 h-screen fixed left-0 top-0 -mt-1  pb-5  hidden z-50 lg:block bg-white slide-out-to-left-[300px] duration-500  border-[#E5E7EB] border-r",
        {
          "-translate-x-[290px]": isOpened,
          // "slide-out-to-left-[300px]": isOpened,
        }
      )}
    >
      <div className="flex flex-col h-full">
        <div className="h-[77px] border-b border-[#E5E7EB] w-full flex items-center pl-7 mb-8">
          <Image
            src="/assets/images/logos/grunt_logo.png"
            alt="grunt logo"
            width={120}
            height={30}
          />
        </div>
        <div className="flex-1 pl-7 pr-5">
          <NavigationList />
        </div>
        <Link
          href={"/account-settings"}
          className="flex items-center gap-2 cursor-pointer pl-7 pr-5"
        >
          <div className="w-11 h-11  bg-[#E8D7FE] rounded-full flex items-center justify-center text-white">
            SL
          </div>
          <span className="text-[#737278] text-sm font-semibold">
            Account Settings
          </span>
        </Link>
      </div>
    </aside>
  );
}

export function NavigationList() {
  const pathname = usePathname();

  return (
    <ul className="space-y-1">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={index}
            href={item.link}
            className={cn(
              `flex items-center gap-3 p-3 rounded-lg text-gray-700 hover:bg-[#F3F4F6]/80 transition-colors duration-200`,
              {
                "bg-[#F3F4F6] ": isActive,
              }
            )}
          >
            <div className="w-[18px] flex justify-center">
              {typeof item.icon == "string" ? (
                <Image
                  src={`/assets/images/${item.icon}`}
                  alt="icon"
                  width={item.width}
                  height={item.height}
                />
              ) : (
                <span className="text-[#1c110f]">{item.icon}</span>
              )}
            </div>
            <span className={"font-bold text-sm text-[#737278]"}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </ul>
  );
}

export default Sidebar;

const menuItems = [
  {
    icon: <PanelsTopLeft size={16} />,
    label: "Overview",
    link: "/overview",
    width: 14,
    height: 16,
  },
  {
    icon: <Hospital size={16} />,
    label: "View All Clinics",
    link: "/clinics",
    width: 16,
    height: 16,
  },
  {
    icon: <Plus size={16} />,
    label: "Add new Clinic",
    link: "/new-clinic",
    width: 16,
    height: 16,
  },

  {
    icon: <Wallet size={16} />,
    label: "Billing & Payments",
    link: "/billing",
    width: 16,
    height: 16,
  },
  // {
  //   icon: "Image.svg",
  //   label: "Patient Retention",
  //   link: "/patient-retention",
  //   width: 18,
  //   height: 16,
  // },
  // {
  //   icon: "$.svg",
  //   label: "New Patient Leads",
  //   link: "/leads",
  //   width: 11,
  //   height: 19,
  // },
  // {
  //   icon: <Clock className="w-4 h-4" />,
  //   label: "My Patient Waitlist",
  //   link: "/patient-waitlist",
  // },
  // {
  //   icon: "resource.svg",
  //   label: "Resource Optimization",
  //   link: "/resource-optimization",
  //   width: 18,
  //   height: 18,
  // },
  // {
  //   icon: "analysis.svg",
  //   label: "Performance Analysis",
  //   link: "/performance-analysis",
  //   width: 18,
  //   height: 18,
  // },
];
