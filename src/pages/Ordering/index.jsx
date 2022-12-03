import styles from "./Ordering.module.scss";
import cake from "../../assets/cake.jpg";
import salad from "../../assets/salad.jpg";
import close from "../../assets/close.png";
import tick from "../../assets/tick.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Ordering() {
  const order = [
    {
      imgage: cake,
      idBill: "#351",
      time: "23 Feb 2021, 08:28 PM",
      listTable: [1, 2, 3],
      status: 0,
    },
    {
      imgage: cake,
      idBill: "#358",
      time: "23 Feb 2021, 08:28 PM",
      listTable: [1, 2, 3],
      status: 1,
    },
    {
      imgage: cake,
      idBill: "#666",
      time: "23 Feb 2021, 08:28 PM",
      listTable: [1, 2, 3],
      status: 2,
    },
  ];

  const foodInOrder = [
    {
      foodImg: cake,
      foodName: "Vegetable Mixups",
      desFood: "Vegetable fritters with egg",
      price: 30000,
      quantity: 1,
    },
    {
      foodImg: salad,
      foodName: "Vegetable Mixups",
      desFood: "Vegetable salad",
      price: 30000,
      quantity: 3,
    },
  ];

  const dropdownItem = ["All Bills", "Not Pay Yet", "Completed", "Rejected"];

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("All Bills");

  return (
    <div className="w3-container">
      <div className={styles.gridContainer}>
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

        <div
          className={styles.dropdown}
          onClick={(e) => setIsActive(!isActive)}
        >
          <div className={styles.dropdownBtn}>
            {selected}
            {!isActive ? <FontAwesomeIcon icon={faChevronDown}/> : <FontAwesomeIcon icon={faChevronUp}/>}
          </div>

          {isActive && (
            <div className={styles.dropdownContent}>
              {dropdownItem.map((value, index) => (
                <>
                  <div
                    className={styles.dropdownItem}
                    onClick={(e) => setSelected(value)}
                  >
                    {value}
                  </div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={styles.orderList}>
        {order.map((value, index) => (
          <div className={styles.orderItem}>
            <h5>Order {value.idBill}</h5>
            <h6>{value.time}</h6>
            <h6>Table: {value.listTable.join(", ")}</h6>

            {foodInOrder.map((food, index) => (
              <div style={{ display: "flex", marginTop: "0.8rem" }}>
                <img src={food.foodImg} alt="" />
                <div style={{ width: "100%" }}>
                  <h6 style={{ opacity: "1", fontWeight: "600" }}>
                    {food.foodName}
                  </h6>
                  <h6>{food.desFood}</h6>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h6 style={{ opacity: "1", fontWeight: "600" }}>
                      {food.price}đ
                    </h6>
                    <h6 style={{ opacity: "1", fontWeight: "600" }}>
                      Qty: {food.quantity}
                    </h6>
                  </div>
                  <hr
                    style={{
                      color: "#9999",
                      width: "100%",
                      marginBottom: "0px",
                      marginTop: "0.8rem",
                    }}
                  />
                </div>
              </div>
            ))}
            <hr
              style={{
                color: "#9999",
                width: "100%",
                margin: "0 0",
                marginTop: "-1px",
              }}
            />

            <div
              style={{
                marginTop: "0.8rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h6>x4 items</h6>
                <h6 style={{ opacity: "1", fontWeight: "600" }}>60000đ</h6>
              </div>

              <div>
                {value.status === 0 ? (
                  <div style={{ display: "flex" }}>
                    <button
                      style={{ marginRight: "1.6rem", borderColor: "#E13428" }}
                    >
                      <img src={close} alt="" className={styles.iconBtn} />
                    </button>
                    <button style={{ borderColor: "#2BC48A" }}>
                      <img src={tick} alt="" className={styles.iconBtn} />
                    </button>
                  </div>
                ) : value.status === 1 ? (
                  <div>
                    <button
                      style={{ borderColor: "#2BC48A", cursor: "default" }}
                      disabled
                    >
                      <img src={tick} alt="" className={styles.iconBtn} />
                      <h6
                        style={{
                          opacity: "1",
                          color: "#2BC48A",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        completed
                      </h6>
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      style={{ borderColor: "#E13428", cursor: "default" }}
                      disabled
                    >
                      <img src={close} alt="" className={styles.iconBtn} />
                      <h6
                        style={{
                          opacity: "1",
                          color: "#E13428",
                          textTransform: "uppercase",
                          fontWeight: "600",
                        }}
                      >
                        rejected
                      </h6>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
