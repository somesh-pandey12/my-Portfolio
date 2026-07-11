export default function Skills() {
  const skillCategories = [
    { title: "Languages", items: ["C++", "JavaScript (ES6+)"] },
    { title: "MERN Stack", items: ["MongoDB", "Express.js", "React.js", "Node.js"] },
    { title: "Tools", items: ["Git", "GitHub", "VS Code", "Vercel", "Tailwind CSS"] },
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="font-display text-3xl font-bold text-mist-100 text-center mb-3">Technical Skills</h2>
      <p className="text-mist-500 text-center mb-12">Technologies I work with day to day</p>

      <div className="grid md:grid-cols-3 gap-5">
        {skillCategories.map((cat, index) => (
          <div key={index} className="rounded-2xl border border-ink-border bg-ink-800/60 backdrop-blur px-6 py-6">
            <h3 className="font-display font-semibold text-mist-100 mb-4">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-sm px-3.5 py-1.5 rounded-full border border-ink-border bg-ink-700/60 text-mist-300 hover:border-brand-solid/50 hover:text-mist-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}