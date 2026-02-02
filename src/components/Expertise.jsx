import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGoogle, FaSearch, FaBullhorn, FaPenNib, FaChartLine, FaHome, FaPalette } from 'react-icons/fa';

const skills = [
    { name: 'Meta Ads', icon: <FaFacebook />, desc: 'Lead Generation & Brand Awareness on FB & Insta.', color: '#1877F2' },
    { name: 'Google Ads', icon: <FaGoogle />, desc: 'Search & Display campaigns optimized for ROI.', color: '#EA4335' },
    { name: 'SEO Strategy', icon: <FaSearch />, desc: 'On-page & Off-page optimization to rank #1.', color: '#34A853' },
    { name: 'Social Media', icon: <FaBullhorn />, desc: 'Community management and engagement growth.', color: '#E4405F' },
    { name: 'Content Marketing', icon: <FaPenNib />, desc: 'Compelling blogs and copy that converts.', color: '#FBC02D' },
    { name: 'Analytics', icon: <FaChartLine />, desc: 'Data-driven decision making and reporting.', color: '#8E24AA' },
    { name: 'Real Estate Marketing', icon: <FaHome />, desc: 'Specialized lead gen for properties & developers.', color: '#009688' },
    { name: 'Creative Design', icon: <FaPalette />, desc: 'High-performing posters & reels (Canva).', color: '#00C4CC' },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Expertise = () => {
    return (
        <section id="expertise" className="section-padding" style={{ position: 'relative' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>My <span className="text-gradient">Expertise</span></h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                        I combine creative strategy with technical precision to deliver results across all major digital channels.
                    </p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{
                                padding: '30px',
                                borderRadius: '20px',
                                borderTop: `2px solid ${skill.color}`,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            <div style={{
                                fontSize: '2.5rem',
                                color: skill.color,
                                marginBottom: '20px',
                                background: `rgba(255,255,255,0.05)`,
                                width: '60px',
                                height: '60px',
                                borderRadius: '15px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {skill.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{skill.name}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{skill.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Expertise;
