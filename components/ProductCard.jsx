'use client';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      {product.image ? (
        <img
          src={`http://localhost:8000/storage/${product.image}`}
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded"
        />
      ) : (
        <div className="w-full h-48 bg-gray-100 flex items-center justify-center mb-4 rounded">
          No Image
        </div>
      )}
      <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
      <p className="text-gray-600 mt-2">{product.description || 'No description'}</p>
      <p className="text-green-600 font-bold mt-2">৳ {product.price}</p>
      <p className="text-sm text-gray-500 mt-1">Stock: {product.stock}</p>
    </div>
  );
}
