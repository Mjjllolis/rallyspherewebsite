'use client';

import Image from 'next/image';

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-20 px-5 bg-bg relative z-10 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-via/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-from/10 rounded-full blur-3xl" />
            </div>

            <p className="text-lg font-medium text-center relative z-10 text-ink">
                Trusted by <span className="text-gradient font-semibold">Leading Pickleball Clubs</span>
            </p>

            {/* Club logos */}
            <div className="mt-8 flex justify-center relative z-10">
                <Image
                    src="/images/Club1.jpg"
                    alt="SB Pickleball Club"
                    width={160}
                    height={96}
                    className="w-40 h-24 object-contain rounded-lg grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
                />
            </div>
        </section>
    );
};

export default Logos;
