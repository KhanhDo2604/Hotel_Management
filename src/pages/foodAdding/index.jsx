import React, { useState } from "react";
import styles from "./FoodAdding.module.scss";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const { ipcRenderer } = require("electron");

export default function FoodAdding() {
  const group = ["mainmeal", "pizza", "dessert", "drink", "pasta"];

  const [newFood, setNewFood] = useState({cover: null, name: '', category: 'mainmeal', price: 0, description: ''});

  const addingFood = () => {
    if(newFood.cover === null || newFood.name === '' || newFood.price === 0 || newFood.description === '') {
      toast.warn("Please fill all information");
    }
    else {
      const token = ipcRenderer.sendSync("get-token");
  
      const formData = new FormData();
  
      for (const key in newFood) {
        formData.append(key, newFood[key]);
      }
  
      const requestOptions = {
        method: "POST",
        headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
        body: formData
      };
      fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/food", requestOptions).then(() => window.location.replace("/menu"));
    }
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
      <ToastContainer/>
      <h3>Form Adding Food</h3>

      <div className={styles.formContainer}>
        <div action="" className={styles.formUpdate}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Food Image:</label>
            <label>Food Name: </label>
            <label>Category: </label>
            <label>Price: </label>
            <label>Description: </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="file"
              name="cover"
              onChange={(e) => {
                setNewFood({...newFood, cover: e.target.files[0]},
              )}}
            />

            <input type="text" onChange={(e) => setNewFood({...newFood, name: e.target.value})} required/>

            <select name="status" id="status" onClick={(e) => setNewFood({...newFood, category: e.target.value})} style={{ textTransform: "capitalize" }}>
              {group.map((value, index) => (
                <option key={index} value={value}>{filterCategory(value)}</option>
              ))}
            </select>

            <input type="text" onChange={(e) => setNewFood({...newFood, price: e.target.value})} required/>

            <input type="text" onChange={(e) => setNewFood({...newFood, description: e.target.value})} required/>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <button
            // to="/menu"
            className={styles.confirmBtn}
            style={{ marginRight: "0.4rem" }}
            onClick={addingFood}
          >
            Confirm
          </button>
          <button
            // to="/menu"
            style={{ marginLeft: "0.4rem", background: "#bfbfbf" }}
            onClick={() => window.location.replace("/menu")}
          >
            Cancle
          </button>
        </div>
      </div>
    </div>
  );
}
