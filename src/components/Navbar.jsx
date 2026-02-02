import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', href: '#hero' },
    { title: 'Expertise', href: '#expertise' },
    { title: 'Experience', href: '#experience' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '20px 0',
      transition: 'all 0.3s ease',
      background: scrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-heading)', letterSpacing: '-0.5px' }}>
          PK<span style={{ color: 'var(--accent-secondary)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: '40px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a href={link.href} style={{ fontSize: '0.95rem', fontWeight: 500, opacity: 0.8 }} className="nav-link">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>



      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-secondary)',
              padding: '20px',
              borderBottom: '1px solid var(--border-color)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{ fontSize: '1.1rem', fontWeight: 500 }}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
