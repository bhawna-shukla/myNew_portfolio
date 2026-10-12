import "./Skills.css";


import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
   SiPython,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const skills = [
  {
    title: "HTML",

    progress: "85%",
    icon: <FaHtml5 />,
  },
  {
    title: "CSS",

    progress: "80%",
    icon: <FaCss3Alt />,
  },
  {
    title: "JavaScript",

    progress: "65%",
    icon: <FaJs />,
  },
  {
    title: "React.js",

    progress: "60%",
    icon: <FaReact />,
  },
  {
    title: "Node.js",

    progress: "50%",
    icon: <FaNodeJs />,
  },
  {
    title: "Express.js",

    progress: "50%",
    icon: <SiExpress />,
  },
  {
    title: "MongoDB",

    progress: "50%",
    icon: <SiMongodb />,
  },
  {
    title: "Git & GitHub",

    progress: "70%",
    icon: <FaGithub />,
  },
  {
  title: "Python",
  progress: "55%",
  icon: <SiPython />,
},
{
  title: "Bootstrap",
  progress: "60%",
  icon: <SiBootstrap />,
},
{
  title: "Tailwind CSS",
  progress: "50%",
  icon: <SiTailwindcss />,
},
{
  title: "MySQL",
  progress: "50%",
  icon: <SiMysql />,
},
{
  title: "REST API",
  progress: "50%",
  icon: <SiPostman />,
},
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <div className="skills-heading">
          <span className="skills-small-title">MY EXPERTISE</span>

          <h2>
            Skills & <span>Technologies</span>
          </h2>

          <p>
            Technologies and tools I use to build modern, responsive
            and user-friendly web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
            style={{ "--delay": `${index * 0.3}s` }}

              key={skill.title}

            >
              <div className="skill-icon">
                {skill.icon}
              </div>

              <div className="skill-info">
                <h3>{skill.title}</h3>

              </div>

              <div className="skill-line">
                <div
                  className="skill-line-fill"
                  style={{ width: skill.progress }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;