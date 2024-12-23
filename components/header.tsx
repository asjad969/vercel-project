'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <nav className="container nav">
        <div className="nav-content">
          <Link href="/" className="nav-logo">
            Store
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/cart">
              <ShoppingCart />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/cart">Cart</Link>
          </div>
        )}
      </nav>
    </header>
  )
}

