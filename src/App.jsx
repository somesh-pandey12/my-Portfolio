import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Skills from './components/Skills';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 font-sans">
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="glow w-96 h-96 bg-brand-from/30 -top-20 -left-20" />
        <div className="glow w-96 h-96 bg-brand-to/20 top-40 right-0" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <section id="about" className="pt-24 pb-28 text-center">
            <div className="fade-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-ink-border bg-ink-800/60 mb-8 text-xs font-medium text-mist-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </div>
            <h1 className="fade-up font-display text-5xl md:text-7xl font-bold tracking-tight text-mist-100 mb-6" style={{ animationDelay: '0.05s' }}>Somesh Pandey</h1>
            <p className="fade-up font-display text-xl md:text-2xl font-semibold text-gradient mb-6" style={{ animationDelay: '0.1s' }}>Full-Stack Developer (MERN) &amp; DSA Enthusiast</p>
            <p className="fade-up max-w-xl mx-auto text-mist-500 leading-relaxed mb-10" style={{ animationDelay: '0.15s' }}>Final-year B.Tech CSE (AI) student at KCC Institute of Technology and Management, specializing in full-stack development with the MERN stack and strong problem-solving skills in Data Structures &amp; Algorithms using C++. Passionate about building efficient, scalable, and user-focused web applications.</p>
            <div className="fade-up flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: '0.2s' }}>
              <a href="#projects" className="px-7 py-3.5 rounded-xl bg-brand-gradient text-ink-950 font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-brand-from/20">View my work</a>
              <a href="#contact" className="px-7 py-3.5 rounded-xl border border-ink-border text-mist-100 font-semibold text-sm hover:border-mist-500 transition">Get in touch</a>
            </div>
          </section>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6">
        <Achievements />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <footer className="border-t border-ink-border mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-mist-500">
          © 2026 Somesh Pandey. Built with React, Vite &amp; Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

export default App;