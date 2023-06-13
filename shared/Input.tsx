import { useMediaQuery } from "usehooks-ts"

interface IInput {
  id: string
  name?: string
  value?: string
  className?: string
  containerClassName?: string
  onChange?: (e: any) => any
  placeholder?: string
  type: 'text' | 'password'
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
  hasDoubleAnimation?: boolean
}

function Input({
  id,
  name,
  value,
  type = 'text',
  placeholder,
  onChange,
  className,
  endAdornment,
  startAdornment,
  containerClassName,
  hasDoubleAnimation
}: IInput) {

  const isIphone = useMediaQuery('(max-width: 390px)')

  const hoverEvent = () => {
    if(hasDoubleAnimation) {
      const element = document.getElementsByClassName(`${id}_all`);

      for(let i = 0; i < element.length ; i++) {
        element[i].setAttribute('style', 'transform:scale(1.1)')
      }
    }
  }

  const leaveEvent = () => {
    if(hasDoubleAnimation) {
      const element = document.getElementsByClassName(`${id}_all`);

      for(let i = 0; i < element.length ; i++) {
        element[i].setAttribute('style', 'transform:scale(1)')
      }
    }
  }

  return (
    <div 
      id={id}
      className={`
          core_input
          ${id}_all
          ${containerClassName || ''}
          w-full 
          shadow-[0px_2px_2px_rgba(0,0,0,0.25)] dark:shadow-[0px_2px_2px_2px_rgba(255,255,255,0.25)]
          bg-[#F2F2F2]  rounded-[10px]
        `}
        onMouseOver={ hoverEvent }
        onMouseOut={ leaveEvent }
      >
        <div className="w-full flex rounded-[10px] overflow-hidden items-center justify-between">
            <div className="px-[15px]">
                {startAdornment}
            </div>
            <div
              className={`
                  ${endAdornment ? 'rounded-tr-[0px] rounded-tr-[0px]': ''}
                  w-[70%]
              `}
              style={{
                width: isIphone ?  '45%' : ''
              }}
            >
                <input
                    type={type}
                    placeholder={placeholder}
                    className={`
                        border-none
                        text-black 
                        bg-[#F2F2F2]
                        h-full
                        focus:ring-0
                        ${className || ''}
                    `}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <div>
                {endAdornment}
            </div>
        </div>
    </div>
  )
}

Input.defaultProps = {
  hookToForm: false,
  type: 'text',
  hasDoubleAnimation: false
}

export default Input
