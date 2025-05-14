import { useState } from "react";

const initialRequests = [
    { id: 1, name: "Amit Sharma", issue: "Work Stress", time: "2025-05-16 4:00 PM", resolved: false },
    { id: 2, name: "Rina Das", issue: "Overthinking", time: "2025-05-16 5:30 PM", resolved: false },
    { id: 3, name: "Ali Khan", issue: "Financial Anxiety", time: "2025-05-17 2:00 PM", resolved: true },
    { id: 4, name: "Meera Joshi", issue: "Social Media Addiction", time: "2025-05-17 3:15 PM", resolved: false },
    { id: 5, name: "Sahil Roy", issue: "Family Pressure", time: "2025-05-17 6:30 PM", resolved: true },
    { id: 6, name: "Ankita Ghosh", issue: "Career Confusion", time: "2025-05-18 11:00 AM", resolved: false },
    { id: 7, name: "Rahul Verma", issue: "Overthinking", time: "2025-05-18 1:00 PM", resolved: true },
    { id: 8, name: "Priya Menon", issue: "Childhood Trauma", time: "2025-05-18 4:30 PM", resolved: false },
    { id: 9, name: "Karan Malhotra", issue: "Relationship Issues", time: "2025-05-19 10:00 AM", resolved: false },
    { id: 10, name: "Divya Shetty", issue: "Exam Stress", time: "2025-05-19 12:30 PM", resolved: false },
    { id: 11, name: "Vikas Yadav", issue: "Bullying", time: "2025-05-19 3:45 PM", resolved: true },
    { id: 12, name: "Naina Kapoor", issue: "Low Self-esteem", time: "2025-05-20 10:15 AM", resolved: false },
    { id: 13, name: "Arjun Singh", issue: "Job Rejection", time: "2025-05-20 1:45 PM", resolved: false },
    { id: 14, name: "Sneha Nair", issue: "Grief (Loss of Family)", time: "2025-05-20 4:00 PM", resolved: true },
    { id: 15, name: "Mohit Jain", issue: "Addiction Recovery", time: "2025-05-21 2:30 PM", resolved: false }
  ];
  

export default function ConsultationDashboard() {
  const [requests, setRequests] = useState(initialRequests);

  const total = requests.length;
  const resolved = requests.filter(r => r.resolved).length;
  const pending = total - resolved;

  const handleResolve = (id) => {
    setRequests(reqs =>
      reqs.map(r => (r.id === id ? { ...r, resolved: true } : r))
    );
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Top Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card title="Total Consultations" count={total} />
        <Card title="Pending" count={pending} color="yellow" />
        <Card title="Resolved" count={resolved} color="green" />
      </div>

      {/* Table */}
      <div className="bg-white shadow-md rounded-xl overflow-hidden">
        <table className="w-full table-auto text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Issue</th>
              <th className="px-4 py-3">Time</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((req) => (
              <tr key={req.id} className="border-t">
                <td className="px-4 py-2">{req.name}</td>
                <td className="px-4 py-2">{req.issue}</td>
                <td className="px-4 py-2">{req.time}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      req.resolved ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {req.resolved ? "Resolved" : "Pending"}
                  </span>
                </td>
                <td className="px-4 py-2">
                  {!req.resolved && (
                    <button
                      onClick={() => handleResolve(req.id)}
                      className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                    >
                      Mark as Resolved
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {requests.length === 0 && (
              <tr>
                <td className="px-4 py-4 text-center text-gray-500" colSpan="5">
                  No consultation requests
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, count, color = "blue" }) {
  const colors = {
    blue: "bg-blue-100 text-blue-800",
    yellow: "bg-yellow-100 text-yellow-800",
    green: "bg-green-100 text-green-800"
  };

  return (
    <div className={`p-4 rounded-xl shadow-md ${colors[color]}`}>
      <h4 className="text-lg font-semibold">{title}</h4>
      <p className="text-2xl font-bold">{count}</p>
    </div>
  );
}
