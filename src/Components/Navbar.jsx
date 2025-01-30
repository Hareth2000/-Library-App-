import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();   

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setIsLoggedIn(false); 
        alert("Logged out successfully");
        navigate('/'); 
      })
      .catch((error) => {
        console.error('Error during logout:', error);
      });
  };

  return (
    <nav style={navbarStyle}>
      <ul style={navListStyle}>
        <li style={navItemStyle}><Link to="/" style={linkStyle}>Home</Link></li>
        <li style={navItemStyle}><Link to="/about" style={linkStyle}>About</Link></li>
        <li style={navItemStyle}><Link to="/contact" style={linkStyle}>Contact</Link></li>

        {isLoggedIn && <li style={navItemStyle}><Link to="/catalog" style={linkStyle}>Book Catalog</Link></li>}

        {!isLoggedIn ? (
          <>
            <li style={navItemStyle}><Link to="/login" style={linkStyle}>Login</Link></li>
            <li style={navItemStyle}><Link to="/signup" style={linkStyle}>Sign Up</Link></li>
          </>
        ) : (
          <li style={navItemStyle}>
            <button onClick={handleLogout} style={linkStyle}>Sign Out</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

const navbarStyle = {
  backgroundColor: '#333',
  padding: '10px',
};

const navListStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  listStyleType: 'none',
  padding: '0',
};

const navItemStyle = {
  padding: '10px',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
};

export default Navbar;
