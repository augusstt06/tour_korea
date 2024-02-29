import Loading from '../loading/Loading'

import { type DetailProps } from '@/app/_type'

export default function Detail(props: DetailProps) {
  const { place } = props
  const renderDetail = () => {
    if (place === undefined) return <Loading />
    return (
      <section className="p-3 rounded-xl bg-white bg-opacity-30">
        <h1>{place.title}</h1>
        <p>{place.addr1}</p>
        <p>{place.addr2}</p>
      </section>
    )
  }
  return (
    <details className="cursor-pointer p-3 space-y-3">
      <summary className="transition ease-in-out duration-500 hover:scale-110">
        추가 정보
      </summary>
      {renderDetail()}
    </details>
  )
}
