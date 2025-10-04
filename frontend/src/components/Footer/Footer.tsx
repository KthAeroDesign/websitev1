import React from 'react';
import './Footer.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div>
                <h3>KTH Aero Design</h3>
                <p>Contact us at: ...</p>
                <p>Follow us on social media!</p>
                <div className="footer-social-icons">
                    <a href="https://www.linkedin.com/company/kth-aero-design-team" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin size={28} />
                    </a>
                    <a href="https://www.instagram.com/kthaerodesign" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram size={28} />
                    </a>
                </div>
            </div>
            <p>© 2025 KTH Aero Design. All rights reserved.</p>
        </footer>
    );
};

export default Footer;