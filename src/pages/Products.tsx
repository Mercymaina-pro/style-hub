function Products() {
  return (
    <>
      

      <section className="featured">
        <h2 className="section-title">All Products</h2>

        <div className="products">
          <div className="product-card">
            <div className="product-image"></div>
            <h3>Classic Hoodie</h3>
            <p>Ksh 2500</p>
            <button>View Product</button>
          </div>

          <div className="product-card">
            <div className="product-image"></div>
            <h3>Summer Dress</h3>
            <p>Ksh 1800</p>
            <button>View Product</button>
          </div>

          <div className="product-card">
            <div className="product-image"></div>
            <h3>Denim Jacket</h3>
            <p>Ksh 1900</p>
            <button>View Product</button>
          </div>

          <div className="product-card">
            <div className="product-image"></div>
            <h3>Sneakers</h3>
            <p>Ksh 3200</p>
            <button>View Product</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;