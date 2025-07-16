import React from 'react';

function ReviewSection() {
  return (
    <div style={styles.page}>
      <div style={styles.topWave}></div>

      <div style={styles.decoLine}>〰</div>
      <div style={styles.decoSmile}>😊</div>
      <div style={styles.decoPlane}>✈️</div>

      <div style={{ ...styles.arrows, ...styles.leftArrow }}>❮</div>
      <div style={{ ...styles.arrows, ...styles.rightArrow }}>❯</div>

      <div style={styles.headingIcon}>👍</div>
      <div style={styles.heading}>HEADING GOES HERE</div>
      <div style={styles.subText}>
        Lorem ipsum dolor sit amet consectetur. Fermentum vulputate eu malesuada eu suspendisse.
        Nulla volutpat dui montes morbi suspendisse. Mi leo magna velit eget habitant.
      </div>

      <div style={styles.cardsRow}>
        {reviews.map((r, i) => (
          <div key={i} style={styles.card(r.bg, r.shape)}>
            <div style={{ fontSize: '24px' }}>💙</div>
            <div style={styles.name}>{r.name}</div>
            <div style={styles.quote}>{r.quote}</div>
            <div style={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>

      <button style={styles.viewMoreBtn}>VIEW MORE</button>

    </div>
  );
}
 const styles = {
    page: {
      backgroundColor: '#f7a30a',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: 'white',
      textAlign: 'center',
      padding: '80px 0',
      position: 'relative',
      overflow: 'hidden',
    },
    headingIcon: {
      fontSize: '30px',
      marginBottom: '10px',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    subText: {
      fontSize: '15px',
      maxWidth: '620px',
      margin: '0 auto 40px',
    },
    cardsRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '25px',
      flexWrap: 'wrap',
      marginBottom: '35px',
    },
    card: (bg, shape) => ({
      backgroundColor: bg,
      width: '158px',
      padding: '20px 15px',
      borderRadius: shape,
    }),
    name: {
      fontWeight: 'bold',
      fontSize: '16px',
      margin: '10px 0 4px',
    },
    quote: {
      fontSize: '15px',
      marginBottom: '8px',
    },
    stars: {
      color: 'yellow',
      fontSize: '14px',
    },
    arrows: {
      fontSize: '22px',
      backgroundColor: '#6b4dee',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      lineHeight: '30px',
      textAlign: 'center',
      position: 'absolute',
      top: '55%',
      transform: 'translateY(-50%)',
      zIndex: 2,
    },
    leftArrow: {
      left: '30px',
    },
    rightArrow: {
      right: '30px',
    },
    viewMoreBtn: {
      backgroundColor: '#ff5e34',
      padding: '8px 18px',
      color: 'white',
      border: 'none',
      borderRadius: '20px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    topWave: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '60px',
      background: 'linear-gradient(to bottom, #122f91 50%, transparent 50%)',
      borderBottomLeftRadius: '50%',
      borderBottomRightRadius: '50%',
      zIndex: 0,
    },
    decoLine: {
      position: 'absolute',
      left: '20px',
      top: '20%',
      fontSize: '60px',
      color: '#da2dd3',
      transform: 'rotate(5deg)',
      opacity: 0.4,
    },
    decoSmile: {
      position: 'absolute',
      right: '20%',
      top: '40%',
      fontSize: '32px',
      opacity: 0.4,
    },
    decoPlane: {
      position: 'absolute',
      right: '10%',
      bottom: '30px',
      fontSize: '20px',
      opacity: 0.6,
    },
  };

  const reviews = [
    { bg: '#3366cc', shape: '20px', name: 'Customer Name', quote: 'Great experience!' },
    { bg: '#d63384', shape: '60% 40% 30% 70% / 40% 30% 70% 60%', name: 'Customer Name', quote: 'Loved the UI!' },
    { bg: '#28b463', shape: '40% 60% 50% 50% / 30% 70% 60% 40%', name: 'Customer Name', quote: 'Highly recommend!' },
    { bg: '#6f42c1', shape: '50% 50% 50% 50% / 50% 50% 50% 50%', name: 'Customer Name', quote: 'Perfect design.' },
  ];
export default ReviewSection;
