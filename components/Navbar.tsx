import React from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="flex p-4">
      <Button variant="ghost" size="icon" className="md:hidden">
        <Menu />
      </Button>
      <div className="flex w-full justify-end self-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
