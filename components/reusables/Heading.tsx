import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import React from "react";

interface headingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}
const Heading = ({
  title,
  description,
  icon: Icon,
  iconColor,
  bgColor,
}: headingProps) => {
  return (
    <div className="flex px-4 lg:px-8 mb-8 items-center space-x-3">
      <div className={cn("w-fit rounded-lg p-2", bgColor)}>
        <Icon className={cn("w-6 h-6", iconColor)} />
      </div>
      <div>
        <h2 className="font-bold text-3xl">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
