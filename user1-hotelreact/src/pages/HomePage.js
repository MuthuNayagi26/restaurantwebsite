import "./HomePage.css";
import { FaStar } from "react-icons/fa";

const Home = () => {
  return (
    <div className="container">
      <img src="/images/hotel3.jpg" alt="Hotel" height="auto" width="100%" />
      <div className="top-left"><b>Welcome to Bliss Grand</b></div>

      <div className="red-box">
        <div className="slogan"><b>150+</b><br />Veg and Non veg dishes</div>
        <div className="slogan"><b>15+</b><br />Years of Legacy</div>
        <div className="slogan"><b>1000+</b><br />Happy Customers</div>
      </div>

      <div className="line1"><b>Authentic restaurant in Sivakasi</b></div>
      <div className="line2"><b>Delivering authentic taste</b></div>
      <div className="line3">
        <p>The House of Bliss Grand was established in 2000 in Sivakasi, with a great dream to spread the magic of the choicest homemade recipes in Sivakasi.</p>
      </div>
      {/* Render FoodMenu component here */}
      <FoodMenu />
      {/* Render Reviews component here */}
      <Reviews />
    </div>
  );

};

const foodItems = [
  {
    title: "Briyani",
    description: "Briyani is not just food, it's an experience, a memory and a celebration all rolled into one.",
    image: "/images/briyani1.jpg",
  },
  {
    title: "Veg Dishes",
    description: "Indian Cuisine tells the story of its people and their rich history",
    image: "/images/dosa.jpg",
  },
  {
    title: "Non Veg Dishes",
    description: "Experience the authentic taste of non veg dish in every bite!",
    image: "/images/chicken.jpg",
  },
  {
    title: "Sweets",
    description: "Sweets are a delightful indulgence that can bring joy with every bite!",
    image: "/images/sweets.jpg",
  },
];

const FoodMenu = () => {
  return (
    <div className="food-menu-container">
      <div className="food-menu">
        {foodItems.map((item, index) => (
          <div key={index} className="food-card">
            <div className="text-section">
              <h1>{item.title}</h1>
              <h3>{item.description}</h3>
            </div>
            <div className="image-section">
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <div className="rev" style={{ textAlign: "center", margin: "30px auto" }}>
        <h1>Reviews</h1>
      </div>


    </div>
  );
};

const reviews = [
  {
    name: "Disha",
    image: "/images/female1.jpg",
    stars: 5,
    review:
      "Bliss Grand’s delivers food with great quality and taste. The foods are fresh, with perfectly picked vegetables and meat."
  },
  {
    name: "James",
    image: "/images/male1.jpg",
    stars: 5,
    review:
      "Loved it! I had a pleasant experience with Bliss Grand’s user-friendly website. This website made me order food easily."
  },
  {
    name: "Henry",
    image: "/images/male2.jpg",
    stars: 3,
    review:
      "According to me, their food taste is awesome! But when it comes to payment, they didn’t have an online payment service. This only one thing disappointed me. Otherwise, good!"
  },
  {
    name: "Ananya",
    image: "/images/female2.jpg",
    stars: 5,
    review:
      "Fabulous! Their fast delivery service made me order through this website again and again."
  },
  {
    name: "Lavanya",
    image: "/images/female3.jpg",
    stars: 5,
    review: "Nothing to tell bad. Had a good experience at Bliss Grand."
  },
  {
    name: "Arjun",
    image: "/images/male3.jpg",
    stars: 3,
    review: "Too good!"
  }
];

const Reviews = () => {
  return (
    <div className="reviews-container">
      {reviews.map((review, index) => (
        <div key={index} className="review-box">
          <div className="image-container">
            <h3>Verified Customer Reviews</h3>
            <img src={review.image} alt={review.name} />
          </div>
          <h2 className="reviewer-name">{review.name}</h2>
          <div className="stars">
            {[...Array(review.stars)].map((_, i) => (
              <FaStar key={i} color="#FFD43B" />
            ))}
          </div>
          <p className="review-text">{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
export { FoodMenu };
export { Reviews };

