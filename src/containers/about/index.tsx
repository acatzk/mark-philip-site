import React from 'react'

import TextSection from './text-section'
import ImageSection from './image-section'

const About = (): JSX.Element => {
  return (
    <article className="-mt-[300px] h-auto w-full bg-core-primary pb-40">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 pt-[420px] lg:flex-row lg:items-start">
        <ImageSection />
        <TextSection />
      </section>
    </article>
  )
}

export default About
