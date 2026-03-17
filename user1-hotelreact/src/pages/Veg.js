//Veg.js
import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./Veg.css";

export const Veg = () => {
  const { addToCart } = useContext(CartContext);
  console.log("MenuItem Component Rendered"); // Debugging log

  const vegItems = [
    {
      name: "Meals",
      price: 130,
      image: "images/meals.jpg",
      ratings: "190+",
      description:
        "A wholesome and delicious vegetarian meal made with fresh ingredients, flavorful spices, and a perfect balance of taste and nutrition, offering a delightful dining experience.",
      isVeg: true,
    },
    {
      name: "Paneer Fried Rice",
      price: 120,
      image: "images/paneerfried.jpg",
      ratings: "180+",
      description:
        "Paneer Fried Rice is a flavorful and aromatic dish made with fragrant basmati rice, slightly roasted soft paneer cubes, and a blend of spices, stir-fried to perfection with fresh vegetables.",
      isVeg: true,
    },
    {
      name: "Paneer Noodles",
      price: 120,
      image: "images/paneernoodles.jpg",
      ratings:  "180+",
      description:
        "Paneer Noodles is a flavorful and satisfying dish made with soft paneer cubes, stir-fried noodles, fresh vegetables, and aromatic spices, offering a perfect blend of taste and texture.",
      isVeg: true,
    },
    {
      name: "Veg Parotta[1 Piece]",
      price: 15,
      image: "images/vegparotta.jpg",
      ratings: "130+",
      description:
        "Veg Parotta is a delicious and flaky layered flatbread made with refined flour and served with flavorful vegetable curry, making it a perfect comfort meal.",
      isVeg: true,
    },
    {
      name: "Idly[1 Piece]",
      price: 15,
      image: "images/idly.jpg",
      ratings: "190+",
      description:
        "Idly is a soft and fluffy South Indian dish made from fermented rice and urad dal batter, served with chutney and sambar.",
      isVeg: true,
    },
    {
      name: "Podi Idly",
      price: 70,
      image: "images/podiidly.jpg",
      ratings: "180+",
      description:
        "Podi Idly is a flavorful South Indian dish made with soft mini idlis coated in a spicy and aromatic lentil-based podi  and ghee, offering a delicious and comforting taste.",
      isVeg: true,
    },
    {
      name: "Plain Dosa",
      price: 35,
      image: "images/plaindosa.jpg",
      ratings: "120+",
      description:
        "Plain Dosa is a crispy and golden South Indian delicacy made from fermented rice and lentil batter, offering a light and savory taste with a hint of tanginess.Complemented with sambar and chutney.",
      isVeg: true,
    },
    {
      name: "Ghee Roast",
      price: 90,
      image: "images/gheedosa.jpg",
      ratings: "160+",
      description:
        "Ghee Roast is a crispy and flavorful South Indian dish made with fermented rice and urad dhal batter, roasted to perfection with rich, aromatic ghee, offering a delightful taste and texture..",
      isVeg: true,
    },
    {
      name: "Podi Dosa",
      price: 70,
      image: "images/podidosa.jpg",
      ratings: "160+",
      description:
        "Podi Dosa is a crispy and flavorful South Indian delicacy made with fermented rice and urad dhal batter and generously sprinkled with spicy podi  for an extra kick of taste..",
      isVeg: true,
    },
    {
      name: "Masala Dosa",
      price: 100,
      image: "images/masaladosa.jpg",
      ratings: "170+",
      description:
        "Masala Dosa is a crispy and golden South Indian delicacy filled with a flavorful spiced potato filling, served with coconut chutney and sambar.A delightful morning breakfast for dosa lovers.",
      isVeg: true,
    },
    {
      name: "Schezwan Dosa",
      price: 110,
      image: "images/schdosa.jpg",
      ratings: "180+",
      description:
        "Schezwan Dosa is a spicy and flavorful fusion dish made with crispy dosa filled with a fiery Schezwan sauce, sautéed vegetables,  offering a perfect blend of South Indian and Indo-Chinese flavors.",
      isVeg: true,
    },
    {
      name: "Paneer Cheese Dosa",
      price: 120,
      image: "images/paneercheese.webp",
      ratings: "180+",
      description:
        "Paneer Cheese Dosa is a crispy and flavorful South Indian dish filled with a rich blend of paneer and melted cheese, offering a perfect balance of spice and creaminess.",
      isVeg: true,
    },
    {
      name: "Chappathi[1 Piece]",
      price: 30,
      image: "images/chappathi.jpg",
      ratings: "150+",
      description:
        "Chappathi is a soft and healthy Indian flatbread made from whole wheat flour, water, and a touch of oil, cooked on a hot griddle for a light and fluffy texture.",
      isVeg: true,
    },
    {
      name: "Butter Naan[1 Piece]",
      price: 60,
      image: "images/naan.jpg",
      ratings: "170+",
      description:
        "Butter Naan is a soft and fluffy Indian bread made with refined flour and butter. It is cooked in a tandoor brushed with  butter for a rich taste. Perfect for paneer gravies.",
      isVeg: true,
    },
    {
      name: "Veg Kothu Parotta",
      price: 80,
      image: "images/vegkothuparotta.jpg",
      ratings: "140+",
      description:
        "Veg Kothu Parotta is a flavorful and spicy South Indian dish made with shredded parotta, mixed vegetables, and aromatic spices, stir-fried to perfection.",
      isVeg: true,
    },
    
    {
      name: "Paneer65",
      price: 130,
      image: "images/paneer65.jpg",
      ratings: "150+",
      description:
        "Paneer 65 is a crispy and spicy appetizer made with marinated paneer cubes, deep-fried to perfection and tossed in flavorful South Indian spices.",
      isVeg: true,
    },
    {
      name: "Gobi65",
      price: 110,
      image: "images/gobi65.jpg",
      ratings: "150+",
      description:
        "Gobi 65 is a crispy and spicy appetizer made with marinated cauliflower cubes, deep-fried to perfection and tossed in flavorful South Indian spices.",
      isVeg: true,
    },
    {
      name: "Gobi Manchurian",
      price: 130,
      image: "images/gobimanchurain.jpg",
      ratings: "160+",
      description:
        "Gobi Manchurian is a crispy and flavorful Indo-Chinese dish made with deep-fried cauliflower florets tossed in a spicy, tangy, and savory Manchurian sauce.",
      isVeg: true,
    },
    {
      name: "Mushroom Gravy",
      price: 130,
      image: "images/mushroomgravy.jpg",
      ratings: "190+",
      description:
        "Mushroom Gravy is a rich and flavorful dish made with tender mushrooms, aromatic spices, and a creamy, savory sauce, perfect for pairing with rice or bread.",
      isVeg: true,
    },
    {
      name: "Channa Masala",
      price: 130,
      image: "images/channamasala.jpg",
      ratings: "160+",
      description:
        "Channa Masala is a flavorful and hearty dish made with chickpeas simmered in a rich, spiced tomato gravy, infused with aromatic Indian spices and herbs.",
      isVeg: true,
    },
    {
      name: "Paneer Butter Masala",
      price: 150,
      image: "images/paneermasala.jpg",
      ratings: "180+",
      description:
        "Paneer Butter Masala is a rich and creamy Indian dish made with soft paneer cubes cooked in a flavorful tomato-based gravy with butter, cream, and spices.",
      isVeg: true,
    },
  ];

  return (

    <div className="veg-container">
      <img src="/images/backgrmenu.webp" className="background-image" alt="" />
      <h1>Veg Varieties</h1>
      <div className="veg-items">
        {vegItems.map((item, index) => (
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

export default Veg;
