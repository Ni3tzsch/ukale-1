import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { App } from './App'
import './assets/index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <Router>
      <Toaster />
      <App />
    </Router>
  </StrictMode>
)
