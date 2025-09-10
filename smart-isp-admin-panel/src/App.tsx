// src/App.tsx
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Subscriptions from './components/Subscriptions'
import Services from './components/Services'
import Billing from './components/Billing'
import Support from './components/Support'
import './App.css'

type ActiveComponent = 'dashboard' | 'subscriptions' | 'services' | 'billing' | 'support'

function App() {
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>('dashboard')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />
      case 'subscriptions':
        return <Subscriptions />
      case 'services':
        return <Services />
      case 'billing':
        return <Billing />
      case 'support':
        return <Support />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="app">
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <main className="main-content">
        {renderComponent()}
      </main>
    </div>
  )
}

export default App