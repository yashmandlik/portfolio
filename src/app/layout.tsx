import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/app/footer";

// Metadata
export const metadata: Metadata = {
  title: "Portfolio - Yash Mandlik",
  description: "I'm an engineer at Nuro, where I focus on sensor software development and hardware-software integration for ADAS and robotics platforms.",
  keywords:[
    "yash",
    "mandlik",
    "yash mandlik",
    "sensors",
    "nuro",
    "ADAS",
    "robotics",
    "california",
  ],
};

// Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" 
          className={`${inter.variable} ${geist.variable} ${geistMono.variable}`} 
          suppressHydrationWarning>
      <body className="bg-neutral-100 dark:bg-neutral-900
                        transition duration-500 ease-in-out
                        min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="flex min-h-screen flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
        <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
};