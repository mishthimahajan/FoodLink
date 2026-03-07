import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, url: "#", color: "#E4405F" },
    { name: "LinkedIn", icon: FaLinkedin, url: "#", color: "#0077B5" },
    { name: "Twitter", icon: FaTwitter, url: "#", color: "#1DA1F2" },
  ];

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Features", to: "/features" },
    { label: "Contact", to: "/contact" },
    { label: "Terms of Service", to: "/terms-of-service" },
  ];

  const donorLinks = [
    { label: "Add Food", to: "/donor/add-food" },
    { label: "My Listings", to: "/donor/my-listings" },
    { label: "Requests Received", to: "/donor/requests" },
  ];

  const receiverLinks = [
    { label: "Browse Food", to: "/receiver/browse-food" },
    { label: "My Requests", to: "/receiver/my-requests" },
  ];

  return (
    <footer className="modern-footer">
      {/* Main Footer Content */}
      <div className="footer-wrapper">
        <div className="footer-container">
          
          {/* Section 1: Brand & Description */}
          <div className="footer-section footer-brand">
            <div className="footer-logo-wrapper">
              <h2 className="footer-logo">FoodLink</h2>
              <div className="logo-underline"></div>
            </div>
            <p className="footer-tagline">
              Connecting surplus food with communities in need. Together, we reduce waste and create meaningful impact on the world.
            </p>
            <div className="footer-contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>New Delhi, India</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+91 (123) 456-7890</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>hello@foodlink.com</span>
              </div>
            </div>
          </div>

        {/* MIDDLE — Quick Links */}
        <div>
          <h3 style={styles.sectionTitle}>Quick Links</h3>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/features" style={styles.link}>Features</Link>
          <Link to="/terms-of-service" style={styles.link}>Terms of Service</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>

          {/* Section 3: For Donors */}
          <div className="footer-section footer-links">
            <h3 className="section-title">For Donors</h3>
            <nav className="links-list">
              {donorLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  to={link.to} 
                  className="footer-link"
                >
                  <span className="link-icon">→</span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 4: For Receivers */}
          <div className="footer-section footer-links">
            <h3 className="section-title">For Receivers</h3>
            <nav className="links-list">
              {receiverLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  to={link.to} 
                  className="footer-link"
                >
                  <span className="link-icon">→</span>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 5: Newsletter */}
          <div className="footer-section footer-newsletter">
            <h3 className="section-title">Stay Updated</h3>
            <p className="newsletter-desc">Subscribe to get updates about new food donations and community initiatives.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <div className="input-wrapper">
                <input 
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="subscribe-btn" title="Subscribe">
                  <FaArrowRight />
                </button>
              </div>
              {subscribed && <p className="success-msg">✓ Thanks for subscribing!</p>}
            </form>

            {/* Social Links */}
            <div className="social-section">
              <p className="social-label">Follow Us</p>
              <div className="social-links">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={idx}
                      href={social.url}
                      className="social-icon"
                      onMouseEnter={() => setHoveredIcon(social.name)}
                      onMouseLeave={() => setHoveredIcon(null)}
                      style={{
                        backgroundColor: hoveredIcon === social.name ? social.color : "transparent",
                        borderColor: social.color
                      }}
                      title={social.name}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {new Date().getFullYear()} <span className="highlight">FoodLink</span>. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/terms-of-service" className="bottom-link">Privacy Policy</Link>
            <span className="divider">•</span>
            <Link to="/terms-of-service" className="bottom-link">Terms of Service</Link>
            <span className="divider">•</span>
            <a href="#contact" className="bottom-link">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;