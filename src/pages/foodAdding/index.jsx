import React from "react";
import { Link } from "react-router-dom";
import styles from "./FoodAdding.module.scss";

export default function FoodAdding() {


const group = ['Main meal', 'Pizza', 'Desserts', 'Drink', 'Pasta'];

  return (
    <div>
      <h3>Form Adding Food</h3>

      <div className={styles.formContainer}>
        <form action="" className={styles.formUpdate}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Food Image:</label>
            <label>Food Name: </label>
            <label>Category: </label>
            <label>Price: </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input type="file" class="input-file" id="choose" onchange="changed(this)" multiple accept=""/>
            <input type="text"/>
            <select name="status" id="status">
              {group.map((value, index) => (
                <option>{value}</option>
              ))}
            </select>
            <input type="text" />

          </div>
        </form>

        <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
          <Link to="/menu" style={{marginRight: '0.4rem', background: '#F9D410'}}>Confirm</Link>
          <Link to="/menu" style={{marginLeft: '0.4rem', background: '#bfbfbf'}}>Cancle</Link>
        </div>
      </div>
    </div>
  )
}
