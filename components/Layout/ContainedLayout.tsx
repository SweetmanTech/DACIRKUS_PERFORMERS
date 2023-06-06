import React from 'react'
import { ILayout } from './types'
import SeoHead from '../SeoHead'
import Header from '../Header'
import Footer from '../LandingPage/sections/Footer'

// const changeActivePage = () => {
//   window.scrollTo({ top: 0, behavior: 'smooth' })
// }

function ContainedLayout({ children }: ILayout) {
  return (
    <div className="min-h-screen w-screen text-black bg-white dark:bg-[black]">
        <SeoHead title="Cre8ors" description="Cre8ors" image="/CRE8ORSLOGO_ICON.svg" />
        <Header />
        <div className='flex justify-center'>
          <div className='md:w-[1280px]'>
              {children}
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ContainedLayout
