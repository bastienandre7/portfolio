import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Preloader from "@/components/preloader";
import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bastienandredev.fr"),

  title: {
    default: "Bastien Andre | Développeur Web Freelance Next.js à Uzès",
    template: "%s | Bastien Andre",
  },

  description:
    "Développeur web freelance à Uzès (Gard) — sites vitrines, refontes et apps web sur-mesure en React, Next.js et TypeScript. Devis gratuit.",
  keywords: [
    "développeur web freelance",
    "développeur Next.js",
    "développeur React",
    "développeur TypeScript",
    "création site internet Uzès",
    "création site internet Gard",
    "développeur freelance Occitanie",
    "refonte site web",
  ],

  authors: [{ name: "Bastien Andre", url: "https://bastienandredev.fr" }],
  creator: "Bastien Andre",
  publisher: "Bastien Andre",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://bastienandredev.fr",
    siteName: "Bastien Andre — Développeur Web Freelance",
    title: "Bastien Andre | Développeur Web Freelance Next.js",
    description:
      "Création de sites vitrines, refontes et applications web sur-mesure avec React, Next.js et TypeScript. Basé à Uzès, intervient partout en France à distance.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bastien Andre - Développeur Web Freelance Next.js",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bastien Andre | Développeur Web Freelance Next.js",
    description:
      "Création de sites vitrines, refontes et applications web sur-mesure avec React, Next.js et TypeScript.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.className} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Preloader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
