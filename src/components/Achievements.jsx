export default function Achievements() {
  const stats = [
    { label: "LeetCode", value: "100+ Solved", detail: "Focus: Monotonic Stack, DSA", link: "https://leetcode.com/u/somesh_pandey/" },
    { label: "B.Tech CSE", value: "3rd Year", detail: "Specialization in AI", link: "#" },
    { label: "Full Stack", value: "MERN", detail: "Legal-Eyes & Portfolio", link: "#projects" }
  ];

  return (
    <section id="achievements" style={sectionStyle}>
      <div style={gridStyle}>
        {stats.map((stat, index) => (
          <div key={index} style={cardStyle}>
            <h4 style={{ color: 'var(--secondary)', fontSize: '0.9rem' }}>{stat.label}</h4>
            <h2 style={{ color: 'var(--accent)', margin: '5px 0' }}>{stat.value}</h2>
            <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{stat.detail}</p>
            {stat.label === "LeetCode" && (
              <a href={stat.link} target="_blank" rel="noreferrer" style={miniBtn}>View Profile</a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const sectionStyle = { padding: '40px 0' };
const gridStyle = { display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' };
const cardStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '12px',
  border: '1px solid #e2e8f0',
  textAlign: 'center',
  minWidth: '200px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
};
const miniBtn = {
  display: 'inline-block',
  marginTop: '10px',
  fontSize: '0.8rem',
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: 'bold'
};