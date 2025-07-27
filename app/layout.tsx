import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanjiFont = localFont({
  src: "../src/fonts/NotoSerifJP-VariableFont_wght.ttf",
  variable: "--font-kanji",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kanjimaster.com"),
  title: {
    default: "KanjiMaster - Learn Japanese Kanji Systematically",
    template: "%s | KanjiMaster",
  },
  description:
    "Master Japanese kanji with our comprehensive database of 2,136 Joyo kanji. Learn by grade level, JLPT preparation, or browse the complete list. Free educational resource for Japanese language learners.",
  keywords: [
    "Japanese kanji",
    "learn kanji",
    "Joyo kanji",
    "JLPT preparation",
    "Japanese language learning",
    "kanji database",
    "Japanese education",
    "kanji meanings",
    "kanji readings",
    "Japanese characters",
  ],
  authors: [{ name: "Madjid Meddah" }],
  creator: "Madjid Meddah",
  publisher: "Madjid Meddah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kanjimaster.com",
    siteName: "KanjiMaster",
    title: "KanjiMaster - Learn Japanese Kanji Systematically",
    description:
      "Master Japanese kanji with our comprehensive database of 2,136 Joyo kanji. Learn by grade level, JLPT preparation, or browse the complete list.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KanjiMaster - Japanese Kanji Learning Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KanjiMaster - Learn Japanese Kanji Systematically",
    description: "Master Japanese kanji with our comprehensive database of 2,136 Joyo kanji.",
    images: ["/og-image.png"],
    creator: "@kanjimaster",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanjiFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
