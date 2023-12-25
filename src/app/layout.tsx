import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { getServerSession } from "next-auth"
import authOptions from "@/lib/auth"
import Providers from "./providers"

const inter = Roboto({ weight: "100" })

export const metadata: Metadata = {
  title: "ZapDivizer",
  description: "Generated by create next app"
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="pt-BR">
      <Providers session={session}>
        <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  )
}
