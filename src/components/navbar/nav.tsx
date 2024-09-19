import React from 'react'

import List from './list'

const Nav = (): JSX.Element => {
  return (
    <nav className="ml-16 hidden md:block lg:ml-24">
      <List className="inline-flex items-center gap-10 text-sm font-semibold uppercase text-core-secondary transition-all duration-200 lg:gap-14" />
    </nav>
  )
}

export default Nav
