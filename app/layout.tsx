import type { Metadata } from "next";
import { Zilla_Slab, Lato } from "next/font/google";
import "./globals.css";

export const zillaSlab = Zilla_Slab({ subsets: ["latin"], weight: ["400", "700"] });
export const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Mental Health App",
  description: "First version of engineering project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> 
      <body className={`${zillaSlab.className} ${lato.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
