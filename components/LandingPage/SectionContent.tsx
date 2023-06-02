import * as React from 'react'

interface SectionContentProps {
    children: React.ReactNode
}

const SectionContent = ({
    children
}: SectionContentProps) => {
    return (
        <div className='lg:m-12 lg:text-1xl md:text-1xl font-quicksand'>
            { children }
        </div>
    )
}

export default SectionContent;