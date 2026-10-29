import { fetchYouthPass } from "@/app/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetails from "@/app/ui/program-details";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
export const instant = false;

export const metadata: Metadata = {
  title: "Youth Pass",
  description:
    "Οικονομική ενίσχυση 150€ για νέους 18 και 19 ετών σε πολιτισμό, τουρισμό και μεταφορές.",
};
export default async function Page() {
  const YPData = await fetchYouthPass();
  const program = Array.isArray(YPData) ? YPData[0] : YPData;
  if (!program) {
    notFound();
  }
  return (
    <>
      <Navbar />
      <ProgramDetails program={program} />
      <Footer />
    </>
  );
}
