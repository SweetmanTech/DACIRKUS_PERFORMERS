import { FC, ReactNode, useEffect, useState } from "react"
import { classNames } from "./Utils"

import styles from '../styles/Button.module.css'
import { useTheme } from "../providers/ThemeProvider"

interface ButtonProps {
  id: string
  children?: ReactNode
  className?: string
  type?: "button" | "submit" | "reset" | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  disabled?: boolean
}

interface ToggleButtonProps {
  onClick?: () => void
  children?: ReactNode
  value?: boolean
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

export const ToggleButton: FC<ToggleButtonProps> = ({onClick, value}) => {
  const {
    themeMode
  } = useTheme()

  return (
    <div className="flex justify-center w-16 h-6 cursor-pointer">
        <div className={`flex items-center ${!value ? styles.light_line : styles.dark_line} rounded-full w-full h-6 pl-2`} onClick={onClick}>
          <div className={`${value ? styles.toggle_dot : styles.untoggle_dot} w-5 h-5 rounded-full transition duration-[10000ms] ease-[cubic-bezier(0.68,-0.55,0.265,1.55)]`}></div> 
        </div>
    </div>
  )
}
