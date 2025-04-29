export async function fetchProducts() {
    try {
      const res = await fetch('http://localhost:8000/api/products', { 
        credentials: 'include',
        cache: 'no-store',
      });
      console
  
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
  
      return await res.json();
    } catch (error) {
      console.error('Error fetching products:', error.message);
      throw error;
    }
  }
  