import { FC, ReactNode } from "react"
import { classNames } from "./Utils"

import styles from '../styles/Button.module.css'

interface ButtonProps {
  id: string
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: () => void
  disabled?: boolean
}

interface ToggleButtonProps {
  id: string
  onClick?: () => void
  children?: ReactNode
  value?: boolean
}

export const Button = ({ children, className, onClick, ...rest }: ButtonProps) => {
  const click = () => {
    if(onClick) onClick()
  }

  return (
    <button
      type="button"
      className={`hover:scale-[1.25] transition duration-[500ms] px-4 py-2 font-bold font-quicksand uppercase text-white dark:text-[black] rounded bg-[black] dark:bg-[white] shadow-[0px_4px_4px_rgb(0,0,0,0.25)] dark:shadow-[0px_4px_4px_rgb(255,255,255,0.25)] ${className || ''}`}
      onClick={click}
      {...rest}
    >
      {children}
    </button>
  )
}

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

export const ToggleButton: FC<ToggleButtonProps> = ({onClick, value}) => {
  return (
    <div className="flex justify-center w-16 h-6 cursor-pointer">
        <div className={`flex items-center ${!value ? styles.light_line : styles.dark_line} rounded-full w-full h-6 pl-2`} onClick={onClick}>
          <div className={`${value ? styles.toggle_dot : styles.untoggle_dot} w-5 h-5 rounded-full transition duration-[10000ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]`}></div> 
        </div>
    </div>
  )
}
