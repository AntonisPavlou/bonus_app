import { fetchTFA } from "@/app/lib/data";
import ProgramDetails from "@/app/ui/program-details";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
export const instant = false;
export const metadata: Metadata = {
  title: "Τουρισμός για Όλους",
  description:
    "Πληροφορίες, ποσά ενίσχυσης και κριτήρια για το πρόγραμμα Τουρισμός για Όλους.",
};

export default async function Page() {
  const TFAData = await fetchTFA();
  const program = Array.isArray(TFAData) ? TFAData[0] : TFAData;
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
