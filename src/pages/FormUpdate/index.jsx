import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./FormUpdate.module.scss";

export default function FormUpdate() {
  const location = useLocation();

  console.log(location.state.foodInfo);

  const group = ['Main meal', 'Pizza', 'Desserts', 'Drink', 'Pasta'];

  const status = ['Unavailable', 'Available'];

  return (
    <div style={{height: '98%', position: 'relative'}}>
      <h3>Form Update Food Detail</h3>

      <div className={styles.formContainer}>
        <form action="" className={styles.formUpdate}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label>Food Image:</label>
            <label>Food Name: </label>
            <label>Category: </label>
            <label>Price: </label>
            <label>Quantity: </label>
            <label>Status: </label>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <input type="text" defaultValue={location.state.foodInfo.foodImg}/>
            <input type="text" defaultValue={location.state.foodInfo.foodName}/>
            <select name="status" id="status">
              <option>{location.state.foodInfo.category}</option>
              {group.map((value, index) => {
                if(value !== location.state.foodInfo.category) return <option key={index}>{value}</option>
              })}
            </select>
            <input type="text" defaultValue={location.state.foodInfo.price}/>
            <input type="text" defaultValue={location.state.foodInfo.quantity}/>
            <select name="status" id="status">
              <option>{location.state.foodInfo.status}</option>
              {status.map((value, index) => {
                if(value !== location.state.foodInfo.status) return <option key={index}>{value}</option>
              })}
            </select>
          </div>
        </form>

        <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
          <Link to="/menu" style={{marginRight: '0.4rem', background: '#F9D410'}}>Update</Link>
          <Link to="/menu" style={{marginLeft: '0.4rem', background: '#bfbfbf'}}>Cancle</Link>
        </div>
      </div>
    </div>
  );
}
