import { FC, ReactNode } from "react"
import { classNames } from "./Utils"

interface ButtonProps {
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}
export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={classNames(
      "relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",
      className,
    )}
    {...rest}
  >
    {children}
  </button>
)

export const PageButton: FC<ButtonProps> = ({ children, className, ...rest }) => (
  <button
    type="button"
    className={classNames(
      "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
      className,
    )}
    {...rest}
  >
    {children}
  </button>
)
