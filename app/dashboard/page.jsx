export default function DashboardPage() {
  return (
    <div className="w-full px-4 py-2 rounded-lg">
      <div>
        <h1 className="text-2xl font-bold text-purple-700 mb-2">Welcome to Your Dashboard</h1>
        <p className="text-gray-600 mb-6">Here's what's happening with your business today</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-4">
        <div className="w-full px-6 py-6 border-0 rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white transition-all duration-300 transform hover:scale-105">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Total Users</h2>
            <span className="text-3xl">👥</span>
          </div>
          <p className="text-3xl font-bold mt-2">1,234</p>
          <p className="text-sm mt-2 bg-white bg-opacity-20 rounded-full px-2 py-1 inline-block">
            +12% from last month
          </p>
        </div>

        <div className="w-full px-6 py-6 border-0 rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-teal-400 text-white transition-all duration-300 transform hover:scale-105">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Revenue</h2>
            <span className="text-3xl">💰</span>
          </div>
          <p className="text-3xl font-bold mt-2">$45,678</p>
          <p className="text-sm mt-2 bg-white bg-opacity-20 rounded-full px-2 py-1 inline-block">+8% from last month</p>
        </div>

        <div className="w-full px-6 py-6 border-0 rounded-lg shadow-lg bg-gradient-to-r from-orange-500 to-yellow-400 text-white transition-all duration-300 transform hover:scale-105">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Orders</h2>
            <span className="text-3xl">📦</span>
          </div>
          <p className="text-3xl font-bold mt-2">567</p>
          <p className="text-sm mt-2 bg-white bg-opacity-20 rounded-full px-2 py-1 inline-block">
            +15% from last month
          </p>
        </div>

        <div className="w-full px-6 py-6 border-0 rounded-lg shadow-lg bg-gradient-to-r from-green-500 to-emerald-400 text-white transition-all duration-300 transform hover:scale-105">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold">Active Users</h2>
            <span className="text-3xl">🔥</span>
          </div>
          <p className="text-3xl font-bold mt-2">890</p>
          <p className="text-sm mt-2 bg-white bg-opacity-20 rounded-full px-2 py-1 inline-block">+5% from last week</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="w-full px-6 py-6 border-0 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-bold mb-4 text-purple-700 border-b pb-2">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                name: "Sarah Johnson",
                action: "Created a new account",
                time: "2h ago",
                color: "bg-pink-100 text-pink-800",
              },
              {
                name: "Michael Chen",
                action: "Purchased Premium Plan",
                time: "3h ago",
                color: "bg-blue-100 text-blue-800",
              },
              {
                name: "Emily Rodriguez",
                action: "Submitted a support ticket",
                time: "5h ago",
                color: "bg-purple-100 text-purple-800",
              },
              {
                name: "David Kim",
                action: "Updated profile information",
                time: "8h ago",
                color: "bg-green-100 text-green-800",
              },
              {
                name: "Jessica Lee",
                action: "Invited 3 team members",
                time: "12h ago",
                color: "bg-orange-100 text-orange-800",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b pb-2 hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold mr-3">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className={`text-sm px-2 py-1 rounded-full ${item.color} inline-block mt-1`}>{item.action}</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-6 py-6 border-0 rounded-lg shadow-lg bg-white">
          <h2 className="text-xl font-bold mb-4 text-purple-700 border-b pb-2">Performance Metrics</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium flex items-center">
                  <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
                  Sales Performance
                </span>
                <span className="text-sm font-medium text-pink-600">78%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-pink-500 to-purple-600 h-3 rounded-full"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                  Conversion Rate
                </span>
                <span className="text-sm font-medium text-blue-600">63%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-blue-500 to-teal-400 h-3 rounded-full"
                  style={{ width: "63%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium flex items-center">
                  <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                  Customer Retention
                </span>
                <span className="text-sm font-medium text-green-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-500 to-emerald-400 h-3 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium flex items-center">
                  <span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span>
                  User Engagement
                </span>
                <span className="text-sm font-medium text-orange-600">72%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-orange-500 to-yellow-400 h-3 rounded-full"
                  style={{ width: "72%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="w-full px-6 py-6 border-0 rounded-lg shadow-lg bg-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-purple-700">Recent Orders</h2>
            <button
              type="button"
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg font-semibold transition duration-200 hover:shadow-lg transform hover:scale-105"
            >
              View All Orders
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-purple-700 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {[
                  {
                    id: 10001,
                    customer: "Sarah Johnson",
                    date: "2023-04-11",
                    amount: "$120.00",
                    status: "Completed",
                    statusColor: "bg-green-100 text-green-800",
                  },
                  {
                    id: 10002,
                    customer: "Michael Chen",
                    date: "2023-04-12",
                    amount: "$350.00",
                    status: "Processing",
                    statusColor: "bg-blue-100 text-blue-800",
                  },
                  {
                    id: 10003,
                    customer: "Emily Rodriguez",
                    date: "2023-04-13",
                    amount: "$75.50",
                    status: "Completed",
                    statusColor: "bg-green-100 text-green-800",
                  },
                  {
                    id: 10004,
                    customer: "David Kim",
                    date: "2023-04-14",
                    amount: "$220.00",
                    status: "Pending",
                    statusColor: "bg-yellow-100 text-yellow-800",
                  },
                  {
                    id: 10005,
                    customer: "Jessica Lee",
                    date: "2023-04-15",
                    amount: "$180.00",
                    status: "Cancelled",
                    statusColor: "bg-red-100 text-red-800",
                  },
                ].map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#{item.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">{item.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${item.statusColor}`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
