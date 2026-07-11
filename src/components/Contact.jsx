import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '80px 0', textAlign: 'center', backgroundColor: '#f8fafc' }}>
      <h2>Get In Touch</h2>
      <p style={{ margin: '20px 0', color: '#64748b' }}>
        I am currently looking for professional opportunities in Software Engineering.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>

        <a href="mailto:someshpandeycil@gmail.com" style={linkBtn}>
          <MdEmail size={18} /> Email Me
        </a>

        <a href="https://github.com/somesh-pandey12" target="_blank" rel="noopener noreferrer" style={linkBtn}>
          <FaGithub size={18} /> GitHub
        </a>

        <a href="https://www.linkedin.com/in/somesh-pandey-536222296/" target="_blank" rel="noopener noreferrer" style={{ ...linkBtn, backgroundColor: '#0a66c2' }}>
          <FaLinkedin size={18} /> LinkedIn
        </a>

        <a href="https://leetcode.com/u/somesh_pandey" target="_blank" rel="noopener noreferrer" style={{ ...linkBtn, backgroundColor: '#f89f1b' }}>
          <SiLeetcode size={18} /> LeetCode
        </a>

      </div>
    </section>
  );
}

const linkBtn = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '10px 22px',
  backgroundColor: 'var(--text)',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '8px',
  fontWeight: '500',
  fontSize: '14px',
  transition: 'transform 0.2s ease, opacity 0.2s ease'
};