import heroModel from "../assets/hero-model.jpg";
import fashionBg from "../assets/fashion-bg.jpg";

function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url(${fashionBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <div className="hero-text">
            <h1>Welcome to StyleHub</h1>
            <p>Your one-stop fashion destination for everyone.</p>
            <button>Shop Now</button>
          </div>

          <div className="hero-image-box">
            <img
              src={heroModel}
              alt="Fashion model"
              className="hero-image"
            />
          </div>
        </div>
      </section>

      <section className="category-section">
        <h2 className="section-title">Shop By Category</h2>
        <div className="categories">
          <div className="card">Women</div>
          <div className="card">Men</div>
          <div className="card">Kids</div>
        </div>
      </section>
    </>
  );
}

export default Home;