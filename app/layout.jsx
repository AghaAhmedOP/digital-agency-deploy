import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import MaxWidthWrapper from "@/components/MaxWidthwrapper";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agency - Web Portfolio",
  description: "Digital Agency Landing Page",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Navbar />

          <div className="flex-grow flex-1">{children}</div>
          <div className="bg-section">
            <MaxWidthWrapper>
              <Footer />
            </MaxWidthWrapper>
          </div>
        </main>
      </body>
    </html>
  );
}
