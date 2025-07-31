'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ctaDetails } from '@/data/cta';
import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

const WEBHOOK_URL = 'https://prod-69.westus.logic.azure.com:443/workflows/e6558ca33ec14493ae800efb2d84d5e3/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9IHmuYEn4q98L528_bKeSAq_Fv-g2SyFB-05kaRcTiQ';

const baseInputStyles =
    'w-full rounded-xl bg-white/10 border border-white/20 text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#007CFF] placeholder-white/70 transition appearance-none';

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
            const response = await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert('There was an error submitting the form.');
            }
        } catch (err) {
            console.error(err);
            alert('Submission failed.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="cta" className="relative mt-10 mb-5 lg:my-20 w-full overflow-hidden">
            {/* Grid lines with radial mask (matches Hero) */}
            <div className="absolute inset-0 -z-20">
                <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
            </div>

            {/* Radial overlay */}
            <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]" />

            {/* Blue background */}
            <div className="absolute inset-0 z-0 h-full w-full rounded-3xl bg-gradient-to-br from-[#001733] via-[#002B5C] to-[#004B94] opacity-95" />

            <div className="relative z-10 h-full w-full mx-auto py-12 sm:py-20 px-6">

                <div className="flex flex-col items-center text-white text-center max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold mb-4 max-w-2xl">
                        {ctaDetails.heading}
                    </h2>
                    <p className="mx-auto max-w-xl md:px-5 mb-6">{ctaDetails.subheading}</p>

                    <div className="flex flex-col sm:flex-row items-center sm:gap-4 mb-10">
                        <AppStoreButton />
                        <PlayStoreButton />
                    </div>

                    {submitted ? (
                        <div className="text-center bg-white text-black p-6 rounded-xl shadow-xl">
                            <h3 className="text-xl  font-semibold mb-2">Thanks for reaching out!</h3>
                            <p>We'll be in touch soon.</p>
                        </div>
                    ) : (
                        <form
                            onSubmit={handleSubmit}
                            className="w-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 space-y-5"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name *"
                                    className={baseInputStyles}
                                />
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com *"
                                    className={baseInputStyles}
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Phone"
                                    className={baseInputStyles}
                                />
                                <div className="flex flex-col gap-2 text-left">
                                    <span className="text-sm font-medium mb-1">I am a...</span>
                                    <div className="flex gap-4">
                                        {['Player', 'Club', 'Sponsor'].map(option => (
                                            <label key={option} className="inline-flex items-center gap-2">
                                                <input
                                                    type="radio"
                                                    name="category"
                                                    value={option}
                                                    checked={formData.category === option}
                                                    onChange={handleChange}
                                                    className="form-radio text-[#007CFF] focus:ring-[#007CFF]"
                                                />
                                                <span>{option}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <AnimatePresence mode="wait">
                                {category === 'Club' && (
                                    <motion.div key="club" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Club Name</label>
                                            <input name="clubName" value={formData.clubName} onChange={handleChange} className={baseInputStyles} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Club Size</label>
                                            <input name="clubSize" value={formData.clubSize} onChange={handleChange} className={baseInputStyles} />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Club Location</label>
                                            <input name="clubLocation" value={formData.clubLocation} onChange={handleChange} className={baseInputStyles} />
                                        </div>
                                    </motion.div>
                                )}
                                {category === 'Sponsor' && (
                                    <motion.div key="sponsor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <label className="block text-sm font-medium mb-1">Sponsor Type</label>
                                        <input name="sponsorType" value={formData.sponsorType} onChange={handleChange} className={baseInputStyles} />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div>
                                {/* <label className="block text-sm font-medium mb-1">Most Anticipated Feature *</label> */}
                                <select name="anticipatedFeature" value={formData.anticipatedFeature} onChange={handleChange} className={baseInputStyles}>
                                    <option value="">Select Most Anticipated Feature</option>
                                    <option value="Match Tracking">Match Tracking</option>
                                    <option value="Challenges & Rewards">Challenges & Rewards</option>
                                    <option value="AI Match Feedback">AI Match Feedback</option>
                                    <option value="Club Dashboard">Club Dashboard</option>
                                    <option value="Branded Storefronts">Branded Storefronts</option>
                                    <option value="Analytics & Growth">Analytics & Growth</option>
                                    <option value="Sponsor Exposure">Sponsor Exposure</option>
                                    <option value="Tournament & League Management">Tournament & League Management</option>

                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Additional Comments</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={baseInputStyles} placeholder="Let us know anything else!" />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-xl bg-white text-[#001733] font-semibold transition hover:bg-gray-100 disabled:opacity-50"
                            >
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CTA;