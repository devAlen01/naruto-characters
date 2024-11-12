import type { Metadata } from "next";
import "./globals.scss";
import LayoutClient from "./layout.client";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naruto & Naruto Shippuden",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
