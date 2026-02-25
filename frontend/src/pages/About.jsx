import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    mealsRedistributed: 0,
    partnersConnected: 0,
    foodWasteReduced: 0,
  });

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    
    // Animate page load
    setTimeout(() => setIsVisible(true), 100);
    
    // Counter animation
    const animateCounters = () => {
      const targets = {
        mealsRedistributed: 1250,
        partnersConnected: 85,
        foodWasteReduced: 95,
      };
      
      Object.keys(targets).forEach(key => {
        let current = 0;
        const target = targets[key];
        const increment = target / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
        }, 30);
      });
    };
    
    setTimeout(animateCounters, 500);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Welcome " + formData.name + " 🎉");
    setShowForm(false);
    setFormData({ name: "", email: "", role: "" });
  };

  const styles = {
    aboutContainer: {
      width: "100vw",
      minHeight: "100vh",
      padding: "80px 20px 40px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      boxSizing: "border-box",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden",
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
      top: "10%",
      left: "10%",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff6b6b, #feca57)",
      opacity: 0.1,
      animation: "float 6s ease-in-out infinite",
    },

    shape2: {
      position: "absolute",
      top: "60%",
      right: "15%",
      width: "200px",
      height: "200px",
      borderRadius: "30px",
      background: "linear-gradient(45deg, #48cae4, #023e8a)",
      opacity: 0.1,
      animation: "float 4s ease-in-out infinite reverse",
      transform: "rotate(45deg)",
    },

    contentWrapper: {
      position: "relative",
      zIndex: 1,
      maxWidth: "1200px",
      margin: "0 auto",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(50px)",
      transition: "all 0.8s ease",
    },

    hero: {
      textAlign: "center",
      marginBottom: "80px",
    },

    aboutCard: {
      width: "100%",
      padding: "60px 40px",
      borderRadius: "30px",
      background: "rgba(255, 255, 255, 0.95)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      boxShadow: "0 25px 80px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
      color: "#2c3e50",
      textAlign: "center",
      transition: "all 0.4s ease",
      border: "1px solid rgba(255,255,255,0.2)",
    },

    heroTitle: {
      fontSize: "4rem",
      fontWeight: "900",
      marginBottom: "20px",
      background: "linear-gradient(135deg, #667eea, #764ba2, #f093fb)",
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
      maxWidth: "600px",
      margin: "0 auto 40px",
    },

    heading: {
      fontSize: "2.8rem",
      fontWeight: "700",
      marginBottom: "30px",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      position: "relative",
    },

    paragraph: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      marginBottom: "40px",
      color: "#5a6c7d",
      maxWidth: "800px",
      margin: "0 auto 40px",
    },

    statsSection: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "30px",
      marginBottom: "60px",
      padding: "40px",
      borderRadius: "20px",
      background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    },

    statCard: {
      textAlign: "center",
      padding: "20px",
      borderRadius: "15px",
      background: "rgba(255,255,255,0.9)",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },

    statNumber: {
      fontSize: "2.5rem",
      fontWeight: "800",
      color: "#667eea",
      marginBottom: "5px",
      display: "block",
    },

    statLabel: {
      fontSize: "1rem",
      color: "#5a6c7d",
      fontWeight: "600",
    },

    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "30px",
      marginTop: "50px",
    },

    featureCard: {
      padding: "30px",
      borderRadius: "20px",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      boxShadow: "0 10px 40px rgba(0,0,0,0.1)",
      fontWeight: "600",
      color: "white",
      position: "relative",
      overflow: "hidden",
    },

    featureIcon: {
      fontSize: "2.5rem",
      marginBottom: "15px",
      display: "block",
    },

    featureTitle: {
      fontSize: "1.3rem",
      fontWeight: "700",
      marginBottom: "10px",
    },

    featureDescription: {
      fontSize: "0.95rem",
      opacity: 0.9,
      lineHeight: "1.5",
    },

    impactBox: {
      marginTop: "60px",
      padding: "40px",
      borderRadius: "25px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      fontWeight: "600",
      fontSize: "1.3rem",
      boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
      transition: "all 0.4s ease",
      color: "white",
      position: "relative",
      overflow: "hidden",
    },

    impactIcon: {
      fontSize: "3rem",
      marginBottom: "20px",
      display: "block",
    },

    button: {
      marginTop: "50px",
      padding: "18px 50px",
      borderRadius: "50px",
      border: "none",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      color: "#fff",
      fontWeight: "700",
      fontSize: "1.1rem",
      cursor: "pointer",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)",
      position: "relative",
      overflow: "hidden",
    },

    buttonRipple: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "0",
      height: "0",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.3)",
      transform: "translate(-50%, -50%)",
      transition: "all 0.6s ease",
    },

    /* Modal */
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.7)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
    },

    modal: {
      width: "90%",
      maxWidth: "500px",
      padding: "45px",
      borderRadius: "25px",
      background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
      color: "#fff",
      position: "relative",
      animation: "popup 0.3s ease",
      textAlign: "center",
    },

    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "20px",
      borderRadius: "12px",
      border: "2px solid rgba(255,255,255,0.3)",
      outline: "none",
      fontSize: "1rem",
      background: "rgba(255,255,255,0.1)",
      color: "#fff",
      transition: "all 0.3s ease",
    },

    submitBtn: {
      width: "100%",
      padding: "14px",
      borderRadius: "50px",
      border: "none",
      background: "linear-gradient(90deg, #00f2fe, #4facfe)",
      color: "#fff",
      fontWeight: "700",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    },

    closeBtn: {
      position: "absolute",
      top: "18px",
      right: "25px",
      cursor: "pointer",
      fontSize: "1.3rem",
      color: "#fff",
      transition: "0.3s",
    },
  };

  const features = [
    {
      icon: "🍽️",
      title: "Easy Food Listing",
      description: "Restaurants and individuals can easily list surplus food with photos, descriptions, and pickup details."
    },
    {
      icon: "🔍",
      title: "Real-time Browsing",
      description: "NGOs and individuals can browse available food donations in real-time with location-based search."
    },
    {
      icon: "📋",
      title: "Smart Request Management",
      description: "Automated request processing and notification system to ensure quick food distribution."
    },
    {
      icon: "🔐",
      title: "Secure Authentication",
      description: "Role-based access control ensuring donors and receivers have appropriate permissions."
    },
    {
      icon: "📊",
      title: "Impact Tracking",
      description: "Comprehensive dashboard showing donation history, impact metrics, and community statistics."
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Responsive design optimized for mobile devices to ensure accessibility on any platform."
    },
  ];

  return (
    <>
      <section style={styles.aboutContainer}>
        {/* Background Shapes */}
        <div style={styles.backgroundShapes}>
          <div style={styles.shape1}></div>
          <div style={styles.shape2}></div>
        </div>

        <div style={styles.contentWrapper}>
          {/* Hero Section */}
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>About FoodLink</h1>
            <p style={styles.heroSubtitle}>
              Bridging the gap between food surplus and hunger, creating sustainable communities through technology.
            </p>
          </div>

          {/* Main Content Card */}
          <div
            style={styles.aboutCard}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h2 style={styles.heading}>Our Mission</h2>

            <p style={styles.paragraph}>
              FoodLink is a revolutionary platform that connects restaurants, events, and individuals with NGOs and people in need. 
              We're committed to reducing food waste while ensuring no one in our community goes hungry. Through innovative technology 
              and compassionate action, we're building a sustainable future where excess food finds its way to those who need it most.
            </p>

            {/* Statistics Section */}
            <div style={styles.statsSection}>
              <div style={styles.statCard}>
                <span style={styles.statNumber}>{counters.mealsRedistributed}+</span>
                <span style={styles.statLabel}>Meals Redistributed</span>
              </div>
              <div style={styles.statCard}>
                <span style={styles.statNumber}>{counters.partnersConnected}+</span>
                <span style={styles.statLabel}>Partners Connected</span>
              </div>
              <div style={styles.statCard}>
                <span style={styles.statNumber}>{counters.foodWasteReduced}%</span>
                <span style={styles.statLabel}>Food Waste Reduced</span>
              </div>
            </div>

            {/* Features Grid */}
            <div style={styles.featureGrid}>
              {features.map((feature, index) => (
                <div
                  key={index}
                  style={styles.featureCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "0 10px 40px rgba(0,0,0,0.1)";
                  }}
                >
                  <span style={styles.featureIcon}>{feature.icon}</span>
                  <div style={styles.featureTitle}>{feature.title}</div>
                  <div style={styles.featureDescription}>{feature.description}</div>
                </div>
              ))}
            </div>

            {/* Impact Box */}
            <div
              style={styles.impactBox}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.boxShadow = "0 30px 80px rgba(102, 126, 234, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(102, 126, 234, 0.3)";
              }}
            >
              <span style={styles.impactIcon}>🌍</span>
              Since our launch, FoodLink has become a cornerstone of community support, redistributing over {counters.mealsRedistributed} meals 
              and connecting {counters.partnersConnected}+ organizations. Together, we've reduced food waste by {counters.foodWasteReduced}% 
              in participating communities — proving that technology and compassion can create lasting change.
            </div>

            {/* CTA Button */}
            <button
              style={styles.button}
              onClick={() => setShowForm(true)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
                e.currentTarget.style.boxShadow = "0 20px 50px rgba(102, 126, 234, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(102, 126, 234, 0.4)";
              }}
            >
              Join Our Mission 🚀
            </button>
          </div>
        </div>
      </section>

      {showForm && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div
              style={styles.closeBtn}
              onClick={() => setShowForm(false)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "#ff5e62")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "#fff")
              }
            >
              ✖
            </div>

            <h2
              style={{
                marginBottom: "25px",
                fontSize: "2rem",
                fontWeight: "800",
                background:
                  "linear-gradient(90deg, #00f2fe, #4facfe)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Join FoodLink
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                style={styles.input}
                type="text"
                name="name"
                placeholder="Enter Your Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                onFocus={(e) =>
                  (e.target.style.border = "2px solid #00f2fe")
                }
                onBlur={(e) =>
                  (e.target.style.border =
                    "2px solid rgba(255,255,255,0.3)")
                }
              />

              <input
                style={styles.input}
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                onFocus={(e) =>
                  (e.target.style.border = "2px solid #00f2fe")
                }
                onBlur={(e) =>
                  (e.target.style.border =
                    "2px solid rgba(255,255,255,0.3)")
                }
              />

              <select
                style={styles.input}
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="" style={{ color: "#000" }}>
                  Select Your Role
                </option>
                <option value="Donor" style={{ color: "#000" }}>
                  Donor
                </option>
                <option value="Receiver" style={{ color: "#000" }}>
                  Receiver
                </option>
                <option value="Volunteer" style={{ color: "#000" }}>
                  Volunteer
                </option>
              </select>

              <button
                type="submit"
                style={styles.submitBtn}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform =
                    "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform =
                    "scale(1)")
                }
              >
                Join Now 🚀
              </button>
            </form>
          </div>
        </div>
      )}

      <style>
        {`
          input::placeholder {
            color: rgba(255,255,255,0.85);
          }

          @keyframes popup {
            from { 
              transform: scale(0.8) translateY(20px); 
              opacity: 0; 
            }
            to { 
              transform: scale(1) translateY(0); 
              opacity: 1; 
            }
          }

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

          @media (max-width: 768px) {
            h1 {
              font-size: 2.5rem !important;
            }
            
            .hero-subtitle {
              font-size: 1.1rem !important;
              padding: 0 10px;
            }
            
            .stats-section {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
              padding: 20px !important;
            }
            
            .feature-grid {
              grid-template-columns: 1fr !important;
              gap: 20px !important;
            }
            
            .about-card {
              padding: 30px 20px !important;
              margin: 0 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default About;
