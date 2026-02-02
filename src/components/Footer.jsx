import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 0',
            textAlign: 'center',
            borderTop: '1px solid var(--border-color)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem'
        }}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} Poralla Koteswararao. All rights reserved.</p>
                <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px'
                }}>
                    <a href="#" style={{ color: 'white' }}>LinkedIn</a>
                    <a href="#" style={{ color: 'white' }}>Instagram</a>
                    <a href="#" style={{ color: 'white' }}>Twitter</a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
