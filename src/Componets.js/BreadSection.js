import React from 'react';

function BrandSection() {
  return (
    <div style={styles.wrapper}>

      <div style={styles.heading}>LOREM IPSUM DOLOR SIT</div>
      <div style={styles.subtext}>
        Lorem ipsum dolor sit amet consectetur. Et eu amet tristique habitant sed
        convallis. Egestas luctus consectetur amet sed. Morbi sed id quam arcu sit
        fusce malesuada elementum.
      </div>
      <div style={styles.underline}></div>

      <div style={styles.logoBox}>
        <div style={styles.logoText}>amazon.in</div>
        <div style={styles.logoText}>firstcry.com</div>
        <div style={styles.logoText}>Hamleys</div>
      </div>

      <div style={styles.dots}>
        <div style={{ ...styles.dot, ...styles.dotActive }}></div>
        <div style={styles.dot}></div>
        <div style={styles.dot}></div>
      </div>

    </div>
  );
}
const styles = {
    wrapper: {
      backgroundColor: '#1dcfcf',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: 'white',
      textAlign: 'center',
      padding: '80px 20px',
      position: 'relative',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subtext: {
      maxWidth: '500px',
      margin: '0 auto 20px',
    },
    underline: {
      width: '80px',
      height: '4px',
      backgroundColor: '#fcd34d',
      borderRadius: '2px',
      margin: '10px auto 30px',
    },
    logoBox: {
      backgroundColor: '#86daceff',
      borderRadius: '20px',
      padding: '30px 10px',
      maxWidth: '600px',
      margin: '0 auto 30px',
      display: 'flex',
      justifyContent: 'space-around',
    },
    logoText: {
      fontSize: '25px',
    },
    dots: {
      display: 'flex',
      justifyContent: 'center',
      gap: '18px',
    },
    dot: {
      width: '20px',
      height: '4px',
      borderRadius: '2px',
      backgroundColor: '#fff',
      opacity: 0.3,
    },
    dotActive: {
      backgroundColor: '#fff',
      opacity: 1,
    },
  };
export default BrandSection;
