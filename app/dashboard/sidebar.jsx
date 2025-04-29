"use client"

import { useState } from "react"
import Link from "next/link"

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: "📊", color: "from-purple-500 to-pink-500" },
    { name: "Users", href: "/dashboard/users", icon: "👥", color: "from-blue-500 to-teal-400" },
    { name: "Products", href: "/products", icon: "📦", color: "from-green-500 to-emerald-400" },
    { name: "Orders", href: "/dashboard/orders", icon: "🛒", color: "from-orange-500 to-yellow-400" },
    { name: "Analytics", href: "/dashboard/analytics", icon: "📈", color: "from-red-500 to-pink-500" },
    { name: "Settings", href: "/dashboard/settings", icon: "⚙️", color: "from-indigo-500 to-purple-500" },
  ]

  return (
    <div
      className={`bg-white shadow-md ${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 border-r border-purple-100`}
    >
      <div className="h-16 flex items-center justify-between px-4 border-b border-purple-100">
        {!collapsed && (
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Admin
          </span>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`p-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-200 ${
            collapsed ? "mx-auto" : ""
          }`}
        >
          {collapsed ? "→" : "←"}
        </button>
      </div>
      <nav className="mt-6 px-3 space-y-3">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group ${
              item.href === "/dashboard" ? "bg-purple-50" : ""
            }`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-r ${item.color} text-white shadow-md group-hover:shadow-lg transition-all duration-200`}
            >
              <span className="text-lg">{item.icon}</span>
            </div>
            {!collapsed && <span className="ml-3 font-medium text-gray-700">{item.name}</span>}
          </Link>
        ))}
      </nav>

      {!collapsed && (
        <div className="absolute bottom-0 w-64 p-4">
          <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg p-4 text-white shadow-lg">
            <h3 className="font-bold">Need Help?</h3>
            <p className="text-sm mt-1">Contact our support team for assistance</p>
            <button className="mt-3 w-full bg-white text-purple-600 rounded-lg py-2 font-medium hover:shadow-md transition-shadow duration-200">
              Contact Support
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
