import type { Metadata } from "next";
import "./globals.css";
// fonts
import { Figtree, Urbanist } from "next/font/google";
import { Banner } from "./components/landingPage/components/banner";

const figtree = Figtree({
  variable: "--font-figtree",
  weight: ["800", "700", "600", "500", "400"],
  display: "swap",
  subsets: ['latin']
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  weight: ["400", "700"],
  display: "swap",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Netzet",
  description: "netzet frontend task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${urbanist.variable} antialiased`}>
        <Banner />
        {children}
      </body>
    </html>
  );
}
