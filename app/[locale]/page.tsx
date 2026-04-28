import { setRequestLocale } from "next-intl/server";
import About from "@/components/main/About";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Experience from "@/components/main/Experience";
import Projects from "@/components/main/Projects";
import Testimonials from "@/components/main/Testimonials";
import Contact from "@/components/main/Contact";

export default function Home({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);

  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
