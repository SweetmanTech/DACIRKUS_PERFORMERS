interface IInput {
  id?: string
  name?: string
  value?: string
  className?: string
  onChange?: (e: any) => any
  placeholder?: string
  type: 'text' | 'password'
  startAdornment?: React.ReactNode
  endAdornment?: React.ReactNode
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
  startAdornment
}: IInput) {

  return (
    <div className="w-full shadow-[0px_2px_2px_rgba(0,0,0,0.25)] bg-[#F2F2F2] dark:shadow-[0px_2px_2px_2px_rgba(255,255,255,0.25)] rounded-[10px]">
        <div className="w-full flex rounded-[10px] overflow-hidden border-[1px] border-slate-300 items-center">
            <div className="px-[10px]">
                {startAdornment}
            </div>
            <div
                className={`
                    ${endAdornment ? 'rounded-tr-[0px] rounded-tr-[0px]': ''}
                `}
            >
                <input
                    {...(id && { id: id })}
                    type={type}
                    placeholder={placeholder}
                    className={`
                        border-none
                        text-black 
                        bg-[#F2F2F2]
                        h-full
                        w-[70%]
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
  type: 'text'
}

export default Input
