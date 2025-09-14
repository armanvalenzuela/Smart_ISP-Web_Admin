// src/components/Sidebar.tsx

import React from "react";

// Define the possible active components as a type
export type ActiveComponent =
  | "dashboard"
  | "clients"
  | "devices"
  | "subscriptions"
  | "services"
  | "billing"
  | "support"
  | "sms"
  | "system-settings";

interface SidebarProps {
  activeComponent: ActiveComponent;
  setActiveComponent: (component: ActiveComponent) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeComponent,
  setActiveComponent,
}) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>ISP Manager</h2>
        <p className="version">v1.2.3</p>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li className={activeComponent === "dashboard" ? "active" : ""}>
            <button onClick={() => setActiveComponent("dashboard")}>
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </button>
          </li>
          <li className={activeComponent === "clients" ? "active" : ""}>
            <button onClick={() => setActiveComponent("clients")}>
              <i className="fas fa-users"></i> Clients
            </button>
          </li>
          <li className={activeComponent === "devices" ? "active" : ""}>
            <button onClick={() => setActiveComponent("devices")}>
              <i className="fas fa-server"></i> Devices
            </button>
          </li>
          <li className={activeComponent === "subscriptions" ? "active" : ""}>
            <button onClick={() => setActiveComponent("subscriptions")}>
              <i className="fas fa-receipt"></i> Subscriptions
            </button>
          </li>
          <li className={activeComponent === "services" ? "active" : ""}>
            <button onClick={() => setActiveComponent("services")}>
              <i className="fas fa-wifi"></i> Services
            </button>
          </li>
          <li className={activeComponent === "billing" ? "active" : ""}>
            <button onClick={() => setActiveComponent("billing")}>
              <i className="fas fa-credit-card"></i> Billing
            </button>
          </li>
          <li className={activeComponent === "support" ? "active" : ""}>
            <button onClick={() => setActiveComponent("support")}>
              <i className="fas fa-headset"></i> Support
            </button>
          </li>
          <li className={activeComponent === "sms" ? "active" : ""}>
            <button onClick={() => setActiveComponent("sms")}>
              <i className="fas fa-envelope"></i> SMS
            </button>
          </li>
          {/* ✅ New System Settings tab */}
          <li className={activeComponent === "system-settings" ? "active" : ""}>
            <button onClick={() => setActiveComponent("system-settings")}>
              <i className="fas fa-cogs"></i> System Settings
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
