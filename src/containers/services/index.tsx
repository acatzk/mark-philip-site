import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

import { cn } from '~/lib/utils'
import { skillsAndServicesData } from '~/constant/services'

const Services = (): JSX.Element => {
  return (
    <article className="relative bg-[#f7f7f7]">
      <section className="relative mx-auto max-w-7xl px-4 py-16 md:py-28 lg:pt-40">
        <header className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <h3 className="text-sm font-bold uppercase text-core-primary md:text-base">Services</h3>
          <h2 className="text-2xl font-extrabold uppercase text-core-secondary lg:text-4xl">
            Skills and services
          </h2>
        </header>
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          spaceBetween={24}
          speed={500}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 14 },
            640: { slidesPerView: 1, spaceBetween: 14 },
            768: { slidesPerView: 2, spaceBetween: 18 },
            1024: { slidesPerView: 3, spaceBetween: 24 }
          }}
          className="mt-20"
        >
          {skillsAndServicesData?.map((skill, index) => (
            <SwiperSlide
              key={index}
              className="mb-14 h-full w-full bg-white p-5 pb-14 shadow transition-all duration-500 ease-in-out hover:shadow-2xl"
            >
              <div className="relative h-[200px] w-auto">
                <Image
                  fill
                  src={skill?.image}
                  objectFit="cover"
                  style={{ width: '100%', height: '100%' }}
                  quality={100}
                  alt={skill.title}
                />
                <div className="absolute -bottom-8 right-8 inline-block bg-core-primary p-3 md:p-4">
                  <skill.icon className="h-5 w-5 stroke-1 text-white lg:h-8 lg:w-8" />
                </div>
              </div>
              <div className={cn('mt-14 space-y-4', index === 0 ? 'pb-5' : '')}>
                <div>
                  <span className="text-sm font-medium uppercase text-core-primary md:text-base">
                    {skill.type}
                  </span>
                  <h3 className="text-base font-bold text-core-secondary md:text-xl lg:text-2xl">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-xs text-[#7A7B7D] md:text-sm">{skill.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </article>
  )
}

export default Services
