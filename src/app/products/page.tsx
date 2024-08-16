import Hero from "@/components/home/hero";
import Sidebar from "@/components/sidebar/sidebar";
import { Tabs } from "@/components/ui/tabs";
import React from "react";

export default function Page() {
  return (
    <div>
      <Tabs defaultValue="mainHero">
        <div className="flex">
          <div className="md:w-1/6 w-1/2">
            <Sidebar />
          </div>
          <Hero />
        </div>
      </Tabs>
    </div>
  );
}
