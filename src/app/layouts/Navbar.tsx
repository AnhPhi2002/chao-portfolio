"use client";
import { useContext, useState } from "react";
import { createElement } from "react";
import { MenuIcon } from "lucide-react";
import { LanguageContext } from "../context/LanguageContext";
import { content} from "../content";
import { NavItem } from "@/type/content";
const Navbar = () => {
  const { lang } = useContext(LanguageContext);
  const { nav } = content[lang];

  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <MenuIcon size={34} />
      </div>

      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-dark_primary duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        {nav.map((item: NavItem, i: number) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              i === active && "bg-dark_primary text-white"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
