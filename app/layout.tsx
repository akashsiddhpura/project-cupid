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

export const metadata: Metadata = {
  title: "I have a question for you... 💌",
  description: "Click to open your surprise! ✨",
  openGraph: {
    title: "I have a question for you... 💌",
    description: "Click to open your surprise! ✨",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "A special question",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overscrollBehaviorX: "none" }}
      >
        {children}
      </body>
    </html>
  );
}
