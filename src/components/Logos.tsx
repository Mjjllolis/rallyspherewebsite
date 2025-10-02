'use client';

import { motion } from 'framer-motion';

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-20 px-5 bg-gradient-to-b from-white via-blue-50/20 to-white relative z-10 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl" />
            </div>

            <motion.p
                className="text-lg font-medium text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Trusted by <span className="text-secondary">Leading Pickleball Clubs</span>
            </motion.p>
            {/* Horizontal scroll section for example club logos */}
            <motion.div
                className="mt-6 overflow-x-auto flex justify-center relative z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="flex gap-10 w-max px-2 items-center">
                    {["Club1.jpg"].map((logo, index) => (
                        <motion.img
                            key={index}
                            src={`/images/${logo}`}
                            alt={`Club Logo ${index + 1}`}
                            className="w-40 h-24 flex-shrink-0 object-contain grayscale hover:grayscale-0 transition-all duration-300 rounded-lg"
                            whileHover={{ scale: 1.05 }}
                        />
                    ))}
                </div>
            </motion.div>

        </section>
    )
}

export default Logos