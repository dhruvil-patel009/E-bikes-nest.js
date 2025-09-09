import React, { useEffect, useState } from 'react';

// Add this in your index.css or global stylesheet
// Or inject it via style tag in HTML
const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

const LoaderComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.spinner}></div>
        <p style={{ marginTop: '10px', fontSize: '16px' }}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={styles.content}>
      <h2>Gallery Loaded!</h2>
      <p>This is your real component content after the loader.</p>
      {/* You can replace this with your image grid or content */}
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4'
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #ccc',
    borderTop: '6px solid #1A3B19',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
  },
  content: {
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  }
};

export default LoaderComponent;
