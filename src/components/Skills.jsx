import {
  SiCplusplus, SiJavascript, SiPython, SiMongodb, SiExpress, SiReact, SiNodedotjs,
  SiGit, SiGithub, SiVercel, SiTailwindcss,
} from "react-icons/si";
import { FaCode, FaRobot, FaBrain } from "react-icons/fa";

const row1 = [
  { name: "C++", Icon: SiCplusplus },
  { name: "Python", Icon: SiPython },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "AI", Icon: FaRobot },
  { name: "Machine Learning", Icon: FaBrain },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Express.js", Icon: SiExpress },
  { name: "React.js", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
];

const row2 = [
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
  { name: "VS Code", Icon: FaCode },
  { name: "Vercel", Icon: SiVercel },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
];

function Chip({ name, Icon }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 rounded-xl border border-ink-border bg-ink-800/60 mx-2.5 flex-shrink-0">
      <Icon size={20} className="text-brand-solid" />
      <span className="text-sm font-medium text-mist-300 whitespace-nowrap">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-row marquee-fade overflow-hidden">
      <div className={`flex w-max py-1 ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {doubled.map((item, i) => (
          <Chip key={i} name={item.name} Icon={item.Icon} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="font-display text-3xl font-bold text-mist-100 text-center mb-3">Technical Skills</h2>
      <p className="text-mist-500 text-center mb-12">Technologies I work with day to day</p>

      <div className="space-y-4">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}