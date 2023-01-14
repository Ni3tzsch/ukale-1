import { Link } from 'react-router-dom'

function SingleParking({ id, name, capacity, occupation }) {
  return (
    <Link
      key={id}
      to={`/dashboard/parkings?id=${id}`}
      className="w-full max-w-[18rem] rounded-xl bg-white p-3"
    >
      <div className="flex items-center gap-3">
        <div className="h-20 w-20 overflow-hidden rounded-full">
          {/* <img src="" alt={name} /> */}
          <div className="aspect-square w-full bg-gray-500"></div>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold">{name}</span>
          <progress className="mt-1 h-2.5 rounded-full" />
          <span className="text-xs font-medium">
            {occupation + '/' + capacity}
          </span>
        </div>
      </div>
    </Link>
  )
}

export { SingleParking }
