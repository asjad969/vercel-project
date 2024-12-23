export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">About Us</h3>
            <p>
              Discover our curated collection of premium products. Shop the latest trends and best deals.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/products">Products</a></li>
              <li><a href="/categories">Categories</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Contact</h3>
            <ul className="footer-links">
              <li>Email: asjadk2021@gmail.com</li>
              <li>Phone: 9389654707</li>
              <li>Address: New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

