import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AR Smart Trading - Learn Stock Market in Tamil & English",
  description: "AR Smart Trading - Learn stock market in Tamil & English with AI-powered lessons.",
  keywords: "Stock Market, Trading, Tamil, AI Courses, AR Smart Trading",
  authors: [{ name: "AR Smart Trading Team" }],
  openGraph: {
    title: "AR Smart Trading - Learn Stock Market in Tamil & English",
    description: "Master the stock market with AI-powered lessons in Tamil and English. Start your trading journey today!",
    type: "website",
    url: "https://arsmarttrading.com",
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-05557FTFY6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-05557FTFY6');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
