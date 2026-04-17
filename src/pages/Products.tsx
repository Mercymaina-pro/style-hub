type ProductsProps = {
  addToCart: (productName: string) => void;
  searchTerm: string;
  category: string;
};

type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
};

function Products({ addToCart, searchTerm, category }: ProductsProps) {
  const products: Product[] = [
    {
      name: "Classic Hoodie",
      price: "Ksh 2500",
      category: "Men",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      name: "Summer Dress",
      price: "Ksh 1800",
      category: "Women",
      image:
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    },
    {
      name: "Sneakers",
      price: "Ksh 3200",
      category: "Shoes",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="featured">
      <h2 className="section-title">All Products</h2>

      {filteredProducts.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          No products found 😢
        </p>
      ) : (
        <div className="products">
          {filteredProducts.map((product, index) => (
            <div className="product-card fade-in" key={index}>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => addToCart(product.name)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Products;