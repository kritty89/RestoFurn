import React from 'react';
import { Container, Typography, IconButton, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn, Email, Phone } from '@mui/icons-material';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="footer-content">
          <div className="footer-section">
            <Typography variant="h6">Follow Us</Typography>
            <div className="social-icons">
              <IconButton component="a" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton component="a" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton component="a" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton component="a" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" color="inherit">
                <LinkedIn />
              </IconButton>
            </div>
          </div>
          <div className="footer-section">
            <Typography variant="h6">Contact Us</Typography>
            <Typography variant="body1">
              <Email /> info@restofurn.com
            </Typography>
            <Typography variant="body1">
              <Phone /> +1 (123) 456-7890
            </Typography>
          </div>
          <div className="footer-section">
            <Typography variant="h6">Quick Links</Typography>
            <Link href="/" color="inherit">
              Home
            </Link>
            <br />
            <Link href="/about" color="inherit">
              About Us
            </Link>
            <br />
            <Link href="/contact" color="inherit">
              Contact
            </Link>
            <br />
            <Link href="/privacy" color="inherit">
              Privacy Policy
            </Link>
          </div>
        </div>
        <Typography variant="body2" color="textSecondary" align="center" className="footer-copyright">
          © {new Date().getFullYear()} RestoFurn. All rights reserved.
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
