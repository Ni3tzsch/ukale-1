import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Table } from './Table'
import { GainChart } from './GainChart'
import { ParksGraph } from './ParksGraph'
import pkgs from '../../../data/parkings.json'
import pkRate from '../../../data/parkRate.json'

function Content() {
  const { state, pathname } = useLocation()
  const [data, setData] = useState(state)
  const [parkings, setParkings] = useState(pkgs)
  const [parkRate, setParkRate] = useState(pkRate)
  const tableTitles = [
    'Emplacement',
    'Immatriculation',
    'Date de réservation',
    'Côut',
  ]

  useEffect(() => {
    setData(state)
  }, [pathname])

  const toGainChart = {
    capacity: parkings[data.id - 1].capacity,
    occupation: parkings[data.id - 1].occupation,
  }

  const toGraph = {
    rates: parkRate[data.id - 1].rates,
  }

  console.log(state)

  return (
    <div className="pb-10">
      <h2 className="page-title">Historique - {data.name}</h2>
      <div className="flex w-full gap-5">
        <div className="aspect-square max-w-[50%] rounded-xl bg-white py-4 px-5">
          <h3 className="mb-4 text-xl font-medium">Véhicules garés</h3>
          <GainChart {...toGainChart} />
        </div>

        <div className="flex aspect-square max-w-[50%] flex-col rounded-xl bg-white py-4 px-5">
          <h3 className="mb-4 text-xl font-medium">
            Stationnement trimestriel
          </h3>
          <ParksGraph {...toGraph} />
        </div>
      </div>

      <div className="mt-8">{data ? <Table tableData={data} /> : null}</div>
    </div>
  )
}

export { Content }
