import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import { Plausible } from "@/components/plausible";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-unbounded",
});

export const metadata: Metadata = {
  title: "Aytaj Abbasova — Public Policy Researcher & Economic Analyst",
  description:
    "Master's student at University of Tsukuba. Formerly at EY and a national innovation center in Azerbaijan. Researching AI, spatial economics, and innovation policy.",
  openGraph: {
    title: "Aytaj Abbasova — Public Policy Researcher & Economic Analyst",
    description:
      "Master's student at University of Tsukuba. Formerly at EY and a national innovation center in Azerbaijan. Researching AI, spatial economics, and innovation policy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${unbounded.variable}`}>
      <body>
        <Plausible />
        {children}
      </body>
    </html>
  );
}
