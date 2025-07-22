import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About BigBasket</h1>

      <p style={styles.text}>
        BigBasket is India's largest online food and grocery store. With over 18,000 products and over 1000 brands in our catalogue, you will find everything you are looking for — from fresh fruits and vegetables, rice and dals, spices and seasonings to packaged products, beverages, personal care products, meats — we have it all.
        We guarantee on-time delivery, and the best quality! Enjoy hassle-free online grocery shopping at the click of a button.
      </p>

      <h2 style={styles.subtitle}>🥗 Experience Freshness, Every Day</h2>

      <p style={styles.text}>
        Looking for farm-fresh vegetables without stepping outside your home? You’re in the right place. At BigBasket, we bring you a carefully curated selection of fresh, seasonal vegetables—sourced directly from local farms and delivered to your doorstep within hours. Every tomato, potato, and leafy green is handpicked, quality-checked, and packed with care to retain its natural flavor, texture, and nutrients.
      </p>

      <p style={styles.text}>
        We work closely with trusted growers who follow safe and sustainable farming practices—no shortcuts, no harmful chemicals. Our cold-chain logistics ensure your vegetables stay crisp and fresh from farm to fork. Whether you're preparing a weekday dinner or a festive feast, you’ll always have access to the best produce nature has to offer.
      </p>

      <p style={styles.text}>
        ✅ <strong>Why choose us?</strong><br />
        • Same-day delivery of farm-fresh vegetables<br />
        • Hygienic handling and eco-friendly packaging<br />
        • Real-time tracking and freshness guarantee<br />
        • Sourced locally, supporting regional farmers
      </p>

      <p style={styles.tes}>
       Bringing the freshness of farms to your home — one basket at a time
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '10px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '25px',
    color: '#2e7d32',
    marginBottom: '10px',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: '20px',
    color: '#388e3c',
    marginTop: '40px',
    marginBottom: '20px',
  },
  text: {
    fontSize: '14px',
    lineHeight: '1.3',
    marginBottom: '18px',
    color: '#333',
    backgroundColor: '#f9f9f9',
    padding: '10px 14px',
    borderRadius: '4px',
  },
  tes: {
    fontSize: '18px',
    lineHeight: '1.0',
    marginBottom: '18px',
    color: '#333',
    backgroundColor: '#f9f9f9',
    padding: '10px 14px',
    textAlign:'center',
  }
};

export default About;
