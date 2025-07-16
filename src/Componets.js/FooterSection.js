import React from "react";

function FooterSection() {
  return (
    <div style={styles.footerWrapper}>

      <div style={styles.centerText}>Craft your <br /> tales!</div>

      <div style={styles.footerContent}>
        <div style={styles.newsletter}>
          <div style={styles.newsletterTitle}>Subscribe to the<br />io Tales Newsletter</div>
          <div style={styles.newsletterDesc}>
            Latest news, insights, recommendations and updates directly to your inbox.
          </div>
          <button style={styles.subscribeBtn}>SUBSCRIBE</button>
        </div>

        <div style={styles.footerMenus}>
          {["Products", "Company", "Resources", "Social"].map((title, index) => (
            <div key={index}>
              <div style={styles.menuTitle}>{title}</div>
              <div style={styles.menuItems}>
                {["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5"].map((item, i) => (
                  <div key={i}>{item}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={styles.bottomBar}>
        <div style={styles.bottomText}>© 2025 Stack Krea. All rights reserved.</div>
        <div style={styles.socialIcons}>
          {["VISA", "MC", "PAYPAL", "G", "F", "IN"].map((icon, index) => (
            <span key={index} style={styles.iconBox}>{icon}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  footerWrapper: {
    backgroundColor: "#222",
    color: "#b4adadff",
    padding: "0 40px 80px",
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  centerText: {
    textAlign: "center",
    fontSize: "68px",
    fontWeight: "bold",
    color: "#696363ff",
    padding: "40px 0 60px",
  },
  footerContent: {
    display: "flex",
    borderTop: "1px solid #555",
    paddingTop: "60px",
  },
  newsletter: {
    flex: "1 1 300px",
    marginBottom: "40px",
  },
  newsletterTitle: {
    fontWeight: "bold",
    fontSize: "28px",
    marginBottom: "13px",
  },
  newsletterDesc: {
    fontSize: "18px",
    maxWidth: "300px",
    marginBottom: "20px",
  },
  subscribeBtn: {
    backgroundColor: "#2dff94",
    padding: "10px 30px",
    borderRadius: "20px",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer",
  },
  footerMenus: {
    display: "flex",
    gap: "60px",
    flexWrap: "wrap",
    flex: "2.3",
  },
  menuTitle: {
    fontWeight: "bold",
    marginBottom: "14px",
  },
  menuItems: {
    fontSize: "14px",
    lineHeight: "22px",
  },
  bottomBar: {
    borderTop: "1px solid #444",
    paddingTop: "20px",
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    fontSize: "12px",
  },
  socialIcons: {
    display: "flex",
    gap: "15px",
  },
  iconBox: {
    background: "#444",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
    fontSize: "10px",
  },
};

export default FooterSection;
