import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"
import { AntProvider } from "@/components/shared/AntProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://socialfi.memegoat.io/"),
  title: "MemeGoat Socialfi",
  description:
    "Launch | Swap | Raise liquidity | Deploy a pool | Play games | Earn | Promote",
  keywords: [
    "MemeGoat",
    "MemeGoat App",
    "Meme",
    "Goat",
    "MemeGoatSTX",
    "blockchain",
    "bitcoin",
    "MemeGoat STX",
    "MemeGoatSTX",
    "MemeGoat Socialfi",
    "MemeGoat website",
    "MemeGoat application",
  ],
  publisher: "MemeGoat",
  openGraph: {
    title: "MemeGoat Socialfi",
    description:
      "Launch | Swap | Raise liquidity | Deploy a pool | Play games | Earn | Promote",
    siteName: "MemeGoat",
    url: "https://socialfi.memegoat.io/",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/osaretinfrank/image/upload/v1723235872/204adf06-dc10-42a0-a5ce-a52b4448103b_ym2sfn.jpg",
        alt: "MemeGoat",
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "https://res.cloudinary.com/osaretinfrank/image/upload/v1723235872/204adf06-dc10-42a0-a5ce-a52b4448103b_ym2sfn.jpg",
        alt: "MemeGoat",
      },
    ],
    card: "summary_large_image",
    site: "@GoatCoinSTX",
    title: "MemeGoat Socialfi",
    description:
      "Launch | Swap | Raise liquidity | Deploy a pool | Play games | Earn | Promote",
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
        <Toaster position="top-center" reverseOrder={false} />
        <AntProvider>{children} </AntProvider>
      </body>
    </html>
  )
}
