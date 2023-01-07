import styles from "./FoodChoosing.module.scss";
import edit from "../../assets/edit.png";
import pizza from "../../assets/pizzaHalf.jpg";
import miquang from "../../assets/MiQuang.png";
import spicyNoodle from "../../assets/spicyUdonNoodle.jpg";
import pizzaa from "../../assets/pizza.png";
import desserts from "../../assets/gelato.png";
import drink from "../../assets/drink.png";
import meal from "../../assets/meal.png";
import pasta from "../../assets/spaghetti.png";
import { useState } from "react";
import coke from "../../assets/coke.jpg";
import dessertCake from "../../assets/cake.png";
import pastaSeafood from "../../assets/pastaSeafood.jpg";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function MenuChoosing() {
  const location = useLocation();

  const category = [
    { img: pizzaa, name: "Pizza" },
    { img: drink, name: "Drink" },
    { img: desserts, name: "Desserts" },
    { img: meal, name: "Main meal" },
    { img: pasta, name: "Pasta" },
  ];

  const [currentChoice, setCurrentChoice] = useState("Pizza");

  const pizzaList = [
    {
      id: 0,
      foodImg: pizza,
      foodName: "Saigon Mania Pizza",
      price: "300000",
      category: "Pizza",
    },
    {
      id: 1,
      foodImg: pizza,
      foodName: "Saigon Mania Pizza",
      price: "300000",
      category: "Pizza",
    },
    {
      id: 2,
      foodImg: pizza,
      foodName: "Saigon Mania Pizza",
      price: "300000",
      category: "Pizza",
    },
    {
      id: 3,
      foodImg: pizza,
      foodName: "Saigon Mania Pizza",
      price: "300000",
      category: "Pizza",
    },
    {
      id: 4,
      foodImg: pizza,
      foodName: "Saigon Mania Pizza",
      price: "300000",
      category: "Pizza",
    },
    {
      id: 5,
      foodImg: pizza,
      foodName: "Saigon Mania Pizza",
      price: "300000",
      category: "Pizza",
    },
    {
      id: 6,
      foodImg: pizza,
      foodName: "Saigon Mania Pizza",
      price: "300000",
      category: "Pizza",
    },
  ];

  const drinkList = [
    {
      id: 0,
      foodImg: coke,
      foodName: "Coca Cola",
      price: "300000",
      category: "Drink",
    },
    {
      id: 1,
      foodImg: coke,
      foodName: "Coca Cola",
      price: "300000",
      category: "Drink",
    },
    {
      id: 2,
      foodImg: coke,
      foodName: "Coca Cola",
      price: "300000",
      category: "Drink",
    },
    {
      id: 3,
      foodImg: coke,
      foodName: "Coca Cola",
      price: "300000",
      category: "Drink",
    },
    {
      id: 4,
      foodImg: coke,
      foodName: "Coca Cola",
      price: "300000",
      category: "Drink",
    },
    {
      id: 5,
      foodImg: coke,
      foodName: "Coca Cola",
      price: "300000",
      category: "Drink",
    },
    {
      id: 6,
      foodImg: coke,
      foodName: "Coca Cola",
      price: "300000",
      category: "Drink",
    },
  ];

  const dessertList = [
    {
      id: 0,
      foodImg: dessertCake,
      foodName: "Chocolate Cake",
      price: "300000",
      category: "Desserts",
    },
    {
      id: 1,
      foodImg: dessertCake,
      foodName: "Chocolate Cake",
      price: "300000",
      category: "Desserts",
    },
    {
      id: 2,
      foodImg: dessertCake,
      foodName: "Chocolate Cake",
      price: "300000",
      category: "Desserts",
    },
    {
      id: 3,
      foodImg: dessertCake,
      foodName: "Chocolate Cake",
      price: "300000",
      category: "Desserts",
    },
    {
      id: 4,
      foodImg: dessertCake,
      foodName: "Chocolate Cake",
      price: "300000",
      category: "Desserts",
    },
    {
      id: 5,
      foodImg: dessertCake,
      foodName: "Chocolate Cake",
      price: "300000",
      category: "Desserts",
    },
    {
      id: 6,
      foodImg: dessertCake,
      foodName: "Chocolate Cake",
      price: "300000",
      category: "Desserts",
    },
  ];

  const mainMealList = [
    {
      id: 0,
      foodImg: spicyNoodle,
      foodName: "Spicy Udon Noodles",
      price: "300000",
      category: "Main meal",
    },
    {
      id: 1,
      foodImg: spicyNoodle,
      foodName: "Spicy Udon Noodles",
      price: "300000",
      category: "Main meal",
    },
    {
      id: 2,
      foodImg: spicyNoodle,
      foodName: "Spicy Udon Noodles",
      price: "300000",
      category: "Main meal",
    },
    {
      id: 3,
      foodImg: spicyNoodle,
      foodName: "Spicy Udon Noodles",
      price: "300000",
      category: "Main meal",
    },
    {
      id: 4,
      foodImg: spicyNoodle,
      foodName: "Spicy Udon Noodles",
      price: "300000",
      category: "Main meal",
    },
    {
      id: 5,
      foodImg: spicyNoodle,
      foodName: "Spicy Udon Noodles",
      price: "300000",
      category: "Main meal",
    },
    {
      id: 6,
      foodImg: spicyNoodle,
      foodName: "Spicy Udon Noodles",
      price: "300000",
      category: "Main meal",
    },
  ];

  const pastaList = [
    {
      id: 0,
      foodImg: pastaSeafood,
      foodName: "Pasta Seafood",
      price: "300000",
      category: "Pasta",
    },
    {
      id: 1,
      foodImg: pastaSeafood,
      foodName: "Pasta Seafood",
      price: "300000",
      category: "Pasta",
    },
    {
      id: 2,
      foodImg: pastaSeafood,
      foodName: "Pasta Seafood",
      price: "300000",
      category: "Pasta",
    },
    {
      id: 3,
      foodImg: pastaSeafood,
      foodName: "Pasta Seafood",
      price: "300000",
      category: "Pasta",
    },
    {
      id: 4,
      foodImg: pastaSeafood,
      foodName: "Pasta Seafood",
      price: "300000",
      category: "Pasta",
    },
    {
      id: 5,
      foodImg: pastaSeafood,
      foodName: "Pasta Seafood",
      price: "300000",
      category: "Pasta",
    },
    {
      id: 6,
      foodImg: pastaSeafood,
      foodName: "Pasta Seafood",
      price: "300000",
      category: "Pasta",
    },
  ];

  const [currentList, setCurrentList] = useState(pizzaList);
  const [currentOrder, setCurrentOrder] = useState([]);

  const handleCLick = (value) => {
    const check = currentOrder.filter((e) => e.id === value.id).length;
    if(check === 0) {
      setCurrentOrder([...currentOrder, {...value, quantity: 1}]);
    }
  }
  useEffect(() => {
    switch(currentChoice) {
      case 'Drink': 
        setCurrentList(drinkList);
        return;
      case 'Desserts': 
        setCurrentList(dessertList);
        return;
      case 'Pasta': 
        setCurrentList(pastaList);
        return;
      case 'Pizza': 
        setCurrentList(pizzaList);
        return;
      default:
        setCurrentList(mainMealList);
        return;
    }
  }, [currentChoice])

  const handlePlus = (value) => {
    setCount(value.quantity + 1);
  }

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.gridContainer}>
        <div>
          <div className={styles.searchBar}>
            <input type="text" id={styles.mySearch} placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              style={{ marginRight: "1.6rem", fill: "#F9D410" }}
            >
              <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
            </svg>
          </div>

          <div>
            <div className={styles.content}>
              {category.map((value, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentChoice(value.name)}
                  className={currentChoice === value.name ? styles.active : ""}
                >
                  <img src={value.img} alt="" />
                  <h6>{value.name}</h6>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3>{currentChoice}</h3>

            <div className={styles.listFood}>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>   
                {currentList.map((value, index) => (
                  <div
                    className={styles.foodTag}
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleCLick(value)}
                  >
                    <img src={value.foodImg} alt="" />
                    <h6 style={{ opacity: "1", fontWeight: "600" }}>
                      {value.foodName}
                    </h6>
                    <div style={{ display: "flex" }}>
                      <h6>{value.category}</h6>
                      <h6 style={{ margin: "0 0.4rem" }}>·</h6>
                      <h6>{value.price}đ</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.orders}>
          <div>
            <h3>Table: {location.state.table.join(", ")}</h3>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>My Order</h4>
              <img
                src={edit}
                alt=""
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  alignSelf: "center",
                }}
              />
            </div>
          </div>

          <div style={{ height: "60%", overflowY: "scroll" }}>
            {currentOrder.map((value, index) => (
              <div className={styles.orderTag} key={index}>
                <div style={{ display: "flex" }}>
                  <img src={value.foodImg} alt="" className={styles.foodImg} />
                  <div>
                    <div style={{ display: "flex" }}>
                      <h6>{value.quantity}</h6>
                      <h6 style={{ color: "#999", margin: "0 0.4rem" }}>x</h6>
                      <h6>{value.foodName}</h6>
                    </div>
                    <h6 style={{ color: "#999" }}>{value.price}đ</h6>
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <button style={{ marginLeft: "0.8rem" }} onClick={() => value.quantity = 2}>+</button>
                  <button style={{ right: "0", position: "absolute", padding: '0.85rem 1.3rem' }}>
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <hr
              style={{
                width: "100%",
                height: "2px",
                borderStyle: "dashed",
                borderColor: "#999",
                margin: "2rem 0 1rem",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Total:</h3>
              <h3>190000đ</h3>
            </div>
            <button className={styles.checkOutBtn}>Make Order</button>
          </div>
        </div>
      </div>
    </div>
  );
}
