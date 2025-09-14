// src/components/Devices.tsx
import { useState } from "react";
import type { ChangeEvent } from "react";

// Define the shape of a device
interface Device {
  id: string;
  model: string;
  status: "Online" | "Offline";
  ip: string;
  lastSeen: string;
}

const Devices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Example static data (replace later with API call if needed)
  const devices: Device[] = [
    { id: "Device-001", model: "Router Model X", status: "Online", ip: "192.168.1.1", lastSeen: "2024-01-20 10:00" },
    { id: "Device-002", model: "Router Model Y", status: "Offline", ip: "192.168.1.2", lastSeen: "2024-01-19 22:00" },
    { id: "Device-003", model: "Router Model Z", status: "Online", ip: "192.168.1.3", lastSeen: "2024-01-20 11:30" },
    { id: "Device-004", model: "Router Model X", status: "Online", ip: "192.168.1.4", lastSeen: "2024-01-20 09:45" },
    { id: "Device-005", model: "Router Model Y", status: "Offline", ip: "192.168.1.5", lastSeen: "2024-01-18 18:00" },
    { id: "Device-006", model: "Router Model Z", status: "Online", ip: "192.168.1.6", lastSeen: "2024-01-20 12:15" },
    { id: "Device-007", model: "Router Model X", status: "Online", ip: "192.168.1.7", lastSeen: "2024-01-20 08:30" },
    { id: "Device-008", model: "Router Model Y", status: "Offline", ip: "192.168.1.8", lastSeen: "2024-01-17 15:00" },
    { id: "Device-009", model: "Router Model Z", status: "Online", ip: "192.168.1.9", lastSeen: "2024-01-20 13:00" },
    { id: "Device-010", model: "Router Model X", status: "Online", ip: "192.168.1.10", lastSeen: "2024-01-20 07:15" },
  ];

  // Filter devices based on search
  const filteredDevices = devices.filter((device) =>
    device.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    device.ip.includes(searchTerm)
  );

  return (
    <div className="devices">
      <div className="devices-header">
        <h1>Devices</h1>
        <button className="add-device-btn">Add Device</button>
      </div>

      <div className="devices-search">
        <input
          type="text"
          placeholder="Search devices..."
          value={searchTerm}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Device ID</th>
              <th>Model</th>
              <th>Status</th>
              <th>IP Address</th>
              <th>Last Seen</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((device) => (
              <tr key={device.id}>
                <td>{device.id}</td>
                <td>{device.model}</td>
                <td>
                  <span className={`status ${device.status.toLowerCase()}`}>
                    {device.status}
                  </span>
                </td>
                <td>{device.ip}</td>
                <td>{device.lastSeen}</td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Devices;
