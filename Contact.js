import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>

      <p style={styles.description}>
        We'd love to hear from you! Whether you have a question about your order, need assistance with our app, or just want to share your feedback, feel free to get in touch.
      </p>

      <div style={styles.infoBox}>
        <h2 style={styles.subtitle}>📍 Address</h2>
        <p style={styles.text}>
          BigBasket Pvt. Ltd.<br />
          123, Fresh Street, Green Valley,<br />
          Chennai, Tamil Nadu - 600001
        </p>

        <h2 style={styles.subtitle}>📞 Phone</h2>
        <p style={styles.text}>
          Customer Care: +91 98765 43210<br />
          Available: 9 AM – 9 PM (All Days)
        </p>

        <h2 style={styles.subtitle}>✉️ Email</h2>
        <p style={styles.text}>
          support@bigbasket.com<br />
          feedback@bigbasket.com
        </p>

       
      </div>

      <p style={styles.footer}>
        Thank you for shopping with BigBasket — India's #1 Online Grocery Platform!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#fefefe',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  title: {
    fontSize: '28px',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: '20px',
  },
  description: {
    fontSize: '16px',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#555',
  },
  infoBox: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#f4f4f4',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  subtitle: {
    fontSize: '20px',
    color: '#388e3c',
    marginTop: '20px',
    marginBottom: '10px',
  },
  text: {
    fontSize: '15px',
    color: '#333',
    lineHeight: '1.6',
  },
  footer: {
    textAlign: 'center',
    marginTop: '40px',
    fontSize: '14px',
    color: '#777',
  }
};

export default Contact;
