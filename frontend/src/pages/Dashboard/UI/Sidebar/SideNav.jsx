import { NavLink } from 'react-router-dom'

function SideNav() {
  const setActiveStyle = ({ isActive }) => {
    if (!isActive) {
      return 'px-2 py-1 border border-gray-200/50 rounded-md'
    }
    return 'px-2 py-1 rounded-md bg-blue-400 text-white'
  }

  return (
    <div className="flex h-[calc(100vh_-_120px)] w-fit flex-col justify-between">
      <div className="light-shadow w-fit rounded-lg bg-white px-2.5 py-4">
        <h3 className="text-lg font-medium">Actions</h3>
        <nav className="mt-4 flex flex-col gap-1">
          <NavLink to="/dashboard" className={setActiveStyle}>
            Parkings
          </NavLink>
          <NavLink to="/dashboard/history" className={setActiveStyle}>
            Historique
          </NavLink>
          <NavLink to="/dashboard/add-parking" className={setActiveStyle}>
            Ajouter un parking
          </NavLink>
          <NavLink to="/dashboard/gains" className={setActiveStyle}>
            Recette
          </NavLink>
        </nav>
      </div>

      <nav className="light-shadow flex w-full flex-col gap-1 rounded-lg bg-white px-2.5 py-4">
        <NavLink to="/dashboard/setting" className={setActiveStyle}>
          Paramètre
        </NavLink>
        <NavLink to="/dashboard/help" className={setActiveStyle}>
          Besoin d'aides ?
        </NavLink>
      </nav>
    </div>
  )
}

export { SideNav }
