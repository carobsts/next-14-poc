import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "./components/layout";
import "./globals.css";
import { METADATA_DESCRIPTION_FILADD_CHALLENGE, METADATA_FILADD_CHALLENGE } from "@/lib/contansts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: METADATA_FILADD_CHALLENGE,
  description: METADATA_DESCRIPTION_FILADD_CHALLENGE,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='h-full' lang="en">
      <body className={`${inter.className} h-full`}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
