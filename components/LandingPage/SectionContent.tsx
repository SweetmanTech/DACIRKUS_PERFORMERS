interface SectionContentProps {
  children: React.ReactNode
}

const SectionContent: React.FC<SectionContentProps> = ({ children }) => (
  <div className="lg:m-12 lg:text-1xl font-quicksand">{children}</div>
)

export default SectionContent
