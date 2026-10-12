
import { useState } from "react";
import "./Certificate.css";

const certificates = [
  {
    
    organization: "",
    image: "/images/digicert_page-0001.jpg",
   
  },
  {
    
    organization: "",
    image: "/images/softpro.png",
   
  },
  {
    
    organization: "",
    image: "/images/googlecert.jpeg",
    year: "2025",
  },
];

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <p className="certificate-subtitle">
          MY ACHIEVEMENTS
        </p>

        <h2 className="certificates-heading">
          My <span>Certificates</span>
        </h2>

        <p className="certificates-description">
          Learning, growing, and building my skills
          one step at a time.
        </p>

        <div className="certificates-grid">
          {certificates.map((certificate, index) => (
            <article
              className="certificate-card"
              key={certificate.title}
              style={{ "--card-index": index }}
            >
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                  loading="lazy"
                />
               
              </div>

              <div className="certificate-content">
               

                <h3>{certificate.title}</h3>

                <p>{certificate.organization}</p>

                <button
                  className="view-certificate-btn"
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                >
                  View Certificate
                  
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-content"
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="certificate-close-btn"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
            >
              ×
            </button>

            <h3>{selectedCertificate.title}</h3>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Certificate;
