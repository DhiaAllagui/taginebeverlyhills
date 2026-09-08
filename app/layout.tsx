import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#181918",
};

export const metadata: Metadata = {
  title: "Tagine Beverly Hills | Authentic Moroccan Cuisine",
  description:
    "Tagine is a secluded hideaway in the heart of Beverly Hills — an intimate Moroccan restaurant at 132 N Robertson Blvd offering handcrafted tagines, couscous, and an unforgettable dining experience by Chef Ben Benameur.",
  keywords:
    "Tagine Beverly Hills, Moroccan restaurant, Beverly Hills fine dining, Chef Ben Benameur, Ryan Gosling, tagine, couscous, halal",
  icons: {
    icon: [
      { url: "/images/logofavicon.png" },
      { url: "/icon.png" },
    ],
    apple: "/images/logofavicon.png",
    shortcut: "/images/logofavicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&family=Cinzel:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#262726] text-[#ECEAE4]">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
