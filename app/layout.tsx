import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madelyn Scales Harris | Murfreesboro City Council",
  description:
    "Official campaign website for Madeline Scales Harris for Murfreesboro City Council. Learn about priorities, volunteer, and donate today.",
  keywords: [
    "Madeline Scales Harris",
    "Murfreesboro City Council",
    "City Council Election",
    "Murfreesboro Politics",
    "Tennessee Local Election",
  ],
  openGraph: {
    images: '/images/close.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-serif",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
