import '../css/index.css'

import { useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { IoClose } from 'react-icons/io5'

import KoreaSvg from '../../_svg/KoreaSVG'
import Carousel from '../carousel/Carousel'

import DetailMap from './DetailMap'

import { API_KEY, TOUR, WIN } from '@/app/_constant'
import { API_ROUTE_KEYWORD } from '@/app/_constant/routes'
import { moduleGetFetch } from '@/app/_utils/fetch'

export default function Map() {
  const [currentPlaceDo, setCurrentPlaceDo] = useState<string>('')
  const clickPlace = (place: string) => {
    setCurrentPlaceDo(place)
    void refetch()
  }

  const { refetch } = useQuery({
    queryKey: ['search'],
    queryFn: async () => {
      const res = await moduleGetFetch({
        params: {
          numOfRows: 10,
          pageNo: 1,
          MobileOS: WIN,
          MobileApp: TOUR,
          _type: 'json',
          keyword: '서울',
          serviceKey: API_KEY,
        },
        fetchUrl: API_ROUTE_KEYWORD,
      })
      return res
    },
    enabled: false,
  })

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
