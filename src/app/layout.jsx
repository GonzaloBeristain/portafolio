import { Inter } from "next/font/google";
import "./globals.css";

//Componentes
import { Navbar } from "@/app/components/Navbar.jsx";
import { Footer } from "@/app/components/Footer.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desarrollador Gonzalo Beristain",
  description: "Portafolio Desarrollador Gonzalo Beristain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} background-container `}>
        <Navbar />
        <main className=" mx-auto animated-background">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};