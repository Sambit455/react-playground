const HeroSection = () => {
  return(
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>

        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

        <div className="btn">
          <button className="shopnow-btn">Shop Now</button>
          <button className="category-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>
          <div className="cart-img">
            <img src="/images/flipkart.png" alt="Flipkart_Img" />
            <img src="/images/amazon.png" alt="Amazon_Img" />
          </div>
        </div>
        
      </div>

      <div className="hero-img">
        <img src="/images/shoe_image.png" alt="Shoe_IMG"/>
      </div>
    </main>
  );
};

export default HeroSection;