export default function Projects() {
  const myProjects = [
    {
      title: "Legal-Eyes",
      description:"Built a MERN application that uses Gemini API to simplify complex legal jargon and flag risky clauses for students and employees.",
      tech: "MERN Stack, Gemini API"
    },
    {
      title: "Portfolio Website",
      description: "Created a responsive portfolio using React to showcase projects and coding skills.",
      tech: "React, Vanilla CSS"
    }
  ];

  return (
    <section id="projects" style={{ padding: '80px 0' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>My Projects</h2>
      <div style={gridStyle}>
        {myProjects.map((project, index) => (
          <div key={index} style={cardStyle}>
            <h3>{project.title}</h3>
            <p style={{ color: '#64748b', margin: '10px 0' }}>{project.description}</p>
            <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: 'var(--accent)' }}>
              {project.tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '20px'
};

const cardStyle = {
  padding: '20px',
  border: '1px solid #eee',
  borderRadius: '10px',
  transition: '0.3s'
};