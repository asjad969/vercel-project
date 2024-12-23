import { ProductGrid } from '../components/product-grid'
import { FilterSidebar } from '../components/filter-sidebar'

async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="container main-content">
      <aside className="sidebar">
        <FilterSidebar />
      </aside>
      <main className="main">
        <h1 className="page-title">Our Products</h1>
        <ProductGrid products={products} />
      </main>
    </div>
  )
}

