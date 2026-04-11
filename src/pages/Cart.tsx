type CartProps = {
  cartItems: string[];
  removeFromCart: (index: number) => void;
};

function Cart({ cartItems, removeFromCart }: CartProps) {
  return (
    <section className="login-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="product-card" key={index}>
            <h3>{item}</h3>
            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </section>
  );
}

export default Cart;