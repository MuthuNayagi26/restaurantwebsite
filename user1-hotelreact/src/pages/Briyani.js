// Briyani.js
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Briyani.css";

export const Briyani = () => {
  const { addToCart } = useContext(CartContext);
  console.log("MenuItem Component Rendered"); // Debugging log

  const briyaniItems = [
    {
      name: "Plain Biryani",
      price: 80,
      image: "images/plainbriyani.jpg",
      ratings: "95",
      description:
        "Plain Biryani is a fragrant and flavorful one-pot rice dish made with aromatic basmati rice, whole spices, and mild seasonings.",
      isVeg: true,
    },
    {
      name: "Paneer Biryani",
      price: 140,
      image: "images/paneerbriyani.jpg",
      ratings: "80+",
      description:
        "Paneer Biryani is an aromatic vegetarian delight with soft and tasty paneer cubes layered with basmati rice blend of exotic spices. Wonderful alternative for vegetarians",
      isVeg: true,
    },
    {
      name: "Mushroom Biryani",
      price: 140,
      image: "images/mushroombriyani.jpg",
      ratings: "70+",
      description:
        "Mushroom Biryani is a rich and aromatic vegetarian delight with soft and tasty mushroom pieces layered with basmati rice blend of exotic spice and caramalized onions ",
      isVeg: true,
    },
    {
      name: "Chicken Biryani",
      price: 150,
      image: "images/chickenbriyani.jpg",
      ratings: "150+",
      description:
        "Chicken Biryani is a popular dish made with fragrant basmati rice, aromatic spices, and tender marinated chicken, layered and slow-cooked to perfection.",
      isVeg: false,
    },
    {
      name: "Chicken65 Biryani",
      price: 170,
      image: "images/chicken65briyani.jpg",
      ratings: "170+",
      description:
        "Chicken65 biryani features deep-fried chicken pieces coated in a red masala,layered over aromatic basmati rice cooked with spices.",
      isVeg: false,
    },
    {
      name: "Mutton Biryani",
      price: 200,
      image: "images/muttonbriyani.jpg",
      ratings: "130+",
      description:
        "Mutton Biryani is a rich and flavorful rice dish made with tender mutton pieces, basmati rice, and a blend of exotic spices, slow-cooked for deep flavor.",
      isVeg: false,
    },
    {
      name: "Hyderabadi Chicken Biryani",
      price: 180,
      image: "images/hyderabadbriyani.jpg",
      ratings: "150+",
      description:
        "Hyderabadi Chicken Biryani is a famous dish known for its rich flavors,made using basmati rice,marinated chicken,where layers of rice and chicken are slow-cookedin a pot.",
      isVeg: false,
    },
    {
      name: "Bamboo Chicken Biryani",
      price: 200,
      image: "images/bamboobriyani.jpg",
      ratings: "120+",
      description:
        "Bamboo Chicken Biryani is a unique dish that gives you a taste with the essence of bamboo cooking.It is made by marinated chicken with spices inside a hollow bamboo shoot along with basmati rice.  ",
      isVeg: false,
    },
    {
      name: "Thalassery Chicken Biryani",
      price: 200,
      image: "images/thalaserry.jpg",
      ratings: "140+",
      description:
        "Thalassery Chicken Biryani is a popular Kerala dish made with marinated chicken, Vazhakkara rice known for its unique fragrance and a blend of spices, layered and slow-cooked to perfection.  ",
      isVeg: false,
    },

  ];

  return (

    <div className="briyani-container">
      <img src="/images/backgrmenu.webp" className="background-image" alt="" />
      <h1>Briyani Varieties</h1>
      <div className="briyani-items">
        {briyaniItems.map((item, index) => (
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

export default Briyani;
