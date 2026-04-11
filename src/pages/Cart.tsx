type CartProps = {
  cartItems: string[];
  removeFromCart: (index: number) => void;
};

function Cart({ cartItems, removeFromCart }: CartProps) {
  return (
    <section className="featured">
      <h2 className="section-title">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="products">
          {cartItems.map((item, index) => (
            <div className="product-card" key={index}>
              <h3>{item}</h3>
              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Cart;