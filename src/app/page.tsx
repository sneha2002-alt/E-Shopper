import Hero from "@/components/home/hero";
import Sidebar from "@/components/sidebar/sidebar";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Tabs defaultValue="mainHero">
        <div className="flex">
          <Sidebar />
          <Hero />
        </div>
      </Tabs>
    </main>
  );
}
