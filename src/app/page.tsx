import Image from "next/image";
import Navbar from "./layouts/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
       <Navbar />
       <Hero />
       <Skills />
       <Services />
       <Projects />
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    footer 
      </footer>
    </div>
  );
}
