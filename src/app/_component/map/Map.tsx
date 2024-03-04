import '../css/index.css'

import { useEffect, useState } from 'react'

import { animated, useTransition } from '@react-spring/web'
import { useQuery } from '@tanstack/react-query'
import { Poor_Story } from 'next/font/google'
import { IoClose } from 'react-icons/io5'

import KoreaSvg from '../../_svg/KoreaSVG'
import Carousel from '../carousel/Carousel'

import DetailMap from './DetailMap'

import { API_KEY, JSON, TOUR, WIN } from '@/app/_constant'
import { API_ROUTE_KEYWORD } from '@/app/_constant/routes'
import {
  type DetailMapComponentProps,
  type Item,
  type MainMapComponentProps,
} from '@/app/_type'
import { moduleGetFetch } from '@/app/_utils/fetch'

const poor = Poor_Story({
  subsets: ['latin'],
  weight: '400',
})
export default function Map() {
  const [isOpenDetail, setIsOpenDetail] = useState<boolean>(false)
  const [currentPlaceDo, setCurrentPlaceDo] = useState<string>('')
  const clickPlace = (place: string) => {
    setIsOpenDetail(true)
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
      {!isOpenDetail ? (
        <MainMapComponent clickPlace={clickPlace} isOpenDetail={isOpenDetail} />
      ) : (
        <DetailMapComponent
          isOpenDetail={isOpenDetail}
          setIsOpenDetail={setIsOpenDetail}
          currentPlaceDo={currentPlaceDo}
          place={place}
        />
      )}
    </>
  )
}

function MainMapComponent(props: MainMapComponentProps) {
  const { isOpenDetail, clickPlace } = props
  const transition = useTransition(isOpenDetail, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  })
  return (
    <>
      {transition((style) => (
        <animated.section
          style={style}
          className="flex justify-center items-center h-screen"
        >
          <KoreaSvg clickPlace={clickPlace} />
        </animated.section>
      ))}
    </>
  )
}

function DetailMapComponent(props: DetailMapComponentProps) {
  const { isOpenDetail, currentPlaceDo, place, setIsOpenDetail } = props
  const transition = useTransition(isOpenDetail, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  })

  return (
    <>
      {transition((style) => (
        <div className="absolute transform top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-full">
          <animated.section
            style={style}
            className="flex justify-start items-center h-screen backdrop-blur-md"
            id="detail-map"
          >
            <div className="absolute lg:left-1/4 sm:top-1/3 top-2/3 sm:left-10 transform left-1/2 sm:translate-x-0 -translate-x-1/2 h-screen">
              <DetailMap currentPlaceDo={currentPlaceDo} />
            </div>
            <div
              id="map-description"
              className={`bg-white bg-opacity-20 shadow-3xl absolute lg:top-36 sm:top-1/2 top-1/3 lg:right-16 sm:right-1/4 right-1/2 transform lg:transform-none lg:translate-x-0 translate-x-1/2 -translate-y-1/2 sm:w-1/3 w-2/3 rounded-xl text-center text-white ${poor.className}`}
            >
              <div className="flex items-center justify-center space-x-4 p-3">
                <p className="text-xl">{currentPlaceDo}</p>
                <IoClose
                  id="reset"
                  className="w-5 h-5 cursor-pointer transition ease-in-out duration-500 bg-white rounded-xl bg-opacity-50 hover:rotate-90"
                  onClick={() => {
                    setIsOpenDetail(false)
                  }}
                />
              </div>
              <Carousel place={place} />
            </div>
          </animated.section>
        </div>
      ))}
    </>
  )
}
