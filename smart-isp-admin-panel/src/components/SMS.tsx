// src/components/SMS.tsx
import { useState } from "react";

// Define the structure of an inbox message
interface InboxMessage {
  date: string;
  sender: string;
  message: string;
  classification: string;
}

const SMS: React.FC = () => {
  const [recipient, setRecipient] = useState<string>("");
  const [template, setTemplate] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const inboxMessages: InboxMessage[] = [
    {
      date: "2024-01-20 10:30 AM",
      sender: "+15551234567",
      message: "Your internet service is scheduled for maintenance tomorrow.",
      classification: "Maintenance",
    },
    {
      date: "2024-01-19 03:45 PM",
      sender: "+15559876543",
      message: "Thank you for your payment. Your account is now up to date.",
      classification: "Payment",
    },
    {
      date: "2024-01-18 09:15 AM",
      sender: "+15551112222",
      message:
        "We've detected a potential issue with your connection. Please contact support.",
      classification: "Issue",
    },
    {
      date: "2024-01-17 01:00 PM",
      sender: "+15553334444",
      message: "Welcome to our service! Your account is now active.",
      classification: "Welcome",
    },
    {
      date: "2024-01-16 05:20 PM",
      sender: "+15555556666",
      message: "Reminder: Your bill is due in 5 days.",
      classification: "Reminder",
    },
  ];

  const handleSend = (): void => {
    if (!recipient || !message) {
      alert("Recipient and message are required.");
      return;
    }
    alert(`Message sent to ${recipient}: ${message}`);
    setRecipient("");
    setTemplate("");
    setMessage("");
  };

  return (
    <div className="sms p-6 text-white">
      <h1 className="text-2xl font-bold mb-6">SMS</h1>

      {/* Compose Message */}
      <div className="sms-card mb-8">
        <h2 className="text-lg font-semibold mb-4">✉️ Compose Message</h2>
        <div className="mb-4">
          <label className="block mb-1">Recipient</label>
          <input
            type="text"
            placeholder="Enter phone number"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="sms-input"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Template</label>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="sms-input"
          >
            <option value="">Select</option>
            <option value="maintenance">Maintenance Notice</option>
            <option value="payment">Payment Confirmation</option>
            <option value="reminder">Bill Reminder</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="sms-input"
            rows={4}
          />
        </div>
        <button onClick={handleSend} className="sms-button">
          Send
        </button>
      </div>

      {/* Inbox */}
      <div className="sms-card mb-8">
        <h2 className="text-lg font-semibold mb-4">📩 Inbox</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left bg-gray-700">
              <th className="p-2">Date</th>
              <th className="p-2">Sender</th>
              <th className="p-2">Message</th>
              <th className="p-2">AI Classification</th>
            </tr>
          </thead>
          <tbody>
            {inboxMessages.map((msg, index) => (
              <tr key={index} className="border-t border-gray-600">
                <td className="p-2">{msg.date}</td>
                <td className="p-2">{msg.sender}</td>
                <td className="p-2">{msg.message}</td>
                <td className="p-2">
                  <span className="px-2 py-1 bg-gray-700 rounded">
                    {msg.classification}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Templates */}
      <div className="sms-card mb-8">
        <h2 className="text-lg font-semibold mb-4">📑 Templates</h2>
        <p className="text-gray-400">Templates management coming soon...</p>
      </div>

      {/* Logs */}
      <div className="sms-card mb-8">
        <h2 className="text-lg font-semibold mb-4">📊 Logs</h2>
        <p className="text-gray-400">Logs data coming soon...</p>
      </div>
    </div>
  );
};

export default SMS;
