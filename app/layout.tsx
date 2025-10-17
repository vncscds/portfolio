import type { Metadata } from "next";
import { Poppins } from 'next/font/google';

import "@/styles/globals.css";

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '500']
})

export const metadata: Metadata = {
  title: "vinicius.codes | Building experiencies",
  description: "vinicius.codes' personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className={`${poppins.className} antialiased scroll-smooth min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
