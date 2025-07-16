import React from 'react';

function BlogSection() {
  return (
    <div style={styles.wrapper}>

      <div style={styles.heading}>
        OUR <span style={styles.highlight}>Blogs</span>
      </div>
      <div style={styles.subtext}>
        Find out what’s happening in the world of <span style={{ color: '#facc15' }}>STEAM play</span>
      </div>

      <div style={{ ...styles.navArrow, ...styles.leftArrow }}>❮</div>
      <div style={{ ...styles.navArrow, ...styles.rightArrow }}>❯</div>

      <div style={styles.blogsRow}>
        {blogData.map((blog, i) => (
          <div key={i} style={styles.blogCard}>
            <img src={blog.img} alt="blog" style={styles.blogImg} />
            <div style={styles.blogTitle}>{blog.title}</div>
            <div style={styles.blogDesc}>{blog.desc}</div>
            <button style={styles.readMoreBtn}>Read More</button>
          </div>
        ))}
      </div>

      <button style={styles.viewMoreBtn}>VIEW MORE</button>
    </div>
  );
}
 const styles = {
    wrapper: {
      backgroundColor: '#e52420',
      fontFamily: "'Comic Sans MS', cursive, sans-serif",
      color: 'white',
      padding: '80px 20px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    },
    heading: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: '0px',
    },
    highlight: {
      color: '#facc15',
      fontSize: '48px',
      fontWeight: 'bold',
    },
    subtext: {
      fontSize: '13px',
      maxWidth: '600px',
      margin: '10px auto 30px',
    },
    blogsRow: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      flexWrap: 'wrap',
    },
    blogCard: {
      backgroundColor: '#992b2bff',
      borderRadius: '20px',
      width: '200px',
      paddingBottom: '15px',
      boxShadow: '0 8px 20px rgba(182, 169, 169, 0.2)',
    },
    blogImg: {
      width: '100%',
      height: '130px',
      objectFit: 'cover',
      borderTopLeftRadius: '20px',
      borderTopRightRadius: '20px',
    },
    blogTitle: {
      fontSize: '14px',
      fontWeight: 'bold',
      margin: '10px 10px 5px',
    },
    blogDesc: {
      fontSize: '15px',
      padding: '0 10px',
      marginBottom: '10px',
    },
    readMoreBtn: {
      backgroundColor: '#dc2626',
      border: 'none',
      borderRadius: '20px',
      padding: '6px 16px',
      fontWeight: 'bold',
      cursor: 'pointer',
      color: 'white',
      marginTop: '10px',
    },
    navArrow: {
      position: 'absolute',
      top: '55%',
      transform: 'translateY(-50%)',
      backgroundColor: '#3b0764',
      color: 'white',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      lineHeight: '40px',
      fontSize: '22px',
      fontWeight: 'bold',
      cursor: 'pointer',
      zIndex: 5,
    },
    leftArrow: {
      left: '20px',
    },
    rightArrow: {
      right: '20px',
    },
    viewMoreBtn: {
      marginTop: '30px',
      backgroundColor: '#84cc16',
      padding: '10px 30px',
      borderRadius: '20px',
      fontWeight: 'bold',
      border: 'none',
      color: '#fff',
      cursor: 'pointer',
    },
  };

  const blogData = [
    {
      img: 'https://images.venuebookingz.com/35820-1729765840-wm-neeno-1.jpg',
      title: '10 Exciting Ways to Include STEM in Indoor Play',
      desc: 'Your child will get a great learning experience with fun indoor ideas.',
    },
    {
      img: 'https://bidyapatibedstudy.wordpress.com/wp-content/uploads/2024/10/curriculum-for-play-based-learning.jpeg?w=1200',
      title: 'Rebuilding Education: The Joy of Hands-On Problem Solving',
      desc: 'Learn how play-based learning builds curiosity and problem-solving.',
    },
    {
      img: 'https://www.azuremagazine.com/wp-content/uploads/2020/04/Azure-Yves-Behar-Moxie-Robot-3.jpg',
      title: 'Friendly Robots to Teach Kids',
      desc: 'Robots and coding toys that bring joy while teaching logic!',
    },
    {
      img: 'https://images.ctfassets.net/6m9bd13t776q/4SU0HnrECM9Hn6xJlCoFhp/175c80cb1ff33a6b78388a386034c4f6/hero_image.webp?w=1122',
      title: 'Know the Difference between Robots & Educational Toys',
      desc: 'Here’s a practical comparison to help parents choose wisely.',
    },
  ];

export default BlogSection;
