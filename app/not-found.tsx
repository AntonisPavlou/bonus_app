import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-950 p-6 text-white">
      <div className="flex flex-col items-center max-w-md text-center bg-slate-900 border border-slate-800 p-8 rounded-3xl shadow-xl">
        <FaceFrownIcon className="w-14 text-slate-400 mb-3" />
        <h2 className="text-2xl font-bold text-white">404 - Δεν Βρέθηκε</h2>
        <p className="mt-2 text-sm text-slate-400">
          Δεν καταφέραμε να βρούμε το πρόγραμμα ή τη σελίδα που αναζητάτε.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
        >
          Επιστροφή στην Αρχική
        </Link>
      </div>
    </main>
  );
}
