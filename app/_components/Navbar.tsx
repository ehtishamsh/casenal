import React from "react";
import { ModeToggle } from "./ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { LucideSearch } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full  z-50 bg-maintheme-100 dark:bg-slate-950 border-b border-maintheme-400 shadow-md transition-all duration-300 ease-in-out">
      <div className="max-w-[1440px] mx-auto px-8 flex py-6 items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/">
            <img src="/logo.png" alt="Casenal Logo" className="max-w-[130px]" />
          </a>
          <div className="flex items-center gap-6 text-sm font-medium  text-gray-700 dark:text-gray-200">
            <span>
              <a
                href="/popular"
                className="hover:text-maintheme-500 transition-all duration-300"
              >
                Popular Tools
              </a>
            </span>
            <span>
              <a
                href="/new"
                className="hover:text-maintheme-500 transition-all duration-300"
              >
                New Tools
              </a>
            </span>
            <span>
              <a
                href="/categories"
                className="hover:text-maintheme-500 transition-all duration-300"
              >
                Categories
              </a>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium  text-gray-700 dark:text-gray-200">
          <span className="">
            <Button
              variant="outline"
              className="flex items-center justify-center cursor-pointer"
            >
              <LucideSearch className="h-4 w-4" />
            </Button>
          </span>

          <span>
            <ModeToggle />
          </span>
          <span className="">
            <a
              href="/explore"
              className="bg-maintheme-600  px-4 py-2 rounded-full hover:bg-maintheme-700 transition-all duration-300"
            >
              Explore Tools
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
