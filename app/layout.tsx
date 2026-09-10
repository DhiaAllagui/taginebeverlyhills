import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileBottomBar from "./components/MobileBottomBar";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://taginebeverlyhills.com"),
  title: "Tagine Beverly Hills | Cinematic Fine Dining Lounge",
  description:
    "An intimate, candlelit fine dining lounge in the heart of Beverly Hills at 132 N Robertson Blvd. Slow-cooked modern Moroccan gastronomy, curated wines, and an unforgettable sensory atmosphere by Chef Ben Benameur and Ryan Gosling.",
  keywords:
    "Tagine Beverly Hills, Beverly Hills fine dining lounge, luxury restaurant, Chef Ben Benameur, Ryan Gosling, Beverly Hills dinner, intimate romantic dining, modern Moroccan gastronomy",
  openGraph: {
    title: "Tagine Beverly Hills | Cinematic Fine Dining Lounge",
    description:
      "An intimate candlelit lounge in Beverly Hills. Slow-cooked gastronomy, curated reserve wines, and warm hospitality by Chef Ben Benameur and Ryan Gosling.",
    url: "https://taginebeverlyhills.com",
    siteName: "Tagine Beverly Hills",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/img_1626-2048x1536.jpg",
        width: 2048,
        height: 1536,
        alt: "Tagine Beverly Hills candlelit dining lounge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tagine Beverly Hills | Cinematic Fine Dining Lounge",
    description:
      "An intimate candlelit lounge in Beverly Hills. Modern gastronomy and warm hospitality by Chef Ben Benameur.",
    images: ["/images/img_1626-2048x1536.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/logofaviconwhite.png" },
      { url: "/icon.png" },
    ],
    apple: "/images/logofaviconwhite.png",
    shortcut: "/images/logofaviconwhite.png",
  },
};

const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Tagine Beverly Hills",
  image: "https://taginebeverlyhills.com/images/img_1626-2048x1536.jpg",
  url: "https://taginebeverlyhills.com",
  telephone: "+1-310-360-7535",
  address: {
    "@type": "PostalAddress",
    streetAddress: "132 N Robertson Blvd",
    addressLocality: "Beverly Hills",
    addressRegion: "CA",
    postalCode: "90211",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.077,
    longitude: -118.381,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "12:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "12:00",
      closes: "21:00",
    },
  ],
  servesCuisine: ["Fine Dining", "Modern Moroccan", "Mediterranean"],
  priceRange: "$$$",
  acceptsReservations: "True",
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Cinzel:wght@400;600;700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#0A0A0A] text-[#F9F9F9]">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
