import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Navigation from "./components/navigation";
import CustomCursor from "./components/custom-cursor";
import ParticleBackground from "./components/particle-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Steven Li | Portfolio",
  description: "Personal portfolio showcasing my work, skills, and experience",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-black text-white relative antialiased`}
      >
        <CustomCursor />
        <div className="fixed inset-0 z-0">
          <ParticleBackground />
        </div>
        <Navigation />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
