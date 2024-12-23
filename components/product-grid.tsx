import Image from 'next/image'
import { Product } from '@/types/product'

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <article key={product.id} className="product-card">
          <div className="product-image">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="product-details">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-footer">
              <span className="product-price">${product.price}</span>
              <button 
                className="add-to-cart-button"
                aria-label={`Add ${product.title} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

