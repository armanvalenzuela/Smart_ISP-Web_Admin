// src/components/Clients.tsx
import React, { useState } from "react"

// Define Client type
type Client = {
  id: string
  name: string
  status: "Active" | "Inactive"
  plan: "Premium" | "Standard" | "Basic"
  lastSeen: string
}

const Clients: React.FC = () => {
  const [search, setSearch] = useState<string>("")

  // Example clients data
  const clients: Client[] = [
    { id: "#1234", name: "Ethan Harper", status: "Active", plan: "Premium", lastSeen: "2 hours ago" },
    { id: "#5678", name: "Olivia Bennett", status: "Inactive", plan: "Standard", lastSeen: "1 week ago" },
    { id: "#9012", name: "Liam Carter", status: "Active", plan: "Basic", lastSeen: "1 day ago" },
    { id: "#3456", name: "Sophia Davis", status: "Active", plan: "Premium", lastSeen: "3 hours ago" },
    { id: "#7890", name: "Noah Evans", status: "Inactive", plan: "Standard", lastSeen: "2 weeks ago" },
  ]

  // Filter clients by search input
  const filteredClients: Client[] = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.id.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="clients-page">
      <h1>Clients</h1>

      {/* Overview Cards */}
      <div className="overview">
        <div className="card">
          Total Clients <span>1,234</span>
        </div>
        <div className="card">
          Active Clients <span>987</span>
        </div>
        <div className="card">
          Premium Plans <span>320</span>
        </div>
        <div className="card">
          Standard Plans <span>650</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search clients..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
      </div>

      {/* Clients Table */}
      <table className="clients-table">
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Plan</th>
            <th>Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {filteredClients.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>
                <span className={`status ${client.status.toLowerCase()}`}>
                  {client.status}
                </span>
              </td>
              <td>{client.plan}</td>
              <td>{client.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Clients
