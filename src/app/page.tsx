'use client'

import React from 'react'

import About from '~/containers/about'
import Banner from '~/containers/banner'
import Servcices from '~/containers/services'

export default function Home(): JSX.Element {
  return (
    <main className="mt-4 md:mt-10">
      <Banner />
      <About />
      <Servcices />
    </main>
  )
}
