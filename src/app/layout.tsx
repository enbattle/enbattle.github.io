import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Welcome to Steven Li's website!",
  keywords: ["personal", "website", "technology", "software", "engineering"],
  authors: [{ name: "Steven LI" }],
  openGraph: {
    title: "Steven Li's website",
    description: "Welcome to Steven Li's website!",
    type: "website",
    url: "https://enbattle.github.io/",
    // images: [
    //   {
    //     url: "https://www.mybusinesswebsite.com/images/og-image.jpg",
    //     width: 800,
    //     height: 600,
    //     alt: "My Business",
    //   },
    // ],
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "My Business Website",
  //   description:
  //     "Welcome to My Business, your go-to solution for all your technology needs.",
  //   creator: "@MyBusinessTwitterHandle",
  //   images: [
  //     {
  //       url: "https://www.mybusinesswebsite.com/images/twitter-card-image.jpg",
  //       width: 800,
  //       height: 600,
  //       alt: "My Business",
  //     },
  //   ],
  // },
  icons: {
    icon: "./favicon.ico",
  },
};

export const viewport = "width=device-width, initial-scale=1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
