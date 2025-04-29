import { fetchProducts } from '@/lib/fetchProducts';
import ProductCard from '@/app/products/components/client/ProductCard';
import Link from 'next/link';

export default async function ProductsPage() {
  const products = await fetchProducts(); // ✅ Server-side fetch

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-purple-700">📦 All Products</h1>
        <Link href="/products/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          ➕ Add Product
        </Link>
      </div>

      {products.length === 0 ? (
        <div className="text-center text-gray-500">No products found.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
