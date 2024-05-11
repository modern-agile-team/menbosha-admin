import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menbosha Admin",
  description: "멘보샤 관리자 페이지",
  icons: {
    icon: "https://menbosha-s3.s3.ap-northeast-2.amazonaws.com/public/mainpage/titleLogo.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
