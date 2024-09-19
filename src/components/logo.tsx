import React from 'react'
import { Zap } from 'lucide-react'

const Logo = (): JSX.Element => {
  return (
    <div className="inline-flex flex-wrap items-center gap-2">
      <Zap className="h-6 w-6 fill-core-primary text-core-secondary md:h-8 md:w-8" />
      <h1 className="text-lg font-bold text-core-secondary md:text-2xl">Mark Philip</h1>
    </div>
  )
}

export default Logo
