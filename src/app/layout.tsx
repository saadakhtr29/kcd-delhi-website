import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Changed font
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KCD Delhi 2026",
  description: "Kubernetes Community Days Delhi 2026",
  icons: {
    icon: "/favicon1.png",
    shortcut: "/favicon1.png",
    apple: "/favicon1.png",
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
        className={`${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
