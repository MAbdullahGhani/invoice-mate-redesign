import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { pjs } from "@/utils/fonts";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "InvoiceMate",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pjs.className}>
        <Navbar />
        {children}
        <CTA />
        <Footer />
      </body>
    </html>
  );
}