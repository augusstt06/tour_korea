import { useState } from 'react'

import { animated, useSpring } from '@react-spring/web'

import Loading from '../loading/Loading'

import { type DetailProps } from '@/app/_type'

export default function Detail(props: DetailProps) {
  const { place } = props
  const [isDetailOpen, setDetailOpen] = useState<boolean>(false)

  const animateStyle = useSpring({
    height: isDetailOpen ? 'auto' : 0,
    opacity: isDetailOpen ? 1 : 0,
  })
  const renderDetail = () => {
    if (place === undefined) return <Loading />
    return (
      <animated.section
        className="p-3 rounded-xl bg-white bg-opacity-30"
        style={animateStyle}
      >
        <h1>{place.title}</h1>
        <p>{place.addr1}</p>
        <p>{place.addr2}</p>
      </animated.section>
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
