// src/components/Services.tsx

import React from "react";

// Define the shape of a service
interface Service {
  id: string;
  customer: string;
  type: string;
  status: "Active" | "Inactive";
  bandwidth: string;
  staticIP: "Yes" | "No";
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: "SVC001",
      customer: "Emily Carter",
      type: "Fiber",
      status: "Active",
      bandwidth: "100 Mbps",
      staticIP: "Yes",
    },
    {
      id: "SVC002",
      customer: "David Lee",
      type: "DSL",
      status: "Inactive",
      bandwidth: "20 Mbps",
      staticIP: "No",
    },
    {
      id: "SVC003",
      customer: "Sophia Clark",
      type: "Cable",
      status: "Active",
      bandwidth: "50 Mbps",
      staticIP: "Yes",
    },
    {
      id: "SVC004",
      customer: "Ethan Walker",
      type: "Fiber",
      status: "Active",
      bandwidth: "200 Mbps",
      staticIP: "Yes",
    },
    {
      id: "SVC005",
      customer: "Olivia Green",
      type: "DSL",
      status: "Inactive",
      bandwidth: "10 Mbps",
      staticIP: "No",
    },
  ];

  return (
    <div className="services">
      <div className="page-header">
        <h1>Services</h1>
        <div className="search-box">
          <input type="text" placeholder="Search services..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      <div className="card">
        <table className="services-table">
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Customer</th>
              <th>Type</th>
              <th>Status</th>
              <th>Bandwidth</th>
              <th>Static IP</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.customer}</td>
                <td>{service.type}</td>
                <td>
                  <span
                    className={`status-badge ${service.status.toLowerCase()}`}
                  >
                    {service.status}
                  </span>
                </td>
                <td>{service.bandwidth}</td>
                <td>{service.staticIP}</td>
                <td>
                  <button className="action-btn view-btn">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
