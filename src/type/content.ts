import type { StaticImageData } from "next/image";
import { ComponentType } from "react";

export interface NavItem {
  link: string;
  icon: ComponentType;
}

// Hero section
export interface HeroContentItem {
  count: string;
  text: string;
}

export interface Hero {
  title: string;
  cvLink: string
  firstName: string;
  LastName: string;
  btnText: string;
  image: string | StaticImageData;
  hero_content: HeroContentItem[];
}

// Skills section
export interface SkillItem {
  name: string;
  para: string;
  logo: string | StaticImageData;
}

export interface Skills {
  title: string;
  subtitle: string;
  skills_content: SkillItem[];
  icon: ComponentType;
}

// Services section
export interface ServiceItem {
  logo: string | StaticImageData;
  title: string;
  para: string;
}

export interface Services {
  title: string;
  subtitle: string;
  service_content: ServiceItem[];
}

// Projects section
export interface ProjectItem {
  title: string;
  image: string | StaticImageData;
  description: string;
  demo?: string;
  githublink?: string;
}

export interface Projects {
  title: string;
  subtitle: string;
  project_content: ProjectItem[];
  image: string | StaticImageData;

}

// Testimonials section
export interface TestimonialItem {
  review: string;
  img: string | StaticImageData;
  name: string;
}

export interface Testimonials {
  title: string;
  subtitle: string;
  testimonials_content: TestimonialItem[];
}

// Hire Me section
export interface HireMe {
  image: string
  title: string;
  subtitle: string;
  para: string;
  btnText: string;
  cvLink: string;

}

// Contact section
export interface SocialMediaItem {
  text: string;
  icon: ComponentType;
  link: string;
}

export interface ContactForm {
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  btnText: string;
}

export interface Contact {
  title: string;
  subtitle: string;
  social_media: SocialMediaItem[];
  successMessage: string;
  errorMessage: string;
  form: ContactForm;
}

// Footer section
export interface Footer {
  text: string;
}

// Combined content
export interface Content {
  nav: NavItem[];
  hero: Hero;
  skills: Skills;
  services: Services;
  projects: Projects;
  testimonials: Testimonials;
  hireme: HireMe;
  contact: Contact;
  footer: Footer;
}

// Record for language support
export type LocalizedContent = Record<'en' | 'vi' | 'ja', Content>;
