import { Link, useLocation } from 'react-router-dom'
import parking from '../../../data/parking.json'

function Parking({ props }) {
  const { state, pathname } = useLocation()

  return (
    <div className="w-full">
      <h2 className="mb-10 text-3xl font-bold">{parking[state.id - 1].name}</h2>

      <div className="grid w-full grid-cols-5 gap-1">
        {parking[state.id - 1].spots.map((spot) => {
          return spot.owner ? (
            <Link
              key={spot.id}
              to={`/dashboard/parkings/${parking[state.id - 1].name}/owner/${
                spot.owner?.carId
              }`}
              state={{ spot, pathname }}
              className="relative h-[5rem] overflow-hidden rounded-xl bg-gray-300 font-semibold text-white"
            >
              {spot.isBusy ? (
                <div className="flex-center h-full w-full bg-red-600">
                  Occupé({spot.id})
                </div>
              ) : (
                <div className="flex-center h-full w-full bg-blue-400">
                  Disponible({spot.id})
                </div>
              )}
            </Link>
          ) : (
            <div
              key={spot.id}
              className="relative h-[5rem] cursor-default overflow-hidden rounded-xl bg-gray-300 font-semibold text-white"
            >
              {spot.isBusy ? (
                <div className="flex-center h-full w-full bg-red-600">
                  Occupé({spot.id})
                </div>
              ) : (
                <div className="flex-center h-full w-full bg-blue-400">
                  Disponible({spot.id})
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Parking
