import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Glows */}
            <div style={{
                position: 'absolute',
                top: '-20%',
                right: '-10%',
                width: '600px',
                height: '600px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(109,40,217,0.3) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(80px)',
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '30px',
                        marginBottom: '20px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: 'var(--accent-secondary)',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                    }}>
                        Digital Marketing Expert
                    </div>
                    <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '20px', lineHeight: 1.1 }}>
                        Turning Clicks Into <br />
                        <span className="text-gradient">Loyal Customers</span>
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '30px', maxWidth: '500px' }}>
                        Hi, I'm <span style={{ color: 'white' }}>Poralla Koteswararao</span>. I help real estate and service businesses scale through data-driven Meta & Google Ads strategies.
                    </p>

                    <div style={{ display: 'flex', gap: '20px' }}>
                        <a href="#contact" className="btn btn-primary">
                            Start Scaling <FaArrowRight />
                        </a>
                        <a href="mailto:porallakoteswararao91215@gmail.com" className="btn btn-outline">
                            <FaEnvelope /> Email Me
                        </a>
                    </div>

                    <div style={{ marginTop: '50px', display: 'flex', gap: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>2+</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Years Exp.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>100%</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>ROI Focus</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 700 }}>50+</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Campaigns</p>
                        </div>
                    </div>
                </motion.div>

                {/* Hero Image / Graphic */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ position: 'relative' }}
                    className="hero-image-container"
                >
                    {/* Abstract representation of Dashboards/Charts */}
                    <div className="glass" style={{
                        aspectRatio: '1',
                        borderRadius: '30px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(45deg, rgba(109,40,217,0.1), rgba(6,182,212,0.1))'
                        }}></div>

                        {/* Floating Elements Animation */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                            className="glass"
                            style={{
                                padding: '20px',
                                borderRadius: '20px',
                                position: 'absolute',
                                top: '20%',
                                right: '10%',
                                background: 'rgba(20, 20, 25, 0.9)'
                            }}
                        >
                            <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Conversion Rate</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#4ade80' }}>+150% ↗</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                            className="glass"
                            style={{
                                padding: '20px',
                                borderRadius: '20px',
                                position: 'absolute',
                                bottom: '20%',
                                left: '10%',
                                background: 'rgba(20, 20, 25, 0.9)'
                            }}
                        >
                            <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>New Leads</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#6366f1' }}>1,240+</div>
                        </motion.div>

                        <div style={{ textAlign: 'center' }}>
                            {/* Placeholder for Face or Abstract Art */}
                            <div style={{
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'linear-gradient(to bottom, #334155, #1e293b)',
                                margin: '0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '4rem'
                            }}>
                                🚀
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <style>{`
        @media (max-width: 968px) {
            .hero-image-container { display: none; }
            #hero .container { grid-template-columns: 1fr; text-align: center; }
            #hero h1 { fontSize: 3rem !important; }
            #hero p { margin: 0 auto 30px; }
            #hero .btn-group { justify-content: center; }
            #hero div[style*="marginTop"] { justify-content: center; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
