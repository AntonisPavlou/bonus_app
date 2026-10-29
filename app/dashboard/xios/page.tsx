import { fetchXios } from "@/app/lib/data";
import { Metadata } from 'next';
import { notFound } from "next/navigation";
import ProgramDetails from "@/app/ui/program-details";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
export const instant = false;
export const metadata: Metadata = {
  title: 'Χίος & Κύθηρα Pass',
  description: 'Ειδικά προγράμματα τουριστικής ενίσχυσης (vouchers) για διακοπές σε Χίο και Κύθηρα.',
};
export default async function Page() {
  const XiosData = await fetchXios();
  const program = Array.isArray(XiosData) ? XiosData[0] : XiosData;
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