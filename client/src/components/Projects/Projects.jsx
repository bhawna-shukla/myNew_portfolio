
import "./Projects.css";

const projects = [
  {
    title: "FoodieHub",
    image: "/images/Screenshot 2026-10-12 112346.png",
    description:
      "A food ordering website with user authentication, cart, checkout, order tracking and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "https://foodie-hub-jet.vercel.app/",
    githubLink: "https://github.com/bhawna-shukla/FoodieHub",
  },
  {
    title: "Personal Portfolio",
    image: "/images/Screenshot 2026-10-12 112500.png",
    description:
      "A responsive personal portfolio showcasing my skills, projects and web development journey.",
    tech: ["React", "CSS", "JavaScript"],
    liveLink: "#about",
    githubLink: "https://github.com/bhawna-shukla/myNew_portfolio",
  },
  {
    title: "Computer_Center_Website",
    image: "/images/Screenshot 2026-10-12 112602.png",
    description:
      "A website project focused on presenting computer center information through a clean interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://www.aadityaacomputer.com/",
    githubLink: "https://github.com/bhawna-shukla/AADITYA-HUB",
  },
];

function Projects() {
  const sliderProjects = [...projects, ...projects];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">
        <span>MY WORK</span>
        <h2>
          Featured <span>Projects</span>
        </h2>
      </div>

      <div className="projects-slider">
        <div className="projects-track">
          {sliderProjects.map((project, index) => (
            <article
              className="project-card"
              key={`${project.title}-${index}`}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                />
              </div>

              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    className="project-link"
                    href={project.liveLink}
                    target={
                      project.liveLink.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      project.liveLink.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    Live Demo
                  </a>

                  <a
                    className="project-link github-link"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
