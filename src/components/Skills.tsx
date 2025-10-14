"use client";

import { useContext, useState, ComponentType } from "react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { LanguageContext } from "../app/context/LanguageContext";
import { content } from "@/app/content";
import { Button } from "./ui/button";

// Types
export interface SkillItem {
  name: string;
  para: string;
  logo: string | StaticImageData;
}

export interface SkillsData {
  title: string;
  subtitle: string;
  skills_content: SkillItem[];
  icon: ComponentType;
}

const Skills = () => {
  const { lang } = useContext(LanguageContext);
  const { skills } = content[lang];
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <section
      className="min-h-fit bg-section text-primary transition-colors duration-300 dark:bg-black"
      id="skills"
    >
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {skills.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {skills.subtitle}
        </h4>

        <br />

        <div className="flex flex-wrap gap-4 justify-center">
          {skills.skills_content.map((skill: SkillItem, i: number) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div
                  data-aos="fade-up"
                  data-aos-delay={i * 400}
                  onClick={() => setSelectedSkill(skill)}
                  className="
                    w-full max-w-sm flex items-center gap-5 p-5
                    bg-card border-2 border-card-border rounded-md
                    cursor-pointer hover:bg-hover-overlay
                    transition-colors duration-200
                  "
                >
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="w-10 group-hover:scale-125 duration-200"
                  />
                  <div>
                    <h6 className="font-Poppins text-lg">{skill.name}</h6>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.para}
                    </p>
                  </div>
                </div>
              </DialogTrigger>

              {/* Modal content */}
              <DialogContent className="sm:max-w-[400px] bg-card dark:bg-[#0f172a] text-primary">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    {selectedSkill?.logo && (
                      <Image
                        src={selectedSkill.logo}
                        alt={selectedSkill.name}
                        width={40}
                        height={40}
                        className="w-10"
                      />
                    )}
                    {selectedSkill?.name}
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-400 mt-2">
                    Chi tiết kỹ năng của bạn
                  </DialogDescription>
                </DialogHeader>

                <ul className="list-disc px-4 font-Poppins text-sm leading-6 mt-2">
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>

                <div className="flex justify-end mt-4">
                  <Button variant="secondary">Đóng</Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
