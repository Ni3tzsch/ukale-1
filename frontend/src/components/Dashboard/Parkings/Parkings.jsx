import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SingleParking } from './SingleParking'
import pkgs from '../../../data/parkings.json'
import log from '../../../data/logs.json'

function Parkings() {
  const [parkings, setParkings] = useState(pkgs)
  const [logs, setLogs] = useState(log)
  const { state } = useLocation()

  return (
    <div className="flex w-full gap-3 overflow-hidden rounded-xl">
      <div className="scrollbar-hide relative h-[calc(100vh_-_120px)] w-fit shrink-0 overflow-y-scroll pb-6 pr-4">
        <div className="sticky top-0 rounded-lg bg-white/90 px-3 py-1 backdrop-blur-2xl">
          <h2 className="text-lg font-medium">Vos parkings</h2>
        </div>
        <div className="mt-4 flex flex-col gap-6">
          {parkings.map((parking) => {
            return (
              <SingleParking key={parking.id} parking={parking} logs={logs} />
            )
          })}
        </div>
      </div>

      <div className="w-full">
        {state ? <Outlet {...state} /> : <h2>Aucun parking sélectionné</h2>}
      </div>
    </div>
  )
}

export default Parkings
