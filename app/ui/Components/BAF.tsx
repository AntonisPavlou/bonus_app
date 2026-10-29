import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export default function BAF() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-6 transition-colors"
    >
      <ArrowLeftIcon className="w-4 h-4" />
      Πίσω στην Αρχική
    </Link>
  );
}
