import { Dancing_Script, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata = {
  title: "Trinath & Archana | Wedding Invitation",
  description: "You are cordially invited to celebrate the wedding of Trinath & Archana. Join us for our special day filled with love, joy, and beautiful memories.",
  keywords: "wedding, invitation, RSVP, Trinath, Archana, celebration",
  openGraph: {
    title: "Trinath & Archana | Wedding Invitation",
    description: "You are cordially invited to celebrate our wedding",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dancingScript.variable} ${playfairDisplay.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
