import Link from "next/link";
import Image from "next/image";
import { notoSerif } from "@/app/ui/fonts";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/Footer";
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-950 p-6 md:p-12 text-white">
        {/* Bento Grid Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {/* 1. YOUTH PASS (Hero Card: 2 στήλες x 2 σειρές) */}
          <Link
            href="/dashboard/youth-pass"
            className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-8 flex flex-col justify-between transition-all duration-300 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-500/10"
          >
            <Image
              src="/Athens-Music-Scene-A-Vibrant-Tapestry-768x432.avif"
              alt="Youth Pass Concert"
              fill
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-start justify-between">
              <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold">
                18 - 19 Ετών
              </span>
              <span className="text-2xl font-black text-purple-400 font-mono">
                150 €
              </span>
            </div>

            <div className="relative z-10">
              <h2
                className={`${notoSerif.className} text-3xl md:text-4xl font-black text-white group-hover:text-purple-300 transition`}
              >
                Youth Pass
              </h2>
              <p className="text-slate-300 text-sm mt-2 max-w-md">
                Ενίσχυση για συναυλίες, θέατρα, σινεμά, βιβλιοπωλεία και
                ακτοπλοϊκά ταξίδια.
              </p>
            </div>
          </Link>

          {/* 2. ΤΟΥΡΙΣΜΟΣ ΓΙΑ ΟΛΟΥΣ (Tall Card: 1 στήλη x 2 σειρές) */}
          <Link
            href="/dashboard/tourism-for-all"
            className="group relative md:col-span-1 md:row-span-2 rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-8 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/60 hover:shadow-2xl hover:shadow-sky-500/10"
          >
            <Image
              src="/GettyImages-510967662-5c4ddd8846e0fb00018dea73.avif"
              alt="Tourism For All"
              fill
              className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

            <div className="relative z-10 flex items-start justify-between">
              <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold">
                Διακοπές
              </span>
              <span className="text-xl font-black text-sky-400 font-mono">
                200€ - 300€
              </span>
            </div>

            <div className="relative z-10">
              <h2
                className={`${notoSerif.className} text-2xl font-black text-white group-hover:text-sky-300 transition`}
              >
                Τουρισμός για Όλους
              </h2>
              <p className="text-slate-300 text-xs mt-2 leading-relaxed">
                Κάλυψη δαπανών διαμονής σε καταλύματα σε ολόκληρη την ελληνική
                επικράτεια.
              </p>
            </div>
          </Link>

          {/* 3. ΚΟΙΝΩΝΙΚΟΣ ΤΟΥΡΙΣΜΟΣ (1 στήλη x 1 σειρά) */}
          <Link
            href="/dashboard/social-tourism"
            className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/60"
          >
            <Image
              src="/aerial-view-of-the-mountains-and-meteora-monasteries-in-greece-free-video.avif"
              alt="Social Tourism Meteora"
              fill
              className="object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                ΔΥΠΑ
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition">
                Κοινωνικός Τουρισμός
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                Έως 6 ή 12 δωρεάν διανυκτερεύσεις.
              </p>
            </div>
          </Link>

          {/* 4. CHIOS - KYTHIRA PASS (1 στήλη x 1 σειρά) */}
          <Link
            href="/dashboard/xios"
            className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/60"
          >
            <Image
              src="/kythira-chania-explorer-castle-1536x1023.avif"
              alt="Kythira Chios Pass"
              fill
              className="object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                Νησιωτικό Pass
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition">
                Χίος & Κύθηρα
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                Ειδική άυλη ψηφιακή κάρτα 150€ - 200€.
              </p>
            </div>
          </Link>

          {/* 5. EUROPEAN YOUTH CARD (1 στήλη x 1 σειρά) */}
          <Link
            href="/dashboard/eu-pass"
            className="group relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 p-6 flex flex-col justify-between transition-all duration-300 hover:border-blue-500/60"
          >
            <Image
              src="/OIP.avif"
              alt="EU Youth Card"
              fill
              className="object-cover opacity-35 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold">
                EYCA Greece
              </span>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
                Ευρωπαϊκή Κάρτα Νέων
              </h3>
              <p className="text-slate-400 text-xs mt-0.5">
                Εκπτώσεις σε μετακινήσεις, εισιτήρια & καταστήματα.
              </p>
            </div>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
