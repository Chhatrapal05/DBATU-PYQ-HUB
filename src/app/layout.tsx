import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBATU PYQ Hub",
  description: "Find and organize DBATU previous-year question papers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
