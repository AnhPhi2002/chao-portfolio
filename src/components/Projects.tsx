"use client";

import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

// Import các component từ shadcn/ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { ProjectItem } from "../type/content";
import { LanguageContext } from "@/app/context/LanguageContext";
import { content } from "@/app/content";

const Projects: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const { projects } = content[lang];

  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const openModal = (proj: ProjectItem) => {
    setSelectedProject(proj);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Có thể thêm một khoảng trễ nhỏ để animation của dialog hoàn tất trước khi reset data
    setTimeout(() => {
        setSelectedProject(null);
    }, 200);
  };

  return (
    <section
      className="bg-bg_light_primary dark:bg-black dark:text-white transition-colors duration-300"
      id="projects"
    >
      {/* Dialog từ shadcn/ui */}
      <Dialog open={modalIsOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <DialogTitle className="text-lg font-semibold font-Poppins text-gray-900 dark:text-white">
                    {selectedProject.title}
                  </DialogTitle>
                </div>
              </DialogHeader>
              <div className="py-4">
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  {selectedProject.description
                    .trim()
                    .split("\n")
                    .map((line, idx) => (
                      <li key={idx}>{line.replace(/^-/, "").trim()}</li>
                    ))}
                </ul>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={closeModal}>
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {projects.subtitle}
          </h4>
          <br />
        </div>

        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <Image
            src={projects.image}
            alt="Project showcase"
            width={600}
            height={400}
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem] object-contain"
          />

          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {projects.project_content.map((item: ProjectItem, i: number) => (
              <SwiperSlide
                key={i}
                className="bg-[#f9f9f9] dark:bg-slate-800 rounded-3xl p-6 shadow-md dark:shadow-none border border-gray-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                <div className="flex flex-col gap-3">
                  <h5 className="text-xl font-semibold font-Poppins text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug line-clamp-3">
                    {item.description.trim().split("\n")[0]}
                  </p>
                  <div className="flex gap-3 flex-wrap mt-2">
                    {item.demo && (
                      <a
                        href={item.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 text-sm rounded-full bg-black text-white hover:bg-gray-800 transition-colors duration-200"
                      >
                        🔗 View Demo
                      </a>
                    )}
                    {item.githublink && (
                      <a
                        href={item.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-1.5 text-sm rounded-full border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white transition-colors duration-200"
                      >
                        💻 GitHub
                      </a>
                    )}
                    <button
                      onClick={() => openModal(item)}
                      className="px-4 py-1.5 text-sm text-black dark:text-white underline-offset-2 hover:underline"
                    >
                      View More
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;