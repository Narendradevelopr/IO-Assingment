import React from "react"


function SecondConetent(){
  return (
    <div style={styles.page}>
      <div style={styles.titleSmall}>ABOUT</div>

      <div style={styles.titleMain}>
        <span style={styles.titleItalic}>io</span> tales
      </div>

      <div style={styles.tagline}>Small team, big tales, endless play.</div>

      <div style={styles.textBox}>
        Lorem ipsum dolor sit amet consectetur. Quam scelerisque lacus egestas porta est
        ultricies eros. Tempus egestas amet sed varius facilisis sed posuere eu dictum
        pharetra. Convallis tristique in sit convallis pulvinar. Phasellus ultricies
        malesuada nulla bibendum. Cursus sit ullamcorper feugiat euismod euismod.
        Pellentesque bibendum lacus bibendum. Velit eget varius euismod.
      </div>

      <div style={{ ...styles.decorative, ...styles.deco1 }}>🌟</div>
      <div style={{ ...styles.decorative, ...styles.deco2 }}>🎵</div>
      <div style={{ ...styles.decorative, ...styles.deco3 }}>⭐</div>
      <div style={{ ...styles.decorative, ...styles.deco4 }}>🎶</div>

      <div style={styles.bottomWave}></div>
    </div>
  );
}
 const styles = {
    page: {
      backgroundColor: '#0346af',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      textAlign: 'center',
      paddingBottom: '120px',
      paddingTop: '100px',
      position: 'relative',
    },
    titleSmall: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '10px',
    },
    titleMain: {
      fontSize: '65px',
      fontWeight: 'bold',
      color: '#87d83e',
      marginBottom: '15px',
    },
    titleItalic: {
      color: 'white',
      fontWeight: 'normal',
    },
    tagline: {
      fontSize: '24px',
      color: '#fff',
      marginBottom: '30px',
    },
    textBox: {
      backgroundColor: '#2ebff1',
      width: '400px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '40px 20px',
      color: 'white',
      fontSize: '12px',
      lineHeight: '1.5',
    },
    decorative: {
      position: 'absolute',
      fontSize: '28px',
      opacity: 0.5,
    },
    deco1: {
      top: '30%',
      left: '20%',
    },
    deco2: {
      top: '35%',
      right: '20%',
    },
    deco3: {
      top: '65%',
      left: '10%',
    },
    deco4: {
      top: '10%',
      right: '10%',
    },
   
  };


export default SecondConetent