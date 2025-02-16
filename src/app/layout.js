import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mozi YouTube Player",
  description:
    "Mozi is a modern, minimal, and fast personal YouTube player via links. Enjoy a clean interface to play your favorite YouTube videos with ease.",
  keywords: [
    "Mozi",
    "YouTube Player",
    "personal YouTube player",
    "modern YouTube player",
    "minimal YouTube player",
    "fast YouTube player",
    "responsive YouTube player",
    "open source YouTube player",
    "video player",
    "moze github",
    "minimal design",
    "modern design",
    "Vercel deployment",
    "I am Jay Prakash",
    "moze video player",
    "youtube video player",
    "personal video player",
    "clean interface",
    "fast video player",
  ],
  openGraph: {
    title: "Mozi YouTube Player",
    description:
      "Mozi is a modern, minimal, and fast personal YouTube player via links. Enjoy a clean interface to play your favorite YouTube videos with ease.",
    url: "https://moze-seven.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://moze-seven.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mozi YouTube Player",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozi YouTube Player",
    description:
      "Mozi is a modern, minimal, and fast personal YouTube player via links. Enjoy a clean interface to play your favorite YouTube videos with ease.",
    images: ["https://moze-seven.vercel.app/twitter-image.png"],
  },
  alternates: {
    canonical: "https://moze-seven.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
