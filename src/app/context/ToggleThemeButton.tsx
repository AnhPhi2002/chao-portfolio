"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ToggleThemeButton() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Khởi tạo trạng thái dark mode dựa trên class hiện tại
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-800" />}
    </button>
  );
}
