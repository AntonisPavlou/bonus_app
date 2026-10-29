import { fetchSocial } from "@/app/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProgramDetails from "@/app/ui/program-details";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
export const instant = false;
export const metadata: Metadata = {
  title: "Κοινωνικός Τουρισμός (ΔΥΠΑ)",
  description:
    "Επιταγές κοινωνικού τουρισμού για οικονομικές διακοπές και ακτοπλοϊκά εισιτήρια.",
};
export default async function Page() {
  const SocialData = await fetchSocial();
  const program = Array.isArray(SocialData) ? SocialData[0] : SocialData;
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
