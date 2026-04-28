import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const locales = ["en", "ru", "uz"];

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const metadataMap: Record<string, { title: string; description: string }> = {
  en: {
    title: "Akbar Mamanazarov | Fullstack JavaScript Developer",
    description: "Fullstack JavaScript/TypeScript Developer Portfolio — React, Node.js, Express.js",
  },
  ru: {
    title: "Акбар Маманазаров | Фулстек JavaScript Разработчик",
    description: "Портфолио фулстек JavaScript/TypeScript разработчика — React, Node.js, Express.js",
  },
  uz: {
    title: "Akbar Mamanazarov | Fullstack JavaScript Dasturchi",
    description: "Fullstack JavaScript/TypeScript dasturchi portfoliyosi — React, Node.js, Express.js",
  },
};

export async function generateMetadata({ params }: { params: { locale: string } }) {
  return metadataMap[params.locale] || metadataMap.en;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html lang={locale} className={inter.variable}>
      <body className="font-sans bg-dark overflow-x-hidden max-w-[1920px] mx-auto">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StarsCanvas />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

function ScrollProgress() {
  return (
    <div className="scroll-progress" id="scroll-progress" />
  );
}
