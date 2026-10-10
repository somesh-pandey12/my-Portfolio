import { useEffect, useRef, useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const myProjects = [
  {
    title: "TruthLens",
    description: "TruthLens checks how credible a piece of news or a social post is, and when it looks false or unverified, shows what the facts actually say",
    tech: ["React (Vite) + Tailwind CSS v3 · Node/Express · MongoDB · Flask (TextBlob + Groq)"],
    repo: "https://github.com/somesh-pandey12/TruthLens-AI",
  },
  {
    title: "Foodverse",
    description: "A full-stack MERN food ordering platform with browsing, cart, and order management built for a smooth end-to-end user experience.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    repo: "https://github.com/somesh-pandey12/FoodVerse-MERN-App",
  },
  {
    title: "youtube-watch-party",
    description: "Real-time synchronized YouTube watching with room-based access and role-based permissions (Host / Moderator / Participant). Built with the MERN stack (MongoDB, Express, React, Node.js) + Socket.IO for real-time sync.",
    tech: ["React 18 + Vite + React Router, Node.js + Express, Socket.IO (WebSockets), MongoDB (Atlas), YouTube IFrame Player API],
    repo: "https://github.com/somesh-pandey12/youtube-watch-party",
  },
];

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const total = myProjects.length;

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 4000);
    return () => clearInterval(timerRef.current);
  }, [paused, total]);

  const goTo = (i) => setIndex(((i % total) + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <section id="projects" className="py-20">
      <h2 className="font-display text-3xl font-bold text-mist-100 text-center mb-3">Featured Projects</h2>
      <p className="text-mist-500 text-center mb-12">A few things I've built recently</p>

      <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="overflow-hidden rounded-2xl">
          <div className="flex transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
            {myProjects.map((project, i) => (
              <div key={i} className="w-full flex-shrink-0 px-1">
                <div className="group relative rounded-2xl border border-ink-border bg-ink-800/60 backdrop-blur p-8 md:p-10 min-h-[280px] flex flex-col justify-between">
                  <div className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" />
                  <div>
                    <h3 className="font-display text-2xl font-bold text-mist-100 mb-3">{project.title}</h3>
                    <p className="text-mist-500 leading-relaxed max-w-2xl">{project.description}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, ti) => (
                        <span key={ti} className="text-xs font-medium px-3 py-1 rounded-full bg-ink-700/60 text-mist-300">{t}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-gradient hover:underline">
                          <FaExternalLinkAlt size={13} /> Live Demo
                        </a>
                      )}
                      <a href={project.repo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium text-mist-300 hover:text-mist-100 transition-colors">
                        <FaGithub size={15} /> Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button onClick={prev} aria-label="Previous project" className="hidden md:flex items-center justify-center absolute top-1/2 -left-5 -translate-y-1/2 w-10 h-10 rounded-full border border-ink-border bg-ink-800 text-mist-300 hover:text-mist-100 hover:border-mist-500 transition">‹</button>
        <button onClick={next} aria-label="Next project" className="hidden md:flex items-center justify-center absolute top-1/2 -right-5 -translate-y-1/2 w-10 h-10 rounded-full border border-ink-border bg-ink-800 text-mist-300 hover:text-mist-100 hover:border-mist-500 transition">›</button>

        <div className="flex items-center justify-center gap-2 mt-6">
          {myProjects.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Go to project ${i + 1}`} className={`h-1.5 rounded-full transition-all ${i === index ? "w-6 bg-brand-gradient" : "w-1.5 bg-ink-600"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
