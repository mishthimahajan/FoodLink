
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const navigate = useNavigate();
  const foodImage =
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80";

  const howItWorksSteps = [
    {
      step: "01",
      title: "List Surplus Food",
      desc: "Donors — restaurants, events, or individuals — post available surplus food with photos, quantity, and pickup details.",
      icon: "🍱",
      color: "#22c55e",
    },
    {
      step: "02",
      title: "Get Matched",
      desc: "FoodLink instantly connects donors with nearby receivers — NGOs, shelters, or families in need — based on location.",
      icon: "🔗",
      color: "#3b82f6",
    },
    {
      step: "03",
      title: "Pick Up & Deliver",
      desc: "Receivers confirm the request and arrange pickup. Food reaches people who need it — no waste, no delay.",
      icon: "🚚",
      color: "#f59e0b",
    },
  ];

  const impactCards = [
    {
      icon: "🌱",
      title: "Zero Food Waste",
      desc: "Every meal listed on FoodLink is a meal saved from the landfill and redirected to someone in need.",
    },
    {
      icon: "🤝",
      title: "Community Driven",
      desc: "Built by and for local communities — empowering neighbours to support each other every single day.",
    },
    {
      icon: "📍",
      title: "Hyperlocal Matching",
      desc: "Smart location-based matching ensures food stays in the community and reaches recipients quickly.",
    },
    {
      icon: "🔒",
      title: "Safe & Verified",
      desc: "All donors and receivers are verified. Food safety guidelines are enforced at every step of the process.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Restaurant Owner",
      text: "FoodLink helped us donate over 200 meals last month instead of throwing them away. It's incredibly easy to use!",
      avatar: "👩‍🍳",
    },
    {
      name: "David K.",
      role: "NGO Coordinator",
      text: "We receive consistent food donations every week. FoodLink has transformed how we serve our community.",
      avatar: "👨‍💼",
    },
    {
      name: "Priya R.",
      role: "Community Volunteer",
      text: "So simple and meaningful. I donate leftover food from events and know it reaches families the same day.",
      avatar: "👩‍🦱",
    },
  ];

  const s = {
    page: {
      fontFamily: "Poppins, sans-serif",
      width: "100%",
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
      overflowX: "hidden",
    },

    // ── Hero ──
    heroContainer: {
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #a5b4fc 0%, #f0abfc 100%)",
      overflow: "hidden",
      boxSizing: "border-box",
      padding: "60px 20px",
    },
    heroContentWrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      width: "100%",
      maxWidth: "1200px",
      padding: "0 50px",
      boxSizing: "border-box",
      gap: "40px",
    },
    badge: {
      display: "inline-block",
      background: "rgba(99,102,241,0.15)",
      color: "#6366f1",
      border: "1px solid rgba(99,102,241,0.4)",
      borderRadius: "50px",
      padding: "6px 18px",
      fontSize: "0.85rem",
      fontWeight: "600",
      marginBottom: "20px",
      letterSpacing: "0.05em",
    },
    content: { flex: 1, minWidth: "300px" },
    heading: {
      fontSize: "3.2rem",
      color: "#312e81",
      fontWeight: "800",
      marginBottom: "20px",
      lineHeight: "1.2",
      letterSpacing: "-0.02em",
    },
    headingAccent: { color: "#f472b6" },
    paragraph: {
      color: "#6b7280",
      fontSize: "1.15rem",
      lineHeight: "1.7",
      marginBottom: "36px",
      maxWidth: "520px",
    },
    buttons: { display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" },
    primaryBtn: {
      background: "linear-gradient(90deg, #6366f1 0%, #f472b6 100%)",
      color: "white",
      border: "none",
      padding: "14px 32px",
      borderRadius: "12px",
      fontSize: "1rem",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 6px 20px rgba(99,102,241,0.25)",
    },
    secondaryBtn: {
      backgroundColor: "white",
      border: "2px solid #f472b6",
      color: "#f472b6",
      padding: "12px 28px",
      borderRadius: "12px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
    imageContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "300px",
    },
    image: {
      width: "420px",
      maxWidth: "100%",
      borderRadius: "32px",
      boxShadow: "0 20px 60px rgba(244,114,182,0.18)",
      border: "6px solid #fff",
    },

    // ── How It Works ──
    sectionContainer: {
      padding: "90px 40px",
      background: "linear-gradient(135deg, #f0abfc 0%, #a5b4fc 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    sectionTag: {
      fontSize: "0.8rem",
      fontWeight: "700",
      letterSpacing: "0.12em",
      color: "#22c55e",
      textTransform: "uppercase",
      marginBottom: "10px",
    },
    sectionTitle: {
      fontSize: "2.4rem",
      fontWeight: "800",
      color: "#1e293b",
      textAlign: "center",
      marginBottom: "16px",
    },
    sectionSubtitle: {
      fontSize: "1.05rem",
      color: "#64748b",
      textAlign: "center",
      maxWidth: "560px",
      lineHeight: "1.7",
      marginBottom: "60px",
    },
    stepsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "30px",
      maxWidth: "1100px",
      width: "100%",
    },
    stepCard: (color) => ({
      background: "white",
      borderRadius: "24px",
      padding: "36px 28px",
      boxShadow: `0 4px 24px ${color}33`,
      borderTop: `4px solid ${color}`,
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
    }),
    stepNumber: (color) => ({
      fontSize: "0.8rem",
      fontWeight: "700",
      color,
      letterSpacing: "0.1em",
      marginBottom: "14px",
    }),
    stepIcon: { fontSize: "2.8rem", marginBottom: "16px" },
    stepTitle: { fontSize: "1.2rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" },
    stepDesc: { fontSize: "0.95rem", color: "#64748b", lineHeight: "1.65" },

    // ── Impact Cards ──
    impactSection: {
      padding: "90px 40px",
      background: "linear-gradient(135deg, #a5b4fc 0%, #f0abfc 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    impactGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "24px",
      maxWidth: "1100px",
      width: "100%",
    },
    impactCard: {
      background: "#fff",
      borderRadius: "22px",
      padding: "32px 24px",
      textAlign: "center",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
      cursor: "pointer",
      boxShadow: "0 4px 20px #a5b4fc33",
    },
    impactIcon: { fontSize: "2.5rem", marginBottom: "16px" },
    impactTitle: { fontSize: "1.1rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" },
    impactDesc: { fontSize: "0.9rem", color: "#64748b", lineHeight: "1.6" },

    // ── Testimonials ──
    testimonialsSection: {
      padding: "90px 40px",
      background: "linear-gradient(135deg, #f0abfc 0%, #a5b4fc 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    testimonialsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px",
      maxWidth: "1100px",
      width: "100%",
    },
    testimonialCard: {
      background: "white",
      borderRadius: "24px",
      padding: "32px 28px",
      boxShadow: "0 4px 20px #f472b633",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
      cursor: "pointer",
    },
    testimonialText: {
      fontSize: "0.97rem",
      color: "#475569",
      lineHeight: "1.7",
      marginBottom: "24px",
      fontStyle: "italic",
    },
    testimonialAuthor: { display: "flex", alignItems: "center", gap: "14px" },
    testimonialAvatar: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #22c55e, #3b82f6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "1.5rem",
    },
    testimonialName: { fontSize: "0.95rem", fontWeight: "700", color: "#1e293b" },
    testimonialRole: { fontSize: "0.82rem", color: "#94a3b8" },

    // ── CTA ──
    ctaSection: {
      padding: "90px 40px",
      background: "linear-gradient(135deg, #6366f1 0%, #f472b6 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    ctaTitle: {
      fontSize: "2.6rem",
      fontWeight: "800",
      color: "white",
      marginBottom: "18px",
      maxWidth: "700px",
    },
    ctaSubtitle: {
      fontSize: "1.1rem",
      color: "rgba(255,255,255,0.85)",
      marginBottom: "40px",
      maxWidth: "560px",
      lineHeight: "1.7",
    },
    ctaButtons: { display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" },
    ctaPrimaryBtn: {
      background: "white",
      color: "#16a34a",
      border: "none",
      padding: "16px 36px",
      borderRadius: "12px",
      fontSize: "1rem",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
    },
    ctaSecondaryBtn: {
      background: "transparent",
      color: "white",
      border: "2px solid rgba(255,255,255,0.6)",
      padding: "14px 34px",
      borderRadius: "12px",
      fontSize: "1rem",
      fontWeight: "600",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={s.page}>
      {/* ── Hero Section ── */}
      <motion.section style={s.heroContainer} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <div style={s.heroContentWrapper}>
          <motion.div style={s.content} initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <span style={s.badge}>🌍 Fighting Food Waste Together</span>
            <h1 style={s.heading}>
              Reducing Food Waste,{" "}
              <span style={s.headingAccent}>Feeding the Hungry</span>
            </h1>
            <p style={s.paragraph}>
              FoodLink connects restaurants, events, and individuals with nearby NGOs or people in need — making surplus food reach those who need it most.
            </p>
            <div style={s.buttons}>
              <motion.button
                style={s.primaryBtn}
                whileHover={{ scale: 1.07, boxShadow: "0 12px 32px #f472b633" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/register")}
              >
                Get Started — It's Free
              </motion.button>
              <motion.button
                style={s.secondaryBtn}
                whileHover={{ backgroundColor: "#f472b6", color: "white", borderColor: "#6366f1" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/about")}
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          <motion.div style={s.imageContainer} initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <motion.img src={foodImage} alt="FoodLink Illustration" style={s.image} whileHover={{ scale: 1.04, boxShadow: "0 24px 80px #6366f133" }} />
          </motion.div>
        </div>
      </motion.section>

      {/* ── How It Works ── */}
      <motion.section style={s.sectionContainer} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p style={s.sectionTag}>Simple & Fast</p>
        <h2 style={s.sectionTitle}>How FoodLink Works</h2>
        <p style={s.sectionSubtitle}>
          Three easy steps to connect surplus food with people who need it — no complexity, just impact.
        </p>
        <div style={s.stepsGrid}>
          {howItWorksSteps.map((step, i) => (
            <motion.div
              key={i}
              style={s.stepCard(step.color)}
              whileHover={{ scale: 1.06, boxShadow: `0 12px 40px ${step.color}55` }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div style={s.stepNumber(step.color)}>STEP {step.step}</div>
              <div style={s.stepIcon}>{step.icon}</div>
              <h3 style={s.stepTitle}>{step.title}</h3>
              <p style={s.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Why FoodLink ── */}
      <motion.section style={s.impactSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p style={s.sectionTag}>Why FoodLink</p>
        <h2 style={s.sectionTitle}>Built for Real Impact</h2>
        <p style={s.sectionSubtitle}>
          Every feature we build is driven by a single purpose: getting food to people who need it, faster.
        </p>
        <div style={s.impactGrid}>
          {impactCards.map((card, i) => (
            <motion.div
              key={i}
              style={s.impactCard}
              whileHover={{ scale: 1.06, boxShadow: "0 10px 30px #6366f133" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div style={s.impactIcon}>{card.icon}</div>
              <h3 style={s.impactTitle}>{card.title}</h3>
              <p style={s.impactDesc}>{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── Testimonials ── */}
      <motion.section style={s.testimonialsSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <p style={s.sectionTag}>Community Stories</p>
        <h2 style={s.sectionTitle}>What Our Users Say</h2>
        <p style={{ ...s.sectionSubtitle, marginBottom: "50px" }}>
          Real stories from donors, receivers, and volunteers making a difference through FoodLink.
        </p>
        <div style={s.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              style={s.testimonialCard}
              whileHover={{ scale: 1.05, boxShadow: "0 12px 32px #f472b633" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <p style={s.testimonialText}>"{t.text}"</p>
              <div style={s.testimonialAuthor}>
                <div style={s.testimonialAvatar}>{t.avatar}</div>
                <div>
                  <div style={s.testimonialName}>{t.name}</div>
                  <div style={s.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── CTA Section ── */}
      <motion.section style={s.ctaSection} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h2 style={s.ctaTitle}>Ready to Make a Difference?</h2>
        <p style={s.ctaSubtitle}>
          Join thousands of donors and receivers already using FoodLink to reduce waste and feed communities.
        </p>
        <div style={s.ctaButtons}>
          <motion.button
            style={s.ctaPrimaryBtn}
            whileHover={{ scale: 1.07, boxShadow: "0 12px 32px #6366f133" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/register")}
          >
            Join FoodLink Today
          </motion.button>
          <motion.button
            style={s.ctaSecondaryBtn}
            whileHover={{ backgroundColor: "#f472b6", color: "white", borderColor: "#6366f1" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default HeroSection;
