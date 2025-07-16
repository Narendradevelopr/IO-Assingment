import React from 'react';

import kid1 from '../Componets.js/kid1.jpg';
import kid2 from '../Componets.js/kin2.jpg';
import kid3 from '../Componets.js/kid3.webp';
import kid4 from '../Componets.js/kin4.webp';

function ContentPage() {
  return (
    <div style={styles.app}>
      <div style={{ ...styles.arrows, ...styles.leftArrow }}>❮</div>
      <div style={{ ...styles.arrows, ...styles.rightArrow }}>❯</div>

      <div style={styles.header}>
        <div style={styles.title}>LOREM IPSUM DOLOR SIT AMET</div>
        <div style={styles.subText}>
          Lorem ipsum dolor sit amet consectetur. Aliquam id ullamcorper nulla malesuada
          fermentum. Fringilla placerat sed sit vehicula sed at vehicula amet. Laoreet
          malesuada nec amet tincidunt erat. Vitae nec eu sit placerat facilisis blandit.
          Sit duis nisi nec.
        </div>
      </div>

      <div style={styles.productRow}>
        {productImages.map((img, i) => (
          <div key={i} style={styles.card}>
            <div style={styles.cardHeader(borderColors[i])}>
              <img src={img} alt={`product-${i}`} style={styles.img} />
            </div>
            <div>Shadow Box / Cube Set</div>
            <div style={styles.price}>₹1499.00</div>
            <button style={styles.shopBtn}>SHOP NOW</button>
          </div>
        ))}
      </div>

      <div style={styles.dots}>
        <span style={styles.dot}></span>
        <span style={styles.dot}></span>
        <span style={styles.dot}></span>
      </div>

      <button style={styles.viewMoreBtn}>VIEW MORE</button>
    </div>
  );
}
 const styles = {
    app: {
      backgroundColor: '#ff6a00',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: 'white',
      textAlign: 'center',
      paddingBottom: '80px',
      position: 'relative',
    },
    header: {
      paddingTop: '50px',
    },
    title: {
      fontSize: '28px',
      fontWeight: 'bold',
    },
    subText: {
      fontSize: '14px',
      maxWidth: '600px',
      margin: '10px auto',
      lineHeight: '1.4',
    },
    productRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      marginTop: '30px',
    },
    card: {
      width: '160px',
      backgroundColor: 'black',
      borderRadius: '20px',
      paddingBottom: '17px',
    },
    cardHeader: (color) => ({
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
      overflow: 'hidden',
      border: `6px solid ${color}`,
    }),
    img: {
      width: '100%',
      height: '160px',
      objectFit: 'cover',
    },
    playButton: {
      position: 'absolute',
      top: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '30px',
      height: '30px',
    },
    price: {
      fontWeight: 'bold',
      fontSize: '14px',
      marginTop: '10px',
    },
    shopBtn: {
      marginTop: '10px',
      backgroundColor: '#35d87a',
      padding: '6px 14px',
      color: 'white',
      border: 'none',
      borderRadius: '15px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    arrows: {
      fontSize: '28px',
      cursor: 'pointer',
      position: 'absolute',
      top: '58%',
      transform: 'translateY(-50%)',
      zIndex: 5,
      backgroundColor: '#1954e1',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      lineHeight: '40px',
      textAlign: 'center',
    },
    leftArrow: {
      left: '40px',
    },
    rightArrow: {
      right: '40px',
    },
    dots: {
      marginTop: '30px',
    },
    dot: {
      display: 'inline-block',
      width: '20px',
      height: '3px',
      backgroundColor: 'white',
      margin: '0 14px',
      borderRadius: '7px',
    },
    viewMoreBtn: {
      marginTop: '20px',
      backgroundColor: '#e21e1e',
      padding: '12px 26px',
      borderRadius: '20px',
      fontWeight: 'bold',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
  };

  const productImages = [kid1, kid2, kid3, kid4];
  const borderColors = ['#f1c40f', '#2980b9', '#f1c40f', '#2980b9'];

export default ContentPage;
