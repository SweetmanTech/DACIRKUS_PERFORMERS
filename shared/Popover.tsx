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

  const toggleHeaderEvents = (ev: 'all' | 'none') => {
    const headerRef = document.getElementById('header_nav_bar')
    headerRef.style.pointerEvents = ev
  }

  const toggleModal = () => {
    if (openModal) {
      setOpenModal(false)
      toggleHeaderEvents('all')

      return
    }
    setOpenModal(prev => !prev)
    toggleHeaderEvents('none')
  }

  const { ref: modalRef } = useClickOutside({
    id,
    shouldRegister: openModal,
    onOutsideClick: () => {
      setOpenModal(false)
      toggleHeaderEvents('all')
    }
  })

  return (
    <div className='relative z-[52]' ref={modalRef}>
      <div onClick={toggleModal}>{children && children[0]}</div>
      {openModal && (
        <div
          className={`${className || ''} fixed w-screen h-[100vh] top-0 left-0 flex justify-center items-center z-[51]`}
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