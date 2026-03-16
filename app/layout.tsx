import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Scripture or Not?",
  description: "Can you tell a real Bible verse from a convincing fake?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
