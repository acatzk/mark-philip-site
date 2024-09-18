import React from 'react'
import { Zap } from 'lucide-react'

const Logo = (): JSX.Element => {
  return (
    <div className="inline-flex items-center gap-x-2">
      <Zap className="text-core-secondary fill-core-primary h-8 w-8" />
      <h1 className="text-core-secondary text-2xl font-bold">Mark Philip</h1>
    </div>
  )
}

export default Logo
