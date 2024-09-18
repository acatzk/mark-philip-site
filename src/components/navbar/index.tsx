'use client'

import React, { useEffect, useState } from 'react'

import { cn } from '~/lib/utils'
import MessagesIcon from '~/components/icons/messages-icon'

import Nav from './nav'
import Menu from './menu'
import Logo from '../logo'
import { Button } from '../ui/button'

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
        'sticky top-0 mt-4 bg-white transition-all duration-500'
      )}
    >
      <section className="mx-auto flex max-w-7xl items-center p-4 md:p-6">
        <div className="flex items-center">
          <Logo />

          {/* Show on desktop */}
          <Nav />
        </div>
        <div className="ml-auto">
          {/* Show on mobile */}
          <Menu />

          <div className="hidden items-center gap-4 lg:flex">
            <MessagesIcon />
            <div className="text-core-secondary flex flex-col">
              <h2 className="font-semibold">Have any questions?</h2>
              <span className="text-sm">+09 569 637 710</span>
            </div>
          </div>
        </div>
      </section>
    </header>
  )
}

export default Navbar
