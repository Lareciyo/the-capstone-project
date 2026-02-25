import type { Metadata } from "next";
// 👇 ADD THIS LINE HERE
import MainLayout from "@/components/layout/MainLayout"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "Capstone App",
  description: "Banyan Labs Capstone Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        {/* Now MainLayout will be defined! */}
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}