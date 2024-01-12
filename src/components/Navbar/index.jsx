import { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { GiHamburgerMenu } from "react-icons/gi";

import Switcher from "../Switcher";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const projectsSection = document.getElementById("about");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkills = () => {
    const projectsSection = document.getElementById("skills");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const projectsSection = document.getElementById("contact");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white flex items-center justify-between p-4 font-poppins text-black border-b border-b-slate-100 shadow-lg dark:text-white dark:bg-[#000] dark:border-b-slate-900 dark:shadow-black">
      <div className="text-xl">Mikias.B</div>

      <div className="md:hidden relative">
        <button
          className="text-white focus:outline-none text-xl"
          onClick={toggleDropdown}
        >
          <GiHamburgerMenu className="text-black dark:text-white" />
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 flex flex-col w-40 p-3 text-xs border border-slate-50 bg-slate-50 rounded-md shadow-sm dark:text-white dark:bg-[#000] dark:border-slate-900 dark:shadow-black">
            <Link
              to="#projects"
              className="p-2 hover:underline"
              onClick={scrollToProjects}
            >
              Projects
            </Link>
            <Link
              to="#skills"
              className="p-2 hover:underline"
              onClick={scrollToSkills}
            >
              Skills
            </Link>
            <Link
              to="#about"
              className="p-2 hover:underline"
              onClick={scrollToAbout}
            >
              About
            </Link>
            <Link
              to="#contact"
              className="p-2 hover:underline"
              onClick={scrollToContact}
            >
              Contact
            </Link>
            <Switcher />
          </div>
        )}
      </div>

      <div className="hidden md:flex space-x-4">
        <Link
          to="#projects"
          className="text-sm hover:underline"
          onClick={scrollToProjects}
        >
          Projects
        </Link>
        <Link
          to="#skills"
          className="text-sm hover:underline"
          onClick={scrollToSkills}
        >
          Skills
        </Link>
        <Link
          to="#about"
          className="text-sm hover:underline"
          onClick={scrollToAbout}
        >
          About
        </Link>
        <Link
          to="#contact"
          className="text-sm hover:underline"
          onClick={scrollToContact}
        >
          Contact
        </Link>

        <Switcher />
      </div>
    </nav>
  );
};

export default Navbar;
