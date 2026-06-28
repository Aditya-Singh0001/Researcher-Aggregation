import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layouts/navbar";

export const metadata: Metadata = {
  title: "Academic Directory",
  description: "Global Researcher Directory",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-50 min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}