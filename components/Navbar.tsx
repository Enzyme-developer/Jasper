import React from "react";
import { UserButton } from "@clerk/nextjs";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  return (
    <div className="flex p-4">
      <MobileSideBar />
      <div className="flex w-full justify-end self-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
