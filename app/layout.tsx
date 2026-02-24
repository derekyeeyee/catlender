// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catlendar",
  description: "a calendar app for right now, cats will come later",
  icons: {
    icon: "/icon.png"
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
