export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      items: ["C++ (Strong DSA)", "JavaScript (ES6+)"]
    },
    {
      title: "Web Tech (MERN)",
      items: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Vercel", "Tailwind CSS"]
    }
  ];

  return (
    <section id="skills" style={{ padding: '60px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Technical Skills</h2>
      <div style={containerStyle}>
        {skillCategories.map((cat, index) => (
          <div key={index} style={categoryStyle}>
            <h3 style={{ color: 'var(--accent)', marginBottom: '15px' }}>{cat.title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {cat.items.map((skill, idx) => (
                <span key={idx} style={skillBadgeStyle}>
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

const containerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px'
};

const categoryStyle = {
  background: '#f8fafc',
  padding: '25px',
  borderRadius: '15px',
  textAlign: 'center',
  border: '1px solid #e2e8f0'
};

const skillBadgeStyle = {
  padding: '8px 16px',
  backgroundColor: '#fff',
  border: '1px solid #cbd5e1',
  borderRadius: '20px',
  fontSize: '0.9rem',
  fontWeight: '500',
  color: '#334155'
};