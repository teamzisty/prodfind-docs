import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MainLayout } from "docsfly/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prodfind Docs",
  description: "A product discovery platform made for developers, investors, made by developers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
