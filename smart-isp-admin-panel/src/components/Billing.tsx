// src/components/Billing.tsx
import React from "react"

// Types for bill info
type BillingInfo = {
  label: string
  value: string
  statusClass?: string
}

type BillItem = {
  item: string
  description: string
  amount: string
}

const Billing: React.FC = () => {
  // Example billing info
  const billingDetails: BillingInfo[] = [
    { label: "Billing Period", value: "June 1, 2024 - June 30, 2024" },
    { label: "Due Date", value: "July 15, 2024" },
    { label: "Total Amount Due", value: "$125.50" },
    { label: "Status", value: "Pending", statusClass: "status-pending" },
  ]

  // Example bill summary items
  const billSummary: BillItem[] = [
    { item: "Internet Plan", description: "Premium Plan (100 Mbps)", amount: "$75.00" },
    { item: "Usage Fees", description: "Additional data usage (5 GB)", amount: "$25.00" },
    { item: "Taxes", description: "State and local taxes", amount: "$10.50" },
    { item: "Payments", description: "Last payment received", amount: "~$0.00" },
  ]

  return (
    <div className="billing">
      <h1>Billing Overview</h1>
      <p className="subtitle">
        Manage customer billing, view current and past bills, and generate invoices.
      </p>

      {/* Tabs */}
      <div className="billing-tabs">
        <button className="tab active">Current Bill</button>
        <button className="tab">Past Bills</button>
        <button className="tab">Invoices</button>
      </div>

      <div className="billing-content">
        {/* Current Billing */}
        <div className="card current-billing">
          <h2>Current Billing Period</h2>

          <div className="billing-info">
            {billingDetails.map((detail, index) => (
              <div key={index} className="info-item">
                <span className="label">{detail.label}</span>
                <span className={`value ${detail.statusClass ?? ""}`}>{detail.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bill Summary */}
        <div className="card bill-summary">
          <h2>Bill Summary</h2>

          <table className="summary-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {billSummary.map((item, index) => (
                <tr key={index}>
                  <td>{item.item}</td>
                  <td>{item.description}</td>
                  <td>{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Billing Actions */}
        <div className="card billing-actions">
          <h2>Actions</h2>
          <div className="action-buttons">
            <button className="btn primary">Pay Now</button>
            <button className="btn secondary">Download Invoice</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Billing
