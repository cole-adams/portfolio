import "./globals.css";
import type { Metadata } from "next";
import { Akshar } from "next/font/google";
import SocialsBar from "./common/components/SocialsBar";

const akshar = Akshar({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cole Adams",
  description: "Cole Adams portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${akshar.className} bg-background h-full`}>
        <SocialsBar />
        {children}
      </body>
    </html>
  );
}
