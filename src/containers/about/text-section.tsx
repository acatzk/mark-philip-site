import React from 'react'

const TextSection = (): JSX.Element => {
  return (
    <div className="mt-4 w-full px-8 text-core-secondary sm:max-w-lg">
      <span className="text-sm font-bold uppercase md:text-base">ABOUT</span>
      <h2 className="text-2xl font-extrabold text-white lg:text-4xl">
        Residential & Commercial Electrical Services
      </h2>
      <p className="mt-4 text-xs font-light leading-5 tracking-wider text-white md:mt-8">
        I provide reliable electrical solutions for both residential and commercial properties. From
        repairs and upgrades to complex installations, my services prioritize safety and quality.
        Whether you&apos;re a homeowner or a business, I tailor my work to meet your needs, ensuring
        everything complies with local regulations and standards.
      </p>
    </div>
  )
}

export default TextSection
