import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div className="container" style={navContent}>
        <h2 style={{ color: 'var(--accent)' }}>Somesh Pandey</h2>

        <ul style={linkStyle}>
          <li><a href="#about" style={aStyle}>About</a></li>
          <li><a href="#projects" style={aStyle}>Projects</a></li>
          <li><a href="#contact" style={aStyle}>Contact</a></li>
          <li><a href="#skills" style={aStyle}>Skills</a></li>
        </ul>

        <div style={socialStyle}>
          <a href="https://www.linkedin.com/in/somesh-pandey-536222296/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} title="LinkedIn">
            <FaLinkedin size={20} />
          </a>
          <a href="https://leetcode.com/u/your-username/" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} title="LeetCode">
            <SiLeetcode size={20} />
          </a>
          <a href="https://github.com/somesh-pandey12" target="_blank" rel="noopener noreferrer" style={iconLinkStyle} title="GitHub">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}

const navStyle = { padding: '20px 0', borderBottom: '1px solid #eee', position: 'sticky', top: 0, background: '#fff', zIndex: 100 };
const navContent = { display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
const linkStyle = { display: 'flex', gap: '25px', listStyle: 'none' };
const aStyle = { textDecoration: 'none', color: 'var(--text)', fontWeight: '500' };
const socialStyle = { display: 'flex', gap: '16px', alignItems: 'center' };
const iconLinkStyle = { color: 'var(--text)', display: 'flex', textDecoration: 'none', opacity: '0.8', transition: 'opacity 0.2s ease, color 0.2s ease' };