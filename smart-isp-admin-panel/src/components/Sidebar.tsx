// src/components/Sidebar.tsx


interface SidebarProps {
  activeComponent: string;
  setActiveComponent: (component: 'dashboard' | 'subscriptions' | 'services' | 'billing' | 'support') => void;
}

const Sidebar = ({ activeComponent, setActiveComponent }: SidebarProps) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>ISP Manager</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={activeComponent === 'dashboard' ? 'active' : ''}>
            <button onClick={() => setActiveComponent('dashboard')}>
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </button>
          </li>
          <li className={activeComponent === 'subscriptions' ? 'active' : ''}>
            <button onClick={() => setActiveComponent('subscriptions')}>
              <i className="fas fa-receipt"></i> Subscriptions
            </button>
          </li>
          <li className={activeComponent === 'services' ? 'active' : ''}>
            <button onClick={() => setActiveComponent('services')}>
              <i className="fas fa-wifi"></i> Services
            </button>
          </li>
          <li className={activeComponent === 'billing' ? 'active' : ''}>
            <button onClick={() => setActiveComponent('billing')}>
              <i className="fas fa-credit-card"></i> Billing
            </button>
          </li>
          <li className={activeComponent === 'support' ? 'active' : ''}>
            <button onClick={() => setActiveComponent('support')}>
              <i className="fas fa-headset"></i> Support
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar