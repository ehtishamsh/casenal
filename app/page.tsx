import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-sky-50 to-slate-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-950"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-300 blur-3xl dark:bg-blue-900"></div>
        <div className="absolute top-1/3 right-1/4 h-64 w-64 rounded-full bg-sky-300 blur-3xl dark:bg-sky-900"></div>
        <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-cyan-300 blur-3xl dark:bg-cyan-900"></div>
      </div>
      <div className="z-10">
        <h1 className=" font-bold dark:text-white">Casenal</h1>
      </div>
    </main>
  );
}
