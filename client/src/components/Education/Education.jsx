
import "./Education.css";

function Education() {
  const education = [
    {
      year: "2022 - 2025",
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Seth Vishambhar Nath Institute",
      detail: "Graduated in 2025",
    },
    {
      year: "2020-2021",
      degree: "Senior Secondary Education(+2 Arts)",
      institute: "DSSD Girls Senior Secondary School",
      detail: "PSEB Board",
    },
    {
      year: "2018-2019",
      degree: "Secondary Education(10th) ",
      institute: "DSSD Girls Senior Secondary School",
      detail: "PSEB Board",
    },
  ];

  return (
    <section className="education-section" id="education">
      <div className="education-heading">
        <span>MY BACKGROUND</span>
        <h2>My <span>Education</span></h2>
        <p>My academic journey and learning foundation.</p>
      </div>

      <div className="education-timeline">
        {education.map((item, index) => (
          <div className="education-item" key={index}>
            

{item.degree === "Bachelor of Computer Applications (BCA)" && (
  <div className="education-dot">
    <img src="/images/bca_logo.png" alt="College logo" />
  </div>
)}

{item.degree === "Senior Secondary Education(+2 Arts)" && (
  <div className="education-dot">
    <img src="/images/pseb12.jpg" alt="Institute logo" />
  </div>
)}

{item.degree === "Secondary Education(10th) " && (
  <div className="education-dot">
    <img src="/images/pseb12.jpg" alt="Institute logo" />
  </div>
)}


            <div className="education-card">
              <span className="education-year">{item.year}</span>
              <h3>{item.degree}</h3>
              <h4>{item.institute}</h4>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;