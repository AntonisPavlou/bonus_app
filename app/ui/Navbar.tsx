import Link from "next/link";
import { HomeIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:bg-blue-600/30 transition-colors">
            <SparklesIcon className="w-5 h-5" />
          </div>
          <span className="font-black text-lg tracking-tight text-white">
            Bonus<span className="text-blue-500">App</span>
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-slate-900"
          >
            <HomeIcon className="w-4 h-4" />
            Αρχική
          </Link>
        </nav>
      </div>
    </header>
  );
}