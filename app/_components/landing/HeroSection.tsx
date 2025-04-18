import {
  ArrowRight,
  Layers,
  LucideRocket,
  MousePointer,
  Search,
  Settings,
  Zap,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-slate-950">
      {/* Main Content */}
      <div className="z-10 max-w-[800px] text-center flex flex-col items-center justify-center gap-4">
        <div
          className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-800/80 bg-maintheme-500 dark:bg-maintheme-1000 text-white shadow-md hover:shadow-lg hover:brightness-110 mx-auto md:mx-0 w-fit hero-badge"
          data-v0-t="badge"
        >
          <span>
            <LucideRocket className="mr-2 size-4" />
          </span>
          All-in-One Toolbox for Creators & Developers
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
          Everyday Utilities <br />
          <span className="bg-gradient-to-r from-maintheme-400 to-maintheme-500 bg-clip-text text-transparent">
            for Smarter Workflows
          </span>
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-8">
          Access 20+ powerful and free tools to boost productivity, whether
          you're writing content, fixing grammar, converting text cases, or
          building stunning gradients and code snippets.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <div className="flex items-center gap-2 rounded-full px-3 py-2 border border-gray-800/80">
            <span className="text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Zap className="size-4 text-slate-700 dark:text-slate-200" />
              Instant Results
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full px-3 py-2 border border-gray-800/80">
            <span className="text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Layers className="size-4 text-slate-700 dark:text-slate-200" />
              Text & Dev Tools
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full px-3 py-2 border border-gray-800/80">
            <span className="text-sm text-slate-700 dark:text-slate-200 flex items-center gap-2">
              <Settings className="size-4 text-slate-700 dark:text-slate-200" />
              Lightweight
            </span>
          </div>
        </div>
        <div className="flex relative justify-center gap-4 items-center">
          <Link
            href="#"
            className="group relative inline-flex h-12 overflow-hidden rounded-full  p-[1px] focus:outline-none focus:ring-2 focus:ring-maintheme-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-maintheme-500 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Explore Tools
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
          <Link
            href="#"
            className="group relative inline-flex h-12 overflow-hidden rounded-full border border-gray-700/80 p-[1px] focus:outline-none focus:ring-2 focus:ring-maintheme-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              How It Works
            </span>
          </Link>
          <div className="absolute -bottom-10 left-1/2 animate-bounce">
            <MousePointer className="h-5 w-5 text-maintheme-700" />
          </div>
        </div>
      </div>
      <div className="mt-20  max-w-5xl w-full flex items-center justify-center mx-auto">
        <img src="/devtools.png" alt="Casenal Hero" className="w-full" />
      </div>
      <div className="max-w-3xl mt-20 w-full mx-auto">
        <form className="flex items-center flex-wrap justify-center border border-gray-700/80 rounded-lg">
          <div className="px-2 w-full relative ">
            <span className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 dark:text-slate-500 ">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search for tools..."
              className="bg-white pl-10 py-2 text-base w-full border-slate-200 dark:bg-slate-950"
            />
          </div>
          <div className="px-2 w-full relative  bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 ">
            <span className="text-xs text-slate-700 dark:text-slate-200 flex items-center gap-2 py-2">
              Popular:
              <Link
                href="#"
                className="text-maintheme-500 text-xs hover:underline"
              >
                Case Converter
              </Link>
              <Link
                href="#"
                className="text-maintheme-500 text-xs hover:underline"
              >
                HTML Encoder
              </Link>
              <Link
                href="#"
                className="text-maintheme-500 text-xs hover:underline"
              >
                Base64
              </Link>
              <Link
                href="#"
                className="text-maintheme-500 text-xs hover:underline"
              >
                JSON Formatter
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}

export default HeroSection;
