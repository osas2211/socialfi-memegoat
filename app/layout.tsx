import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AntProvider } from "@/components/shared/AntProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MemeGoat Earn | SocialFi",
  description: "Secure layer for memes on Bitcoin",
  keywords: [
    "MemeGoat",
    "Meme",
    "Goat",
    "MemeGoatSTX",
    "blockchain",
    "bitcoin",
    "MemeGoat STX",
    "MemeGoatSTX",
    "MemeGoat Socialfi",
    "MemeGoat Earn",
  ],
  publisher: "MemeGoat",
  openGraph: {
    title: "MemeGoat Earn | SocialFi",
    siteName: "MemeGoat",
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-custom-black text-custom-white`}>
        <AntProvider>{children} </AntProvider>
      </body>
    </html>
  )
}
