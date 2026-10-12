
import "./About.css";
import { FaGraduationCap, FaCode, FaLaptopCode } from "react-icons/fa";

function About() {
  return (

    
    <section className="about-section" id="about">
        {/* Animated Background Bubbles */}
      <div className="about-bubbles" aria-hidden="true">
        {Array.from({ length: 18 }, (_, i) => (
          <span
            className="about-bubble"
            key={i}
            style={{
              "--size": `${12 + ((i * 17) % 38)}px`,
              "--left": `${(i * 37 + 8) % 100}%`,
              "--duration": `${9 + ((i * 3) % 12)}s`,
              "--delay": `${-((i * 2) % 15)}s`,
            }}
          />
        ))}
      </div>

      <div className="about-container">
        {/* Section Heading */}
        <div className="about-heading">
          <span className="about-subtitle">GET TO KNOW ME</span>
          <h2>
            About <span>Me</span>
          </h2>
          <p>
            A little about my journey, my skills, and my passion for
            creating web experiences.
          </p>
        </div>

        {/* About Content */}
        <div className="about-content">
          <div className="about-text">
            <h3>
              Hello, I'm <span>Bhawna Shukla</span> 
            </h3>

            <p>
              I'm a BCA graduate with a strong interest in web development.
              I enjoy creating responsive, user-friendly websites and
              learning new technologies to improve my development skills.
            </p>

            <p>
              I've worked on projects using HTML, CSS, JavaScript, React,
              Node.js, Express, and MongoDB. Through practical projects,
              I'm continuously improving my problem-solving and coding skills.
            </p>

            <p>
              My goal is to grow as a Full Stack Developer and build useful,
              modern web applications that provide a great user experience.
            </p>

            <a href="#projects" className="about-button">
              Explore My Work 
            </a>
          </div>

          {/* Info Cards */}
          <div className="about-cards">
            <div className="about-card">
              <div className="about-icon">
                <FaGraduationCap />
              </div>
              <div>
                <h4>Education</h4>
                <p>Bachelor of Computer Applications</p>
                <span>BCA Graduate · 2025</span>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaCode />
              </div>
              <div>
                <h4>Web Development</h4>
                <p>Frontend & Backend Technologies</p>
                <span>Learning through practical projects</span>
              </div>
            </div>

            <div className="about-card">
              <div className="about-icon">
                <FaLaptopCode />
              </div>
              <div>
                <h4>Current Focus</h4>
                <p>Full Stack Development</p>
                <span>Building projects and growing my skills</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

