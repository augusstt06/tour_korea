import { type DetailProps } from '@/app/_type'

export default function Detail(props: DetailProps) {
  const { place } = props
  return (
    <details>
      <summary>추가 정보</summary>
      <h1>{place.title}</h1>
      <p>{place.addr1}</p>
      <p>{place.addr2}</p>
    </details>
  )
}
