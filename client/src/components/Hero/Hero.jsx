import "./Hero.css";
import profileImage from "../../assests/profile.png";
function Hero() {
  return (
    <section id="home" className="hero">

      {/* Background glow */}
      <div className="hero-bg-glow"></div>

      <div className="hero-container">

        {/* LEFT SIDE - TECH CARDS */}
        <div className="hero-tech">

          <div className="tech-card">
            <span className="tech-symbol">&lt;/&gt;</span>
            <div>
              <h4>Code</h4>
              <p>Build & Create</p>
            </div>
          </div>

          <div className="tech-card">
            <span className="tech-symbol">⚛</span>
            <div>
              <h4>React</h4>
              <p>Frontend</p>
            </div>
          </div>

          <div className="tech-card">
            <span className="tech-symbol">JS</span>
            <div>
              <h4>JavaScript</h4>
              <p>Web Development</p>
            </div>
          </div>

          <div className="tech-card">
            <span className="tech-symbol">◆</span>
            <div>
              <h4>MongoDB</h4>
              <p>Database</p>
            </div>
          </div>

        </div>


        {/* CENTER - HERO CONTENT */}
        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm <span>.....</span>
          </p>

          <h1>
            Bhawna
            <span>Shukla</span>
          </h1>

          <h2>Full Stack Web Developer</h2>

          <p className="hero-description">
            I build modern, responsive and user-friendly web applications
            using the MERN stack. I enjoy turning ideas into clean and
            functional digital experiences.
          </p>


          
<div className="hero-buttons">
  <a
    href="\Bhawna_Shukla_Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="hero-resume-btn"
  >
    View Resume
  </a>

  <a
    href="#projects"
    className="hero-project-btn"
  >
    View Projects
  </a>
</div>



        </div>


        {/* RIGHT - PHOTO */}
        <div className="hero-photo">

          <div className="photo-glow"></div>

          <div className="photo-circle photo-circle-one"></div>
          <div className="photo-circle photo-circle-two"></div>

          <div className="photo-frame">
            <img
              src={profileImage}
              alt="Bhawna Shukla"
            />
          </div>

          <div className="floating-code code-one">
            &lt;/&gt;
          </div>

          <div className="floating-code code-two">
            {"{ }"}
          </div>

        </div>

      </div>


      {/* BOTTOM STATS */}
      <div className="hero-stats">

        <div className="hero-stat">
          <span>&lt;/&gt;</span>
          <div>
            <strong>3+</strong>
            <p>Projects</p>
          </div>
        </div>

        <div className="hero-stat">
          <span>✦</span>
          <div>
            <strong>MERN</strong>
            <p>Full Stack</p>
          </div>
        </div>

        <div className="hero-stat">
          <span></span>
          <div>
            <strong>100%</strong>
            <p>Learning & Building</p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Hero;