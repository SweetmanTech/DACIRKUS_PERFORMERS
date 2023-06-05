import * as React from "react"

interface LayoutProps {
  className?: string
  children: React.ReactNode
}

const SectionLayout: React.FC<LayoutProps> = ({ className, children }) => (
  <>
    <div className={`relative ${className} bg-center bg-cover bg-no-repeat dark:!block hidden`}>
      <div className="relative z-[6]">{children}</div>
      <div className="absolute h-[100%] top-0 left-0 z-[4] w-full left-0 top-0 backdrop-blur-[7.5px] bg-[#12121252] shadow-[0_0_15px_5px_rgba(0,0,0)]">
        <div className="w-full shadow-[inset_0_0_15px_5px_rgba(0,0,0)]" />
      </div>
    </div>
    <div className="dark:hidden block">{children}</div>
  </>
)

export default SectionLayout
