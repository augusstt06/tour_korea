import {
  BUSAN,
  DAEGU,
  DAEJEON,
  GANGWON,
  GWANGJU,
  GYEONGGI,
  INCHEON,
  JEJU,
  NORTH_CHUNGCHEONG,
  NORTH_GYEONGSANG,
  NORTH_JEOLLA,
  SEJONG,
  SEOUL,
  SOUTH_CHUNGCHEONG,
  SOUTH_GYEONGSANG,
  SOUTH_JEOLLA,
  ULSAN,
} from '@/app/_constant'
import Daejeon from '@/app/_svg/chungcheong/Daejeon'
import NorthChungcheong from '@/app/_svg/chungcheong/NorthChungcheong'
import SouthChungcheong from '@/app/_svg/chungcheong/SouthChungcheong'
import Gangwon from '@/app/_svg/gangwon/Gangwon'
import Gyeonggi from '@/app/_svg/gyeongi/Gyeonggi'
import Incheon from '@/app/_svg/gyeongi/Incheon'
import Busan from '@/app/_svg/gyeongsang/Busan'
import Daegu from '@/app/_svg/gyeongsang/Daegu'
import NorthGyeongsang from '@/app/_svg/gyeongsang/NorthGyeongsang'
import SouthGyeongsang from '@/app/_svg/gyeongsang/SouthGyeongsang'
import Ulsan from '@/app/_svg/gyeongsang/Ulsan'
import Jeju from '@/app/_svg/jeju/Jeju'
import Gwangju from '@/app/_svg/jeolla/Gwangju'
import NorthJeolla from '@/app/_svg/jeolla/NorthJeolla'
import SouthJeolla from '@/app/_svg/jeolla/SouthJeolla'
import Sejong from '@/app/_svg/sejong/Sejong'
import Seoul from '@/app/_svg/seoul/Seoul'
import { type DetailMapProps } from '@/app/_type'

export default function DetailMap(props: DetailMapProps) {
  const { currentPlaceDo } = props

  const renderMap = () => {
    switch (currentPlaceDo) {
      case BUSAN:
        return <Busan />
      case DAEGU:
        return <Daegu />
      case ULSAN:
        return <Ulsan />
      case DAEJEON:
        return <Daejeon />
      case GANGWON:
        return <Gangwon />
      case GWANGJU:
        return <Gwangju />
      case GYEONGGI:
        return <Gyeonggi />
      case INCHEON:
        return <Incheon />
      case JEJU:
        return <Jeju />
      case NORTH_CHUNGCHEONG:
        return <NorthChungcheong />
      case SOUTH_CHUNGCHEONG:
        return <SouthChungcheong />
      case NORTH_GYEONGSANG:
        return <NorthGyeongsang />
      case SOUTH_GYEONGSANG:
        return <SouthGyeongsang />
      case NORTH_JEOLLA:
        return <NorthJeolla />
      case SOUTH_JEOLLA:
        return <SouthJeolla />
      case SEJONG:
        return <Sejong />
      case SEOUL:
        return <Seoul />
    }
  }

  return <>{renderMap()}</>
}
