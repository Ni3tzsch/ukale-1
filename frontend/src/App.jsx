import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { Parkings } from './components/Dashboard/Parkings'
import { History } from './components/Dashboard/History'
import { AddParking } from './components/Dashboard/AddParking'
import { Gain } from './components/Dashboard/Gain'
import { Setting } from './components/Dashboard/Setting'
import { Help } from './components/Dashboard/Help'
import { Parking } from './components/Dashboard/Parking'
import { OwnerInfo } from './components/Dashboard/Parking/OwnerInfo'
import { Content } from './components/Dashboard/History/Content'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="parkings" element={<Parkings />}>
          <Route path=":id" element={<Parking />} />
          <Route path=":parkingName/owner/:cardId" element={<OwnerInfo />} />
        </Route>
        <Route path="history" element={<History />}>
          <Route path=":id" element={<Content />} />
        </Route>
        <Route path="add-parking" element={<AddParking />} />
        <Route path="gains" element={<Gain />} />
        <Route path="settings" element={<Setting />} />
        <Route path="help" element={<Help />} />
      </Route>
    </Routes>
  )
}

export { App }
