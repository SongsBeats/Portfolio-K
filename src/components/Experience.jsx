import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
    {
        role: 'Freelance Digital Marketing Executive',
        company: 'Civic Digi Software Solutions Pvt. Ltd',
        period: 'Oct 2025 - Dec 2025',
        desc: [
            'Planned and optimized Meta ad campaigns for multiple client accounts.',
            'Managed audience targeting, budgets, creatives, and performance tracking.',
            'Designed ad creatives, posters, and reels using Canva and analyzed performance.'
        ]
    },
    {
        role: 'Digital Marketing Executive',
        company: 'Andromeda Sales & Distribution Pvt. Ltd',
        period: 'Feb 2025 - Sep 2025',
        desc: [
            'Executed Meta lead generation campaigns and managed Google Ads (Search & Display).',
            'Designed high-performing posters and reels to support paid campaigns.',
            'Monitored metrics like CTR, CPL, and conversions to improve ROI.'
        ]
    },
    {
        role: 'Digital Marketing Executive',
        company: 'Vpropmart Consulting Pvt. Ltd',
        period: 'Aug 2024 - Feb 2025',
        desc: [
            'Managed Meta Ads and Google Ads campaigns specifically for real estate projects.',
            'Handled real estate portals 99acres, MagicBricks, and Housing.com to drive listings.',
            'Created SEO-friendly blogs and managed social media engagement.'
        ]
    },
    {
        role: 'Digital Marketing Executive',
        company: 'Leadsgen Pvt. Ltd',
        period: 'Jul 2023 - Jun 2024',
        desc: [
            'Managed client social media accounts across Facebook, Instagram, and LinkedIn.',
            'Executed Meta Ads for lead generation and brand awareness.',
            'Implemented on-page and off-page SEO strategies.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '80px' }}>Professional <span className="text-gradient">Journey</span></h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '20px',
                        top: 0,
                        bottom: 0,
                        width: '2px',
                        background: 'var(--border-color)',
                        zIndex: 0
                    }} className="timeline-line"></div>

                    {experienceData.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                display: 'flex',
                                gap: '40px',
                                marginBottom: '60px',
                                position: 'relative'
                            }}
                            className="experience-item"
                        >
                            {/* Dot */}
                            <div style={{
                                width: '42px',
                                height: '42px',
                                borderRadius: '50%',
                                background: 'var(--bg-primary)',
                                border: '2px solid var(--accent)',
                                flexShrink: 0,
                                zIndex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent)',
                                fontWeight: 'bold'
                            }} className="experience-dot">
                                {experienceData.length - index}
                            </div>

                            {/* Content */}
                            <div className="glass" style={{ width: '100%', padding: '30px', borderRadius: '20px' }}>
                                <span style={{
                                    background: 'var(--accent)',
                                    color: 'white',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.8rem',
                                    fontWeight: 600
                                }}>
                                    {exp.period}
                                </span>
                                <h3 style={{ fontSize: '1.5rem', marginTop: '15px', color: 'white' }}>{exp.role}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', marginBottom: '15px' }}>{exp.company}</h4>
                                <ul style={{ paddingLeft: '20px', listStyle: 'disc', color: 'var(--text-secondary)' }}>
                                    {exp.desc.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '5px' }}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
