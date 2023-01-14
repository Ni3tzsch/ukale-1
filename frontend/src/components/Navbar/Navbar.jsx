import { Link, NavLink } from 'react-router-dom'
import ukaleLogo from '/logo-ukale.svg'
import navItems from '../../data/navItems.json'

function Navbar() {
  return (
    <nav className="w-full bg-white py-2">
      <div className="container flex w-full items-center justify-between">
        <Link to="/" className="flex-center aspect-video h-12">
          <img src={ukaleLogo} alt="Logo Ukalè" />
        </Link>

        <ul className="flex gap-8">
          {navItems.map((item) => {
            const { name, className, to } = item
            return (
              <li key={name}>
                <NavLink to={to} className={className}>
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
