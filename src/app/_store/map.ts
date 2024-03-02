import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type MapState = {
  isMapOpen: boolean
  setIsMapOpen: (isOpen: boolean) => void
}

const useMapStateStore = create<MapState>()(
  devtools(
    (set) => ({
      isMapOpen: false,
      setIsMapOpen: (isOpen: boolean) => {
        set({ isMapOpen: isOpen })
      },
    }),
    { name: 'mapStateStore' },
  ),
)
export default useMapStateStore
