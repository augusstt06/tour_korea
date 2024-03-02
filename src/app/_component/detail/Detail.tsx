import { useState } from 'react'

import { animated, useTransition } from '@react-spring/web'

import Loading from '../loading/Loading'

import { type DetailProps } from '@/app/_type'

export default function Detail(props: DetailProps) {
  const { place } = props
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false)

  const transition = useTransition(isDetailOpen, {
    // height: isDetailOpen ? 'auto' : 0,
    from: {
      opacity: 0,
      config: { duration: 1000 },
    },
    enter: {
      opacity: 1,
      config: { duration: 1000 },
    },
    // leave: {
    //   opacity: 0,
    //   config: { duration: 1000 },
    // },
  })
  const renderDetail = () => {
    if (place === undefined) return <Loading />
    return (
      <>
        {transition((style) => (
          <animated.section
            className="p-3 rounded-xl bg-white bg-opacity-30"
            style={style}
          >
            <h1>{place.title}</h1>
            <p>{place.addr1}</p>
            <p>{place.addr2}</p>
          </animated.section>
        ))}
      </>
    )
  }
  return (
    <details
      className="cursor-pointer p-3 space-y-3"
      onClick={() => {
        setDetailOpen(!isDetailOpen)
      }}
      open={isDetailOpen}
    >
      <summary className="transition ease-in-out duration-500 hover:scale-110">
        추가 정보
      </summary>
      {renderDetail()}
    </details>
  )
}
