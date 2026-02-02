import React from 'react';
import { FaPaperPlane, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <div style={{
                    background: 'radial-gradient(circle at top right, rgba(109,40,217,0.1), transparent)',
                    borderRadius: '30px',
                    border: '1px solid var(--border-color)',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr',
                    background: 'var(--bg-card)'
                }} className="contact-grid">

                    <div style={{ padding: '60px', background: 'var(--bg-secondary)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Let's work <br /><span className="text-gradient">together.</span></h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '40px' }}>
                            Ready to scale your business with data-driven marketing? Drop me a line.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email</div>
                                    <a href="mailto:porallakoteswararao91215@gmail.com" style={{ fontWeight: 500 }}>porallakoteswararao91215@gmail.com</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                    <FaPhone />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Phone</div>
                                    <a href="tel:+919912360547" style={{ fontWeight: 500 }}>+91 99123 60547</a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</div>
                                    <span style={{ fontWeight: 500 }}>Khammam, Telangana, India</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form style={{ padding: '60px', display: 'flex', flexDirection: 'column', gap: '20px' }} onSubmit={(e) => e.preventDefault()}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Name</label>
                            <input type="text" placeholder="Your Name" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email</label>
                            <input type="email" placeholder="john@example.com" />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Message</label>
                            <textarea placeholder="Tell me about your project..." rows="4"></textarea>
                        </div>
                        <button className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '10px' }}>
                            Send Message <FaPaperPlane />
                        </button>
                    </form>

                </div>
            </div>
            <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
        </section>
    );
};

export default Contact;
