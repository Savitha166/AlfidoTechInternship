import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
   const navigates=useNavigate();
   const handleLogin=()=>
   {
    navigates("/");
   }
  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password && phone) {
      setMessage('Account created successfully! 🎉');
    } else {
      setMessage('Please fill in all fields ❗');
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
    loginPrompt: {
      marginTop: '15px',
      fontSize: '14px',
      color: '#555',
    },
    loginLink: {
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
        <div style={styles.cardTitle}>Sign Up</div>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Enter name"
            style={styles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
          <input
            type="tel"
            placeholder="Enter phone number"
            style={styles.input}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>Create Account</button>
        </form>
        {message && <div style={styles.message}>{message}</div>}

        <div style={styles.loginPrompt}>
          <p>Already have an account? <button onClick={handleLogin}>Login</button></p>

        </div>
      </div>
    </div>
  );
};

export default Signup;
