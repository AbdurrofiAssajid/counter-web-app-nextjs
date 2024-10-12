import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "../components/ThemeSwitch";
import ThemeContextProvider from "../context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fancy Counter",
  description: "A web-based counter tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} antialiased bg-lime-50 dark:bg-slate-800`}>
        <ThemeContextProvider>
          {children}
          <Footer />
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              style: {
                color: "#166534",
                padding: "16px",
                fontSize: "20px",
                width: "400px",
              },
            }}
          />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
