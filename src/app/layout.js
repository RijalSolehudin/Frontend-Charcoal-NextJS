import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "COCOFIRE | Premium Coconut Shell Charcoal Briquettes Exporter Indonesia",
  description: "Worldwide exporter of premium 100% natural coconut shell charcoal briquettes for Shisha, Hookah, and Barbecue. Low ash, long burning, smokeless and odorless.",
  keywords: "charcoal briquettes, coconut charcoal, shisha charcoal, hookah charcoal, BBQ charcoal exporter, Indonesian charcoal manufacturer, Cocofire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <LanguageProvider>
          <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div style={{ paddingTop: "80px", flex: 1, display: "flex", flexDirection: "column" }}>
              {children}
            </div>
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
