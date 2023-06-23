import useClickOutside from '../hooks/useClickOutside'
import { useState, ReactNode } from 'react'

interface IPopoverFucChild {
  toggleModal: () => void
}

interface PopoverProps {
id: string
  children?: [ReactNode, (props: IPopoverFucChild) => any]
  className?: string
}

export default function Popover({
    id,
  children,
  className
}: PopoverProps) {
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    if (openModal) return setOpenModal(false)
    setOpenModal(prev => !prev)
  }

  const { ref: modalRef } = useClickOutside({
    id,
    shouldRegister: openModal,
    onOutsideClick: () => setOpenModal(false)
  })

  return (
    <div className='relative z-[10]' ref={modalRef}>
      <div onClick={toggleModal}>{children && children[0]}</div>
      {openModal && (
        <div
          className={`${className || ''} fixed w-[100vw] h-[100vh] top-0 left-0 flex justify-center items-center z-[9999]`}
          id={id}
        >
          {children &&
            typeof children[1] !== 'function' &&
            children[1]}
          {children &&
            typeof children[1] === 'function' &&
            (children[1] as any)({
              toggleModal
            })}
        </div>
      )}
    </div>
  )
}