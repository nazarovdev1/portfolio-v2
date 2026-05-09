import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("../../components/main/StarBackground"), { ssr: false });
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

const locales = ["en", "ru", "uz"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

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

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="relative min-h-screen bg-dark">
        <StarsCanvas />
        <ScrollProgress />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}

function ScrollProgress() {
  return (
    <div className="scroll-progress" id="scroll-progress" />
  );
}