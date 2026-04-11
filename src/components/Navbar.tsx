import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>STYLEHUB</h2>

      <div className="nav-controls">
        <select className="category-dropdown">
          <option>All Categories</option>
          <option>Women</option>
          <option>Men</option>
          <option>Kids</option>
          <option>Shoes</option>
        </select>

        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
        />
      </div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Shop</Link></li>
        <li>Orders</li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;