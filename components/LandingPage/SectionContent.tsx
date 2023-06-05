interface SectionContentProps {
  children: React.ReactNode
}

const SectionContent: React.FC<SectionContentProps> = ({ children }) => (
  <div className="m-6 lg:m-12 md:text-[1rem] lg:text-1xl text-center md:text-left font-quicksand text-[black] dark:text-[white] dark:drop-shadow-[0_3px_3px_rgba(0,0,0)]">
    {children}
  </div>
)

export default SectionContent
