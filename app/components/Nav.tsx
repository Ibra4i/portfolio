"use client";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="top-nav bg-gray-800 text-white sticky top-0 z-40">
      <div className="nav-inner max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="brand font-bold flex-1 text-left">Ibrahim Abu Rached</div>
        <ul className="nav-links flex gap-6 m-0 p-0 justify-end">
          <li>
            <a className="hover:underline" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#work">
              Work Experience
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
