import { type Dispatch, type SetStateAction } from 'react'

export type ModuleGetFetchProps = {
  params: Record<string, string | number>
  fetchUrl?: string
  header?: Record<string, string>
}
export type Item = Array<{
  addr1: string
  addr2: string
  areacode: string
  booktour: string
  cat1: string
  cat2: string
  cat3: string
  contentid: string
  contenttypeid: string
  createdtime: string
  firstimage: string
  firstimage2: string
  cpyrhtDivCd: string
  mapx: string
  mapy: string
  mlevel: string
  modifiedtime: string
  sigungucode: string
  tel: string
  title: string
}>

export type SuccessResponse = {
  response: {
    header: {
      resultCode: string
      resultMsg: string
    }
    body: {
      items: {
        item: Item
      }
      numOfRows: number
      pageNo: number
      totalCount: number
    }
  }
}

export type KoreaSvgProps = {
  clickPlace: (place: string) => void
}
export type DetailMapProps = {
  currentPlaceDo: string
}

export type CarouselProps = {
  place: Item
}
export type DetailProps = {
  place: {
    addr1: string
    addr2: string
    areacode: string
    booktour: string
    cat1: string
    cat2: string
    cat3: string
    contentid: string
    contenttypeid: string
    createdtime: string
    firstimage: string
    firstimage2: string
    cpyrhtDivCd: string
    mapx: string
    mapy: string
    mlevel: string
    modifiedtime: string
    sigungucode: string
    tel: string
    title: string
  }
}

export type MainMapComponentProps = {
  isOpenDetail: boolean
  clickPlace: (place: string) => void
}
export type DetailMapComponentProps = {
  isOpenDetail: boolean
  currentPlaceDo: string
  setIsOpenDetail: Dispatch<SetStateAction<boolean>>
  place: Item
}
