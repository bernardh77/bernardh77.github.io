'use client';

import Image from 'next/image';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Import the profile image
import profileImage from '../../public/profile.jpeg';
import cititrailsImage from '../../public/cititrails.jpeg';

export default function Home() {
  // Add state to track active tab: 'work', 'education', or 'projects'
  const [activeTab, setActiveTab] = useState('work');
  
  // Add state for screen size
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
  
  // Define reusable styles
  const styles = {
    // Layout styles
    container: {
      maxWidth: '900px', 
      margin: '0 auto', 
      padding: isMobile ? '0 16px' : '0', 
      display: 'flex',
      flexDirection: 'column' as const,
      gap: isMobile ? '32px' : '48px'
    },
    section: {
      display: 'flex', 
      flexDirection: isMobile ? 'column' as const : 'row' as const,
      justifyContent: 'space-between',
      alignItems: isMobile ? 'center' as const : 'flex-start' as const,
      gap: isMobile ? '32px' : '48px'
    },
    
    // Text styles
    heading: {
      fontSize: '3.5rem', 
      fontWeight: '800',
      lineHeight: '1.2',
      margin: '0 0 16px 0',
      color: '#222222'
    },
    paragraph: {
      fontSize: '18px', 
      color: '#555555',
      margin: '0 0 12px 0',
      lineHeight: '1.5'
    },
    
    // Card styles
    card: {
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      padding: isMobile ? '16px' : '24px',
      border: '1px solid #e1e1e1',
      marginBottom: '16px'
    },
    
    // Tab styles
    tabButton: (isActive: boolean) => ({
      flex: 1,
      padding: isMobile ? '10px 12px' : '12px 24px',
      backgroundColor: isActive ? '#f0f0f0' : 'transparent',
      border: 'none',
      color: isActive ? '#222222' : '#777777',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s, color 0.2s'
    }),
    
    // List styles
    list: {
      listStyleType: 'none',
      padding: 0,
      margin: 0
    },
    listItem: {
      fontSize: isMobile ? '14px' : '15px',
      color: '#555555',
      marginBottom: '8px',
      paddingLeft: '20px',
      position: 'relative' as const
    },
    listItemDot: {
      position: 'absolute' as const,
      left: '0',
      top: '8px',
      width: '4px',
      height: '4px',
      backgroundColor: '#555555',
      borderRadius: '50%'
    },
    
    // Logo styles
    logoContainer: {
      width: '48px',
      height: '48px',
      borderRadius: '4px',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      padding: '0',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
    },
    
    // Link styles
    iconLink: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      borderRadius: '4px',
      backgroundColor: 'transparent',
      color: '#555555',
      textDecoration: 'none'
    },
    primaryButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '4px',
      backgroundColor: '#2563eb',
      color: 'white',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500'
    },
    
    // Title styles
    title: {
      fontSize: '20px',
      fontWeight: '600',
      margin: '0 0 8px 0',
      color: '#222222'
    },
    titleLink: {
      color: '#222222',
      textDecoration: 'none',
    },

    // Hero image container
    heroImageContainer: {
      width: isMobile ? '240px' : '320px',
      height: isMobile ? '300px' : '400px',
      borderRadius: '8px',
      position: 'relative' as const,
      overflow: 'hidden'
    },
  };
  
  return (
    <main style={{ 
      backgroundColor: 'white', 
      color: '#222222', 
      minHeight: '100vh',
      paddingTop: isMobile ? '24px' : '48px'
    }}>
      <div style={styles.container}>
        
        {/* Hero Section */}
        <section style={styles.section}>
          {/* Left content (heading, bio, links) */}
          <div style={{ flex: '1' }}>
            <h1 style={{
              ...styles.heading,
              fontSize: isMobile ? '2.5rem' : '3.5rem',
            }}>
              Bernard Haryanto
            </h1>
            
            <p style={styles.paragraph}>
              Software developer
            </p>
            
            <p style={{...styles.paragraph, marginBottom: '36px', maxWidth: '500px'}}>
              Final-year CS student at UNSW, Sydney 
            </p>
            
            {/* Buttons/Links */}
            <div style={{ 
              display: 'flex', 
              gap: '12px',
              margin: '24px 0',
              flexWrap: isMobile ? 'wrap' : 'nowrap',
            }}>
              <a 
                href="/Bernard_Haryanto_Resume_2025.docx" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.primaryButton}
              >
                <FaFileAlt />
                Resume
              </a>
              
              <a 
                href="https://linkedin.com/in/bernard-haryanto-0ba847272" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaLinkedin size={20} />
              </a>
              
              <a 
                href="https://github.com/bernardh77" 
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconLink}
              >
                <FaGithub size={20} />
              </a>
              
              <a 
                href="mailto:haryantobernard77@gmail.com" 
                style={styles.iconLink}
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
          
          {/* Right content (profile image) */}
          <div style={styles.heroImageContainer}>
            <Image 
              src={profileImage}
              alt="profile picture"
              fill
              style={{ 
                objectFit: 'cover',
                objectPosition: 'center',
                width: '100%',
                height: '100%',
                borderRadius: '8px',
              }}
              priority
            />
          </div>
        </section>
        
        {/* Work/Education/Projects Tabs */}
        <section style={{
          marginTop: '16px',
          marginBottom: '64px'
        }}>
          {/* Tab Buttons */}
          <div id="projects" style={{
            display: 'flex',
            borderRadius: '8px',
            overflow: 'hidden',
            marginBottom: '24px',
            border: '1px solid #e1e1e1'
          }}>
            <button 
              onClick={() => setActiveTab('work')}
              style={styles.tabButton(activeTab === 'work')}
            >
              Work
            </button>
            <button 
              onClick={() => setActiveTab('education')}
              style={styles.tabButton(activeTab === 'education')}
            >
              {isMobile ? 'Edu' : 'Education'}
            </button>
            <button 
              onClick={() => setActiveTab('projects')}
              style={styles.tabButton(activeTab === 'projects')}
            >
              Projects
            </button>
          </div>
          
          {/* Work Experience Cards - Only show when work tab is active */}
          {activeTab === 'work' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {/* CitiTrails */}
              <div style={styles.card}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: isMobile ? '12px' : '16px'
                }}>
                  {/* Company Logo */}
                  <div style={styles.logoContainer}>
                    <Image 
                      src={cititrailsImage} 
                      alt="CitiTrails" 
                      width={isMobile ? 40 : 48} 
                      height={isMobile ? 40 : 48} 
                    />
                  </div>
                  
                  {/* Job Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: isMobile ? '12px' : '14px',
                      color: '#777777',
                      marginBottom: '4px'
                    }}>
                      Feb 2025 - Present | Sydney
                    </div>
                    
                    <h3 style={{
                      ...styles.title,
                      fontSize: isMobile ? '18px' : '20px',
                    }}>
                      <a 
                        href="https://cititrails.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                          color: '#222222', 
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        CitiTrails
                      </a>
                    </h3>
                    
                    <div style={{
                      fontSize: isMobile ? '14px' : '16px',
                      color: '#555555',
                      marginBottom: '16px'
                    }}>
                      Software Developer Intern
                    </div>
                    
                    <ul style={styles.list}>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Developed key frontend features including the Favourite Trails page, Profile page, and Gallery of Locals.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Enhanced the trail editing experience by implementing POI reordering and refining the UI for better usability and user experience (UX).
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Integrated Mapbox for interactive trail mapping and Decklear API for avatar generation.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Collaborated with the Founder and CTO, aligning development with user needs and product vision.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Practical Agile development using Git, Jira, Confluence, documenting feedback and iterating quickly.
                      </li>
                      <li style={{...styles.listItem, marginBottom: 0}}>
                        <span style={styles.listItemDot}></span>
                        Tech Stack: Django, JavaScript, Tailwind CSS, Python, Mapbox, Dicebear API
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Education Section - Only show when education tab is active */}
          {activeTab === 'education' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {/* UNSW */}
              <div style={styles.card}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: isMobile ? '12px' : '16px'
                }}>
                  {/* University Logo */}
                  <div style={styles.logoContainer}>
                    <Image 
                      src="/unsw.jpeg" 
                      alt="UNSW" 
                      width={48} 
                      height={48}
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                      }}
                    />
                  </div>
                  
                  {/* Education Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#777777',
                      marginBottom: '4px'
                    }}>
                      2022 - Present | Sydney
                    </div>
                    
                    <h3 style={{
                      ...styles.title,
                      fontSize: isMobile ? '18px' : '20px',
                    }}>
                      University of New South Wales
                    </h3>
                    
                    <div style={{
                      fontSize: isMobile ? '14px' : '16px',
                      color: '#555555',
                      marginBottom: '16px'
                    }}>
                      Bachelor of Computer Science
                    </div>
                    
                    <ul style={styles.list}>
                      <li style={{...styles.listItem, marginBottom: 0}}>
                        <span style={styles.listItemDot}></span>
                        WAM of 79.84 - Distinction
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Projects Section - Only show when projects tab is active */}
          {activeTab === 'projects' && (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {/* TeamCheckr */}
              <div style={styles.card}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: isMobile ? '12px' : '16px'
                }}>
                  {/* Project Logo/Image */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '4px',
                    backgroundColor: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    padding: '0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}>
                    TC
                  </div>
                  
                  {/* Project Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#777777',
                      marginBottom: '4px'
                    }}>
                      April 2025 - Present | Sydney
                    </div>
                    
                    <h3 style={{
                      ...styles.title,
                      fontSize: isMobile ? '18px' : '20px',
                    }}>
                      <a 
                        href="https://github.com/bernardh77/TeamCheckr" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                          color: '#222222', 
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        TeamCheckr – University Group Collaboration Platform
                      </a>
                    </h3>
                    
                    <div style={{
                      fontSize: '16px',
                      color: '#555555',
                      marginBottom: '16px'
                    }}>
                      Ongoing project building on ideas explored during UniHack 2024, aimed at helping university students form project groups and leave anonymous peer feedback.
                    </div>
                    
                    <ul style={styles.list}>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Built core features such as authentication, profile management, and peer reviews using modular React components.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Architected the frontend with Next.js App Router, using file-based routing and shared layout components.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Developed secure REST APIs for user, course, and review management with role-based protection.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Integrated Prisma ORM with a PostgreSQL database to handle structured data and relationships.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Designed responsive UI with Tailwind CSS to ensure accessibility across devices.
                      </li>
                      <li style={{...styles.listItem, marginBottom: 0}}>
                        <span style={styles.listItemDot}></span>
                        Tech Stack: Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Eventhubb */}
              <div style={styles.card}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: isMobile ? '12px' : '16px'
                }}>
                  {/* Project Logo/Image */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '4px',
                    backgroundColor: '#22c55e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    padding: '0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}>
                    EH
                  </div>
                  
                  {/* Project Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#777777',
                      marginBottom: '4px'
                    }}>
                      Sept 2024 - Dec 2024 | Sydney
                    </div>
                    
                    <h3 style={{
                      ...styles.title,
                      fontSize: isMobile ? '18px' : '20px',
                    }}>
                      Eventhubb – COMP3900 Capstone Project
                    </h3>
                    
                    <div style={{
                      fontSize: '16px',
                      color: '#555555',
                      marginBottom: '16px'
                    }}>
                      AI-Powered platform designed to help users discover a wide range of events and explore sessions hosted by their peers or organizations.
                    </div>
                    
                    <ul style={styles.list}>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Led a team of 6 as Scrum Master, managing sprints with Jira and maintaining documentation in Confluence.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Developed core frontend features using React (Vite), including event detail views, search, and event editing.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Integrated APIs using Axios to enable real-time updates for events and user reviews.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Achieved a final grade of 84/100.
                      </li>
                      <li style={{...styles.listItem, marginBottom: 0}}>
                        <span style={styles.listItemDot}></span>
                        Tech Stack: React (Vite), MUI, Axios
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* GroupedIn */}
              <div style={styles.card}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: isMobile ? '12px' : '16px'
                }}>
                  {/* Project Logo/Image */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '4px',
                    backgroundColor: '#8b5cf6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    padding: '0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}>
                    GI
                  </div>
                  
                  {/* Project Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#777777',
                      marginBottom: '4px'
                    }}>
                      March 2024 | Sydney
                    </div>
                    
                    <h3 style={{
                      ...styles.title,
                      fontSize: isMobile ? '18px' : '20px',
                    }}>
                      <a 
                        href="https://github.com/bernardh77/GroupedIn" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                          color: '#222222', 
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        GroupedIn – UniHack 2024
                      </a>
                    </h3>
                    
                    <div style={{
                      fontSize: '16px',
                      color: '#555555',
                      marginBottom: '16px'
                    }}>
                      A team-matching platform created as part of UniHack 2024, aimed at helping students find project teammates and share anonymous peer feedback.
                    </div>
                    
                    <ul style={styles.list}>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        In a group of 6, paired with one teammate to develop RESTful API endpoints using Express.js to support user auth, group management, and peer reviews.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Designed and implemented a MySQL schema to store users, courses, and feedback data efficiently.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Integrated secure authentication and role-based access control for protected routes.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Collaborated with frontend developers to ensure seamless API connectivity and error handling.
                      </li>
                      <li style={{...styles.listItem, marginBottom: 0}}>
                        <span style={styles.listItemDot}></span>
                        Tech Stack: Express.js, MySQL, RESTful APIs
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* AirBrB */}
              <div style={styles.card}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: isMobile ? '12px' : '16px'
                }}>
                  {/* Project Logo/Image */}
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '4px',
                    backgroundColor: '#f43f5e',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    padding: '0',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '600'
                  }}>
                    AB
                  </div>
                  
                  {/* Project Details */}
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: '14px',
                      color: '#777777',
                      marginBottom: '4px'
                    }}>
                      Oct 2023 - Nov 2023 | Sydney
                    </div>
                    
                    <h3 style={{
                      ...styles.title,
                      fontSize: isMobile ? '18px' : '20px',
                    }}>
                      <a 
                        href="https://github.com/bernardh77/airbrb" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                          color: '#222222', 
                          textDecoration: 'none'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                        onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                      >
                        AirBrB – COMP6080 Web Front End Programming
                      </a>
                    </h3>
                    
                    <div style={{
                      fontSize: '16px',
                      color: '#555555',
                      marginBottom: '16px'
                    }}>
                      A frontend clone of Airbnb developed as part of a university web development course, focused on building a full-featured, production-ready UI using modern React practices.
                    </div>
                    
                    <ul style={styles.list}>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Collaborated with a teammate to develop a fully functional frontend for an existing RESTful backend API.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Implemented major features including authentication, listing management, availability filtering, and booking flow.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Ensured modular, type-safe component structure by using custom hooks and strongly typed props.
                      </li>
                      <li style={styles.listItem}>
                        <span style={styles.listItemDot}></span>
                        Achieved a final project grade of 97.5/100.
                      </li>
                      <li style={{...styles.listItem, marginBottom: 0}}>
                        <span style={styles.listItemDot}></span>
                        Tech Stack: React, App Router, MUI, Cypress, Jest, ESLint.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
