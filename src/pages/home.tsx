function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to StyleHub</h1>
        <p>Your one-stop fashion destination for everyone.</p>
        <button>Shop Now</button>
      </section>

      <section className="category-section">
        <h2 className="section-title">Shop By Category</h2>
        <div className="categories">
          <div className="card">Women</div>
          <div className="card">Men</div>
          <div className="card">Kids</div>
        </div>
      </section>

      <section className="featured">
        <h2 className="section-title">Featured Products</h2>
        <div className="products">
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Classic Hoodie</h3>
            <p>Ksh 2500</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image"></div>
            <h3>Summer Dress</h3>
            <p>Ksh 1800</p>
            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <div className="product-image"></div>
            <h3>Denim Jacket</h3>
            <p>Ksh 1900</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </section>

      <section className="why-us">
        <h2 className="section-title">Why Choose StyleHub?</h2>
        <div className="categories">
          <div className="card">Fast Delivery</div>
          <div className="card">Quality Fashion</div>
          <div className="card">Affordable Prices</div>
        </div>
      </section>

      <section className="promo-banner">
        <h2>New Arrivals Every Week ✨</h2>
        <p>Stay ahead with the latest fashion trends.</p>
      </section>
    </>
  );
}

export default Home;