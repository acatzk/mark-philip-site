import React from 'react'
import Image from 'next/image'
import { Zap } from 'lucide-react'

import CirclesIcon from '~/components/icons/circles-icon'

const About = (): JSX.Element => {
  return (
    <article className="-mt-[300px] h-auto w-full bg-core-primary pb-40">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-14 pt-[420px] lg:flex-row lg:items-start">
        <div className="relative lg:ml-24 lg:w-[25%]">
          <Zap
            className="absolute -left-14 -top-8 h-24 w-14 stroke-core-secondary stroke-[2px] md:-left-20"
            fill="#ffd5ad"
          />
          <CirclesIcon className="absolute -left-14 top-14 md:-left-20" />
          <div className="relative h-80 w-72 lg:h-96 lg:w-80">
            <Image
              fill
              src="/images/img2.webp"
              className="border-r-[6px] border-t-[6px] border-white"
              style={{
                width: '100%',
                height: '100%'
              }}
              objectFit="cover"
              quality={100}
              alt="About profile"
            />
          </div>
          <div className="absolute -bottom-8 -left-10 h-32 w-28 flex-1 border-[6px] border-[#FF8F26] bg-[#FFD8B2] text-core-secondary shadow-lg lg:-left-14 lg:h-44 lg:w-[140px]">
            <div className="flex h-full flex-col items-center justify-center">
              <p className="text-center text-xs font-bold md:text-sm">
                <span className="text-base font-extrabold md:text-lg lg:text-xl">6 Years</span>{' '}
                Experienced of This Field
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 w-full max-w-lg px-8 text-core-secondary">
          <span className="font-bold uppercase">ABOUT</span>
          <h2 className="text-4xl font-extrabold text-white">
            Residential & Commercial Electrical Services
          </h2>
          <p className="mt-8 text-xs font-light leading-5 tracking-wider text-white">
            I provide reliable electrical solutions for both residential and commercial properties.
            From repairs and upgrades to complex installations, my services prioritize safety and
            quality. Whether you&apos;re a homeowner or a business, I tailor my work to meet your
            needs, ensuring everything complies with local regulations and standards.
          </p>
        </div>
      </section>
    </article>
  )
}

export default About
