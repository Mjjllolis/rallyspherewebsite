'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGift, FiZap, FiUsers, FiSend, FiCheckCircle, FiMail } from 'react-icons/fi';
import { ctaDetails } from '@/data/cta';
import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';
import PhotoBackdrop from './ui/PhotoBackdrop';

const CONTACT_ENDPOINT = '/api/contact';

const inputStyles =
    'w-full rounded-xl bg-white/[0.07] border border-white/15 text-white placeholder-white/50 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent-via focus:border-transparent transition appearance-none text-base';
const labelStyles = 'block text-sm font-medium text-ink-on-inverse-muted mb-2';

const perks = [
    { icon: <FiGift size={20} />, title: 'Free to join', desc: 'No upfront costs or monthly fees — ever.' },
    { icon: <FiZap size={20} />, title: 'Early access', desc: 'Be first to try new features as they ship.' },
    { icon: <FiUsers size={20} />, title: 'Built for everyone', desc: 'Players, clubs, and sponsors all welcome.' },
];

const CTA = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        category: 'Player',
        anticipatedFeature: '',
        clubName: '',
        clubSize: '',
        clubLocation: '',
        sponsorType: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const { category } = formData;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.category || !formData.anticipatedFeature) {
            alert('Please fill out required fields.');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(CONTACT_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                // Surface the real reason (e.g. Power Automate 400 schema error)
                const detail = await response.text().catch(() => '');
                console.error('Contact form submit failed:', response.status, detail);
                alert(`There was an error submitting the form (${response.status}). Please try again or email help@rallysphere.com.`);
            }
        } catch (err) {
            console.error('Contact form network error:', err);
            alert('Submission failed — please check your connection or email help@rallysphere.com.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="cta" className="relative w-full overflow-hidden surface-navy text-ink-on-inverse py-28 lg:py-40">
            {/* Photo background */}
            <PhotoBackdrop src="/images/photos/cta.jpg" overlay={90} position="center" />

            {/* Floating gradient orbs */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                <div className="absolute -top-24 -left-16 h-96 w-96 rounded-full bg-accent-from/20 blur-3xl animate-pulse" style={{ animationDuration: '11s' }} />
                <div className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-accent-to/20 blur-3xl animate-pulse" style={{ animationDuration: '13s', animationDelay: '3s' }} />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-12 xl:px-20">
                <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
                    {/* Left: pitch + perks */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5 }}
                        className="lg:sticky lg:top-28 space-y-8"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-on-inverse-muted">
                            <FiMail className="text-accent-via" />
                            Join the waitlist
                        </span>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            <span className="text-gradient-animated">{ctaDetails.heading}</span>
                        </h2>
                        <p className="max-w-lg text-lg leading-relaxed text-ink-on-inverse-muted">
                            {ctaDetails.subheading}
                        </p>

                        {/* Perks */}
                        <ul className="space-y-4">
                            {perks.map((perk, i) => (
                                <motion.li
                                    key={perk.title}
                                    initial={{ opacity: 0, x: -16 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                    className="flex items-center gap-4"
                                >
                                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl brand-gradient-br text-ink-on-accent shadow-lg">
                                        {perk.icon}
                                    </span>
                                    <span>
                                        <span className="block font-semibold text-ink-on-inverse">{perk.title}</span>
                                        <span className="block text-sm text-ink-on-inverse-muted">{perk.desc}</span>
                                    </span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                            <AppStoreButton dark />
                            <PlayStoreButton dark />
                        </div>
                    </motion.div>

                    {/* Right: form card */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="relative rounded-3xl border border-white/15 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-10"
                    >
                        {/* glow ring */}
                        <div className="pointer-events-none absolute -inset-px rounded-3xl brand-gradient opacity-10" />

                        {submitted ? (
                            <div className="relative flex flex-col items-center justify-center gap-4 py-16 text-center">
                                <span className="flex h-16 w-16 items-center justify-center rounded-full brand-gradient text-ink-on-accent">
                                    <FiCheckCircle size={32} />
                                </span>
                                <h3 className="text-2xl font-bold text-ink-on-inverse">Thanks for reaching out!</h3>
                                <p className="text-ink-on-inverse-muted">We&apos;ll be in touch soon. Keep an eye on your inbox.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="relative space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-ink-on-inverse">Tell us about you</h3>
                                    <p className="mt-1 text-sm text-ink-on-inverse-muted">Takes less than a minute.</p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className={labelStyles}>Name *</label>
                                        <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className={inputStyles} />
                                    </div>
                                    <div>
                                        <label className={labelStyles}>Email *</label>
                                        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className={inputStyles} />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className={labelStyles}>Phone</label>
                                        <input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Optional" className={inputStyles} />
                                    </div>
                                </div>

                                {/* Segmented "I am a..." control */}
                                <div>
                                    <span className={labelStyles}>I am a...</span>
                                    <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-white/[0.04] p-1.5">
                                        {['Player', 'Club', 'Sponsor'].map(option => (
                                            <button
                                                type="button"
                                                key={option}
                                                onClick={() => setFormData(prev => ({ ...prev, category: option }))}
                                                aria-pressed={category === option}
                                                className={`relative rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${category === option ? 'text-white' : 'text-ink-on-inverse-muted hover:text-white'}`}
                                            >
                                                {category === option && (
                                                    <motion.span layoutId="cta-segment" className="absolute inset-0 rounded-xl brand-gradient shadow-lg" transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                                                )}
                                                <span className="relative z-10">{option}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {category === 'Club' && (
                                        <motion.div key="club" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2">
                                            <div>
                                                <label className={labelStyles}>Club Name</label>
                                                <input name="clubName" value={formData.clubName} onChange={handleChange} className={inputStyles} />
                                            </div>
                                            <div>
                                                <label className={labelStyles}>Club Size</label>
                                                <input name="clubSize" value={formData.clubSize} onChange={handleChange} className={inputStyles} />
                                            </div>
                                            <div className="sm:col-span-2">
                                                <label className={labelStyles}>Club Location</label>
                                                <input name="clubLocation" value={formData.clubLocation} onChange={handleChange} className={inputStyles} />
                                            </div>
                                        </motion.div>
                                    )}
                                    {category === 'Sponsor' && (
                                        <motion.div key="sponsor" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                                            <label className={labelStyles}>Sponsor Type</label>
                                            <input name="sponsorType" value={formData.sponsorType} onChange={handleChange} className={inputStyles} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div>
                                    <label className={labelStyles}>Most anticipated feature *</label>
                                    <select name="anticipatedFeature" value={formData.anticipatedFeature} onChange={handleChange} className={inputStyles}>
                                        <option value="" className="text-black">Select a feature</option>
                                        <option value="Announcement Board" className="text-black">Announcement Board</option>
                                        <option value="Gamification with Badges/Rewards" className="text-black">Gamification with Badges/Rewards</option>
                                        <option value="Push Notifications" className="text-black">Push Notifications</option>
                                        <option value="Club Dashboard" className="text-black">Club Dashboard</option>
                                        <option value="Branded Storefronts" className="text-black">Branded Storefronts</option>
                                        <option value="Analytics & Growth" className="text-black">Analytics &amp; Growth</option>
                                        <option value="Sponsor Exposure" className="text-black">Sponsor Exposure</option>
                                    </select>
                                </div>

                                <div>
                                    <label className={labelStyles}>Additional comments</label>
                                    <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={inputStyles} placeholder="Let us know anything else!" />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group flex w-full items-center justify-center gap-2 rounded-full brand-gradient py-4 px-6 text-lg font-bold text-ink-on-accent shadow-lg shadow-brand/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-brand/50 disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    {loading ? 'Submitting...' : 'Submit'}
                                    {!loading && <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
