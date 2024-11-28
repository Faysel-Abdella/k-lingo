import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "NexaCode",
  description: "Created by Nexacode - 트로피",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NextUIProvider>
          {/* HEADER  */}
          {children}
          {/* FOOTER  */}

          </NextUIProvider>
      </body>
    </html>
  );
}
