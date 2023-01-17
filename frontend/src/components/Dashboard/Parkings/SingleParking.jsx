import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function SingleParking({ parking, logs }) {
  const { id, name, capacity, occupation } = parking
  const location = useLocation()
  const occupationRate = (occupation / capacity) * 100
  const [destnation, setDestination] = useState(location.pathname)

  useEffect(() => {
    if (location.pathname.includes('/dashboard/history/')) {
      return setDestination('/dashboard/history')
    }

    if (location.pathname.includes('/dashboard/parkings/')) {
      return setDestination('/dashboard/parkings')
    }

    setDestination((prev) => {
      if (location.pathname.includes('/dashboard/parkings')) {
        return prev
      }

      if (location.pathname.includes('/dashboard/history')) {
        return prev
      }
    })
  }, [location.pathname])

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

  console.log(name)

  return (
    <Link
      key={id}
      to={`${
        destnation === '/dashboard/parkings/'
          ? `${destnation + id.toString()}`
          : destnation + '/' + id.toString()
      }`}
      className="w-full max-w-[18rem] rounded-xl bg-white py-2 px-3.5"
      state={{ id, name, logData: logs }}
    >
      <div className="flex w-full items-center gap-2">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full">
          {/* <img src="" alt={name} /> */}
          <div className="h-full w-full bg-gray-500"></div>
        </div>

        <div className="flex w-full flex-col gap-1">
          <span className="font-semibold">{name}</span>
          <div className="h-3 w-full rounded-full bg-gray-300">
            <div
              className={setProgressBarClass(occupation / capacity)}
              style={{ width: occupationRate + '%' }}
            />
          </div>
          <div className="flex justify-between">
            <span className="text-xs font-medium">
              {occupation + '/' + capacity}
            </span>
            <span className="text-xs font-medium">
              {occupationRate.toFixed(0)}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { SingleParking }
