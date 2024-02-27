import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type DetailPlace = {
  detailPlace: string
  setDetailPlace: (data: string) => void
}

const usePlaceStore = create<DetailPlace>()(
  devtools(
    persist(
      (set) => ({
        detailPlace: '',
        setDetailPlace: (data: string) => {
          set({ detailPlace: data })
        },
      }),
      { name: 'placeStore' },
    ),
  ),
)

export default usePlaceStore
