'use client';

export default function ProfilePage() {
  return (
    <div className="max-w-xl mx-auto mt-16 bg-white p-8 rounded shadow">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Profile Page</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border px-4 py-2 rounded focus:ring focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full border px-4 py-2 rounded focus:ring focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border px-4 py-2 rounded focus:ring focus:ring-purple-500"
          />
        </div>
        <button
          type="button"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
