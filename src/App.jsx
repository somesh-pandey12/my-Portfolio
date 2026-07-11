import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      {}
      <Navbar />
      
      <div className="container">
        
        {}
        <section id="about" style={heroSectionStyle}>
          <h1 style={mainTitleStyle}>Somesh Pandey</h1>
          <p style={subTitleStyle}>
            "3rd-year CSE (AI) student skilled in DSA (C++) and MERN stack development. 
            Passionate about building efficient and scalable web applications."
          </p>

          <div style={{ marginTop: '30px' }}>
            <a href="#projects" style={primaryBtn}>View My Work</a>
          </div>
        </section>
        {}
        <Achievements />

        {}
        <Skills />

        {}
        <Projects />

        {}
        <Contact />

      </div>

      {}
      <footer style={footerStyle}>
        <p>© 2026 | Built with React & Professional CSS</p>
      </footer>
    </div>
  );
}

const heroSectionStyle = {
  padding: '120px 20px',
  textAlign: 'center',
  backgroundColor: '#ffffff',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
};

const mainTitleStyle = {
  fontSize: '3.5rem',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#1a1a1a'
};

const subTitleStyle = {
  fontSize: '1.25rem',
  color: '#64748b',
  maxWidth: '700px',
  lineHeight: '1.6'
};

const primaryBtn = {
  padding: '12px 28px',
  backgroundColor: '#2563eb', 
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  fontSize: '1.1rem',
  fontWeight: '500',
  display: 'inline-block',
  transition: '0.3s'
};

const footerStyle = {
  textAlign: 'center',
  padding: '50px 0',
  borderTop: '1px solid #eee',
  color: '#94a3b8',
  marginTop: '50px'
};

export default App;