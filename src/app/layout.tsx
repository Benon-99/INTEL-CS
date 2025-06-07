import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intel - Your Business Solutions",
  description: "Professional business solutions and services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white dark:bg-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
