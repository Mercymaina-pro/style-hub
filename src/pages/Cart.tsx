function Cart() {
  return (
    <section className="login-page">
      <h2>Your Cart</h2>

      <div className="products">
        <div className="product-card">
          <h3>Classic Hoodie</h3>
          <p>Ksh 2500</p>
          <button>Remove</button>
        </div>

        <div className="product-card">
          <h3>Summer Dress</h3>
          <p>Ksh 1800</p>
          <button>Remove</button>
        </div>
      </div>

      <h3>Total: Ksh 4300</h3>
      <button>Proceed to Checkout</button>
    </section>
  );
}

export default Cart;