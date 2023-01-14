import { useState } from 'react'
import pkgs from '../../../data/parkings.json'
import { SingleParking } from './SingleParking'

function Parking() {
  const [parkings, setParkings] = useState(pkgs)

  return (
    <div className="flex w-full gap-3">
      <div className="scrollbar-hide relative h-[calc(100vh_-_120px)] w-fit overflow-y-scroll pb-6 pr-4">
        <div className="sticky top-0 rounded-lg bg-white/90 px-3 py-1 backdrop-blur-2xl">
          <h2 className="text-lg font-medium">Vos parkings</h2>
        </div>
        <div className="mt-4 flex flex-col gap-6">
          {parkings.map((parking) => {
            return <SingleParking key={parking.id} {...parking} />
          })}
        </div>
      </div>

      <div>
        <h2>Aucun parking sélectionné</h2>
      </div>
    </div>
  )
}

export default Parking
