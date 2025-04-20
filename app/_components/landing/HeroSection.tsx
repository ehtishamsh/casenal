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
import CreativeDashboard from "../CreativeDashboard";

function HeroSection() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24 bg-white dark:bg-maintheme-100">
      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#23232370_1px,transparent_1px),linear-gradient(to_bottom,#23232370_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Content Wrapper */}
      <div className="z-10 max-w-[800px] text-center flex flex-col items-center justify-center gap-4">
        <div className="inline-flex items-center rounded-full border px-4 py-1 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-gray-300 dark:border-gray-800/80 bg-maintheme-100 dark:bg-maintheme-1000 text-gray-900 dark:text-white shadow-md hover:shadow-lg hover:brightness-110 mx-auto md:mx-0 w-fit">
          <LucideRocket className="mr-2 size-4" />
          All-in-One Toolbox for Creators & Developers
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
          Everyday Utilities <br />
          <span className="bg-gradient-to-r from-maintheme-500 to-maintheme-700 bg-clip-text text-transparent">
            for Smarter Workflows
          </span>
        </h1>

        <p className="text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-300 mb-8">
          Access 20+ powerful and free tools to boost productivity, whether
          you're writing content, fixing grammar, converting text cases, or
          building stunning gradients and code snippets.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {[
            { icon: Zap, text: "Instant Results" },
            { icon: Layers, text: "Text & Dev Tools" },
            { icon: Settings, text: "Lightweight" },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 rounded-full px-3 py-2 border border-gray-300 dark:border-gray-800/80"
            >
              <span className="text-sm text-gray-800 dark:text-slate-200 flex items-center gap-2">
                <Icon className="size-4 text-gray-800 dark:text-slate-200" />
                {text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex relative justify-center gap-4 items-center">
          <Link
            href="#"
            className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-maintheme-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
          >
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-maintheme-500 px-8 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Explore Tools
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="#"
            className="group relative inline-flex h-12 overflow-hidden rounded-full border border-gray-300 dark:border-gray-700/80 p-[1px] focus:outline-none focus:ring-2 focus:ring-maintheme-400 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black"
          >
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-white dark:bg-transparent px-8 py-1 text-sm font-medium text-gray-900 dark:text-white backdrop-blur-3xl">
              How It Works
            </span>
          </Link>

          <div className="absolute -bottom-10 left-1/2 animate-bounce">
            <MousePointer className="h-5 w-5 text-maintheme-700 dark:text-maintheme-500" />
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <CreativeDashboard />

      {/* Search Form */}
      <div className="max-w-3xl mt-20 relative w-full mx-auto">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60px] rounded-full bg-blue-500/20 z-[1] blur-3xl"></div>

        <form className="flex items-center relative z-10 flex-wrap justify-center border border-gray-300 dark:border-gray-700/80 rounded-lg bg-white dark:bg-slate-950">
          <div className="px-2 w-full relative">
            <span className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-slate-500">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search for tools..."
              className="bg-white dark:bg-slate-950 text-gray-800 dark:text-white placeholder:text-gray-400 pl-10 py-2 text-base w-full border-slate-200 dark:border-slate-800"
            />
          </div>
          <div className="px-2 w-full relative bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
            <span className="text-xs text-gray-700 dark:text-slate-200 flex items-center gap-2 py-2">
              Popular:
              {[
                "Case Converter",
                "HTML Encoder",
                "Base64",
                "JSON Formatter",
              ].map((tool) => (
                <Link
                  key={tool}
                  href="#"
                  className="text-maintheme-500 text-xs hover:underline"
                >
                  {tool}
                </Link>
              ))}
            </span>
          </div>
        </form>
      </div>
    </main>
  );
}

export default HeroSection;
