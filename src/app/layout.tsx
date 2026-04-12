import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pandora.Protocol — Case Study",
  description: "A transmedia case study in narrative systems, interaction design, and collaborative process.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ background: "#b8b4ae" }}>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        style={{ background: "#b8b4ae" }}
      >
        {children}
      </body>
    </html>
  );
}
