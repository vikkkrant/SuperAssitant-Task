import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div>
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: '0.5rem' }} />
        V-Forms
      </div>
    </nav>
    
    </div>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#222', // Even darker background color for the navbar
    color: 'white', // Text color for the navbar items
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
};

export default Navbar;
