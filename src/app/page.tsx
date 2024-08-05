import Hero from "@/components/home/hero";
import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <Hero />
      </div>
    </main>
  );
}
