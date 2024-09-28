import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '~/lib/utils'
import { skillsAndServicesData } from '~/constant/services'

const Servcices = (): JSX.Element => {
  return (
    <article className="bg-[#f7f7f7]">
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-28 lg:py-40">
        <header className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h3 className="text-sm font-bold uppercase text-core-primary md:text-base">Services</h3>
          <h2 className="text-2xl font-extrabold uppercase text-core-secondary lg:text-4xl">
            Skills and services
          </h2>
        </header>
        <Swiper watchSlidesProgress={true} slidesPerView={3} spaceBetween={24} className="mt-20">
          {skillsAndServicesData?.map((skill, index) => (
            <SwiperSlide key={index} className="mb-4 h-full w-full bg-white p-5 pb-14 shadow">
              <div className="relative h-[200px] w-auto">
                <Image
                  fill
                  src={skill?.image}
                  objectFit="cover"
                  style={{
                    width: '100%',
                    height: '100%'
                  }}
                  quality={100}
                  alt="Electrical Image"
                />
                <div className="absolute -bottom-8 right-8 inline-block bg-core-primary p-4">
                  <skill.icon className="h-8 w-8 stroke-1 text-white" />
                </div>
              </div>
              <div className={cn('mt-14 space-y-4', index === 0 ? 'pb-5' : '')}>
                <div>
                  <span className="font-medium uppercase text-core-primary">{skill.type}</span>
                  <h3 className="text-2xl font-bold text-core-secondary">{skill.title}</h3>
                </div>
                <p className="text-sm text-[#7A7B7D]">{skill.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  )
}

export default Servcices
