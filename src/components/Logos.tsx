'use client';

const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-20 px-5 bg-gradient-to-b from-white via-blue-50/20 to-white dark:from-[#0A0F1C] dark:via-[#0B1120]/50 dark:to-[#0A0F1C] relative z-10 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-300/20 dark:bg-cyan-600/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300/20 dark:bg-blue-600/10 rounded-full blur-3xl" />
            </div>

            <p className="text-lg font-medium text-center relative z-10 text-foreground">
                Trusted by <span className="text-secondary">Leading Pickleball Clubs</span>
            </p>
            {/* Horizontal scroll section for example club logos */}
            <div className="mt-6 overflow-x-auto flex justify-center relative z-10">
                <div className="flex gap-10 w-max px-2 items-center">
                    {["Club1.jpg"].map((logo, index) => (
                        <img
                            key={index}
                            src={`/images/${logo}`}
                            alt={`Club Logo ${index + 1}`}
                            className="w-40 h-24 flex-shrink-0 object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300 rounded-lg"
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Logos