import styles from "./FoodChoosing.module.scss";
import edit from "../../assets/edit.png";
import pizzaa from "../../assets/pizza.png";
import desserts from "../../assets/gelato.png";
import drink from "../../assets/drink.png";
import meal from "../../assets/meal.png";
import pasta from "../../assets/spaghetti.png";
import { useState, useReducer } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { actions, reducer } from "./reducer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { ipcRenderer } = require("electron");

export default function MenuChoosing() {
  const location = useLocation();
  const table = location.state.table.sort((a, b) => a.number - b.number).map((key) => key.number);

  const [data, setData] = useState([]);

  const [order, dispatch] = useReducer(reducer, {});

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const token = ipcRenderer.sendSync("get-token");
    const requestOptions = {
      method: "GET",
      headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
    };

    fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/food", requestOptions)
      .then(async (res) => {
        setData(await res.json());
      })
      .catch((err) => console.log(err));
  }, []);

  const category = [
    { img: pizzaa, name: "Pizza" },
    { img: drink, name: "Drink" },
    { img: desserts, name: "Desserts" },
    { img: meal, name: "Main meal" },
    { img: pasta, name: "Pasta" },
  ];

  const [currentChoice, setCurrentChoice] = useState("Pizza");

  const [clicked, setCliked] = useState(false);

  const pizzaList = data.filter(
    (e) => e.status === 1 && e.category === "pizza"
  );

  const [currentList, setCurrentList] = useState(pizzaList);


  const filterCategory = (value) => {
    switch (value) {
      case "Drink":
        return "drink";
      case "Desserts":
        return "dessert";
      case "Pasta":
        return "pasta";
      case "Pizza":
        return "pizza";
      default:
        return "mainmeal";
    }
  };

  useEffect(() => {
    setCurrentList(
      data.filter(
        (e) => e.status === 1 && e.category === filterCategory(currentChoice)
      )
    );
  }, [currentChoice, data]);

  const makeAnOrder = () => {
    if(Object.values(order).length !== 0){
      const agent = ipcRenderer.sendSync("get-user");
  
      const token = ipcRenderer.sendSync("get-token");
  
      const form = {
        agentid: agent.id,
          foods: Object.values(order).map((value) => ({
            foodid: value.id,
            price: value.price,
            quantity: value.quantity
          })),
          table: table
      }
  
      const requestOptions = {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json", 'Authorization': 'Bearer ' + token },
        body: JSON.stringify(
          form
        ),
      };
  
      fetch(
        "https://hammerhead-app-7qhnq.ondigitalocean.app/api/order",
        requestOptions
      ).then(res => res.json()).then(_ => window.location.replace("/tables"))
   
    }
    else {
      toast.warn("List of order is empty!");
    }
  };

  //Search
  const [query, setQuery] = useState("")
  const keys = ["name"]

  // Count Total money
  useEffect(() => {
    let count = 0;
    if (Object.values(order).length === 0) return setTotal(0);
    for (const price in Object.values(order)) {
      count +=
        Object.values(order)[price].price *
        Object.values(order)[price].quantity;
      setTotal(count);
    }
  }, [clicked]);

  return (
    <div style={{ position: "relative" }}>
      <div className={styles.gridContainer}>
        <div>
          <div className={styles.searchBar}>
            <input type="text" id={styles.mySearch} placeholder="Search" onChange={(e) => setQuery(e.target.value)}/>
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
            {/* Danh mục menu */}
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

          {/* danh sách món */}
          <div className={styles.section}>
            <h3>{currentChoice}</h3>

            <div className={styles.listFood}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "1.6rem",
                }}
              >
                {currentList && 
                  currentList.filter((values) => keys.some((key) => values[key].toLowerCase().includes(query))).map((value, index) => (
                  <div
                    className={styles.foodTag}
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      dispatch({
                        type: actions.new,
                        data: {
                          id: value.id,
                          foodImg: value.cover,
                          price: value.price,
                          name: value.name,
                          description: value.description,
                        },
                      });
                      setCliked(!clicked);
                    }}
                  >
                    <img
                      src={`https://hammerhead-app-7qhnq.ondigitalocean.app/api/image/${value.cover}`}
                      alt=""
                    />
                    <h6 style={{ opacity: "1", fontWeight: "600" }}>
                      {value.name}
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

        {/* Chỗ hiển thị món đã chọn */}
        <div className={styles.orders}>
          <div>
            <h3>Table: {location.state.table.sort((a, b) => a.number - b.number).map((value) => value.number).join(", ")}</h3>
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
            {Object.values(order).map((value, index) => (
              <div className={styles.orderTag} key={index}>
                <div style={{ display: "flex" }}>
                  <img
                    src={`https://hammerhead-app-7qhnq.ondigitalocean.app/api/image/${value.cover}`}
                    alt=""
                    className={styles.foodImg}
                  />
                  <div>
                    <div style={{ display: "flex" }}>
                      <h6>{value.quantity}</h6>
                      <h6 style={{ color: "#999", margin: "0 0.4rem" }}>x</h6>
                      <h6>{value.name}</h6>
                    </div>
                    <h6 style={{ color: "#999" }}>{value.price}đ</h6>
                  </div>
                </div>

                <div style={{ position: "relative" }}>
                  <button
                    style={{ marginLeft: "0.8rem" }}
                    onClick={() => {
                      dispatch({ type: actions.add, data: { id: value.id } });
                      setCliked(!clicked);
                    }}
                  >
                    +
                  </button>
                  <button
                    style={{
                      right: "0",
                      position: "absolute",
                      padding: "0.85rem 1.3rem",
                    }}
                    onClick={() => {
                      dispatch({
                        type: actions.subtract,
                        data: { id: value.id },
                      });
                      setCliked(!clicked);
                    }}
                  >
                    {" "}
                    -{" "}
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
              <h3>{total}đ</h3>
            </div>
            <button className={styles.checkOutBtn} onClick={makeAnOrder}>Make Order</button>
            <ToastContainer />

          </div>
        </div>
      </div>
    </div>
  );
}
