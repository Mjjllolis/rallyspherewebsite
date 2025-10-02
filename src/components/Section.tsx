'use client';

import SectionTitle from "./SectionTitle";
import GradientSection from "./GradientSection";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    return (
        <GradientSection variant="blue" className="py-10 lg:py-20 w-full">
            <section id={id} className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
                <SectionTitle>
                    <h2 className="text-center mb-4">{title}</h2>
                </SectionTitle>
                <p className="mb-12 text-center">{description}</p>
                {children}
            </section>
        </GradientSection>
    )
}

export default Section