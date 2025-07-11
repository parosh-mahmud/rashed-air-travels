import Image from "next/image";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      <Image
        src="https://placehold.co/250x300/ffffff/db2777?text=Illustration"
        alt="Doctor and Patient Illustration"
        width={250}
        height={300}
        className="mb-6 rounded shadow"
      />
      <div className="bg-white p-6 rounded shadow w-full max-w-md">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the admin dashboard! Here you can manage users, view
          reports, and configure settings.
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>Manage Users</li>
          <li>View Appointments</li>
          <li>Generate Reports</li>
          <li>System Settings</li>
        </ul>
      </div>
    </div>
  );
}
