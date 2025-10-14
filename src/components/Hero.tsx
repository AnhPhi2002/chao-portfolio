"use client";

import React, { useEffect, useContext } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import ToggleThemeButton from "../app/context/ToggleThemeButton";
import { LanguageContext } from "@/app/context/LanguageContext";
import { content } from "@/app/content";

// define the Language type used by handleLanguage and context
type Language = "en" | "vi" | "ja";

const Hero: React.FC = () => {
  const { lang, setLang } = useContext(LanguageContext);
  const { hero } = content[lang];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleLanguage = (language: Language) => {
    if (lang !== language) {
      setLang(language);
    }
  };

  return (
    <section id="home" className="overflow-hidden relative">
      <div className="absolute top-4 right-4 flex space-x-2 bg-white/80 dark:bg-[#0f172a] p-1 rounded-lg shadow">
        <button
          onClick={() => handleLanguage("en")}
          className={`px-3 py-1 rounded transition-shadow ${lang === "en"
              ? "bg-black text-white font-bold shadow-md"
              : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
        >
          🇬🇧 EN
        </button>

        <button
          onClick={() => handleLanguage("vi")}
          className={`px-3 py-1 rounded transition-shadow ${lang === "vi"
              ? "bg-black text-white font-bold shadow-md"
              : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
        >
          🇻🇳 VI
        </button>

        <button
          onClick={() => handleLanguage("ja")}
          className={`px-3 py-1 rounded transition-shadow ${lang === "ja"
              ? "bg-black text-white font-bold shadow-md"
              : "bg-transparent text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
        >
          🇯🇵 JA
        </button>

        <ToggleThemeButton />
      </div>

      <div className="min-h-screen flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          data-aos-delay={1200}
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bottom-0 -z-10
                     bg-primaryLinear dark:bg-primaryLinear-dark"
        >
          <h1 className="rotate-90 absolute top-[30%] right-[5%] text-[#EAF2FA] dark:text-white select-none pointer-events-none">
            {hero.firstName}{" "}
            <span className="text-dark_primary dark:text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        <div className="pb-16 px-6 pt-5" data-aos="fade-down">
          <h2>{hero.title}</h2>
          <br />
          <div className="flex justify-end">
            <a href={hero.cvLink} target="_blank" rel="noopener noreferrer">
              <button className="btn hover-effect">{hero.btnText}</button>
            </a>
          </div>

          <div className="flex flex-col gap-10 mt-10">
            {hero.hero_content.map((item: { count: string; text: string }, i: number) => (
              <div
                key={i}
                data-aos="fade-down"
                data-aos-delay={i * 300}
                className={`flex items-center w-80 gap-5 ${i === 1 ? "flex-row-reverse text-right" : ""
                  }`}
              >
                <h3>{item.count}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center" data-aos="slide-up">
          <Image
            src={hero.image}
            alt="Hero"
            width={400}
            height={300}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
