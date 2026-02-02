import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
