"use client";
import {
  ArrowRightCircle,
  Code,
  ImageIcon,
  MessageCircle,
  Music,
  Video,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";

const Dashboard = () => {
  const router = useRouter();
  const tools = [
    {
      href: "/image",
      icon: ImageIcon,
      label: "Image Generation",
      color: "text-green-500",
      bgColor: "bg-green-500/5",
    },
    {
      href: "/video",
      icon: Video,
      label: "Video Generation",
      color: "text-sky-600",
      bgColor: "bg-sky-600/10",
    },
    {
      href: "/music",
      icon: Music,
      label: "Music generation",
      color: "text-orange-400",
      bgColor: "bg-orange-400/10",
    },
    {
      href: "/conversation",
      icon: MessageCircle,
      label: "Conversation",
      color: "text-violet-500",
      bgColor: "bg-violet-500/5",
    },
    {
      href: "/code",
      icon: Code,
      label: "Code Generation",
      color: "text-blue-500",
      bgColor: "bg-blue-500/5",
    },
  ];

  return (
    <div className="space-y-2">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          Introducing Jasper AI, your smart partner
        </h2>
        <p className="text-center text-sm font-normal text-muted-foreground">
          lorem ipsum dolor this is a dummy text
        </p>
      </div>

      <div className="flex flex-col w-full space-y-4 p-4 md:p-8 lg:p-10">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.label}
            className="p-4 border-black/5 flex justify-between items-center hover:shadow-md transition cursor-pointer"
          >
            <div className="flex w-full items-center justify-between">
              <div className={cn("flex items-center space-x-4")}>
                <div className={cn("w-fit rounded-lg p-2", tool.bgColor)}>
                  <tool.icon className={cn("w-6 h-6", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>

              <ArrowRightCircle className="w-5 h-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
