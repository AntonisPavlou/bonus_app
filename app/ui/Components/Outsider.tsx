import { Program } from "../../lib/definitions";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
export default function Outsider(props: { program: Program }) {
  const program = props.program;
  return (
    <>
      {program.official_link && (
        <a
          href={program.official_link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors"
        >
          Επίσημη Σελίδα Προγράμματος
          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
        </a>
      )}
    </>
  );
}
