import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SELECT | Snowflake optimization & cost management platform",
  description:
    "Gain visibility into Snowflake usage, optimize performance and automate savings with the click of a button.",
  openGraph: {
    title: "SELECT | Snowflake optimization & cost management platform",
    description:
      "Gain visibility into Snowflake usage, optimize performance and automate savings with the click of a button.",
    url: "https://select.dev/",
    type: "website",
    images: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-[#0B0C15] font-sans text-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
