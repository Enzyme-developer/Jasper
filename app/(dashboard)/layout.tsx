import SideBar from "@/components/SideBar";
import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn("h-full relative", montserrat.className)}>
      <div className="w-72 hidden md:flex md:inset-0 md:fixed md:flex-col z-[90] bg-gray-900">
        <SideBar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
