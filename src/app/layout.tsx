import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const barlow = Barlow({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "CEE-MAX Manufacturing Ltd",
  description:
    "Leading producer of high-quality screening paints and industrial coatings. B2B focused. Jos, Nigeria.",
  keywords:
    "screening paints, industrial coatings, manufacturing, Jos Nigeria, B2B",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bebas.variable} ${barlow.variable} ${barlowCondensed.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
