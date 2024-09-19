'use client'

import React from 'react'
import Image from 'next/image'

import { Button } from '~/components/ui/button'

export default function Home(): JSX.Element {
  return (
    <main className="mt-10">
      {/* Banner */}
      <article className="relative mx-auto max-w-7xl">
        <section className="flex h-[320px] items-center justify-center bg-[url('/images/bg.png')] bg-cover text-white md:h-[500px] md:gap-8 lg:gap-16">
          <div className="flex flex-col space-y-6 px-4 md:px-8">
            <div>
              <span className="text-sm uppercase md:text-lg">I will help you</span>
              <h1 className="mt-2 text-2xl font-black md:max-w-sm md:text-5xl">
                HOUSE FOR A QUICK REPAIR.
              </h1>
              <h2 className="mt-4 text-xs font-light md:text-sm">
                I offer repair many different types of devices including your hair style.
              </h2>
            </div>
            <div className="mt-2">
              <Button
                variant="secondary"
                className="h-10 rounded-none px-8 text-base font-medium md:h-12 md:px-14"
                size="xl"
              >
                Hire me
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/images/img1.png"
              width={400}
              height={800}
              className="scale-100 sm:scale-75 md:scale-100"
              alt="Mark Philip"
              quality={100}
            />
          </div>
        </section>
        <section className="relative z-50 bg-white py-14">fields</section>
        <section className="absolute -bottom-6 left-[10%] z-40 h-10 w-[80%] bg-[#f0f0f0]" />
      </article>

      {/* About */}
      <article className="-mt-[300px] h-[700px] w-full bg-core-primary"></article>
    </main>
  )
}
