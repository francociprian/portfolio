import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const neueWorld = localFont({
  src: './fonts/PPNeueWorld-Regular.otf',
  variable: '--font-neue-world'
})

const neueMontreal = localFont({
  src: './fonts/PPNeueMontreal-Regular.ttf',
  variable: '--font-neue-montreal'
})
const manrope = localFont({
  src: "./fonts/Manrope[wght].woff2",
  variable: "--font-manrope",
  weight: "100 900",
})

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
  title: {
    default: 'Franco Ciprian - Frontend Developer',
    template: `%s - Franco Ciprian - Frontend Developer`
  },
  description: "Franco Ciprian - Frontend Developer",
  icons: {
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${neueWorld.variable}
          ${neueMontreal.variable}
          ${manrope.variable}
          antialiased`}
      >
        {children}
      </body>
    </html>
  );
}