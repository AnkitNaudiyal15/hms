import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutMain from "./components/layoutMain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our team and mission.",
  keywords: ["Next.js", "SEO", "Web App"],
  authors: [{ name: "John Doe", url: "https://mysite.com" }],
  openGraph: {
    title: "MySite Open Graph",
    description: "Open Graph description",
    url: "https://mysite.com",
    siteName: "MySite",
    images: [
      {
        url: "https://mysite.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MySite on Twitter",
    description: "Next.js SEO Example",
    site: "@mysite",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LayoutMain>
          {children}
        </LayoutMain>
      </body>
    </html>
  );
}
