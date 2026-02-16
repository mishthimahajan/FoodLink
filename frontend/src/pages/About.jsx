import React, { useEffect, useState } from "react";

const About = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.overflowX = "hidden";
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Welcome " + formData.name + " 🎉");
    setShowForm(false);
    setFormData({ name: "", email: "", role: "" });
  };

  const styles = {
    aboutContainer: {
      width: "100vw",
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      background: "linear-gradient(135deg, #1e3c72, #2a5298)",
      boxSizing: "border-box",
      fontFamily: "'Poppins', sans-serif",
    },

    aboutCard: {
      width: "100%",
      maxWidth: "1100px",
      padding: "60px 40px",
      borderRadius: "25px",
      background: "rgba(255, 255, 255, 0.08)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      color: "#fff",
      textAlign: "center",
      transition: "all 0.4s ease",
    },

    heading: {
      fontSize: "3.2rem",
      fontWeight: "800",
      marginBottom: "20px",
      background: "linear-gradient(90deg, #00f2fe, #4facfe)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },

    paragraph: {
      fontSize: "1.2rem",
      lineHeight: "1.9",
      marginBottom: "35px",
      color: "#e6f1ff",
    },

    featureGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "25px",
      marginTop: "20px",
    },

    featureCard: {
      padding: "25px",
      borderRadius: "18px",
      background: "rgba(255,255,255,0.12)",
      transition: "all 0.3s ease",
      cursor: "pointer",
      boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      fontWeight: "600",
    },

    impactBox: {
      marginTop: "50px",
      padding: "25px",
      borderRadius: "18px",
      background: "linear-gradient(135deg, #00c6ff, #0072ff)",
      fontWeight: "600",
      fontSize: "1.2rem",
      boxShadow: "0 12px 30px rgba(0,0,0,0.4)",
      transition: "transform 0.3s ease",
    },

    button: {
      marginTop: "40px",
      padding: "14px 40px",
      borderRadius: "50px",
      border: "none",
      background: "linear-gradient(90deg, #ff9966, #ff5e62)",
      color: "#fff",
      fontWeight: "700",
      fontSize: "1rem",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
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

  return (
    <>
      <section style={styles.aboutContainer}>
        <div
          style={styles.aboutCard}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "scale(1)")
          }
        >
          <h2 style={styles.heading}>About FoodLink</h2>

          <p style={styles.paragraph}>
            FoodLink connects restaurants, events, and individuals with NGOs
            and people in need. Our mission is to reduce food waste while
            feeding the hungry and building stronger communities.
          </p>

          <div style={styles.featureGrid}>
            {[
              "Easy Food Listing for Donors",
              "Real-time Food Browsing",
              "Smart Request Management",
              "Secure Authentication & Roles",
              "Donation Tracking Dashboard",
              "Fully Mobile-Friendly UI",
            ].map((feature, index) => (
              <div
                key={index}
                style={styles.featureCard}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #00f2fe, #4facfe)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.12)";
                }}
              >
                {feature}
              </div>
            ))}
          </div>

          <div
            style={styles.impactBox}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            🌍 Since launch, FoodLink has redistributed hundreds of meals —
            ensuring no food is wasted and no one goes hungry.
          </div>

          <button
            style={styles.button}
            onClick={() => setShowForm(true)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            Join Us
          </button>
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
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </>
  );
};

export default About;
