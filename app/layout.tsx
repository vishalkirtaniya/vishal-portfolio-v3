import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@/components/Analytics";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Vishal · Full Stack Developer",
  description: "Full-stack developer crafting clean, performant web experiences.",
  keywords: ["Next.js", "React", "TypeScript", "Full Stack Developer", "Portfolio"],
  openGraph: {
    title: "Vishal · Full Stack Developer",
    description: "Full-stack developer crafting clean, performant web experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="noise">
        <Navbar />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
