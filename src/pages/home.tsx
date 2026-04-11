type HomeProps = {
  addToCart: (productName: string) => void;
};

function Home({ addToCart }: HomeProps) {
  return (
    <>
      <section className="hero">
        <h1>Welcome to StyleHub</h1>
        <p>Your one-stop fashion destination for everyone.</p>
        <button>Shop Now</button>
      </section>

      <section className="featured">
        <h2 className="section-title">Featured Products</h2>

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
        </div>
      </section>
    </>
  );
}

export default Home;