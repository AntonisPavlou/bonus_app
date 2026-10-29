import { fetchEU } from "@/app/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetails from "@/app/ui/program-details";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
export const instant = false;

export const metadata: Metadata = {
  title: "Ευρωπαϊκή Κάρτα Νέων",
  description:
    "Εκπτώσεις και προνόμια σε Ελλάδα και Ευρώπη για νέους έως 30 ετών.",
};
export default async function Page() {
  const EUData = await fetchEU();
  const program = Array.isArray(EUData) ? EUData[0] : EUData;
  if (!program) {
    notFound();
  }
  return (
    <>
        <Navbar/>
    <ProgramDetails program={program} />
    <Footer/>
    </>

  )

}
