import React, { useState, useEffect } from "react";

const sections = [
  {
    id: "acceptance",
    icon: "✅",
    title: "Acceptance of Terms",
    content: `By accessing or using FoodLink ("the Platform"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use the Platform. These terms apply to all visitors, users, and others who access or use FoodLink.`,
  },
  {
    id: "description",
    icon: "📋",
    title: "Description of Service",
    content: `FoodLink is a food redistribution platform that connects food donors (restaurants, households, organizations) with recipients (NGOs, shelters, individuals in need). We facilitate the sharing and redistribution of surplus food to minimize waste and address food insecurity. FoodLink acts solely as an intermediary and is not responsible for the quality, safety, or availability of food items listed on the platform.`,
  },
  {
    id: "eligibility",
    icon: "👤",
    title: "User Eligibility & Accounts",
    content: `You must be at least 18 years old to create an account. By registering, you represent that all information you provide is accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. FoodLink reserves the right to terminate accounts that violate these terms.`,
  },
  {
    id: "conduct",
    icon: "🤝",
    title: "User Conduct",
    content: `You agree not to use FoodLink to post false, misleading, or fraudulent food listings. You agree not to engage in any activity that could harm, disable, or impair the Platform. You agree not to collect or harvest data from the Platform without our written consent. You agree not to use the Platform for any unlawful purpose. FoodLink reserves the right to remove any content and suspend any user who violates these conduct standards.`,
  },
  {
    id: "food-safety",
    icon: "🍽️",
    title: "Food Safety & Liability",
    content: `Donors are solely responsible for ensuring that all food items listed are safe for consumption and comply with applicable food safety regulations. FoodLink does not inspect, verify, or guarantee the quality or safety of any food posted on the Platform. Recipients accept food at their own risk. FoodLink shall not be liable for any illness, injury, or damages resulting from the consumption of food obtained through the Platform. We strongly encourage all parties to follow standard food safety guidelines.`,
  },
  {
    id: "privacy",
    icon: "🔒",
    title: "Privacy & Data",
    content: `Your use of FoodLink is also governed by our Privacy Policy. We collect and process personal data (name, email, location) to operate the Platform. We do not sell your personal data to third parties. We may share limited data with partners necessary to provide our services. By using FoodLink you consent to such processing. You have the right to access, correct, or delete your personal data at any time by contacting us.`,
  },
  {
    id: "intellectual-property",
    icon: "©️",
    title: "Intellectual Property",
    content: `All content on FoodLink, including but not limited to text, graphics, logos, and software, is the property of FoodLink or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission. User-generated content (listings, reviews, messages) remains your property; however, by posting it, you grant FoodLink a non-exclusive, royalty-free license to use, display, and distribute that content on the Platform.`,
  },
  {
    id: "termination",
    icon: "🚫",
    title: "Termination",
    content: `FoodLink reserves the right to suspend or terminate your access to the Platform at any time, with or without cause, and with or without notice. Upon termination, your right to use the Platform ceases immediately. All provisions of these Terms that by their nature should survive termination (including ownership, warranty disclaimers, indemnity, and liability limitations) shall survive termination.`,
  },
  {
    id: "disclaimer",
    icon: "⚠️",
    title: "Disclaimer of Warranties",
    content: `FoodLink is provided on an "as is" and "as available" basis without any warranties of any kind, express or implied. We do not warrant that the Platform will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties about the accuracy, reliability, completeness, or timeliness of the content. Your use of the Platform is entirely at your own risk.`,
  },
  {
    id: "changes",
    icon: "🔄",
    title: "Changes to Terms",
    content: `FoodLink reserves the right to modify these Terms of Service at any time. We will provide notice of significant changes by updating the "Last Updated" date at the top of this page and, where appropriate, sending you an email notification. Your continued use of the Platform after any such changes constitutes your acceptance of the new Terms. We encourage you to review these Terms periodically.`,
  },
  {
    id: "contact",
    icon: "📬",
    title: "Contact Us",
    content: `If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us at support@foodlink.org or write to us at: FoodLink, 123 Community Drive, Food City, FC 00000. We aim to respond to all inquiries within 2 business days.`,
  },
];

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
    setTimeout(() => setIsVisible(true), 100);

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const styles = {
    progressBar: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "3px",
      width: `${scrollProgress}%`,
      background: "linear-gradient(90deg, #22c55e, #16a34a)",
      zIndex: 9999,
      transition: "width 0.1s linear",
    },
    page: {
      width: "100vw",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
      boxSizing: "border-box",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      overflow: "hidden",
      paddingTop: "80px",
    },
    heroBg: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "420px",
      background: "linear-gradient(135deg, #1e3a5f 0%, #0f4c81 50%, #1a237e 100%)",
      clipPath: "ellipse(110% 100% at 50% 0%)",
      zIndex: 0,
    },
    glowCircle1: {
      position: "absolute",
      top: "-120px",
      right: "-100px",
      width: "400px",
      height: "400px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, transparent 70%)",
      zIndex: 0,
      pointerEvents: "none",
    },
    glowCircle2: {
      position: "absolute",
      top: "200px",
      left: "-150px",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
      zIndex: 0,
      pointerEvents: "none",
    },
    container: {
      position: "relative",
      zIndex: 1,
      maxWidth: "1000px",
      margin: "0 auto",
      padding: isMobile ? "0 16px 60px" : "0 24px 80px",
    },
    hero: {
      textAlign: "center",
      padding: isMobile ? "48px 0 36px" : "72px 0 48px",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(30px)",
      transition: "opacity 0.7s ease, transform 0.7s ease",
    },
    badge: {
      display: "inline-block",
      background: "rgba(34,197,94,0.15)",
      border: "1px solid rgba(34,197,94,0.4)",
      color: "#4ade80",
      fontSize: "0.75rem",
      fontWeight: "600",
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      padding: "6px 16px",
      borderRadius: "999px",
      marginBottom: "20px",
    },
    heroTitle: {
      fontSize: isMobile ? "2.2rem" : "3.2rem",
      fontWeight: "800",
      color: "#f8fafc",
      margin: "0 0 16px",
      lineHeight: 1.2,
    },
    heroHighlight: {
      background: "linear-gradient(135deg, #22c55e, #4ade80)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    heroSub: {
      color: "#94a3b8",
      fontSize: isMobile ? "0.95rem" : "1.05rem",
      maxWidth: "600px",
      margin: "0 auto 28px",
      lineHeight: 1.7,
    },
    metaRow: {
      display: "flex",
      justifyContent: "center",
      gap: isMobile ? "12px" : "24px",
      flexWrap: "wrap",
    },
    metaChip: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "999px",
      padding: "6px 14px",
      color: "#cbd5e1",
      fontSize: "0.82rem",
    },
    tocCard: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "16px",
      padding: isMobile ? "20px" : "28px 32px",
      marginBottom: "36px",
      backdropFilter: "blur(10px)",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
    },
    tocTitle: {
      color: "#f1f5f9",
      fontWeight: "700",
      fontSize: "0.95rem",
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      marginBottom: "16px",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    },
    tocGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
      gap: "8px",
    },
    tocItem: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 14px",
      borderRadius: "10px",
      color: "#94a3b8",
      fontSize: "0.88rem",
      cursor: "pointer",
      transition: "background 0.2s, color 0.2s",
      textDecoration: "none",
      border: "1px solid transparent",
    },
    tocItemHover: {
      background: "rgba(34,197,94,0.1)",
      border: "1px solid rgba(34,197,94,0.25)",
      color: "#4ade80",
    },
    sectionsWrapper: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    sectionCard: (index, isActive) => ({
      background: isActive
        ? "rgba(34,197,94,0.06)"
        : "rgba(255,255,255,0.03)",
      border: isActive
        ? "1px solid rgba(34,197,94,0.35)"
        : "1px solid rgba(255,255,255,0.08)",
      borderRadius: "14px",
      overflow: "hidden",
      transition: "border 0.25s, box-shadow 0.25s, background 0.25s",
      boxShadow: isActive ? "0 4px 32px rgba(34,197,94,0.08)" : "none",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(16px)",
      transitionDelay: `${0.3 + index * 0.05}s`,
    }),
    sectionHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: isMobile ? "16px 18px" : "20px 24px",
      cursor: "pointer",
      userSelect: "none",
    },
    sectionHeaderLeft: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },
    sectionIcon: {
      fontSize: "1.4rem",
      width: "40px",
      height: "40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "rgba(34,197,94,0.1)",
      borderRadius: "10px",
      flexShrink: 0,
    },
    sectionTitle: {
      color: "#f1f5f9",
      fontWeight: "600",
      fontSize: isMobile ? "0.95rem" : "1rem",
      margin: 0,
    },
    chevron: (isActive) => ({
      color: isActive ? "#22c55e" : "#64748b",
      fontSize: "1.1rem",
      transition: "transform 0.3s, color 0.3s",
      transform: isActive ? "rotate(180deg)" : "rotate(0deg)",
      flexShrink: 0,
    }),
    sectionBody: {
      padding: isMobile ? "0 18px 18px" : "0 24px 22px",
      color: "#94a3b8",
      fontSize: "0.93rem",
      lineHeight: "1.8",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      paddingTop: "16px",
    },
    footer: {
      textAlign: "center",
      marginTop: "48px",
      padding: isMobile ? "24px 16px" : "32px",
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(255,255,255,0.08)",
      borderRadius: "16px",
      opacity: isVisible ? 1 : 0,
      transition: "opacity 0.7s ease 0.8s",
    },
    footerTitle: {
      color: "#f1f5f9",
      fontWeight: "700",
      fontSize: isMobile ? "1rem" : "1.1rem",
      marginBottom: "10px",
    },
    footerDesc: {
      color: "#64748b",
      fontSize: "0.88rem",
      marginBottom: "20px",
    },
    footerBtn: {
      display: "inline-block",
      background: "linear-gradient(135deg, #22c55e, #16a34a)",
      color: "#fff",
      fontWeight: "600",
      fontSize: "0.9rem",
      padding: "10px 28px",
      borderRadius: "999px",
      textDecoration: "none",
      boxShadow: "0 4px 16px rgba(34,197,94,0.3)",
      transition: "opacity 0.2s, transform 0.2s",
      cursor: "pointer",
      border: "none",
    },
  };

  const [hoveredToc, setHoveredToc] = useState(null);

  const toggleSection = (id) => {
    setActiveSection((prev) => (prev === id ? null : id));
    setTimeout(() => {
      const el = document.getElementById(`section-${id}`);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <div style={styles.page}>
      {/* Scroll progress */}
      <div style={styles.progressBar} />

      {/* Background decorations */}
      <div style={styles.heroBg} />
      <div style={styles.glowCircle1} />
      <div style={styles.glowCircle2} />

      <div style={styles.container}>
        {/* Hero */}
        <div style={styles.hero}>
          <div style={styles.badge}>Legal Document</div>
          <h1 style={styles.heroTitle}>
            Terms of{" "}
            <span style={styles.heroHighlight}>Service</span>
          </h1>
          <p style={styles.heroSub}>
            Please read these terms carefully before using FoodLink. By using
            our platform you agree to be bound by these terms.
          </p>
          <div style={styles.metaRow}>
            <div style={styles.metaChip}>
              <span>📅</span>
              <span>Last Updated: February 22, 2026</span>
            </div>
            <div style={styles.metaChip}>
              <span>📄</span>
              <span>{sections.length} Sections</span>
            </div>
            <div style={styles.metaChip}>
              <span>🌐</span>
              <span>Version 2.0</span>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div style={styles.tocCard}>
          <div style={styles.tocTitle}>
            <span>🗂️</span> Table of Contents
          </div>
          <div style={styles.tocGrid}>
            {sections.map((s, i) => (
              <div
                key={s.id}
                style={{
                  ...styles.tocItem,
                  ...(hoveredToc === s.id ? styles.tocItemHover : {}),
                }}
                onMouseEnter={() => setHoveredToc(s.id)}
                onMouseLeave={() => setHoveredToc(null)}
                onClick={() => toggleSection(s.id)}
              >
                <span style={{ fontSize: "1rem" }}>{s.icon}</span>
                <span>
                  {i + 1}. {s.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections */}
        <div style={styles.sectionsWrapper}>
          {sections.map((section, index) => {
            const isActive = activeSection === section.id;
            return (
              <div
                key={section.id}
                id={`section-${section.id}`}
                style={styles.sectionCard(index, isActive)}
              >
                <div
                  style={styles.sectionHeader}
                  onClick={() => toggleSection(section.id)}
                >
                  <div style={styles.sectionHeaderLeft}>
                    <div style={styles.sectionIcon}>{section.icon}</div>
                    <h2 style={styles.sectionTitle}>
                      {index + 1}. {section.title}
                    </h2>
                  </div>
                  <span style={styles.chevron(isActive)}>▼</span>
                </div>
                {isActive && (
                  <div style={styles.sectionBody}>{section.content}</div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div style={styles.footer}>
          <div style={styles.footerTitle}>Have questions about our terms?</div>
          <div style={styles.footerDesc}>
            Our team is here to help clarify anything you need.
          </div>
          <a href="/contact" style={styles.footerBtn}>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
