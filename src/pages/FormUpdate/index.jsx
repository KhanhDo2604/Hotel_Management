import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./FormUpdate.module.scss";

const { ipcRenderer } = require("electron");

export default function FormUpdate() {
  const location = useLocation();

  const [image, setImage] = useState(location.state.foodInfo.cover);
  const [name, setName] = useState(location.state.foodInfo.name);
  const [cate, setCate] = useState(location.state.foodInfo.category);
  const [price, setPrice] = useState(location.state.foodInfo.price);
  const [trangthai, setStatus] = useState(location.state.foodInfo.status);

  const group = ["mainmeal", "pizza", "dessert", "drink", "pasta"];
  
  const update = () => {
    const token = ipcRenderer.sendSync("get-token");

    const formData = new FormData();

    formData.append("cover", image);
    formData.append("name", name);
    formData.append("category", cate);
    formData.append("price", price);
    formData.append("status", trangthai);

    const requestOptions = {
      method: "POST",
      headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
      body: formData
    };

    fetch(
      `https://hammerhead-app-7qhnq.ondigitalocean.app/api/food/edit/${location.state.foodInfo.id}`,
      requestOptions
    )
    .then(res => res.json())
      .then(res => console.log(res))
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
            <label>Status: </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input type="file" className="input-file" id="choose" 
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}/>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <select
              onChange={(e) => setCate(e.target.value)}
              style={{ textTransform: "capitalize" }}
              value={cate}
            >
              {group.map((value, index) => (
                  <option key={index} value={value}>
                    {filterCategory(value)}
                  </option>
              ))}
            </select>
            <input
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
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
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
