'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="grid gap-14 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    className="p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/30 shadow-lg hover:shadow-xl transition-shadow border border-blue-100/50"
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md" />
                            <Image
                                src={testimonial.avatar}
                                alt={`${testimonial.name} avatar`}
                                width={50}
                                height={50}
                                className="rounded-full shadow-md relative z-10"
                            />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-secondary text-[#001733]">{testimonial.name}</h3>
                            <p className="text-sm text-foreground-accent">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-foreground-accent text-center lg:text-left italic">&quot;{testimonial.message}&quot;</p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Testimonials;
