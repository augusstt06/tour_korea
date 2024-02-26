import '../css/index.css'

import { useState } from 'react'

import { IoClose } from 'react-icons/io5'

import KoreaSvg from '../../_svg/KoreaSVG'
import Carousel from '../carousel/Carousel'

import DetailMap from './DetailMap'

export default function Map() {
  const [currentPlaceDo, setCurrentPlaceDo] = useState<string>('')
  const clickPlace = (place: string) => {
    setCurrentPlaceDo(place)
  }

  return (
    <>
      {currentPlaceDo === '' ? (
        <section
          id="map"
          className="flex justify-center items-center h-screen backdrop-blur-sm	"
        >
          <KoreaSvg clickPlace={clickPlace} />
        </section>
      ) : (
        <section
          id="map"
          className="flex justify-left items-center h-screen backdrop-blur-sm	"
        >
          <DetailMap currentPlaceDo={currentPlaceDo} />
          <div
            id="map-description"
            className="bg-red-400 bg-opacity-40 absolute top-1/4 right-16 w-2/5 rounded-xl text-center"
          >
            <div className="flex items-center justify-center space-x-4">
              <p>{currentPlaceDo}</p>
              <IoClose
                id="reset"
                className="font-bold cursor-pointer transition ease-in-out duration-500"
                onClick={() => {
                  setCurrentPlaceDo('')
                }}
              />
            </div>
            <Carousel />
          </div>
        </section>
      )}
    </>
  )
}
