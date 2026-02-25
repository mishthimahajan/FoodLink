import React, { useState, useEffect } from "react";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaClock,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaUsers,
  FaHandsHelping,
  FaQuestionCircle
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  });

  const [focused, setFocused] = useState("");
  const [success, setSuccess] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  useEffect(() => {
    // Animate page load
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const contactInfo = [
    {
      icon: <FaEnvelope size={24} />,
      title: "Email Us",
      content: "hello@foodlink.com",
      subtitle: "We'll respond within 24 hours",
      color: "#667eea"
    },
    {
      icon: <FaPhone size={24} />,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      subtitle: "Mon-Fri, 9AM-6PM EST",
      color: "#f093fb"
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Visit Us",
      content: "123 Community Street",
      subtitle: "New York, NY 10001",
      color: "#4facfe"
    },
    {
      icon: <FaClock size={24} />,
      title: "Support Hours",
      content: "24/7 Community Support",
      subtitle: "Always here to help",
      color: "#43e97b"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: "#", color: "#1877f2" },
    { icon: <FaTwitter size={20} />, url: "#", color: "#1da1f2" },
    { icon: <FaLinkedin size={20} />, url: "#", color: "#0077b5" },
    { icon: <FaInstagram size={20} />, url: "#", color: "#e4405f" },
  ];

  const faqItems = [
    {
      question: "How do I donate food through FoodLink?",
      answer: "Simply create a donor account, list your surplus food with photos and pickup details, and our platform will connect you with nearby receivers."
    },
    {
      question: "Is FoodLink free to use?",
      answer: "Yes! FoodLink is completely free for both food donors and receivers. Our mission is to reduce food waste and help communities."
    },
    {
      question: "How do you ensure food safety?",
      answer: "We have strict food safety guidelines, verification processes, and encourage users to follow local health department standards."
    },
    {
      question: "Can individuals donate, or just restaurants?",
      answer: "Both! Restaurants, events, and individuals can all donate surplus food through our platform to help reduce waste."
    }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setFormData({ name: "", email: "", subject: "", category: "", message: "" });
    }, 3000);
  };

  const styles = {
    container: {
      width: "100vw",
      minHeight: "100vh",
      padding: "80px 20px 60px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      boxSizing: "border-box",
      position: "relative",
      overflow: "hidden",
      fontFamily: "'Poppins', sans-serif",
    },

    backgroundShapes: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: 0,
      overflow: "hidden",
    },

    shape1: {
      position: "absolute",
      top: "15%",
      right: "10%",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff6b6b, #feca57)",
      opacity: 0.1,
      animation: "float 8s ease-in-out infinite",
    },

    shape2: {
      position: "absolute",
      bottom: "20%",
      left: "5%",
      width: "250px",
      height: "250px",
      borderRadius: "30px",
      background: "linear-gradient(45deg, #48cae4, #023e8a)",
      opacity: 0.1,
      animation: "float 6s ease-in-out infinite reverse",
      transform: "rotate(45deg)",
    },

    contentWrapper: {
      position: "relative",
      zIndex: 1,
      maxWidth: "1400px",
      margin: "0 auto",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(50px)",
      transition: "all 0.8s ease",
    },

    hero: {
      textAlign: "center",
      marginBottom: "80px",
      color: "white",
    },

    heroTitle: {
      fontSize: "4rem",
      fontWeight: "900",
      marginBottom: "20px",
      background: "linear-gradient(135deg, #fff, #f0f0f0)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      textShadow: "0 4px 20px rgba(0,0,0,0.3)",
      letterSpacing: "-0.02em",
    },

    heroSubtitle: {
      fontSize: "1.4rem",
      fontWeight: "400",
      color: "rgba(255,255,255,0.9)",
      marginBottom: "40px",
      lineHeight: "1.6",
      maxWidth: "700px",
      margin: "0 auto 40px",
    },

    tabNavigation: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginBottom: "60px",
      flexWrap: "wrap",
    },

    tabButton: (active) => ({
      padding: "12px 30px",
      borderRadius: "50px",
      border: "2px solid rgba(255,255,255,0.3)",
      background: active ? "rgba(255,255,255,0.2)" : "transparent",
      color: "white",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      backdropFilter: "blur(10px)",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }),

    mainContent: {
      display: "grid",
      gridTemplateColumns: activeTab === 'contact' ? "1fr 1fr" : "1fr",
      gap: "60px",
      alignItems: "start",
    },

    // Contact Info Styles
    contactInfoSection: {
      display: "flex",
      flexDirection: "column",
      gap: "30px",
    },

    contactCard: {
      background: "rgba(255,255,255,0.95)",
      padding: "30px",
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
    },

    contactCardContent: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },

    contactIcon: (color) => ({
      width: "60px",
      height: "60px",
      borderRadius: "15px",
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      flexShrink: 0,
    }),

    contactText: {
      flex: 1,
    },

    contactTitle: {
      fontSize: "1.3rem",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "5px",
    },

    contactContent: {
      fontSize: "1.1rem",
      color: "#667eea",
      fontWeight: "600",
      marginBottom: "5px",
    },

    contactSubtitle: {
      fontSize: "0.9rem",
      color: "#5a6c7d",
    },

    // Form Styles
    formSection: {
      background: "rgba(255,255,255,0.95)",
      padding: "40px",
      borderRadius: "25px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
      border: "1px solid rgba(255,255,255,0.2)",
    },

    formTitle: {
      fontSize: "2rem",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "30px",
      textAlign: "center",
    },

    formGrid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "20px",
    },

    inputGroup: {
      marginBottom: "20px",
    },

    label: {
      display: "block",
      fontSize: "0.9rem",
      fontWeight: "600",
      color: "#5a6c7d",
      marginBottom: "8px",
    },

    input: (isFocused) => ({
      width: "100%",
      padding: "15px",
      borderRadius: "12px",
      border: isFocused ? "2px solid #667eea" : "1px solid #e0e0e0",
      outline: "none",
      fontSize: "1rem",
      transition: "all 0.3s ease",
      background: "#fff",
      boxSizing: "border-box",
    }),

    select: {
      width: "100%",
      padding: "15px",
      borderRadius: "12px",
      border: "1px solid #e0e0e0",
      outline: "none",
      fontSize: "1rem",
      background: "#fff",
      boxSizing: "border-box",
      color: "black",
    },

    textarea: (isFocused) => ({
      width: "100%",
      padding: "15px",
      borderRadius: "12px",
      border: isFocused ? "2px solid #667eea" : "1px solid #e0e0e0",
      outline: "none",
      fontSize: "1rem",
      minHeight: "120px",
      resize: "vertical",
      transition: "all 0.3s ease",
      background: "#fff",
      boxSizing: "border-box",
    }),

    submitButton: {
      width: "100%",
      padding: "18px",
      borderRadius: "12px",
      border: "none",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "white",
      fontSize: "1.1rem",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
    },

    // Social Links
    socialSection: {
      marginTop: "40px",
      textAlign: "center",
    },

    socialTitle: {
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "#2c3e50",
      marginBottom: "20px",
    },

    socialLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
    },

    socialLink: (color) => ({
      width: "45px",
      height: "45px",
      borderRadius: "12px",
      background: color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      textDecoration: "none",
      transition: "all 0.3s ease",
    }),

    // FAQ Styles
    faqSection: {
      maxWidth: "800px",
      margin: "0 auto",
    },

    faqItem: {
      background: "rgba(255,255,255,0.95)",
      marginBottom: "20px",
      borderRadius: "15px",
      overflow: "hidden",
      boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
    },

    faqQuestion: {
      padding: "25px",
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "#2c3e50",
      cursor: "pointer",
      borderBottom: "1px solid #e0e0e0",
    },

    faqAnswer: {
      padding: "25px",
      color: "#5a6c7d",
      lineHeight: "1.6",
    },

    // Success Animation
    successOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1000,
    },

    successCard: {
      background: "white",
      padding: "40px",
      borderRadius: "20px",
      textAlign: "center",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      maxWidth: "400px",
    },

    successIcon: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #43e97b, #38f9d7)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px",
      color: "white",
      fontSize: "2rem",
    },

    successTitle: {
      fontSize: "1.5rem",
      fontWeight: "700",
      color: "#2c3e50",
      marginBottom: "10px",
    },

    successMessage: {
      color: "#5a6c7d",
      lineHeight: "1.5",
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'contact':
        return (
          <div style={styles.mainContent}>
            {/* Contact Information */}
            <div style={styles.contactInfoSection}>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  style={styles.contactCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.1)";
                  }}
                >
                  <div style={styles.contactCardContent}>
                    <div style={styles.contactIcon(info.color)}>
                      {info.icon}
                    </div>
                    <div style={styles.contactText}>
                      <h3 style={styles.contactTitle}>{info.title}</h3>
                      <p style={styles.contactContent}>{info.content}</p>
                      <p style={styles.contactSubtitle}>{info.subtitle}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Social Links */}
              <div style={styles.socialSection}>
                <h3 style={styles.socialTitle}>Follow Us</h3>
                <div style={styles.socialLinks}>
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      style={styles.socialLink(social.color)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px) scale(1.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0) scale(1)";
                      }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div style={styles.formSection}>
              <h2 style={styles.formTitle}>Send us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGrid}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      style={styles.input(focused === "name")}
                      required
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused("")}
                      style={styles.input(focused === "email")}
                      required
                    />
                  </div>
                </div>
                
                <div style={styles.formGrid}>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused("subject")}
                      onBlur={() => setFocused("")}
                      style={styles.input(focused === "subject")}
                      required
                    />
                  </div>
                  <div style={styles.inputGroup}>
                    <label style={styles.label}>Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      style={styles.select}
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="feedback">Feedback</option>
                      <option value="bug">Bug Report</option>
                    </select>
                  </div>
                </div>

                <div style={styles.inputGroup}>
                  <label style={styles.label}>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    style={styles.textarea(focused === "message")}
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  style={styles.submitButton}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 15px 40px rgba(102, 126, 234, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(102, 126, 234, 0.3)";
                  }}
                >
                  <FaEnvelope style={{ marginRight: "10px" }} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        );
        
      case 'faq':
        return (
          <div style={styles.faqSection}>
            {faqItems.map((item, index) => (
              <div key={index} style={styles.faqItem}>
                <div style={styles.faqQuestion}>
                  <FaQuestionCircle style={{ marginRight: "10px", color: "#667eea" }} />
                  {item.question}
                </div>
                <div style={styles.faqAnswer}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <>
      <div style={styles.container}>
        {/* Background Shapes */}
        <div style={styles.backgroundShapes}>
          <div style={styles.shape1}></div>
          <div style={styles.shape2}></div>
        </div>

        <div style={styles.contentWrapper}>
          {/* Hero Section */}
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>Get In Touch</h1>
            <p style={styles.heroSubtitle}>
              We'd love to hear from you! Whether you have questions, feedback, or want to partner with us, 
              we're here to help you make a difference in your community.
            </p>
          </div>

          {/* Tab Navigation */}
          <div style={styles.tabNavigation}>
            <button
              style={styles.tabButton(activeTab === 'contact')}
              onClick={() => setActiveTab('contact')}
              onMouseEnter={(e) => {
                if (activeTab !== 'contact') {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'contact') {
                  e.target.style.background = "transparent";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              <FaEnvelope />
              Contact Us
            </button>
            <button
              style={styles.tabButton(activeTab === 'faq')}
              onClick={() => setActiveTab('faq')}
              onMouseEnter={(e) => {
                if (activeTab !== 'faq') {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'faq') {
                  e.target.style.background = "transparent";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              <FaQuestionCircle />
              FAQ
            </button>
          </div>

          {/* Main Content */}
          {renderContent()}
        </div>
        
        {/* Success Overlay */}
        {success && (
          <div style={styles.successOverlay}>
            <div style={styles.successCard}>
              <div style={styles.successIcon}>✓</div>
              <h3 style={styles.successTitle}>Message Sent Successfully!</h3>
              <p style={styles.successMessage}>
                Thank you for reaching out. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 1024px) {
            .main-content {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2.5rem !important;
            }
            
            .hero-subtitle {
              font-size: 1.1rem !important;
              padding: 0 10px;
            }
            
            .tab-navigation {
              flex-direction: column !important;
              align-items: center;
            }
            
            .form-grid {
              grid-template-columns: 1fr !important;
              gap: 15px !important;
            }
            
            .contact-card, .form-section {
              margin: 0 10px;
              padding: 25px !important;
            }
          }

          @media (max-width: 480px) {
            .contact-card, .form-section {
              padding: 20px !important;
            }
            
            .form-section {
              padding: 30px 20px !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Contact;
