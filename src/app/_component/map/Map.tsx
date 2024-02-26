import '../css/index.css'

import { useEffect, useState } from 'react'

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
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [placeImg, setPlaceImg] = useState<string[]>([])

  const { data, refetch } = useQuery({
    queryKey: ['search'],
    queryFn: async () => {
      const res = await moduleGetFetch({
        params: {
          numOfRows: 10,
          pageNo: 1,
          MobileOS: WIN,
          MobileApp: TOUR,
          _type: 'json',
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
      const imgs = data?.response.body.items.item.map((item) => item.firstimage)
      setPlaceImg(imgs)
    }
  }, [data])

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
