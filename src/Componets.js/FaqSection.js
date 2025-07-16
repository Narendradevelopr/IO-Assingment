import React, { useState } from 'react';

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  return (
    <div style={styles.wrapper}>
      <span style={{ ...styles.emoji, ...styles.note }}>🎵</span>
      <span style={{ ...styles.emoji, ...styles.questionEmoji }}>❓</span>
      <span style={{ ...styles.emoji, ...styles.music }}>🎶</span>
      <span style={{ ...styles.emoji, ...styles.sparkle }}>✨</span>

      <div style={styles.icon}>🖱️</div>
      <div style={styles.heading}>
        HEADING GOES HERE <br /> LOREM IPSUM DOLOR SIT AMET
      </div>
      <div style={styles.desc}>
        Lorem ipsum dolor sit amet consectetur. Sit aliquam eu pretium et ut diam
        euismod. Vel donec praesent id volutpat amet mauris dignissim suspendisse
        ut id donec vehicula nunc. Nullam leo velit non luctus ultrices sed
        bibendum eu leo tellus.
      </div>
      <div style={styles.faqBox}>
        {faqs.map((q, i) => (
          <div key={i}>
            <div style={styles.questionItem(openIndex === i)} onClick={() => toggleAccordion(i)}>
              {q}
            </div>
            {openIndex === i && (
              <div style={styles.answer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel nisi
                feugiat ultricies. Suspendisse nec dui at elit fermentum imperdiet.
              </div>
            )}
          </div>
        ))}
      </div>

      <button style={styles.viewMoreBtn}>VIEW MORE</button>
    </div>
  );
}

  const faqs = [
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur.",
    "Lorem ipsum dolor sit amet consectetur."
  ];

  const styles = {
    wrapper: {
      backgroundColor: '#7b3f98',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
    //   overflow: 'hidden',
    },
    icon: { fontSize: '34px', marginBottom: '10px' },
    heading: { fontSize: '20px', fontWeight: 'bold', lineHeight: '28px' },
    desc: {
    //   fontSize: '13px',
      maxWidth: '600px',
      margin: '10px auto 30px',
    },
    faqBox: {
      backgroundColor: '#3b254eff',
      borderRadius: '20px',
      padding: '30px 20px',
    //   width: '90%',
      maxWidth: '600px',
      margin: '0 auto',
    },
    questionItem: (isOpen) => ({
      backgroundColor: isOpen ? '#ec4899' : '#4b1f71',
    //   color: '#fff',
      borderRadius: '10px',
      padding: '12px 20px',
      marginBottom: '10px',
      cursor: 'pointer',
      textAlign: 'left',
      fontWeight: 'bold',
    }),
    answer: {
      fontSize: '15px',
      backgroundColor: '#fff',
      color: '#000',
      padding: '15px 20px',
      borderRadius: '10px',
      textAlign: 'left',
      marginBottom: '10px',
    },
    viewMoreBtn: {
      marginTop: '35px',
      backgroundColor: '#ff3b8d',
      padding: '10px 30px',
      borderRadius: '20px',
      fontWeight: 'bold',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
    emoji: {
      position: 'absolute',
      fontSize: '30px',
      opacity: 0.5,
    },
    note: { top: '15%', left: '10%' },
    questionEmoji: { top: '15%', right: '10%' },
    link: { top: '32%', left: '48%' },
    music: { top: '30%', right: '5%' },
    sparkle: { top: '50%', left: '10%' },
  };
export default FaqSection;
