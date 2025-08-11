import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "My Auto Man - Ahhtoman Automotive Consultants",
  description: "We Put the Ahh Back into Buying Your Car. Indoor showroom, no pressure sales, financing for all credit types. Serving Phoenix, Avondale, Goodyear.",
  keywords: "car dealer, auto consultant, Phoenix cars, Avondale auto, used cars, new cars, car financing, bad credit auto loans",
  authors: [{ name: "Ahhtoman Automotive Consultants" }],
  openGraph: {
    title: "My Auto Man - Your Trusted Automotive Consultant",
    description: "No-pressure car buying experience with financing for everyone",
    url: "https://myautoman.com",
    siteName: "My Auto Man",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}