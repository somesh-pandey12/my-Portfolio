import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack Developer (MERN)",
  "DSA Enthusiast (C++)",
  "AI/ML Explorer",
  "Open to Opportunities",
];

export default function TypewriterText() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let delay = deleting ? 40 : 70;

    if (!deleting && text === current) {
      delay = 1400;
      const t = setTimeout(() => setDeleting(true), delay);
      return () => clearTimeout(t);
    }

    if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, roleIndex]);

  return (
    <span>
      {text}
      <span className="inline-block w-0.5 h-6 md:h-7 bg-brand-solid ml-1 align-middle cursor-blink" />
    </span>
  );
}