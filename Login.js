import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidEmail = email.endsWith('@gmail.com');

    if (isValidEmail) {
      setMessage('Login successful! 🥳');
      setTimeout(() => {
        navigate('/bigbaskethome'); }, 1000); 
    } else {
      setMessage('Invalid email ❌ (Only Gmail allowed)');
    }
  };

  const styles = {
    page: {
      minHeight: '100vh',
      backgroundColor: '#d4edda',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '40px',
      fontFamily: 'Arial, sans-serif',
    },
    title: {
      fontSize: '36px',
      fontWeight: 'bold',
      color: '#388e3c',
      marginBottom: '30px',
    },
    card: {
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      width: '320px',
      textAlign: 'center',
    },
    cardTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#333',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
      fontSize: '16px',
    },
    button: {
      width: '100%',
      padding: '10px',
      backgroundColor: '#388e3c',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: '10px',
    },
    signupPrompt: {
      marginTop: '15px',
      fontSize: '14px',
      color: '#555',
    },
    signupLink: {
      marginLeft: '5px',
      color: '#388e3c',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
    message: {
      textAlign: 'center',
      marginTop: '15px',
      color: '#d32f2f',
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.title}>BigBasket</div>
      <div style={styles.card}>
        <div style={styles.cardTitle}>Login</div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {message && <div style={styles.message}>{message}</div>}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
  <span style={{ fontSize: '14px', color: '#333' }}>
    Already have an account?
  </span>
  <button
    onClick={handleLogin}
    style={{
      fontSize: '14px',
      padding: '4px 10px',
      border: '1px solid #888',
      borderRadius: '4px',
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
    }}> Login </button></div>

      </div>
    </div>
  );
};

export default Login;
