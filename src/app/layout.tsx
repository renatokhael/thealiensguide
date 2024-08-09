import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Header from "./../components/Header/Header";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "The Alienguide",
  description: "Alien Catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
