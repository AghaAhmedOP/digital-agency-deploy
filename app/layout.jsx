import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MaxWidthWrapper from "@/components/MaxWidthwrapper";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative flex flex-col min-h-screen">
            <div className="fixed left-0 top-0 w-full flex z-40 items-center bg-transparent transition">
              <MaxWidthWrapper>
                <Navbar />
              </MaxWidthWrapper>
            </div>
            <div className="flex-grow flex-1 mt-28">{children}</div>
            <div className="bg-secondary">
              <MaxWidthWrapper>
                <Footer />
              </MaxWidthWrapper>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
