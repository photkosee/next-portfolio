import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster"

const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Phot's Portfolio",
  description: "A website showcasing personal projects of Phot Koseekrainiramon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="./logo.png" />
        <meta name="google-site-verification" content="inHe6DFRHkKFZOiScpDCFdl4QbQoEq6LAb8wloKmkH0" />
      </head>

      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
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
};
