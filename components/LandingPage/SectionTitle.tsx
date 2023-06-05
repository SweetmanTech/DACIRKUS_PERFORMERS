interface SectionTitleProps {
  text: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => (
  <div className="m-6 lg:m-12 text-4xl lg:text-6xl text-center md:text-left font-eigerdals text-[black] dark:text-[white] dark:drop-shadow-[0_3px_3px_rgba(0,0,0)]">
    {text}
  </div>
)

export default SectionTitle
