import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";


const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: {
    default: "Homefy Interio | Best Interior Designers in Hyderabad",
    template: "%s | Homefy Interio",
  },

  description:
    "Homefy Interio is one of the best interior designers in Hyderabad offering modular kitchens, wardrobes, turnkey interiors, custom furniture, and complete home interior solutions for apartments, villas, and offices.",

  keywords: [
    "interior designers in Hyderabad",
    "best interior designers in Hyderabad",
    "home interior designers Hyderabad",
    "interior design company in Hyderabad",

    "modular kitchen designers Hyderabad",
    "wardrobe designers Hyderabad",
    "turnkey interior designers Hyderabad",
    "custom furniture Hyderabad",
    "living room interior design Hyderabad",
    "bedroom interior designers Hyderabad",
    "false ceiling designers Hyderabad",

    "2bhk interior design Hyderabad",
    "3bhk interior design Hyderabad",
    "villa interior designers Hyderabad",
    "apartment interior designers Hyderabad",
    "flat interior design Hyderabad",

    "office interior designers Hyderabad",
    "commercial interior design Hyderabad",
    "shop interior designers Hyderabad",

    "interior designers near me",
    "affordable interior designers Hyderabad",
    "luxury interior designers Hyderabad",
    "budget interior designers Hyderabad",

    "Homefy Interio",
    "Homefy Interio Hyderabad",
    "Homefy interior design services",

    "complete home interiors Hyderabad",
    "modern interior design Hyderabad",
    "contemporary interior designers Hyderabad",
    "interior design cost in Hyderabad",
  ],

  metadataBase: new URL("https://homefyinterio.com"),

  openGraph: {
    title: "Homefy Interio - Interior Designers in Hyderabad",
    description:
      "Looking for the best interior designers in Hyderabad? Homefy Interio delivers premium modular kitchens, wardrobes, and turnkey home interiors.",
    url: "https://homefyinterio.com",
    siteName: "Homefy Interio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Homefy Interio Interior Designers Hyderabad",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },


  twitter: {
    card: "summary_large_image",
    title: "Homefy Interio | Interior Designers in Hyderabad",
    description:
      "Premium interior design services in Hyderabad - modular kitchens, wardrobes & complete home interiors.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://homefyinterio.com",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${bricolage.className} bg-[#efede8] text-[#1c1c1c]`}
      >
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InteriorDesignService",
              name: "Homefy Interio",
              url: "https://homefyinterio.com",
              logo: "https://homefyinterio.com/logo.png",
              image: "https://homefyinterio.com/og-image.jpg",
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Hyderabad",
                addressRegion: "Telangana",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "City",
                name: "Hyderabad",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-99999-99999",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi", "Telugu"],
              },
              sameAs: [
                "https://www.instagram.com/homefyinterio",
                "https://www.facebook.com/homefyinterio",
              ],
            }),
          }}
        />



        {children}

        
      </body>
    </html>
  );
}
