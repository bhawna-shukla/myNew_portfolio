
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <span>Bhawna Shukla</span>.
        All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;