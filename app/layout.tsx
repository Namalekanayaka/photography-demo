import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";

const archivoBlack = Archivo_Black({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Amelia Allen Photography',
    default: 'Amelia Allen | Photography Portfolio',
  },
  description: "Professional portfolio of Amelia Allen, specializing in lifestyle, portrait, and documentary photography based in London. Capturing moments that captivate your heart.",
  keywords: ["photography", "london photographer", "lifestyle", "portrait", "documentary", "fine art"],
  openGraph: {
    title: "Amelia Allen | Photography Portfolio",
    description: "Capturing moments that captivate your heart.",
    url: "https://your-domain.com",
    siteName: "Amelia Allen Photography",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${archivoBlack.variable} ${inter.variable} antialiased bg-brandBeige text-brandBlack overflow-x-hidden`}
      >
        <SmoothScroll>
          <Cursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
