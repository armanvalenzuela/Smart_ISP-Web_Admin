// src/components/Dashboard.tsx
import React from "react"

// Define type for payment trend data
type TrendData = {
  m: string
  h: string
}

const Dashboard: React.FC = () => {
  const trendData: TrendData[] = [
    { m: "Jan", h: "40%" },
    { m: "Feb", h: "60%" },
    { m: "Mar", h: "80%" },
    { m: "Apr", h: "70%" },
    { m: "May", h: "90%" },
    { m: "Jun", h: "100%" },
    { m: "Jul", h: "85%" },
    { m: "Aug", h: "75%" },
    { m: "Sep", h: "65%" },
    { m: "Oct", h: "55%" },
    { m: "Nov", h: "45%" },
    { m: "Dec", h: "35%" },
  ]

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Dashboard</h1>
      <p className="subtitle">Overview of system performance and key metrics</p>

      <div className="dashboard-grid">
        {/* Payment Status */}
        <div className="payment-status card">
          <h2>Payment Status</h2>
          <div className="payment-items">
            <div className="payment-item">
              <span className="label">Total Payments</span>
              <span className="value">P12,500</span>
            </div>
            <div className="payment-item">
              <span className="label">Pending Payments</span>
              <span className="value">P2,300</span>
            </div>
            <div className="payment-item">
              <span className="label">Overdue Payments</span>
              <span className="value">P750</span>
            </div>
          </div>
        </div>

        {/* Payment Trends */}
        <div className="payment-trends card">
          <h2>Payment Trends</h2>
          <div className="trend-content">
            <div className="trend-header">
              <span className="trend-value">P12,500</span>
              <span className="trend-percentage">+15%</span>
            </div>
            <p className="trend-label">Monthly Payment Trends</p>
            <br />
            <p className="trend-period">Last 12 Months</p>

            <div className="month-chart">
              {trendData.map(({ m, h }, i) => (
                <div key={i} className="month-bar">
                  <div className="bar" style={{ height: h }}></div>
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automated Actions */}
        <div className="automated-actions card">
          <h2>Automated Actions</h2>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Timestamp</th>
                  <th>Action</th>
                  <th>Customer</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2024-01-15 10:00</td>
                  <td>Activation</td>
                  <td>Customer A</td>
                  <td>Service activated successfully</td>
                </tr>
                <tr>
                  <td>2024-01-15 10:15</td>
                  <td>Deactivation</td>
                  <td>Customer B</td>
                  <td>Service deactivated due to non-payment</td>
                </tr>
                <tr>
                  <td>2024-01-15 10:30</td>
                  <td>Activation</td>
                  <td>Customer C</td>
                  <td>Service activated successfully</td>
                </tr>
                <tr>
                  <td>2024-01-15 10:45</td>
                  <td>Deactivation</td>
                  <td>Customer D</td>
                  <td>Service deactivated due to non-payment</td>
                </tr>
                <tr>
                  <td>2024-01-15 11:00</td>
                  <td>Activation</td>
                  <td>Customer E</td>
                  <td>Service activated successfully</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Issue Detection */}
        <div className="issue-detection card">
          <h2>AI-Driven Issue Detection</h2>
          <div className="issues-list">
            <div className="issue-item">
              <span className="issue-icon">⚠️</span>
              <div className="issue-content">
                <h3>Network Congestion</h3>
                <p>Potential network congestion detected in Sector 3</p>
              </div>
            </div>
            <div className="issue-item">
              <span className="issue-icon">⚠️</span>
              <div className="issue-content">
                <h3>High Latency</h3>
                <p>High latency reported by multiple users in Area 5</p>
              </div>
            </div>
            <div className="issue-item">
              <span className="issue-icon">⚠️</span>
              <div className="issue-content">
                <h3>Service Outage</h3>
                <p>Possible service outage in Region 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
