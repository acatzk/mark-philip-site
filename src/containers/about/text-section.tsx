import React from 'react'
import { CircuitBoard, Unplug } from 'lucide-react'

const TextSection = (): JSX.Element => {
  return (
    <div className="mt-4 w-full px-8 text-core-secondary sm:max-w-2xl">
      <span className="text-sm font-bold uppercase md:text-base">ABOUT</span>
      <h2 className="text-2xl font-extrabold text-white lg:text-4xl">
        Residential & Commercial Electrical Services
      </h2>
      <p className="mt-4 text-xs font-light leading-5 tracking-wider text-white md:mt-8 lg:pr-14">
        I provide reliable electrical solutions for both residential and commercial properties. From
        repairs and upgrades to complex installations, my services prioritize safety and quality.
        Whether you&apos;re a homeowner or a business, I tailor my work to meet your needs, ensuring
        everything complies with local regulations and standards.
      </p>
      <div className="mt-14 flex flex-wrap items-center gap-4 md:gap-14">
        <IconSection Icon={CircuitBoard} title="Emergency" subtitle="Repair" />
        <IconSection Icon={Unplug} title="Rewiring and" subtitle="Check-up" />
      </div>
    </div>
  )
}

type IconSectionProps = {
  Icon: React.ElementType
  title: string
  subtitle: string
}

const IconSection = ({ Icon, title, subtitle }: IconSectionProps) => (
  <div className="inline-flex items-center gap-2 md:gap-4">
    <div className="rounded-full bg-white p-3 md:p-4">
      <Icon className="h-6 w-6 text-core-primary md:h-7 md:w-7" />
    </div>
    <h3 className="text-sm font-bold md:text-base">
      {title} <br /> {subtitle}
    </h3>
  </div>
)

export default TextSection
