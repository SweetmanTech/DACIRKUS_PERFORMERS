interface SectionTitleProps {
  text: string
}

const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => (
  <div className="lg:m-12 lg:text-6xl font-eigerdals">{text}</div>
)

export default SectionTitle
