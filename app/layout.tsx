import type { Metadata } from "next";
import "./globals.css";
import { chillaxRegular } from "@/util/fonts";

export const metadata: Metadata = {
  title: "Money Minds",
  description: "Money Minds",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chillaxRegular.className} antialiased bg-black flex flex-col items-center bg-[url("/Gradient.png")] bg-contain bg-no-repeat`}
      >
        {children}
      </body>
    </html>
  );
}
