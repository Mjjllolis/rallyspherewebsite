const Logos: React.FC = () => {
    return (
        <section id="logos" className="py-20 px-5 bg-background">
            <p className="text-lg font-medium text-center">
                Trusted by <span className="text-secondary">Leading Pickleball Clubs</span>
            </p>
            {/* Horizontal scroll section for example club logos */}
            <div className="mt-6 overflow-x-auto flex justify-center">
                <div className="flex gap-10 w-max px-2 items-center">
                    {["Club1.jpg"].map((logo, index) => (
                        <img
                            key={index}
                            src={`/images/${logo}`}
                            alt={`Club Logo ${index + 1}`}
                            className="w-40 h-24 flex-shrink-0 object-contain grayscale hover:grayscale-0 transition-all duration-300 rounded-lg"
                        />
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Logos