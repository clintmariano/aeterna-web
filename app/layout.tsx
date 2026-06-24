import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aeterna.health"),
  title: "Aeterna — A clinic system designed around your workflow",
  description:
    "Aeterna replaces paper-based clinic operations with an electronic health record built around how your practice actually works — patients, queue, appointments, billing, and analytics in one place.",
  keywords: [
    "EHR",
    "clinic management",
    "electronic health record",
    "Philippines clinic software",
    "patient records",
    "clinic queue",
    "medical billing",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Aeterna — A clinic system designed around your workflow",
    description:
      "Not a generic EHR. A system designed for your clinic. Built around how your practice actually works.",
    type: "website",
    siteName: "Aeterna",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased text-slate-900 bg-white">
        {children}
      </body>
    </html>
  );
}
