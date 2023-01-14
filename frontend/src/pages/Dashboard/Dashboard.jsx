import { Main } from '../../components/Main'
import { Header } from './UI/Header'
import { Sidebar } from './UI/Sidebar'
import { Parking } from './UI/Parking'

function Dashboard() {
  return (
    <div>
      <Header />

      <Main className="mt-4 flex gap-6">
        <Sidebar />
        <Parking />
      </Main>
    </div>
  )
}

export default Dashboard
