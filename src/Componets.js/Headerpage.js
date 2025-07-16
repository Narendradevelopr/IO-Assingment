import React from "react";
import Clip from "../BackIMG/Clip.png"; 
import Vector from "../BackIMG/Vector.png"

function HeaderPage() {
  return (
    <div style={styles.app}>
      <header style={{...styles.header ,backgroundImage:`url(${Vector})`}}>
        <div style={styles.logo}>BRAND LOGO</div>
        <nav>
          <ul style={styles.menu}>
            <li style={{ ...styles.menuItem, ...styles.activeMenuItem }}>MENU 01</li>
            <li style={styles.menuItem}>MENU 02</li>
            <li style={styles.menuItem}>MENU 03</li>
            <li style={styles.menuItem}>MENU 04</li>
            <li style={styles.menuItem}>MENU 05</li>
            <li style={styles.menuItem}>MENU 06</li>
          </ul>
        </nav>
        <div style={styles.scallop}></div>
      </header>

      <section style={{ ...styles.hero, backgroundImage: `url(${Clip})` }}>

        <div style={styles.arrowLeft}>❮</div>
        <div style={styles.arrowRight}>❯</div>
        <div style={styles.headline}>LOREM IPSUM <br /> DOLOR SIT AMET</div>
        <div style={styles.subheadline}>
          Lorem ipsum dolor sit amet consectetur. Turpis nec bibendum vulputate amet vulputate
          ac. Faucibus nec rhoncus sed convallis nec quis.
        </div>
        <button style={styles.button}>SHOP NOW</button>
        <div style={styles.greenOverlay}></div>
      </section>
    </div>
  );
}

const styles = {
  app: {
    margin: 0,
    padding: 0,
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
  },
  header: {
    // backgroundColor: 'red',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
    borderBottom: '10px solid #fff',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '20px',
  },
  menu: {
    listStyle: 'none',
    display: 'flex',
    gap: '25px',
    margin: 0,
    padding: 0,
  },
  menuItem: {
    cursor: 'pointer',
    fontWeight: 500,
  },
  activeMenuItem: {
    border: '2px solid black',
    borderRadius: '50%',
    padding: '6px 18px',
  },
  scallop: {
    position: 'absolute',
    bottom: '-20px',
    left: 0,
    width: '100%',
    height: '40px',
    background: 'white',
    backgroundImage:
      'radial-gradient(circle at 20px 20px, white 20px, transparent 21px)',
    backgroundSize: '40px 40px',
    backgroundRepeat: 'repeat-x',
    zIndex: -1,
  },
  hero: {
    backgroundColor: '#2ecc71',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: 'calc(100vh - 100px)',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
    paddingTop: '80px',
    overflow: 'hidden',
  },
  headline: {
    fontSize: '48px',
    fontWeight: 'bold',
    zIndex: 2,
    position: 'relative',
  },
  subheadline: {
    fontSize: '16px',
    maxWidth: '500px',
    margin: '20px auto',
    color: 'white',
    zIndex: 2,
    position: 'relative',
  },
  button: {
    backgroundColor: '#ff3cad',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
    zIndex: 2,
    position: 'relative',
  },
  arrowLeft: {
    position: 'absolute',
    top: '50%',
    left: '60px',
    transform: 'translateY(-50%)',
    backgroundColor: '#ff3cad',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '24px',
    lineHeight: '40px',
    color: 'white',
    zIndex: 2,
  },
  arrowRight: {
    position: 'absolute',
    top: '50%',
    right: '60px',
    transform: 'translateY(-50%)',
    backgroundColor: '#ff3cad',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '24px',
    lineHeight: '40px',
    color: 'white',
    zIndex: 2,
  },
  greenOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '60px',
    background:
      'radial-gradient(circle at 20px 20px, #2ecc71 40px, transparent 41px), radial-gradient(circle at 60px 40px, #2ecc71 40px, transparent 41px), radial-gradient(circle at 120px 20px, #2ecc71 40px, transparent 41px)',
    backgroundSize: '80px 80px',
    backgroundRepeat: 'repeat-x',
    zIndex: 2,
  },
};

export default HeaderPage;
