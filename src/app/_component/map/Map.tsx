import '../css/index.css'

import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { Poor_Story } from 'next/font/google'
import { IoClose } from 'react-icons/io5'

import KoreaSvg from '../../_svg/KoreaSVG'
import Carousel from '../carousel/Carousel'

import DetailMap from './DetailMap'

import { API_KEY, JSON, TOUR, WIN } from '@/app/_constant'
import { API_ROUTE_KEYWORD } from '@/app/_constant/routes'
import { type Item } from '@/app/_type'
import { moduleGetFetch } from '@/app/_utils/fetch'

const poor = Poor_Story({
  subsets: ['latin'],
  weight: '400',
})
export default function Map() {
  const [currentPlaceDo, setCurrentPlaceDo] = useState<string>('')
  const clickPlace = (place: string) => {
    setCurrentPlaceDo(place)
  }

  const [place, setPlace] = useState<Item>([])

  const { data, refetch } = useQuery({
    queryKey: ['search'],
    queryFn: async () => {
      const res = await moduleGetFetch({
        params: {
          numOfRows: 20,
          pageNo: 1,
          MobileOS: WIN,
          MobileApp: TOUR,
          _type: JSON,
          keyword: currentPlaceDo,
          serviceKey: API_KEY,
        },
        fetchUrl: API_ROUTE_KEYWORD,
      })
      return res
    },
    enabled: false,
  })

  useEffect(() => {
    if (currentPlaceDo !== '') {
      void refetch()
    }
  }, [currentPlaceDo])

  useEffect(() => {
    if (data !== undefined) {
      setPlace(data?.response.body.items.item)
    }
  }, [data])

  return (
    <>
      {currentPlaceDo === '' ? (
        <section
          id="map"
          className="flex justify-center items-center h-screen backdrop-blur-md"
        >
          <KoreaSvg clickPlace={clickPlace} />
        </section>
      ) : (
        <section
          id="map"
          className="flex justify-left items-center h-screen backdrop-blur-md"
        >
          <div className="lg:inline hidden relative" id="detail-map">
            <DetailMap currentPlaceDo={currentPlaceDo} />
          </div>
          <div
            id="map-description"
            className={`bg-white bg-opacity-20 shadow-3xl absolute lg:top-36 top-1/2 lg:right-16 right-1/2 transform lg:transform-none lg:translate-x-0 translate-x-1/2 -translate-y-1/2 lg:w-1/3 md:w-1/2 w-2/3 rounded-xl text-center text-white ${poor.className}`}
          >
            <div className="flex items-center justify-center space-x-4 p-3">
              <p className="text-xl">{currentPlaceDo}</p>
              <IoClose
                id="reset"
                className="font-bold w-5 h-5 cursor-pointer transition ease-in-out duration-500"
                onClick={() => {
                  setCurrentPlaceDo('')
                }}
              />
            </div>
            <Carousel place={place} />
          </div>
        </section>
      )}
    </>
  )
}
