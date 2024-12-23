'use client'

import { useState } from 'react'

export function FilterSidebar() {
  const [priceRange, setPriceRange] = useState([0, 1000])
  const categories = ['All', 'Electronics', 'Jewelry', "Men's Clothing", "Women's Clothing"]

  return (
    <div className="filter-sidebar">
      <div className="filter-section">
        <h2 className="filter-title">Categories</h2>
        <div className="category-list">
          {categories.map((category) => (
            <label key={category} className="category-item">
              <input type="checkbox" className="category-checkbox" />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h2 className="filter-title">Price Range</h2>
        <div>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="price-range-input"
          />
          <div className="price-range-values">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

