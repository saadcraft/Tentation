import type React from "react"
import { Inter } from "next/font/google"
import SiteHeader from "@/components/site-header"
import { ThemeProvider } from "@/components/theme/theme-provider"
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from 'next-intl/server';
import { routing } from '../../i18n/routing';
import "./globals.css"
import { redirect } from 'next/navigation';


const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string };
}) {

  if (!routing.locales.includes(locale as any)) {
    redirect(`/${locale}`);
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider messages={messages}>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
  generator: 'v0.dev'
};
