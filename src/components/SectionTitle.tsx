import React from 'react';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return (
        <div className="relative inline-block w-full flex justify-center">
            <div className="relative inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg blur opacity-20"></div>
                {React.cloneElement(children, {
                    className: children.props.className + " text-3xl lg:text-5xl lg:leading-tight font-bold relative bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                })}
            </div>
        </div>
    );
};

export default SectionTitle;