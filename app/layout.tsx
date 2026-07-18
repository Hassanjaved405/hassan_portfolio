import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hassanjaved.dev"),
  title: "Hassan Javed — Full Stack Developer",
  description:
    "Full Stack Developer with 5+ years building enterprise applications. Specializing in React, Angular, .NET Core, Azure, and microservices architecture.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Angular",
    ".NET Core",
    "Azure",
    "TypeScript",
    "Enterprise Applications",
    "Web Development",
    "Hassan Javed",
    "Software Engineer Pakistan",
  ],
  authors: [{ name: "Hassan Javed", url: "https://www.linkedin.com/in/hassan-javed-50541a111/" }],
  creator: "Hassan Javed",
  openGraph: {
    title: "Hassan Javed — Full Stack Developer",
    description:
      "Building enterprise-grade web applications with React, .NET, and Azure. 5+ years of experience delivering scalable solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hassan Javed — Full Stack Developer",
    description: "Building enterprise-grade web applications with React, .NET, and Azure.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
