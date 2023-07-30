import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-72 hidden md:flex md:inset-0 md:fixed md:flex-col z-[90] bg-gray-900">
        <SideBar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        <Dashboard />
      </main>
    </main>
  );
}
