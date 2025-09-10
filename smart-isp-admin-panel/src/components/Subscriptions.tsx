// src/components/Subscriptions.tsx


const Subscriptions = () => {
  const subscriptions = [
    {
      id: 'SUB001',
      customer: 'Emily Carter',
      plan: 'Premium',
      startDate: '2023-01-15',
      endDate: '2024-01-14',
      price: '$99.99',
      status: 'Active'
    },
    {
      id: 'SUB002',
      customer: 'David Lee',
      plan: 'Standard',
      startDate: '2023-03-20',
      endDate: '2024-03-19',
      price: '$59.99',
      status: 'Active'
    },
    {
      id: 'SUB003',
      customer: 'Sophia Clark',
      plan: 'Basic',
      startDate: '2023-05-10',
      endDate: '2024-05-09',
      price: '$39.99',
      status: 'Active'
    },
    {
      id: 'SUB004',
      customer: 'Ethan Brown',
      plan: 'Premium',
      startDate: '2023-07-01',
      endDate: '2024-06-30',
      price: '$99.99',
      status: 'Suspended'
    },
    {
      id: 'SUB005',
      customer: 'Olivia Green',
      plan: 'Standard',
      startDate: '2023-09-15',
      endDate: '2024-09-14',
      price: '$59.99',
      status: 'Cancelled'
    }
  ]

  return (
    <div className="subscriptions">
      <div className="page-header">
        <h1>Subscriptions</h1>
        <div className="search-box">
          <input type="text" placeholder="Search subscriptions..." />
          <button><i className="fas fa-search"></i></button>
        </div>
      </div>

      <div className="card">
        <table className="subscriptions-table">
          <thead>
            <tr>
              <th>Subscription ID</th>
              <th>Customer</th>
              <th>Plan</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.map(sub => (
              <tr key={sub.id}>
                <td>{sub.id}</td>
                <td>{sub.customer}</td>
                <td>{sub.plan}</td>
                <td>{sub.startDate}</td>
                <td>{sub.endDate}</td>
                <td>{sub.price}</td>
                <td>
                  <span className={`status-badge ${sub.status.toLowerCase()}`}>
                    {sub.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Subscriptions