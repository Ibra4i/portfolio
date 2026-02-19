"use client";
import ThemeToggle from "./ThemeToggle";

export default function Nav() {
  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-40">
      <div className="flex items-center justify-between px-6 py-3 w-full">
        
        {/* LEFT SIDE — Brand */}
        <div className="font-bold text-lg whitespace-nowrap">
          Ibrahim Abu Rached
        </div>

        {/* RIGHT SIDE — Links + Theme */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 m-0 p-0 items-center">
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

      </div>
    </nav>
  );
}
