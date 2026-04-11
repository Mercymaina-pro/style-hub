function Orders() {
  return (
    <section className="featured">
      <h2 className="section-title">Your Orders</h2>

      <div className="products">
        <div className="product-card">
          <h3>Classic Hoodie</h3>
          <p>Ordered on: 10 April 2026</p>
          <p>Status: Delivered</p>
        </div>

        <div className="product-card">
          <h3>Summer Dress</h3>
          <p>Ordered on: 11 April 2026</p>
          <p>Status: In Transit</p>
        </div>
      </div>
    </section>
  );
}

export default Orders;