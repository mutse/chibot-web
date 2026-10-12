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

// 生产域名（如有变化请同步更新 public/robots.txt 与 public/sitemap.xml）
const siteUrl = "https://chibot.mutse.top";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Chibot AI - Your Intelligent Chat Companion",
  description:
    "Chibot AI is a cross-platform AI chat app with multi-provider support (OpenAI, Google Gemini, Claude), streaming responses, text-to-image generation and web search. Free and open source.",
  keywords: [
    "Chibot",
    "Chibot AI",
    "AI chatbot",
    "AI chat app",
    "OpenAI",
    "Gemini",
    "Claude",
    "text to image",
    "Flutter",
  ],
  authors: [{ name: "Chibot AI" }],
  creator: "Chibot AI",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Chibot AI - Your Intelligent Chat Companion",
    description:
      "Chat with OpenAI, Google Gemini and Claude in one app. Streaming responses, text-to-image, web search. Free and open source.",
    url: siteUrl,
    siteName: "Chibot AI",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chibot AI - Your Intelligent Chat Companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chibot AI - Your Intelligent Chat Companion",
    description:
      "Chat with OpenAI, Google Gemini and Claude in one app. Streaming responses, text-to-image, web search. Free and open source.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
