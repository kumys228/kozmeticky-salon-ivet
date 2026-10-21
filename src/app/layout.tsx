import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Header, Footer } from "@/components/Layout";
import { Motion } from "@/components/Motion";
import "./globals.css";
const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});
const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: {
    default: "Kozmetický salón IVET | Starostlivosť o pleť v Trnave",
    template: "%s | Kozmetický salón IVET",
  },
  description:
    "Kozmetické ošetrenia, hydratácia, líčenie a masáž tváre s osobným prístupom. Doprajte si chvíľu pre seba v salóne IVET, Bulharská 37, Trnava.",
  openGraph: {
    title: "Kozmetický salón IVET",
    description: "Starostlivosť o pleť s osobným prístupom v Trnave.",
    locale: "sk_SK",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1024,
        height: 1024,
        alt: "Kozmetický salón IVET",
      },
    ],
  },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Preskočiť na obsah
        </a>
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}

