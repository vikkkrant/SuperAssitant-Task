import React from 'react';

export default function Line() {
  return (
    <div style={styles.container}>
      <p style={styles.text}>Formify: Craft, Create, <span style={styles.rocket}>Conquer! 🚀</span></p>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: 'black',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  rocket: {
    color: 'blue',
    marginLeft: '0.5rem',
    fontSize: '2rem',
  },
};
