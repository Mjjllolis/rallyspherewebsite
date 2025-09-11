import React from 'react'

interface Props {
    className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({ children, className }: React.PropsWithChildren<Props>) => {
    return (
        <div className={`px-6 sm:px-8 md:px-10 lg:px-12 w-full mx-auto ${className ? className : ""}`}>{children}</div>
    )
}

export default Container