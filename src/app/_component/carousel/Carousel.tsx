'use client'

import { useEffect, useState } from 'react'

import Image from 'next/image'

import Detail from '../detail/Detail'

import usePlaceStore from '@/app/_store'
import { type CarouselProps } from '@/app/_type'

export default function Carousel(props: CarouselProps) {
  const { place } = props

  const { setDetailPlace } = usePlaceStore()
  const imgList =
    place !== undefined ? place.map((data) => data.firstimage) : []
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  // const goToSlide = (slideIndex: number) => {
  //   setCurrentSlide(slideIndex)
  // }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imgList.length - 1 : prevSlide - 1,
    )
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imgList.length - 1 ? 0 : prevSlide + 1,
    )
  }

  useEffect(() => {
    if (place?.[currentSlide] !== undefined)
      setDetailPlace(place[currentSlide].addr1.split(' ').slice(1, 2)[0])
  }, [currentSlide, place])

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {place.map((data, index) => (
            <Image
              src={
                data.firstimage !== '' ? `${data.firstimage}` : '/no-img.jpeg'
              }
              className={`absolute block w-full transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              alt={data.firstimage}
              fill
              sizes="(min-width: 640px)"
              key={index}
            />
          ))}
        </div>

        {/* <div className=" absolute z-30 hidden md:flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse bg-red-100 bg-opacity-30 p-3 rounded-xl">
          {place.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-gray-900' : 'bg-gray-300'}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
              onClick={() => {
                goToSlide(index)
              }}
            ></button>
          ))}
        </div> */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={goToPrevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <Detail place={place[currentSlide]} />
    </>
  )
}
