import { Program } from "../lib/definitions";
import { Suspense } from "react";
import ImgCmp from "./Components/ImgCmp";
import Title from "./Components/Title";
import Insider from "./Components/Insider";
import Outsider from "./Components/Outsider";
import BAF from "./Components/BAF";
export default function ProgramDetails(props: { program: Program }) {
  //props recieves an object that has only one parameter that is program  of type Program(typescript special)
  const program = props.program;

  return (
    <main className="min-h-screen bg-slate-950 p-6 md:p-12 text-white flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl">
        <BAF />
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <Suspense
            fallback={
              <div className="h-6 bg-slate-800 animate-pulse rounded" />
            }
          >
            <ImgCmp program={program} />
          </Suspense>

          <div className="p-8">
            <Suspense
              fallback={
                <div className="h-6 bg-slate-800 animate-pulse rounded" />
              }
            >
              <Title program={program} />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-6 bg-slate-800 animate-pulse rounded" />
              }
            >
              <Insider program={program} />
            </Suspense>

            <Suspense
              fallback={
                <div className="h-6 bg-slate-800 animate-pulse rounded" />
              }
            >
              <Outsider program={program} />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
