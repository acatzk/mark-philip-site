'use client'

import React, { useEffect, useState } from 'react'

import { cn } from '~/lib/utils'
import MessagesIcon from '~/components/icons/messages-icon'

import Nav from './nav'
import Menu from './menu'
import Logo from '../logo'

const Navbar = (): JSX.Element => {
  const [header, setHeader] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 36 ? setHeader(true) : setHeader(false)
    })
  }, [header])

  return (
    <header
      className={cn(
        header ? 'shadow-xl' : '',
        'sticky top-0 z-[99999] mt-4 bg-white transition duration-500 ease-in-out'
      )}
    >
      <section className="mx-auto flex w-full max-w-6xl items-center p-4 md:p-6">
        <div className="flex items-center">
          <Logo />

          {/* Show on desktop */}
          <Nav />
        </div>
        <div className="ml-auto flex items-center">
          <div className="hidden flex-col items-center gap-2 md:flex lg:flex-row lg:gap-3">
            <MessagesIcon className="scale-75 md:scale-100" />
            <div className="flex flex-col text-core-secondary">
              <h2 className="hidden text-sm font-semibold md:text-base lg:block">
                Have any questions?
              </h2>
              <span className="text-xs md:text-sm">+09 569 637 710</span>
            </div>
          </div>

          {/* Show on mobile */}
          <Menu />
        </div>
      </section>
    </header>
  )
}

export default Navbar
