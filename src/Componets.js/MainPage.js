import React from "react";
import logo from "../Componets.js/logo.png"




function MainPage(){

  return (
    <div style={styles.app}>
      <div style={{ ...styles.decorative, ...styles.decoLeft }}>🎵</div>
      <div style={{ ...styles.decorative, ...styles.decoRight }}>🌟</div>

      
      <div style={styles.headerText}>LOREM IPSUM DOLOR</div>
      <div style={styles.subText}>
        Lorem ipsum dolor sit amet consectetur. Turpis nec blandit aliquam
        mauris.
      </div>
      <div style={styles.underline}></div>

      
      <div style={styles.menuBar}>
        <div style={{ ...styles.menuItem, ...styles.activeMenuItem }}>Menu 01</div>
        <div style={styles.menuItem}>Menu 02</div>
        <div style={styles.menuItem}>Menu 03</div>
        <div style={styles.menuItem}>Menu 04</div>
        <div style={styles.menuItem}>Menu 05</div>
      </div>

      <div style={styles.productSection}>
        <div style={styles.circle}>
          <img
            src={logo}
            alt="product"
            style={styles.productImg}
          />
          <div style={{ ...styles.arrow, ...styles.arrowLeft }}>❮</div>
          <div style={{ ...styles.arrow, ...styles.arrowRight }}>❯</div>
          <div style={styles.priceTag}>₹Price</div>
          <div style={styles.heart}>❤️</div>
          <div style={styles.priceText}>Price Goes here</div>
        </div>
        <div style={styles.shadowBoxText}>SHADOW BOX</div>
        <div style={styles.productTitle}>Lorem ipsum dolor sit amet consectetur.</div>
        <div style={styles.productDesc}>
          Lorem ipsum dolor sit amet consectetur. Duis non sed blandit ullamcorper
          in. Sit adipiscing id sollicitudin erat. Nulla eu massa risus non fringilla
          montes molestie vel. Ali massa sagittis suspendisse venenatis dictum.
        </div>
        <button style={styles.shopBtn}>SHOP NOW</button>
      </div>
    </div>
  );
}
 const styles = {
    app: {
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      backgroundColor: '#f542a7',
      color: 'white',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '60px',
    },
    headerText: {
      fontSize: '28px',
      fontWeight: 'bold',
      marginTop: '70px',
    },
    subText: {
      maxWidth: '500px',
      margin: '10px auto',
    },
    underline: {
      width: '100px',
      height: '4px',
      backgroundColor: '#d7d428ff',
      margin: '10px auto 20px',
    },
    menuBar: {
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      marginBottom: '60px',
    },
    menuItem: {
      backgroundColor: '#d72885',
      padding: '8px 20px',
      borderRadius: '90px',
      fontSize: '14px',
      cursor: 'pointer',
    },
    activeMenuItem: {
      backgroundColor: '#a5f745',
      color: '#000',
    },
    productSection: {
      position: 'relative',
      zIndex: 2,
    },
    circle: {
      width: '400px',
      height: '400px',
      backgroundColor: '#e3269b',
      borderRadius: '60%',
      margin: 'auto',
      position: 'relative',
    },
    productImg: {
      width: '380px',
      marginTop: '60px',
    },
    arrow: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: '#1f6de5',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      lineHeight: '40px',
      fontSize: '20px',
      fontWeight: 'bold',
      zIndex: 3,
    },
    arrowLeft: {
    },
    arrowRight: {
      right: 'calc(50% - 200px)',
    },
    priceTag: {
      position: 'absolute',
      top: '0%',
      right: '15%',
      backgroundColor: '#8af745',
      borderRadius: '50%',
      width: '89px',
      height: '70px',
      lineHeight: '69px',
      color: '#000',
      fontWeight: 'bold',
    },
    heart: {
      backgroundColor: '#fbbf24',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      fontSize: '19px',
      lineHeight: '34px',
    },
    priceText: {
      right: '5%',
      transform: 'rotate(-25deg)',
    },
    shadowBoxText: {
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: '46px',
      fontWeight: 'bold',
      color: 'rgba(65, 57, 57, 0.1)',
    },
    productTitle: {
      fontSize: '25px',
      marginTop: '40px',
    },
    productDesc: {
      fontSize: '15px',
      maxWidth: '500px',
      margin: '10px auto 20px',
    },
    shopBtn: {
      backgroundColor: '#1982f6',
      padding: '10px 30px',
      borderRadius: '20px',
      color: '#fff',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      marginTop: '10px',
    },
    decorative: {
      position: 'absolute',
      fontSize: '32px',
      opacity: 0.3,
      zIndex: 0,
    },
    decoLeft: {
      top: '10%',
      left: '5%',
    },
    decoRight: {
      bottom: '10%',
      right: '5%',
    },
  };
export default MainPage