import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./FormUpdate.module.scss";

export default function FormUpdate() {
  const location = useLocation();

  const [image, setImage] = useState(location.state.foodInfo.cover);
  const [name, setName] = useState(location.state.foodInfo.name);
  const [cate, setCate] = useState(location.state.foodInfo.category);
  const [price, setPrice] = useState(location.state.foodInfo.price);
  const [trangthai, setStatus] = useState(location.state.foodInfo.status);

  const group = ["mainmeal", "pizza", "dessert", "drink", "pasta"];

  const update = () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        cover: image,
        name: name,
        category: cate,
        price: price,
        status: trangthai,
      }),
    };

    fetch(
      `https://hammerhead-app-7qhnq.ondigitalocean.app/api/food/${location.state.foodInfo.id}`,
      requestOptions
    )
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  const filterCategory = (value) => {
    switch (value) {
      case "mainmeal":
        return "Main Meal";
      default:
        return value;
    }
  };

  return (
    <div style={{ height: "98%", position: "relative" }}>
      <h3>Form Update Food Detail</h3>

      <div className={styles.formContainer}>
        <form action="" className={styles.formUpdate}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Food Image:</label>
            <label>Food Name: </label>
            <label>Category: </label>
            <label>Price: </label>
            {/* <label>Quantity: </label> */}
            <label>Status: </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input type="file" className="input-file" id="choose" 
              onChange={(e) => {
                setImage(e.target.value);
              }}/>
            {/* <input type="text" defaultValue={location.state.foodInfo.cover} /> */}
            <input
              type="text"
              defaultValue={location.state.foodInfo.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <select
              onClick={(e) => setCate(e.target.value)}
              style={{ textTransform: "capitalize" }}
            >
              <option value={location.state.foodInfo.category}>
                {filterCategory(location.state.foodInfo.category)}
              </option>
              {group.map((value, index) => {
                if (value !== location.state.foodInfo.category)
                  return (
                    <option key={index} value={value}>
                      {filterCategory(value)}
                    </option>
                  );
              })}
            </select>
            <input
              type="text"
              defaultValue={location.state.foodInfo.price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            {/* <input type="text" defaultValue={location.state.foodInfo.quantity}/> */}
            <select
              name="status"
              id="status"
              onChange={(e) => setStatus(e.target.value)}
              value={trangthai}
            >
              <option value={0}>Unavailable</option>
              <option value={1}>Available</option>
            </select>
          </div>
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Link
            to="/menu"
            style={{ marginRight: "0.4rem", background: "#F9D410" }}
            onClick={update}
          >
            Update
          </Link>
          <Link
            to="/menu"
            style={{ marginLeft: "0.4rem", background: "#bfbfbf" }}
          >
            Cancle
          </Link>
        </div>
      </div>
    </div>
  );
}
