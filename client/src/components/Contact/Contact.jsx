
import { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSending(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Message could not be sent.");
      }

      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus(
        error.message === "Failed to fetch"
          ? "Backend is not reachable. Please try again."
          : error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-label">LET'S CONNECT</span>
          <h2>
            Contact <span>us</span>
          </h2>
          <p>
            Have a project in mind or an opportunity to discuss?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <span className="contact-small-title">
              CONTACT INFORMATION
            </span>

            <h3>
              Let's work
              <br />
              <span>together.</span>
            </h3>

            <p className="contact-description">
              I'm open to junior developer opportunities,
              collaborations, and exciting web development projects.
            </p>

            <a
              href="mailto:shuklabhawna81@gmail.com"
              className="contact-info-item"
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <span>Email Me</span>
                <p>shuklabhawna81@gmail.com</p>
              </div>
            </a>

            <div className="contact-info-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span>Location</span>
                <p>Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/bhawna-shukla"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/bhawna-shukla-1a0b4b1b6/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>

            <p className="form-subtitle">
              Fill in the details below to get in touch.
            </p>

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>

            {status && (
              <p role="status" aria-live="polite">
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;