import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="relative rounded-3xl border border-ink-border bg-ink-800/60 backdrop-blur px-8 py-16 text-center overflow-hidden">
        <div className="glow w-72 h-72 bg-brand-from/20 -top-10 left-1/3" />

        <div className="relative z-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-mist-100 mb-4">Let's build something great</h2>
          <p className="text-mist-500 max-w-md mx-auto mb-8">I'm currently looking for Software Engineering opportunities. Feel free to reach out.</p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:someshpandeycil@gmail.com" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-gradient text-ink-950 font-semibold text-sm hover:opacity-90 transition"><MdEmail size={18} /> Email Me</a>
            <a href="https://github.com/somesh-pandey12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-ink-border text-mist-100 font-semibold text-sm hover:border-mist-500 transition"><FaGithub size={16} /> GitHub</a>
            <a href="https://www.linkedin.com/in/somesh-pandey-536222296" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-ink-border text-mist-100 font-semibold text-sm hover:border-mist-500 transition"><FaLinkedin size={16} /> LinkedIn</a>
            <a href="https://leetcode.com/u/somesh_pandey" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-ink-border text-mist-100 font-semibold text-sm hover:border-mist-500 transition"><SiLeetcode size={16} /> LeetCode</a>
          </div>
        </div>
      </div>
    </section>
  );
}