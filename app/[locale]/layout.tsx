import type React from "react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import "../globals.css";

export const metadata: Metadata = {
  title: "WeOne Services - Libérer le potentiel, bâtir l'avenir",
  description:
    "Incubateur, accélérateur, coworking et formations pour accompagner votre croissance entrepreneuriale en Algérie.",
  generator: "v0.app",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <NextIntlClientProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
