import { useState } from "react";

type ProductsProps = {
  addToCart: (productName: string) => void;
};

type Product = {
  name: string;
  price: string;
  category: string;
  image: string;
};

function Products({ addToCart }: ProductsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="featured">
      <h2 className="section-title">All Products</h2>

      <div className="nav-controls" style={{ marginBottom: "20px" }}>
        <select
          className="category-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Women">Women</option>
          <option value="Men">Men</option>
          <option value="Shoes">Shoes</option>
        </select>

        <input
          type="text"
          placeholder="Search products..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="products">
        {filteredProducts.map((product, index) => (
          <div className="product-card" key={index}>
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
    </section>
  );
}

export default Products;