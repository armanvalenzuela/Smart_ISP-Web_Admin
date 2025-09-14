// src/components/SystemSettings.tsx
import React, { useState } from "react";

interface SecurityLog {
  timestamp: string;
  event: string;
  description: string;
  user: string;
}

const SystemSettings: React.FC = () => {
  const [systemName, setSystemName] = useState<string>("");
  const [apiKey, setApiKey] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");

  const securityLogs: SecurityLog[] = [
    {
      timestamp: "2024-03-15 10:22:30",
      event: "Login Success",
      description: "User 'admin' logged in successfully",
      user: "admin",
    },
    {
      timestamp: "2024-03-15 11:45:12",
      event: "Configuration Change",
      description: "Updated network settings",
      user: "admin",
    },
    {
      timestamp: "2024-03-15 13:01:55",
      event: "Billing Cycle",
      description: "Automated billing cycle completed",
      user: "system",
    },
    {
      timestamp: "2024-03-15 14:30:00",
      event: "Security Alert",
      description: "Potential intrusion detected",
      user: "system",
    },
    {
      timestamp: "2024-03-15 16:15:48",
      event: "Logout",
      description: "User 'admin' logged out",
      user: "admin",
    },
  ];

  const handleSave = (): void => {
    alert(`Settings Saved:
    System Name: ${systemName}
    API Key: ${apiKey}
    Timezone: ${timezone}`);
  };

  return (
    <div className="system-settings p-6 text-white">
      <h1 className="text-2xl font-bold mb-8">System Settings</h1>

      {/* System Status */}
      <div className="mb-6">
        <h2 className="section-label">System Status</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="settings-card">
            <h3 className="text-sm text-gray-300">Server Status</h3>
            <p className="text-lg font-bold text-green-400">Online</p>
          </div>
          <div className="settings-card">
            <h3 className="text-sm text-gray-300">Database Status</h3>
            <p className="text-lg font-bold text-green-400">Connected</p>
          </div>
          <div className="settings-card">
            <h3 className="text-sm text-gray-300">API Status</h3>
            <p className="text-lg font-bold text-green-400">Operational</p>
          </div>
        </div>
      </div>

      {/* Security Logs */}
      <div className="mb-6">
        <h2 className="section-label">Security Logs</h2>
        <div className="settings-card overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-700 text-left">
                <th className="p-2">Timestamp</th>
                <th className="p-2">Event Type</th>
                <th className="p-2">Description</th>
                <th className="p-2">User</th>
              </tr>
            </thead>
            <tbody>
              {securityLogs.map((log, index) => (
                <tr key={index} className="border-t border-gray-600">
                  <td className="p-2">{log.timestamp}</td>
                  <td className="p-2">{log.event}</td>
                  <td className="p-2">{log.description}</td>
                  <td className="p-2">{log.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Configuration Options */}
      <div>
        <h2 className="section-label">Configuration Options</h2>
        <div className="settings-card">
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">System Name</label>
            <input
              type="text"
              value={systemName}
              onChange={(e) => setSystemName(e.target.value)}
              className="settings-input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">API Key</label>
            <input
              type="text"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="settings-input"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-1">Timezone</label>
            <input
              type="text"
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="settings-input"
            />
          </div>
          <button onClick={handleSave} className="settings-button">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;
