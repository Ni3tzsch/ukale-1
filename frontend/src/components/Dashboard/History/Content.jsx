import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Table } from './Table'
import { GainChart } from './GainChart'
import pkgs from '../../../data/parkings.json'

function Content() {
  const { state, pathname } = useLocation()
  const [data, setData] = useState(state)
  const [parkings, setParkings] = useState(pkgs)
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

  console.log(state)

  return (
    <div className="pb-10">
      <h2 className="page-title">Historique - {data.name}</h2>
      <div className="max-w-[50%]">
        <GainChart {...toGainChart} />
      </div>

      <div className="mt-8">{data ? <Table tableData={data} /> : null}</div>
    </div>
  )
}

export { Content }
