import { Link } from 'react-router-dom'

function SingleParking({ id, name, capacity, occupation }) {
  const occupationRate = (occupation / capacity) * 100

  const setProgressBarClass = (rate) => {
    const percent = rate * 100

    if (percent >= 75) {
      return `bg-red-600 h-full rounded-full`
    }

    if (percent >= 50) {
      return `bg-orange-400 h-full rounded-full`
    }

    return `bg-blue-400 h-full rounded-full`
  }

  return (
    <Link
      key={id}
      to={`/dashboard/parkings/${id}`}
      className="w-full max-w-[18rem] rounded-xl bg-white py-2 px-3.5"
      state={{ id, name }}
    >
      <div className="flex w-full items-center gap-2">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
          {/* <img src="" alt={name} /> */}
          <div className="h-full w-full bg-gray-500" />
        </div>

        <div className="flex w-full flex-col gap-1">
          <span className="font-semibold">{name}</span>
          <div className="h-3 w-full rounded-full bg-gray-300">
            <div
              className={setProgressBarClass(occupation / capacity)}
              style={{ width: occupationRate + '%' }}
            />
          </div>
          <span className="text-xs font-medium">
            {occupation + '/' + capacity}
          </span>
        </div>
      </div>
    </Link>
  )
}

export { SingleParking }
