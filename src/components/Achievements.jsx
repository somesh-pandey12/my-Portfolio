export default function Achievements() {
  const stats = [
    { label: "LeetCode", value: "100+", detail: "Problems solved — DSA, Monotonic Stack", link: "https://leetcode.com/u/somesh_pandey/" },
    { label: "Education", value: "Final Year", detail: "B.Tech CSE (AI), KCC Institute of Technology and Management" },
    { label: "Stack", value: "MERN", detail: "4+ full-stack projects shipped", link: "#projects" },
  ];

  return (
    <section className="py-10">
      <div className="grid sm:grid-cols-3 gap-5">
        {stats.map((stat, index) => (
          <div key={index} className="rounded-2xl border border-ink-border bg-ink-800/60 backdrop-blur px-6 py-6 hover:border-brand-solid/40 hover:-translate-y-0.5 transition-all">
            <p className="text-xs font-semibold uppercase tracking-wide text-mist-500 mb-2">{stat.label}</p>
            <p className="font-display text-3xl font-bold text-mist-100">{stat.value}</p>
            <p className="text-sm text-mist-500 mt-2">{stat.detail}</p>
            {stat.link && (
              <a href={stat.link} target="_blank" rel="noreferrer" className="inline-block mt-3 text-sm font-medium text-gradient hover:underline">View →</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}