import React from 'react';
import { GrFacebookOption, GrTwitter, GrLinkedinOption } from 'react-icons/gr';

const Footer = () => {
  // Inline styles
  const styles = {
    footer: {
      backgroundColor: '#F5F0E6', // light beige
      color: '#333',
      padding: '4rem 2rem',
      fontFamily: 'Arial, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    brand: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '1rem',
      color: '#8B4513', // rich brown for premium look
      textDecoration: 'none',
    },
    description: {
      textAlign: 'center',
      maxWidth: '500px',
      fontSize: '1rem',
      marginBottom: '2rem',
      lineHeight: '1.6',
      color: '#555',
    },
    socialIcons: {
      display: 'flex',
      gap: '1.5rem',
      marginBottom: '3rem',
    },
    iconWrapper: {
      padding: '0.5rem',
      borderRadius: '50%',
      backgroundColor: '#E8E2D6',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    linksContainer: {
      display: 'flex',
      gap: '4rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '2rem',
    },
    linkSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
    },
    linkTitle: {
      fontWeight: '700',
      marginBottom: '0.5rem',
      color: '#8B4513',
    },
    linkItem: {
      fontWeight: '400',
      color: '#555',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    linkItemHover: {
      color: '#8B4513',
    },
    copyright: {
      fontSize: '0.9rem',
      color: '#777',
      textAlign: 'center',
      borderTop: '1px solid #DDD',
      paddingTop: '1rem',
      width: '100%',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.brand}>Aurora Clothing</div>
      <p style={styles.description}>
        Small, artisan label offering a thoughtfully curated collection of high-quality, everyday essentials.
      </p>

      <div style={styles.socialIcons}>
        <div style={styles.iconWrapper}><GrTwitter size={20} color="#1DA1F2" /></div>
        <div style={styles.iconWrapper}><GrFacebookOption size={20} color="#1877F2" /></div>
        <div style={styles.iconWrapper}><GrLinkedinOption size={20} color="#0A66C2" /></div>
      </div>

      <div style={styles.linksContainer}>
        <div style={styles.linkSection}>
          <span style={styles.linkTitle}>Company</span>
          <span style={styles.linkItem}>About</span>
          <span style={styles.linkItem}>Terms of Use</span>
          <span style={styles.linkItem}>Privacy Policy</span>
          <span style={styles.linkItem}>Contact</span>
        </div>

        <div style={styles.linkSection}>
          <span style={styles.linkTitle}>Support</span>
          <span style={styles.linkItem}>24h Service</span>
          <span style={styles.linkItem}>FAQ</span>
        </div>

        <div style={styles.linkSection}>
          <span style={styles.linkTitle}>Contact</span>
          <span style={styles.linkItem}>Email: support@auroraclothing.com</span>
          <span style={styles.linkItem}>Phone: +1 234 567 890</span>
        </div>
      </div>

      <div style={styles.copyright}>
        © 2026 Aurora Clothing. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
