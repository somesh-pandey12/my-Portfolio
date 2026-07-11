import { useState } from "react";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-ink-border bg-ink-950/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#about" className="font-display font-bold text-lg text-mist-100">
          Somesh Pandey<span className="text-gradient">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-mist-300">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-mist-100 transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4 text-mist-500">
            <a href="https://www.linkedin.com/in/somesh-pandey-536222296" target="_blank" rel="noopener noreferrer" className="hover:text-mist-100 transition-colors" title="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="https://leetcode.com/u/somesh_pandey" target="_blank" rel="noopener noreferrer" className="hover:text-mist-100 transition-colors" title="LeetCode">
              <SiLeetcode size={18} />
            </a>
            <a href="https://github.com/somesh-pandey12" target="_blank" rel="noopener noreferrer" className="hover:text-mist-100 transition-colors" title="GitHub">
              <FaGithub size={18} />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-mist-300 hover:text-mist-100 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink-border bg-ink-900 px-6 py-5">
          <ul className="flex flex-col gap-4 text-sm font-medium text-mist-300 mb-5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="hover:text-mist-100 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 text-mist-500">
            <a href="https://www.linkedin.com/in/somesh-pandey-536222296" target="_blank" rel="noopener noreferrer" className="hover:text-mist-100 transition-colors">
              <FaLinkedin size={18} />
            </a>
            <a href="https://leetcode.com/u/somesh_pandey" target="_blank" rel="noopener noreferrer" className="hover:text-mist-100 transition-colors">
              <SiLeetcode size={18} />
            </a>
            <a href="https://github.com/somesh-pandey12" target="_blank" rel="noopener noreferrer" className="hover:text-mist-100 transition-colors">
              <FaGithub size={18} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}