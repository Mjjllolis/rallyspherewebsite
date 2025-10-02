'use client';

import { stats } from "@/data/stats"
import { motion } from "framer-motion"

const Stats: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="stats" className="py-10 lg:py-20">
            <motion.div
                className="grid sm:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                {stats.map(stat => (
                    <motion.div
                        key={stat.title}
                        className="text-center sm:text-left max-w-md sm:max-w-full mx-auto p-6 rounded-2xl bg-gradient-to-br from-blue-50/50 to-transparent hover:from-blue-100/70 hover:to-cyan-50/30 transition-all"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02, y: -5 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="mb-5 flex items-center gap-2 text-3xl font-semibold justify-center sm:justify-start">
                            <span className="p-2 rounded-lg bg-blue-100 text-blue-600">{stat.icon}</span>
                            {stat.title}
                        </h3>
                        <p className="text-foreground-accent">{stat.description}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Stats