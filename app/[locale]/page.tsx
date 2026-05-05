import { setRequestLocale } from "next-intl/server";
import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Testimonials from "@/components/main/Testimonials";
import Contact from "@/components/main/Contact";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "uz" }];
}

export default function Home({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <div className="flex flex-col">
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Testimonials />
      <Contact />
    </div>
  );
}
