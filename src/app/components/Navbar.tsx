'use client';

import React, { useState, useEffect } from 'react';
import { FiSun } from 'react-icons/fi';

export default function Navbar() {
  // State to detect mobile screen size
  const [isMobile, setIsMobile] = useState(false);

  // Effect to detect screen size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Define styles as objects to match tedawf.com precisely
  const navStyle = {
    backgroundColor: '#F8F8F8',
    width: '100%',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid #e1e1e1'
  } as React.CSSProperties;

  const containerStyle = {
    width: '100%',
    maxWidth: '900px',
    margin: '0 auto',
    padding: isMobile ? '0 16px' : '0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  } as React.CSSProperties;

  const linkContainerStyle = {
    display: 'flex',
    alignItems: 'center'
  } as React.CSSProperties;

  const linkStyle = {
    color: 'black',
    fontSize: isMobile ? '16px' : '18px',
    textDecoration: 'none',
    marginRight: isMobile ? '24px' : '48px',
    fontWeight: '400',
    letterSpacing: '0.5px'
  } as React.CSSProperties;

  const iconContainerStyle = {
    display: 'flex',
    alignItems: 'center'
  } as React.CSSProperties;

  const sunIconStyle = {
    fontSize: '24px',
    color: '#fde047'
  } as React.CSSProperties;

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={linkContainerStyle}>
          <a href="#" style={linkStyle}>home</a>
          <a href="#projects" style={linkStyle}>projects</a>
        </div>
        <div style={iconContainerStyle}>
          <FiSun style={sunIconStyle} />
        </div>
      </div>
    </nav>
  );
}
