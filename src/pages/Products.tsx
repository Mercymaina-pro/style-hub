type ProductsProps = {
  addToCart: (productName: string) => void;
};

function Products({ addToCart }: ProductsProps) {
  return (
    <section className="featured">
      <h2 className="section-title">All Products</h2>

      <div className="products">
        <div className="product-card">
          <h3>Classic Hoodie</h3>
          <p>Ksh 2500</p>
          <button onClick={() => addToCart("Classic Hoodie")}>
            Add to Cart
          </button>
        </div>

        <div className="product-card">
          <h3>Summer Dress</h3>
          <p>Ksh 1800</p>
          <button onClick={() => addToCart("Summer Dress")}>
            Add to Cart
          </button>
        </div>

        <div className="product-card">
          <h3>Denim Jacket</h3>
          <p>Ksh 1900</p>
          <button onClick={() => addToCart("Denim Jacket")}>
            Add to Cart
          </button>
        </div>

        <div className="product-card">
          <h3>Sneakers</h3>
          <p>Ksh 3200</p>
          <button onClick={() => addToCart("Sneakers")}>
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;