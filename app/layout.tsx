import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "./_components/headerCondition";
import CartContextProvider from "./context/cartContextProvider";
import { Toaster } from "@/components/ui/toaster"; // Import the Toaster component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreshMart - Buy Fresh Fruits, Vegetables, and Groceries Online",
  description: "Shop fresh fruits, vegetables, dairy, bakery, grains, and more at FreshMart Market. Quality groceries delivered to your doorstep with convenience and reliability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartContextProvider>
          <ConditionalHeader />
          {children}
          <Toaster /> {/* Add Toaster here to make toasts available globally */}
        </CartContextProvider>
        </body>
    </html>
  );
}
