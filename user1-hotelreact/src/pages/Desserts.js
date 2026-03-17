//Desserts.js
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Desserts.css";

export const Desserts = () => {
  const { addToCart } = useContext(CartContext);
  console.log("MenuItem Component Rendered"); // Debugging log

  const dessertItems = [
    {
      name: "Vannila Icecream",
      price: 60,
      image: "images/vannila.jpg",
      ratings: "100+",
      description:
        "Vannila Ice cream is a classic and delicious ice cream made with pure vanilla extract and milk.",
      isVeg: true,
    },
    {
      name: "Strawberry Icecream",
      price: 80,
      image: "images/strawberry.jpg",
      ratings: "180+",
      description:
        "Strawberry Ice cream is a refreshing and creamy ice cream made with fresh strawberries and milk.",
      isVeg: true,
    },
    {
      name: "Chocolate Icecream",
      price: 80,
      image: "images/chocolate.jpg",
      ratings: "150+",
      description:
        "Chocolate Ice cream is a rich and indulgent ice cream made with dark chocolate and milk.",
      isVeg: true,
    },
    {
      name: "Blackcurrent Icecream",
      price: 80,
      image: "images/blackcurrent.jpg",
      ratings: "150+",
      description:
        "Blackcurrent Ice cream is a rich and creamy ice cream made with blackcurrent and milk.",
      isVeg: true,
    },
    {
      name: "Blueberry Icecream",
      price: 110,
      image: "images/blueberry.jpg",
      ratings: "150+",
      description:
        "Blueberry Ice cream is a refreshing and creamy ice cream made with fresh blueberries and milk.",
      isVeg: true,
    },
    {
      name: "Butterscotch Icecream",
      price: 100,
      image: "images/butterscotch.jpg",
      ratings: "140+",
      description:
        "Butterscotch Ice cream is a creamy and indulgent ice cream made with butterscotch and milk.",
      isVeg: true,
    },
    {
      name: "Falooda",
      price: 170,
      image: "images/falooda.jpg",
      ratings: "160+",
      description:
        "Falooda is a Indian dessert made with a layered cake,fruits that is often served with ice cream or as a standalone dessert.",
      isVeg: true,
    },
    {
      name: "Jigarthanda",
      price: 150,
      image: "images/jigarthandaa.webp",
      ratings: "120+",
      description:
        "Jigarthanda is a Indian dessert made with a layered cake, fruits, that is often served with ice cream or as a standalone dessert.",
      isVeg: true,
    },
    {
      name: "Pista Kulfi",
      price: 60,
      image: "images/pista.jpg",
      ratings: "160+",
      description:
        "Kulfi is a kind of Icecream variety made with milk , sugar and pistachios and is a refreshing dessert.",
      isVeg: true,
    },
    {
      name: "Lemon Juice",
      price: 40,
      image: "images/lemon.webp",
      ratings: "110+",
      description:
        "Lemon Juice is a refreshing and tangy drink made with fresh lemons , water and sugar and loads with Vitamin C and antioxidants.",
      isVeg: true,
    },
    {
      name: "Orange Juice",
      price: 70,
      image: "images/orange.jpg",
      ratings: "130+",
      description:
        "Orange Juice is a refreshing and tangy drink made with fresh oranges, water and sugar loads with a bunch of VitaminC",
      isVeg: true,
    },
    {
      name: "Watermelon Juice",
      price: 70,
      image: "images/watermelon.jpg",
      ratings: "180+",
      description:
        "Watermelon Juice is a refreshing drink made with fresh watermelons, water and sugar loads with a bunch of antioxidants",
      isVeg: true,
    },
    {
      name: "Grape Juice",
      price: 80,
      image: "images/grape.jpg",
      ratings: "150+",
      description:
        "Grape Juice is a refreshing drink made with fresh handpicked grapes, water and sugar loads with vitamins.",
      isVeg: true,
    },
    {
      name: "Pomegranate Juice",
      price: 100,
      image: "images/pomegranate.jpg",
      ratings: "140+",
      description:
        "Pomegranate Juice is a refreshing drink made with fresh pomegranates, water, milk and sugar loads with vitamins.",
      isVeg: true,
    },
    {
      name: "Kirni Juice",
      price: 100,
      image: "images/kirni.jpg",
      ratings: "140+",
      description:
        "Kirni Juice is a refreshing drink made with fresh kirnis, water , milk and sugar loads with vitamins.",
      isVeg: true,
    },
    
    {
      name: "Oreo Milkshake",
      price: 170,
      image: "images/oreo.jpg",
      ratings: "120+",
      description:
        "Oreo Milkshake is a kind of Icecream variety made with milk , sugar and Oreo and is a refreshing dessert.",
      isVeg: true,
    },
    {
      name: "Caramel Popcorn Milkshake",
      price: 180,
      image: "images/caramel.jpg",
      ratings: "150+",
      description:
        "Caramel Popcorn Milkshake is a kind of Icecream variety made with milk , sugar and caramel popcorn.",
      isVeg: true,
    },
    {
      name: "Cold Cocoa Milkshake",
      price: 170,
      image: "images/coldcocoa.jpg",
      ratings: "110+",
      description:
        "Cold Cocoa Milkshake is a kind of Icecream variety made with milk , sugar and cocoa powder.",
      isVeg: true,
    },
    {
      name: "Elaneer Payasam",
      price: 200,
      image: "images/elaneer.jpg",
      ratings: "140+",
      description:
        "Elaneer Payasam is a kind of dessert variety made with milk , sugar and elaneer and is a refreshing dessert.",
      isVeg: true,
    },
    {
      name: "Gulab Jamun[5pieces]",
      price: 100,
      image: "images/gulabjamun.jpg",
      ratings: "180+",
      description:
        "Gulab Jamun is a kind of dessert variety made with milkpowder, milk, fried in ghee and sweet syrup.",
      isVeg: true,
    },
    {
      name: "Rasgulla",
      price: 100,
      image: "images/rasgulla.jpg",
      ratings: "170+",
      description:
        "Rasgulla is a kind of dessert variety made with milk, and soaked in sweet syrup.",
      isVeg: true,
    },



  ];

  return (

    <div className="dessert-container">
      <img src="/images/backgrmenu.webp" className="background-image" alt="" />
      <h1>Dessert Varieties</h1>
      <div className="dessert-items">
        {dessertItems.map((item, index) => (
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

export default Desserts;
