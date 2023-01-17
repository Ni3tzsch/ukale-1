import { useEffect } from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

function Table() {
  const { state, pathname } = useLocation()
  const [data, setData] = useState(state)
  const tableTitles = [
    'Emplacement',
    'Immatriculation',
    'Date de réservation',
    'Côut',
  ]

  useEffect(() => {
    setData(state)
  }, [pathname])

  console.log(state)

  return (
    <div>
      <h2 className="page-title">Historique - {data.name}</h2>

      {data ? (
        <div className="light-shadow relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {tableTitles.map((title) => {
                  return (
                    <th key={title} scope="col" className="px-6 py-3">
                      {title}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {data.logData[`parking_${data.id}`].map((log) => {
                return (
                  <tr
                    key={log.id}
                    className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                  >
                    <th className="px-6 py-4">{log.spot}</th>
                    <td className="px-6 py-4">{log.carId}</td>
                    <td className="px-6 py-4">{log.date}</td>
                    <td className="px-6 py-4">{log.cost}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  )
}

export { Table }
