"use client";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";

import SectionHeading from "./ui/SectionHeading";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="relative py-28 lg:py-40 overflow-hidden bg-bg text-ink">
            {/* Subtle grid background */}
            <div className="absolute inset-0 -z-10 grid-overlay opacity-40" />

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
                <div className="grid lg:grid-cols-[minmax(0,380px)_1fr] gap-10 lg:gap-16">
                    {/* Left column */}
                    <div className="lg:sticky lg:top-28 self-start">
                        <SectionHeading
                            align="left"
                            eyebrow="FAQ"
                            title="Frequently Asked Questions"
                            subtitle="Everything you need to know about RallySphere. Can’t find an answer? Reach out — we’re happy to help."
                        />
                        <a
                            href="mailto:help@rallysphere.com"
                            className="mt-6 inline-block text-xl lg:text-2xl text-gradient font-semibold hover:opacity-80 transition-opacity"
                        >
                            help@rallysphere.com
                        </a>
                    </div>

                    {/* Questions */}
                    <div className="w-full">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ delay: index * 0.06, duration: 0.35 }}
                                className="mb-4"
                            >
                                <Disclosure>
                                    {({ open }) => (
                                        <div className="rounded-2xl border border-line bg-surface-1 overflow-hidden transition-colors hover:border-brand/40">
                                            <DisclosureButton className="flex items-center justify-between w-full gap-4 px-5 py-5 text-left group">
                                                <span className="text-lg sm:text-xl font-semibold text-ink group-hover:text-brand transition-colors">
                                                    {faq.question}
                                                </span>
                                                <span className="flex-shrink-0 p-2 rounded-full brand-gradient text-ink-on-accent">
                                                    {open ? (
                                                        <BiMinus className="w-5 h-5" />
                                                    ) : (
                                                        <BiPlus className="w-5 h-5" />
                                                    )}
                                                </span>
                                            </DisclosureButton>
                                            <DisclosurePanel className="px-5 pb-5 -mt-1 text-base text-ink-secondary leading-relaxed">
                                                {faq.answer}
                                            </DisclosurePanel>
                                        </div>
                                    )}
                                </Disclosure>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
