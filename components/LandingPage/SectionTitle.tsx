import * as React from 'react'

interface SectionTitleProps {
    text: string
}

const SectionTitle = ({
    text
}: SectionTitleProps) => {
    return (
        <div className='lg:m-12 lg:text-6xl md:text-6xl font-eigerdals'>
            { text }
        </div>
    )
}

export default SectionTitle;