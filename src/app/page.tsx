'use client'

import { useState } from 'react'

import { Outfit } from 'next/font/google'

import './globals.css'
import Map from './_component/map/Map'
import useMapStateStore from './_store/map'

const outfit = Outfit({
  subsets: ['latin'],
  weight: '500',
})
export default function Home() {
  const { isMapOpen, setIsMapOpen } = useMapStateStore()
  const [showMap, setShowMap] = useState(false)
  const handleOverlayClick = () => {
    setShowMap(true)
    setIsMapOpen(true)
  }

  return (
    <main
      id="main"
      className={`h-screen ${isMapOpen ? 'backdrop-blur-md' : ''}`}
    >
      {showMap ? (
        <Map />
      ) : (
        <section className="flex flex-col absolute lg:top-1/3 lg:left-40 lg:transform-none lg:text-left lg:items-start items-center text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-4 transition-all duration-1000 ease-in-out">
          <h1 className={`text-white text-4xl ${outfit.className}`}>
            Tour in Korea
          </h1>
          <p className={`text-white ${outfit.className}`}>
            Explore various tourist attractions located in Korea
          </p>
          <button
            className={`transition ease-in-out duration-1000 p-2 bg-indigo-800 w-1/3 rounded-xl text-white bg-opacity-20 backdrop-blur-sm hover:scale-110 hover:bg-opacity-40 ${outfit.className}`}
            onClick={handleOverlayClick}
          >
            Let&apos;s Explore!
          </button>
        </section>
      )}
    </main>
  )
}
