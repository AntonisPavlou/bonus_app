export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950 py-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
        <p>
          © 2026 <span className="font-bold text-white">BonusApp</span>. Με
          επιφύλαξη παντός δικαιώματος.
        </p>
        <p className="text-xs text-slate-400">
          Πλατφόρμα ενημέρωσης για ελληνικά προγράμματα και vouchers.
        </p>
      </div>
    </footer>
  );
}
