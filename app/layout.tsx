import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammed Fayiz CH | MERN Stack Developer",
  description: "Portfolio of Muhammed Fayiz CH, a full-stack MERN developer from Kerala.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
