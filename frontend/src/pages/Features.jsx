import React, { useState, useEffect } from "react";
import { 
  FaHandsHelping, 
  FaLeaf, 
  FaUsers, 
  FaMobileAlt,
  FaShieldAlt,
  FaChartLine,
  FaMapMarkerAlt,
  FaBell,
  FaClock,
  FaCamera,
  FaQrcode,
  FaHeart
} from "react-icons/fa";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('core');

  useEffect(() => {
    // Animate page load
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const coreFeatures = [
    {
      icon: <FaHandsHelping size={50} />,
      title: "Smart Donor-Receiver Matching",
      description: "AI-powered algorithm connects food donors with the most suitable receivers based on location, quantity, and dietary requirements.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      benefits: ["Instant matching", "Location-based priority", "Dietary preferences"]
    },
    {
      icon: <FaLeaf size={50} />,
      title: "Zero-Waste Technology",
      description: "Advanced tracking system ensures every piece of surplus food finds its way to those in need, minimizing environmental impact.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      benefits: ["Real-time tracking", "Waste analytics", "Environmental impact metrics"]
    },
    {
      icon: <FaUsers size={50} />,
      title: "Community Network",
      description: "Build stronger communities through verified networks of restaurants, NGOs, volunteers, and individuals working together.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      benefits: ["Verified partners", "Community dashboard", "Impact stories"]
    },
    {
      icon: <FaShieldAlt size={50} />,
      title: "Secure & Verified Platform",
      description: "Multi-layer verification system ensures food safety, user authenticity, and secure transactions for peace of mind.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      benefits: ["Identity verification", "Food safety checks", "Secure messaging"]
    }
  ];

  const techFeatures = [
    {
      icon: <FaMobileAlt size={40} />,
      title: "Mobile-First Design",
      description: "Responsive design optimized for smartphones and tablets",
      color: "#667eea"
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "GPS Integration",
      description: "Real-time location tracking for efficient food delivery",
      color: "#f093fb"
    },
    {
      icon: <FaBell size={40} />,
      title: "Smart Notifications",
      description: "Intelligent alerts for new donations and pickup reminders",
      color: "#4facfe"
    },
    {
      icon: <FaClock size={40} />,
      title: "Real-Time Updates",
      description: "Live status updates on food availability and requests",
      color: "#43e97b"
    },
    {
      icon: <FaCamera size={40} />,
      title: "Photo Verification",
      description: "Image upload for food quality and quantity verification",
      color: "#ff9ff3"
    },
    {
      icon: <FaQrcode size={40} />,
      title: "QR Code System",
      description: "Quick scanning for seamless food pickup and delivery",
      color: "#54a0ff"
    }
  ];

  const impactFeatures = [
    {
      icon: <FaChartLine size={40} />,
      title: "Impact Analytics",
      description: "Comprehensive dashboard showing your contribution to reducing food waste",
      stats: "Track meals saved, CO₂ reduced, and people helped"
    },
    {
      icon: <FaHeart size={40} />,
      title: "Social Impact Stories",
      description: "See real stories of how your donations are making a difference",
      stats: "Share and view community success stories"
    },
    {
      icon: <FaUsers size={40} />,
      title: "Community Leaderboard",
      description: "Gamified system to encourage more food donations and community engagement",
      stats: "Earn badges and recognition for your contributions"
    }
  ];

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
      top: "20%",
      right: "10%",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "linear-gradient(45deg, #ff6b6b, #feca57)",
      opacity: 0.1,
      animation: "float 8s ease-in-out infinite",
    },

    shape2: {
      position: "absolute",
      bottom: "10%",
      left: "5%",
      width: "300px",
      height: "300px",
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
    }),

    // Core Features Styles
    coreGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "40px",
      marginBottom: "60px",
    },

    coreCard: {
      background: "rgba(255,255,255,0.95)",
      padding: "40px",
      borderRadius: "25px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.2)",
    },

    coreIconWrapper: (gradient) => ({
      width: "80px",
      height: "80px",
      margin: "0 auto 25px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "20px",
      background: gradient,
      color: "#fff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    }),

    coreTitle: {
      fontSize: "1.6rem",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#2c3e50",
      textAlign: "center",
    },

    coreDescription: {
      fontSize: "1rem",
      lineHeight: "1.7",
      color: "#5a6c7d",
      marginBottom: "25px",
      textAlign: "center",
    },

    benefitsList: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },

    benefitItem: {
      display: "flex",
      alignItems: "center",
      fontSize: "0.9rem",
      color: "#667eea",
      fontWeight: "600",
    },

    checkIcon: {
      width: "16px",
      height: "16px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      marginRight: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "10px",
      color: "white",
    },

    // Tech Features Styles
    techGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
    },

    techCard: {
      background: "rgba(255,255,255,0.9)",
      padding: "30px",
      borderRadius: "20px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      textAlign: "center",
    },

    techIconWrapper: (color) => ({
      width: "60px",
      height: "60px",
      margin: "0 auto 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px",
      background: `linear-gradient(135deg, ${color}, ${color}dd)`,
      color: "#fff",
    }),

    techTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#2c3e50",
    },

    techDescription: {
      fontSize: "0.95rem",
      color: "#5a6c7d",
      lineHeight: "1.5",
    },

    // Impact Features Styles
    impactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "35px",
    },

    impactCard: {
      background: "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
      padding: "35px",
      borderRadius: "20px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
      transition: "all 0.4s ease",
      cursor: "pointer",
      position: "relative",
      overflow: "hidden",
    },

    impactIconWrapper: {
      width: "70px",
      height: "70px",
      margin: "0 auto 20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "#fff",
    },

    impactTitle: {
      fontSize: "1.4rem",
      fontWeight: "700",
      marginBottom: "15px",
      color: "#2c3e50",
      textAlign: "center",
    },

    impactDescription: {
      fontSize: "1rem",
      color: "#5a6c7d",
      lineHeight: "1.6",
      marginBottom: "15px",
      textAlign: "center",
    },

    impactStats: {
      fontSize: "0.9rem",
      color: "#667eea",
      fontWeight: "600",
      textAlign: "center",
      fontStyle: "italic",
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'core':
        return (
          <div style={styles.coreGrid}>
            {coreFeatures.map((feature, index) => (
              <div
                key={index}
                style={styles.coreCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-15px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 30px 80px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.coreIconWrapper(feature.gradient)}>
                  {feature.icon}
                </div>
                <h3 style={styles.coreTitle}>{feature.title}</h3>
                <p style={styles.coreDescription}>{feature.description}</p>
                <div style={styles.benefitsList}>
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} style={styles.benefitItem}>
                      <div style={styles.checkIcon}>✓</div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'tech':
        return (
          <div style={styles.techGrid}>
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                style={styles.techCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 20px 50px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.techIconWrapper(feature.color)}>
                  {feature.icon}
                </div>
                <h3 style={styles.techTitle}>{feature.title}</h3>
                <p style={styles.techDescription}>{feature.description}</p>
              </div>
            ))}
          </div>
        );
      
      case 'impact':
        return (
          <div style={styles.impactGrid}>
            {impactFeatures.map((feature, index) => (
              <div
                key={index}
                style={styles.impactCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 25px 60px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.1)";
                }}
              >
                <div style={styles.impactIconWrapper}>
                  {feature.icon}
                </div>
                <h3 style={styles.impactTitle}>{feature.title}</h3>
                <p style={styles.impactDescription}>{feature.description}</p>
                <p style={styles.impactStats}>{feature.stats}</p>
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
      <section id="features" style={styles.container}>
        {/* Background Shapes */}
        <div style={styles.backgroundShapes}>
          <div style={styles.shape1}></div>
          <div style={styles.shape2}></div>
        </div>

        <div style={styles.contentWrapper}>
          {/* Hero Section */}
          <div style={styles.hero}>
            <h1 style={styles.heroTitle}>Powerful Features</h1>
            <p style={styles.heroSubtitle}>
              Discover the innovative technology and comprehensive tools that make FoodLink 
              the most effective platform for connecting food donors with those in need.
            </p>
          </div>

          {/* Tab Navigation */}
          <div style={styles.tabNavigation}>
            <button
              style={styles.tabButton(activeTab === 'core')}
              onClick={() => setActiveTab('core')}
              onMouseEnter={(e) => {
                if (activeTab !== 'core') {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'core') {
                  e.target.style.background = "transparent";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              🎯 Core Features
            </button>
            <button
              style={styles.tabButton(activeTab === 'tech')}
              onClick={() => setActiveTab('tech')}
              onMouseEnter={(e) => {
                if (activeTab !== 'tech') {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'tech') {
                  e.target.style.background = "transparent";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              ⚡ Technology
            </button>
            <button
              style={styles.tabButton(activeTab === 'impact')}
              onClick={() => setActiveTab('impact')}
              onMouseEnter={(e) => {
                if (activeTab !== 'impact') {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.transform = "scale(1.05)";
                }
              }}
              onMouseLeave={(e) => {
                if (activeTab !== 'impact') {
                  e.target.style.background = "transparent";
                  e.target.style.transform = "scale(1)";
                }
              }}
            >
              📊 Impact & Analytics
            </button>
          </div>

          {/* Feature Content */}
          {renderContent()}
        </div>
      </section>

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
            
            .core-grid {
              grid-template-columns: 1fr !important;
              gap: 25px !important;
            }
            
            .tech-grid {
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) !important;
            }
            
            .impact-grid {
              grid-template-columns: 1fr !important;
            }
            
            .core-card, .tech-card, .impact-card {
              margin: 0 10px;
            }
          }

          @media (max-width: 480px) {
            .core-card, .tech-card, .impact-card {
              padding: 25px 20px !important;
            }
            
            .tech-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}
      </style>
    </>
  );
};

export default Features;


