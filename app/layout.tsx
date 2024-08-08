import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"
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
        url: "https://res.cloudinary.com/kawojue/image/upload/v1716165990/memegoat-logo.jpg",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-custom-black text-custom-white`}>
        <Toaster
          position="top-center"
          reverseOrder={false} />
        <AntProvider>{children} </AntProvider>
      </body>
    </html>
  )
}
