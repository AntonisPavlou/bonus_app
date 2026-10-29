import { Program } from "../../lib/definitions";
export default function Insider(props: { program: Program }) {
  const program = props.program;
  return (
    <>
      <div className="my-6 p-4 bg-slate-950 rounded-2xl border border-slate-800 flex justify-between items-center">
        <span className="text-slate-400 text-sm">Ποσό / Παροχή:</span>
        <span className="text-2xl font-mono font-bold text-emerald-400">
          {program.amount}
        </span>
      </div>

      <p className="text-slate-300 leading-relaxed text-base">
        {program.description}
      </p>
    </>
  );
}
