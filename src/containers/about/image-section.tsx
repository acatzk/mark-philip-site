import React from 'react'
import Image from 'next/image'
import { Zap } from 'lucide-react'

import CirclesIcon from '~/components/icons/circles-icon'

const ImageSection = (): JSX.Element => {
  return (
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
      <div className="absolute -bottom-8 -left-10 h-32 w-28 flex-1 border-[6px] border-[#FF8F26] bg-[#FFD8B2] text-core-secondary shadow-lg lg:-left-14 lg:h-44 lg:w-[150px]">
        <div className="flex h-full flex-col items-center justify-center p-2">
          <p className="text-center text-xs font-bold md:text-sm">
            <span className="text-base font-extrabold md:text-lg lg:text-xl">6 Years</span>{' '}
            Experienced of This Field
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImageSection
