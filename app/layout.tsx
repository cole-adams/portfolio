import "./globals.css";
import type { Metadata } from "next";
import { Akshar } from "next/font/google";
import SocialsBar from "./common/components/SocialsBar";
import ClientAnimatePresence from "./common/components/ClientAnimatePresence";
import Body from "./common/components/Body";

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
      <Body className={`${akshar.className} bg-background h-full`}>
        <SocialsBar />
        <ClientAnimatePresence>{children}</ClientAnimatePresence>
      </Body>
    </html>
  );
}
