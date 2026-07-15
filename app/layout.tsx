import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "The Bold Move Foundation | Empowering Youth, Women & Persons with Disabilities",
  description: "The Bold Move Foundation empowers youth, women, and persons with disabilities through digital skills training, entrepreneurship, financial literacy, and mentorship programs in Kenya.",
  keywords: "Bold Move Foundation, Kenya NGO, youth empowerment Kenya, digital skills training, entrepreneurship programs, financial literacy, mentorship Kenya",
  authors: [{ name: "The Bold Move Foundation" }],
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://www.theboldmovefoundation.org/",
  },
  openGraph: {
    title: "The Bold Move Foundation",
    description: "Empowering youth, women, and persons with disabilities through education, digital skills, and entrepreneurship in Kenya.",
    type: "website",
    url: "https://www.theboldmovefoundation.org/",
    images: [
      {
        url: "https://www.theboldmovefoundation.org/images/bmf-logo.webp",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts: Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
