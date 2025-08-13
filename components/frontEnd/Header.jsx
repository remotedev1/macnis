"use client";

import { useState } from "react";
import { Menu, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex justify-between items-center px-6 lg:px-20 py-4 bg-black/50 backdrop-blur-md z-50">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>

      <div className="flex items-center space-x-4">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded hover:bg-white/10">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="top" className="w-full h-full ">
            <nav className="space-y-4">
              <a href="#" className="block hover:text-yellow-400">
                Home
              </a>
              <a href="#" className="block hover:text-yellow-400">
                About
              </a>
              <a href="#" className="block hover:text-yellow-400">
                Services
              </a>
              <a href="#" className="block hover:text-yellow-400">
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>
        <User className="w-6 h-6" />
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 transition">
          Get Construction Estimate
        </button>
      </div>
    </header>
  );
}
