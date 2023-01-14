import { Outlet } from 'react-router-dom'
import { Main } from '../../components/Main'
import { Header } from './UI/Header'
import { Sidebar } from './UI/Sidebar'

function Dashboard() {
  return (
    <div>
      <Header />
      <Main className="mt-4 flex gap-6">
        <Sidebar />
        <Outlet />
      </Main>
    </div>
  )
}

export default Dashboard
