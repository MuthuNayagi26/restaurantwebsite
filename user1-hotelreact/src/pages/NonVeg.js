//NonVeg.js
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./NonVeg.css";

export const NonVeg = () => {
  const { addToCart } = useContext(CartContext);
  console.log("MenuItem Component Rendered"); // Debugging log

  const nonvegItems = [
    {
      name: "Chicken Fried Rice",
      price: 120,
      image: "images/chifried.jpg",
      ratings: "150+",
      description:
        "Chicken Fried Rice is a popular Indian dish made with cooked rice, chopped chicken, and a tangy and flavorful sauce, often served with vegetables like bell peppers, onions, and tomatoes.",
      isVeg: false,
    },
    {
      name: "Chicken Noodles",
      price: 120,
      image: "images/chinoodles.jpg",
      ratings: "150+",
      description:
        "Chciken Noodles is a popular Indian dish made with noodles, chicken, and a tangy and flavorful sauce, often served with vegetables like bell peppers, onions, and tomatoes.",
      isVeg: false,
    },
    {
      name: "Schezwan Chicken Fried Rice",
      price: 140,
      image: "images/schrice.jpg",
      ratings: "180+",
      description:
        "Schezwan Chicken Fried Rice is a popular Indian dish made with cooked rice, chopped chicken, and a tangy and flavorful sauce, often served with vegetables like bell peppers, onions, and tomatoes.",
      isVeg: false,
    },
    {
      name: "Schezwan Chicken Noodles",
      price: 140,
      image: "images/schnoodles.jpg",
      ratings: "180+",
      description:
        "Schezwan Chicken Noodles is a popular Indian dish made with noodles, chicken, and a tangy and flavorful sauce, often served with vegetables like bell peppers, onions, and tomatoes.",
      isVeg: false,
    },
    {
      name: "Lollipop Chicken",
      price: 160,
      image: "images/chilollipop.jpg",
      ratings: "160+",
      description:
        "Lollipop Chicken is a popular Indian dish made with masalas, curd, ginger-garlic paste and coated with corn flour for crispiness and it all marinated for an hour and then deep fried chicken.",
      isVeg: false,
    },
    {
      name: "Chicken65",
      price: 150,
      image: "images/bonelesschi.jpg",
      ratings: "140+",
      description:
        "Chicken65 is a popular Indian dish made with masalas, curd, ginger-garlic paste and coated with corn flour for crispiness and it all marinated for an hour and then deep fried chicken.",
      isVeg: false,
    },
    {
      name: "Non Veg Parotta",
      price: 15,
      image: "images/nvparotta.jpg",
      ratings: "200+",
      description:
        "Non Veg Parotta is a South Indian delicious and flaky layered flatbread is made by kneading and folding dough to achieve its signature crispy yet soft texture. Often paired with spicy chicken, mutton, curry.",
      isVeg: false,
    },
    {
      name: "Chilli Parotta",
      price: 80,
      image: "images/chilli.jpg",
      ratings: "130+",
      description:
      "Chilli Parotta is a spicy and flavorful South Indian dish made by tossing shredded parotta with a rich blend of onions, tomatoes, and aromatic spices. This dish delivers a perfect balance of crispiness and spiciness.",
      isVeg: false,
    },
    {
      name: "Egg Kothu Parotta",
      price: 90,
      image: "images/kothu.jpg",
      ratings: "160+",
      description:
      "Egg Kothu Parotta is a South Indian street food made by parotta pieces and frying it with eggs, onions, tomatoes, spices. This dish is known for its rich taste and soft, flaky texture, can be paired with raita and curry.",
      isVeg: false,
    },
    {
      name: "Grill Chicken[Half]",
      price: 200,
      image: "images/grill.jpg",
      ratings: "210+",
      description:
        "Grill Chicken is a delicious and flavorful dish made with marinated chicken, grilled to perfection for a smoky and juicy taste. It is often served with a side of parotta,briyani, and naan.",
      isVeg: false,
    },
    {
      name: "Tandoori Chicken[Half]",
      price: 230,
      image: "images/tandoori.jpg",
      ratings: "210+",
      description:
        "Tandoori Chicken is a popular Indian dish made with marinated chicken that is roasted in a clay oven, giving it a smoky and flavorful taste.It creating a juicy and tender texture. Often served with mint chutney and naan.",
      isVeg: false,
    },
    {
      name: "Barbeque Chicken[Half]",
      price: 250,
      image: "images/bbq.jpg",
      ratings: "230+",
      description:
        "Barbeque Chicken is a flavorful and smoky dish made with tender chicken marinated in a rich blend of spices and grilled to perfection. It is often served with a side of dipping sauces, fresh salads, wraps and sandwiches.",
      isVeg: false,
    },
    {
      name: "Schezwan Chicken Dry",
      price: 190,
      image: "images/schchicken.jpg",
      ratings: "180+",
      description:
        "Schezwan Chicken Dry is a spicy and flavorful Indo-Chinese dish made with crispy fried chicken tossed in a fiery Schezwan sauce, aromatic spices, and crunchy vegetables. Perfect as a starter or sidedish.",
      isVeg: false,
    },
    {
      name: "Dragon Chicken",
      price: 180,
      image: "images/dragon.jpg",
      ratings: "140+",
      description:
        "Dragon Chicken is a spicy and crispy Indo-Chinese appetizer made with tender chicken strips coated in a flavorful sauce, fried with peppers, onions, and spices. It’s a perfect combination of hot, sweetness, and crunch.",
      isVeg: false,
    },
    {
      name: "Punjabi Chicken",
      price: 180,
      image: "images/punjabi.jpg",
      ratings: "140+",
      description:
        "Punjabi Chicken Dry is a flavorful North Indian dish made with chicken pieces marinated in spices and cooked to perfection. This dry-style preparation is rich in flavor and traditional Punjabi spices, making it a delicious dish.",
      isVeg: false,
    },
    
    {
      name: "Chettinad Chicken Gravy",
      price: 160,
      image: "images/chettinad.jpg",
      ratings: "190+",
      description:
        "Chettinad Chicken Gravy is a flavorful South Indian dish made with tender chicken, aromatic spices, and a rich, spicy gravy. It is a perfect blend of bold flavors and is best enjoyed with rice or parotta.",
      isVeg: false,
    },
    {
      name: "Butter Chicken Gravy",
      price: 160,
      image: "images/butter.jpg",
      ratings: "180+",
      description:
        "Butter Chicken Gravy is a rich and creamy North Indian dish made with tender chicken pieces cooked in a luscious tomato-based sauce infused with butter, cream, and spices can be paired with rice or naan.",
      isVeg: false,
    },
    {
      name: "Pepper Chicken Gravy",
      price: 160,
      image: "images/pepper.jpg",
      ratings: "200+",
      description:
        "Pepper Chicken Gravy is a flavorful South Indian dish made with tender chicken, crushed black pepper, aromatic spices, and a rich, spicy gravy. It pairs perfectly with rice, roti, or parotta for a satisfying meal.",
      isVeg: false,
    },
    {
      name: "Gongura Mutton Gravy",
      price: 220,
      image: "images/mutton.jpg",
      ratings: "130+",
      description:
        "Gongura Mutton Gravy is a flavorful dish made with tender mutton, tangy gongura leaves, and a blend of aromatic spices. It is a rich and delicious curry that pairs perfectly with rice or roti.",
      isVeg: false,
    },
    {
      name: "Mutton Sukka",
      price: 200,
      image: "images/sukka.jpg",
      ratings: "230+",
      description:
        "Mutton Sukka is a delicious dry mutton dish made with tender goat meat, aromatic spices, and roasted coconut. It is a flavorful and spicy dish that pairs well with rice, roti, or parotta.",
      isVeg: false,
    },
    {
      name: "Mutton Kari Dosa",
      price: 180,
      image: "images/karidosa.jpg",
      ratings: "240+",
      description:
        "Mutton Kari Dosa is a delicious South Indian dish made with crispy dosa layered with flavorful mutton curry, aromatic spices, and eggs, creating a rich and satisfying meal.",
      isVeg: false,
    },
    {
      name: "Fish Gravy",
      price: 150,
      image: "images/fishgravy.jpg",
      ratings: "130+",
      description:
        "Fish Gravy is a delicious seafood dish made with fresh fish, aromatic spices, and a tangy, flavorful gravy. It pairs perfectly with rice or roti for a comforting and satisfying meal.",
      isVeg: false,
    },
    {
      name: "Fish Fry",
      price: 100,
      image: "images/fishroast.jpg",
      ratings: "180+",
      description:
        "Fish Fry is a crispy and flavorful seafood dish made with fresh fish, marinated in a blend of spices, and shallow-fried to perfection. It is a delicious side dish that pairs well with meals or can be enjoyed as a snack.",
      isVeg: false,
    },
    {
      name: "Fish Fingers",
      price: 180,
      image: "images/fishfingers.jpg",
      ratings: "170+",
      description:
        "Fish Fingers are a crispy and flavorful seafood delight made with tender fish fillets, coated in a spiced batter, and deep-fried to golden perfection. They are a perfect snack or appetizer, best enjoyed with dipping sauces.",
      isVeg: false,
    },
    {
      name: "Vanjaram Fry",
      price: 150,
      image: "images/vanjaram.jpg",
      ratings: "230+",
      description:
        "Vanjaram Fry is a delicious seafood dish made with fresh seer fish, marinated in aromatic spices and shallow-fried to perfection. It is a crispy and flavorful delight that pairs well with rice or as a standalone appetizer.",
      isVeg: false,
    },
    {
      name: "Prawn65",
      price: 180,
      image: "images/prawn.jpg",
      ratings: "180+",
      description:
        "Prawn 65 is a crispy and spicy seafood appetizer made with succulent prawns, marinated in flavorful spices, coated with a crispy layer, and deep-fried to perfection. It is a popular dish enjoyed as a starter or side.",
      isVeg: false,
    },
    {
      name: "Crab Lollipop",
      price: 180,
      image: "images/crablollipop.webp",
      ratings: "230+",
      description:
        "Crab Lollipop is a delicious seafood appetizer made with succulent crab meat, flavorful spices, and crispy coating, offering a delightful crunch in every bite.It is a best option for sea food snacks",
      isVeg: false,
    },
  ];

  return (

    <div className="nonveg-container">
      <img src="/images/backgrmenu.webp" className="background-image" alt="" />
      <h1>Non Veg Varieties</h1>
      <div className="nonveg-items">
        {nonvegItems.map((item, index) => (
          <div key={index} className="box">
            <div className="image">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="icon">
              <img
                src={item.isVeg ? "images/veg-icon.png" : "images/non-veg-icon.png"}
                alt={item.isVeg ? "Vegetarian" : "NonVegetarian"}
                style={{
                  width: "20px",
                  height: "20px",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            <div className="dishname">
              <h3>{item.name}</h3>
            </div>
            <div className="inricon">
              <p>Price: ₹{item.price}</p>
            </div>
            <div className="starrating">
              ⭐⭐⭐⭐⭐ <span>{item.ratings} ratings</span>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
            <div className="counter-container">
              <button className="counter-button" onClick={() => addToCart(item)}>
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

}

export default NonVeg;
