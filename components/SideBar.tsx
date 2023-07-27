import { cn, poppins } from "@/lib/utils";
import {
  ImageIcon,
  LayoutDashboard,
  MessageCircle,
  Music,
  Video,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  const routes = [
    {
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "dashboard",
      color: "text-gray-200",
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
      color: "text-sky-200",
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
  ];

  return (
    <div className={cn("py-4 space-y-8 flex flex-col", poppins.className)}>
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
            className="flex space-x-2 w-full p-3 group text-sm font-medium text-white hover:bg-white/10 transition"
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
