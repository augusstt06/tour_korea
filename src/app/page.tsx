import { Outfit } from 'next/font/google'

// import Korea from './map/Korea'

const outfit = Outfit({
  subsets: ['latin'],
  weight: '500',
})
export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex flex-col absolute lg:top-1/3 lg:left-40 lg:transform-none lg:text-left top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
        <h1 className={`text-white text-4xl ${outfit.className}`}>
          Tour in Korea
        </h1>
        <p className={`text-white ${outfit.className}`}>
          Explore various tourist attractions located in Korea
        </p>
      </div>
    </div>
    //   <main className="flex justify-center items-center h-screen">
    //   <Korea />
    // </main>
  )
}
