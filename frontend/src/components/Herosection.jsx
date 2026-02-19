
// import React from "react";

// const HeroSection = () => {
//   const foodImage =
    
//     "https://play-lh.googleusercontent.com/0Udfrr6vjLToiLl8mziklywGDqw_VuEj4Kr8ArdDcJ5zJV9alaGrhhE6f_dshVE3Gkg";

//   const styles = {
//     heroContainer: {
//       position: "relative",
//       width: "100vw", // full viewport width
//       height: "100vh", // full viewport height
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       fontFamily: "Poppins, sans-serif",
//       background: "linear-gradient(135deg, #b2becbff, #74b9ffcc)",
//       overflow: "hidden", // prevents scrollbars from minor flex shifts
//       boxSizing: "border-box",
//     },
//     heroContentWrapper: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       flexWrap: "wrap",
//       width: "100%",
//       maxWidth: "1200px", // limits content width
//       padding: "0 50px", // content padding only
//       boxSizing: "border-box",
//       gap: "40px",
//     },
//     content: {
//       flex: 1,
//       minWidth: "300px",
//     },
//     heading: {
//       fontSize: "3rem",
//       color: "#1e293b",
//       fontWeight: "700",
//       marginBottom: "20px",
//       lineHeight: "1.2",
//     },
//     paragraph: {
//       color: "#2d3436",
//       fontSize: "1.2rem",
//       lineHeight: "1.6",
//       marginBottom: "30px",
//     },
//     buttons: {
//       display: "flex",
//       gap: "20px",
//       flexWrap: "wrap",
//     },
//     primaryBtn: {
//       backgroundColor: "#22c55e",
//       color: "white",
//       border: "none",
//       padding: "12px 30px",
//       borderRadius: "8px",
//       fontSize: "1.1rem",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//     },
//     secondaryBtn: {
//       backgroundColor: "transparent",
//       border: "2px solid #22c55e",
//       color: "#22c55e",
//       padding: "10px 28px",
//       borderRadius: "8px",
//       fontSize: "1.1rem",
//       cursor: "pointer",
//       transition: "all 0.3s ease",
//     },
//     imageContainer: {
//       flex: 1,
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       minWidth: "300px",
//     },
//     image: {
//       width: "400px",
//       borderRadius: "16px",
//       boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
//     },
//   };

//   return (
//     <section style={styles.heroContainer}>
//       <div style={styles.heroContentWrapper}>
//         <div style={styles.content}>
//           <h1 style={styles.heading}>
//             Reducing Food Waste, Feeding the Hungry
//           </h1>
//           <p style={styles.paragraph}>
//             FoodLink connects restaurants, events, and individuals with nearby
//             NGOs or people in need — making surplus food reach those who need it
//             most.
//           </p>
//           <div style={styles.buttons}>
//             <button
//               style={styles.primaryBtn}
//               onMouseOver={(e) =>
//                 (e.target.style.backgroundColor = "#16a34a")
//               }
//               onMouseOut={(e) =>
//                 (e.target.style.backgroundColor = "#22c55e")
//               }
//             >
//               Get Started
//             </button>
//             <button
//               style={styles.secondaryBtn}
//               onMouseOver={(e) => {
//                 e.target.style.backgroundColor = "#22c55e";
//                 e.target.style.color = "white";
//               }}
//               onMouseOut={(e) => {
//                 e.target.style.backgroundColor = "transparent";
//                 e.target.style.color = "#22c55e";
//               }}
//             >
//               Learn More
//             </button>
//           </div>
//         </div>

//         <div style={styles.imageContainer}>
//           <img
//             src={foodImage}
//             alt="FoodLink Illustration"
//             style={styles.image}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

import React from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const foodImage =
    "https://play-lh.googleusercontent.com/0Udfrr6vjLToiLl8mziklywGDqw_VuEj4Kr8ArdDcJ5zJV9alaGrhhE6f_dshVE3Gkg";

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
    page: { fontFamily: "Poppins, sans-serif", width: "100%", overflowX: "hidden" },

    // ── Hero ──
    heroContainer: {
      position: "relative",
      width: "100%",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #b2becbff, #74b9ffcc)",
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
      background: "rgba(34,197,94,0.15)",
      color: "#16a34a",
      border: "1px solid rgba(34,197,94,0.4)",
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
      color: "#1e293b",
      fontWeight: "800",
      marginBottom: "20px",
      lineHeight: "1.2",
    },
    headingAccent: { color: "#22c55e" },
    paragraph: {
      color: "#475569",
      fontSize: "1.15rem",
      lineHeight: "1.7",
      marginBottom: "36px",
      maxWidth: "520px",
    },
    buttons: { display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" },
    primaryBtn: {
      backgroundColor: "#22c55e",
      color: "white",
      border: "none",
      padding: "14px 32px",
      borderRadius: "10px",
      fontSize: "1rem",
      fontWeight: "700",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 6px 20px rgba(34,197,94,0.35)",
    },
    secondaryBtn: {
      backgroundColor: "transparent",
      border: "2px solid #22c55e",
      color: "#16a34a",
      padding: "12px 28px",
      borderRadius: "10px",
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
      borderRadius: "24px",
      boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
    },

    // ── How It Works ──
    sectionContainer: {
      padding: "90px 40px",
      background: "#f8fafc",
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
      borderRadius: "20px",
      padding: "36px 28px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
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
      background: "white",
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
      background: "#f8fafc",
      borderRadius: "18px",
      padding: "32px 24px",
      textAlign: "center",
      transition: "transform 0.25s ease, box-shadow 0.25s ease",
      cursor: "default",
    },
    impactIcon: { fontSize: "2.5rem", marginBottom: "16px" },
    impactTitle: { fontSize: "1.1rem", fontWeight: "700", color: "#1e293b", marginBottom: "10px" },
    impactDesc: { fontSize: "0.9rem", color: "#64748b", lineHeight: "1.6" },

    // ── Testimonials ──
    testimonialsSection: {
      padding: "90px 40px",
      background: "linear-gradient(135deg, #ecfdf5, #f0f9ff)",
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
      borderRadius: "20px",
      padding: "32px 28px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
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
      background: "linear-gradient(135deg, #16a34a, #0284c7)",
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
      <section style={s.heroContainer}>
        <div style={s.heroContentWrapper}>
          <div style={s.content}>
            <span style={s.badge}>🌍 Fighting Food Waste Together</span>
            <h1 style={s.heading}>
              Reducing Food Waste,{" "}
              <span style={s.headingAccent}>Feeding the Hungry</span>
            </h1>
            <p style={s.paragraph}>
              FoodLink connects restaurants, events, and individuals with nearby
              NGOs or people in need — making surplus food reach those who need it most.
            </p>
            <div style={s.buttons}>
              <button
                style={s.primaryBtn}
                onClick={() => navigate("/register")}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#16a34a";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#22c55e";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                Get Started — It's Free
              </button>
              <button
                style={s.secondaryBtn}
                onClick={() => navigate("/about")}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "#22c55e";
                  e.target.style.color = "white";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#16a34a";
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          <div style={s.imageContainer}>
            <img src={foodImage} alt="FoodLink Illustration" style={s.image} />
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={s.sectionContainer}>
        <p style={s.sectionTag}>Simple & Fast</p>
        <h2 style={s.sectionTitle}>How FoodLink Works</h2>
        <p style={s.sectionSubtitle}>
          Three easy steps to connect surplus food with people who need it — no complexity, just impact.
        </p>
        <div style={s.stepsGrid}>
          {howItWorksSteps.map((step, i) => (
            <div
              key={i}
              style={s.stepCard(step.color)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.07)";
              }}
            >
              <div style={s.stepNumber(step.color)}>STEP {step.step}</div>
              <div style={s.stepIcon}>{step.icon}</div>
              <h3 style={s.stepTitle}>{step.title}</h3>
              <p style={s.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why FoodLink ── */}
      <section style={s.impactSection}>
        <p style={s.sectionTag}>Why FoodLink</p>
        <h2 style={s.sectionTitle}>Built for Real Impact</h2>
        <p style={s.sectionSubtitle}>
          Every feature we build is driven by a single purpose: getting food to people who need it, faster.
        </p>
        <div style={s.impactGrid}>
          {impactCards.map((card, i) => (
            <div
              key={i}
              style={s.impactCard}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={s.impactIcon}>{card.icon}</div>
              <h3 style={s.impactTitle}>{card.title}</h3>
              <p style={s.impactDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={s.testimonialsSection}>
        <p style={s.sectionTag}>Community Stories</p>
        <h2 style={s.sectionTitle}>What Our Users Say</h2>
        <p style={{ ...s.sectionSubtitle, marginBottom: "50px" }}>
          Real stories from donors, receivers, and volunteers making a difference through FoodLink.
        </p>
        <div style={s.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} style={s.testimonialCard}>
              <p style={s.testimonialText}>"{t.text}"</p>
              <div style={s.testimonialAuthor}>
                <div style={s.testimonialAvatar}>{t.avatar}</div>
                <div>
                  <div style={s.testimonialName}>{t.name}</div>
                  <div style={s.testimonialRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section style={s.ctaSection}>
        <h2 style={s.ctaTitle}>Ready to Make a Difference?</h2>
        <p style={s.ctaSubtitle}>
          Join thousands of donors and receivers already using FoodLink to reduce waste and feed communities.
        </p>
        <div style={s.ctaButtons}>
          <button
            style={s.ctaPrimaryBtn}
            onClick={() => navigate("/register")}
            onMouseOver={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)"; }}
            onMouseOut={(e) => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)"; }}
          >
            Join FoodLink Today
          </button>
          <button
            style={s.ctaSecondaryBtn}
            onClick={() => navigate("/contact")}
            onMouseOver={(e) => { e.target.style.background = "rgba(255,255,255,0.15)"; }}
            onMouseOut={(e) => { e.target.style.background = "transparent"; }}
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
