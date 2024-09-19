'use client'

import React from 'react'

import About from '~/containers/about'
import Banner from '~/containers/banner'

export default function Home(): JSX.Element {
  return (
    <main className="mt-4 md:mt-10">
      <Banner />
      <About />
    </main>
  )
}
