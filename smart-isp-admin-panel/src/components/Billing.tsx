// src/components/Billing.tsx


const Billing = () => {
  return (
    <div className="billing">
      <h1>Billing Overview</h1>
      <p className="subtitle">Manage customer billing, view current and past bills, and generate invoices.</p>
      
      <div className="billing-tabs">
        <button className="tab active">Current Bill</button>
        <button className="tab">Past Bills</button>
        <button className="tab">Invoices</button>
      </div>
      
      <div className="billing-content">
        <div className="card current-billing">
          <h2>Current Billing Period</h2>
          
          <div className="billing-info">
            <div className="info-item">
              <span className="label">Billing Period</span>
              <span className="value">June 1, 2024 - June 30, 2024</span>
            </div>
            <div className="info-item">
              <span className="label">Due Date</span>
              <span className="value">July 15, 2024</span>
            </div>
            <div className="info-item">
              <span className="label">Total Amount Due</span>
              <span className="value">$125.50</span>
            </div>
            <div className="info-item">
              <span className="label">Status</span>
              <span className="value status-pending">Pending</span>
            </div>
          </div>
        </div>
        
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
              <tr>
                <td>Internet Plan</td>
                <td>Premium Plan (100 Mbps)</td>
                <td>$75.00</td>
              </tr>
              <tr>
                <td>Usage Fees</td>
                <td>Additional data usage (5 GB)</td>
                <td>$25.00</td>
              </tr>
              <tr>
                <td>Taxes</td>
                <td>State and local taxes</td>
                <td>$10.50</td>
              </tr>
              <tr>
                <td>Payments</td>
                <td>Last payment received</td>
                <td>~$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        
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