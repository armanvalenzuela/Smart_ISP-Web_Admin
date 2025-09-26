// src/App.tsx
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Clients from './components/Clients'
import Devices from './components/Devices'
import Subscriptions from './components/Subscriptions'
import Services from './components/Services'
import Billing from './components/Billing'
import Support from './components/Support'
import SMS from './components/SMS'
import SystemSettings from './components/SystemSettings'
import './styles/App.css'

type ActiveComponent =
  | 'dashboard'
  | 'clients'
  | 'devices'
  | 'subscriptions'
  | 'services'
  | 'billing'
  | 'support'
  | 'sms'
  | 'system-settings'

function App() {
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>('dashboard')

  const renderComponent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <Dashboard />
      case 'clients':
        return <Clients />
      case 'devices':
        return <Devices />
      case 'subscriptions':
        return <Subscriptions />
      case 'services':
        return <Services />
      case 'billing':
        return <Billing />
      case 'support':
        return <Support />
      case 'sms':
        return <SMS />
      case 'system-settings':
        return <SystemSettings />
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
