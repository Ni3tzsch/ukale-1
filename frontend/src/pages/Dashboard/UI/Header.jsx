import { Link, NavLink } from 'react-router-dom'
import ukaleLogo from '/logo-ukale.svg'

function Header() {
  return (
    <header className="bg-white py-2">
      <nav className="container flex items-center justify-between">
        <Link
          to="/dashboard/parkings"
          className="flex-center aspect-video h-12"
        >
          <img src={ukaleLogo} alt="Logo Ukalè" />
        </Link>

        <ul className="flex items-center gap-4">
          <li>
            <div className="center flex-center h-10 w-10 rounded-full bg-slate-500">
              <span>U</span>
            </div>
          </li>
          <li>
            <NavLink to="/" className="header-logout-btn">
              Déconnexion
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { Header }
