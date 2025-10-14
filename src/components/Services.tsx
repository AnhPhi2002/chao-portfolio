"use client";

import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../app/context/LanguageContext";
import { content } from "@/app/content";

const Services = () => {
  const { lang } = useContext(LanguageContext);
  const { services } = content[lang];

  return (
    <section id="services" className="transition-colors duration-300 dark:bg-[#0f172a] dark:text-white">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {services.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {services.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-between flex-wrap group">
          {services.service_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 dark:border-slate-600 rounded-xl text-center 
              bg-bg_light_primary dark:bg-slate-800 p-6 flex-1 group-hover:blur-sm hover:!blur-none"
            >
              <Image src={content.logo} alt="..." width={40} height={40} className="mx-auto " />
              <h6 className="my-3">{content.title}</h6>
              <p className="leading-7">{content.para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
