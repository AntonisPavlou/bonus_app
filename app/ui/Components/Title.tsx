import { Program } from "../../lib/definitions";
export default function Title(props: { program: Program }) {
  const program = props.program;
  return (
    <>
      <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold">
        {program.badge_text}
      </span>

      <h1 className="text-3xl md:text-4xl font-black mt-4 text-white">
        {program.title}
      </h1>
      <p className="text-slate-400 text-sm mt-1">{program.subtitle}</p>
    </>
  );
}
