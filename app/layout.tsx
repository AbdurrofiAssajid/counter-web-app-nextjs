import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fancy Counter",
  description: "Developed by accomplished developer | Rofi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} antialiased bg-lime-50`}>
        {children}
        <Footer/>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
    className: '',
    style: {
      color: '#166534',
      padding: '16px',
       fontSize: '20px', 
      width: '400px',
    },
  }}
        />
      </body>
    </html>
  );
}
