'use client'
import { cn, poppins } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageCircle,
  Music,
  Settings,
  Video,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation'

const SideBar: () => React.JSX.Element = () => {
  const pathname = usePathname();
  
  const routes = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "dashboard",
      color: "text-yellow-500",
    },
    {
      href: "/image",
      icon: ImageIcon,
      label: "Image Generation",
      color: "text-green-500",
    },
    {
      href: "/video",
      icon: Video,
      label: "Video Generation",
      color: "text-sky-600",
    },
    {
      href: "/music",
      icon: Music,
      label: "Music generation",
      color: "text-orange-400",
    },
    {
      href: "/conversation",
      icon: MessageCircle,
      label: "Conversation",
      color: "text-violet-500",
    },
    {
      href: "/code",
      icon: Code,
      label: "Code Generation",
      color: "text-blue-500",
    },
    {
      href: "/settings",
      icon: Settings,
      label: "Settings",
      color: "text-gray-200",
    },
  ];

  return (
    <div
      className={cn(
        "bg-gray-900 py-4 space-y-8 flex flex-col",
        poppins.className
      )}
    >
      <div className="px-3 py-2">
        <Link href="/">
          <h1 className="text-2xl text-white font-bold">Jasper</h1>
        </Link>
      </div>

      <div className="flex flex-col space-y-3 mt-6">
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "flex space-x-2 w-full p-3 group text-sm font-medium text-white hover:bg-white/10 transition",
              pathname === route.href
                ? "text-white bg-white/10"
                : "text-zinc-300 bg-none"
            )}
          >
            <route.icon className={cn("w-5 h-5 mr-2", route.color)} />
            <p>{route.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
