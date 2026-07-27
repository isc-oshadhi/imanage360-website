import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "iManage360 | All-in-One ERP Solution",
  description: "iManage360 is a next-generation ERP system by iTeq Solution Center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-slate-800`}>
        {children}
      </body>
    </html>
  );
}
