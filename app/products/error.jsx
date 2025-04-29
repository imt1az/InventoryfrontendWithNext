'use client';

export default function Error({ error, reset }) {
  console.error('Error in Products Page:', error);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-red-600 mb-4">🚫 Something went wrong!</h1>
      <p className="text-gray-500 mb-6">{error.message || "We couldn't load the products."}</p>
      <button
        onClick={() => reset()}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        🔄 Try Again
      </button>
    </div>
  );
}
