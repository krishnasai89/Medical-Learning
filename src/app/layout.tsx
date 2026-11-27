import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fifth Veda | Precision Longevity & Vedic Science",
  description:
    "Bridging ancient life science with modern clinical intelligence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-teal-500 selection:text-slate-950">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
