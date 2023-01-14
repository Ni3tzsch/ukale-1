import { NavLink } from 'react-router-dom'
import sbItems from '../../../../data/sidebarItems'

function Sidebar() {
  const setActiveStyle = ({ isActive }) => {
    const sameClass =
      'px-2 py-1 flex items-center gap-2 border rounded-md hover:bg-blue-400 hover:text-white'
    if (!isActive) {
      return `${sameClass} border-gray-200/50`
    }
    return `${sameClass} border-blue-400 bg-blue-400 text-white`
  }

  return (
    <aside className="flex w-full max-w-[13rem] flex-col justify-between">
      <div className="light-shadow w-full rounded-lg bg-white px-2.5 pt-2 pb-4">
        <h3 className="text-lg font-medium">Actions</h3>
        <nav className="mt-3 flex flex-col gap-1">
          {sbItems.map((item) => {
            return (
              <NavLink key={item.name} to={item.to} className={setActiveStyle}>
                <item.Icon />
                <span>{item.name}</span>
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
