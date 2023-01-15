import { Link, useLocation } from 'react-router-dom'
import { IoChevronBackOutline as BackIcon } from 'react-icons/io5'

function OwnerInfo() {
  const { state } = useLocation()
  const arr = state.pathname.split('')
  const id = arr[arr.length - 1]

  return (
    <div className="relative">
      <div className="mb-10 flex items-center gap-4">
        <Link
          to={state.pathname}
          state={{ id, name: state.spot.owner.parking }}
          className="flex-center h-8 w-8 rounded-full bg-white"
        >
          <BackIcon />
        </Link>
        <h2 className="text-3xl font-bold">
          {state.spot.owner.parking} - Spot {state.spot.id}
        </h2>
      </div>

      <div className="flex items-start gap-6">
        <p className="info-card flex flex-col">
          <span className="mb-4 font-semibold">Propriétaire</span>
          <span>Nom : {state.spot.owner.name}</span>
          <span>Prénoms : {state.spot.owner.surname}</span>
          <span>Contact : {state.spot.owner.phone}</span>
        </p>

        <p className="info-card flex flex-col">
          <span className="mb-4 font-semibold">Véhicule</span>
          <span>Emplacement : {state.spot.owner.spot}</span>
          <span>Heure d'arrivée : {state.spot.owner.debut}</span>
          <span>Heure de départ : {state.spot.owner.end}</span>
          <span>
            Immatriculation :{' '}
            <span className="font-medium text-red-500">
              {state.spot.owner.carId}
            </span>
          </span>
        </p>
      </div>
    </div>
  )
}

export { OwnerInfo }
