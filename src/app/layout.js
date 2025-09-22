// app/layout.js
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Set to false to prevent auto CSS insertion

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Standard Solutions",
  description: "Tutoring and software development company",
  keywords: ['math tutor', 'programming tutor',
    'coding', 'passpapers', 'math', 'calculus', 'software agency', 'agency',
    'high school tutor', 'varsity tutor', 'web design',
    'logo design', 'marketing', 'social media', 'seo service', 'seo agency', 'website', 'web app', 'landing page', 'content writing',
  'email marketing', 'web hosting'],
  icons: {
    icon: "/logo.webp",
    shortcut: "/logo.webp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
