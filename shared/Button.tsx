import { FC, ReactNode } from "react"

interface ButtonProps {
  id?: string
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: (e: any) => void
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  id = "button",
  children,
  className,
  onClick,
  type,
  ...rest
}) => {
  return (
    <button
      id={id}
      type={type || "button"}
      className={`hover:scale-[1.1] scale-[1] transition duration-[300ms]
        flex items-center justify-center gap-[10px]
        ${className || ""}`}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
