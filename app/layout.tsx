import type { Metadata } from "next";
import { Inter, Press_Start_2P, Space_Grotesk, VT323 } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammed Fayiz CH | Full-Stack MERN Developer",
  description:
    "Portfolio of Muhammed Fayiz CH - Full-Stack MERN Developer building production-ready, real-time web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${pressStart2P.variable} ${vt323.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
