import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./ui/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Bonus App",
    default: "Bonus App - Ελληνικά Προγράμματα & Vouchers",
  },
  description:
    "Πλατφόρμα ενημέρωσης για κρατικά επιδόματα, τουρισμό και κάρτες νέων.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={`${inter.className} antaliased`}>{children}</body>
    </html>
  );
}
