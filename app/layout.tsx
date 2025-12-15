import type { Metadata } from "next";
import "./globals.css";
import { crimson } from "@/lib/fonts/font";

export const metadata: Metadata = {
  title: "Ayaan Catering & Events",
  description: "Premier catering and event planning services for all occasions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={crimson.className}>
          {children}
      </body>
    </html>
  );
}