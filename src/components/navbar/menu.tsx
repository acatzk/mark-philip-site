import React from 'react'
import { MenuIcon } from 'lucide-react'

import { cn } from '~/lib/utils'
import { Button } from '~/components/ui/button'
import { useMenuToggle } from '~/hooks/use-menu-toggle'

import List from './list'

const Menu = (): JSX.Element => {
  const menu = useMenuToggle()

  return (
    <nav className="block md:hidden">
      <Button variant="ghost" size="icon" onClick={menu.toggle}>
        <MenuIcon />
      </Button>
      <List
        className={cn(
          menu.isOpen ? 'max-h-60 border-t-4 border-core-primary p-8' : 'max-h-0 p-0',
          'absolute left-0 top-[69px] flex w-full flex-col space-y-6 overflow-hidden',
          'rounded-b-md bg-white text-sm shadow-lg transition-all'
        )}
      />
    </nav>
  )
}

export default Menu
