import styles from "./Ordering.module.scss";
import close from "../../assets/close.png";
import tick from "../../assets/tick.png";

import { useEffect, useState } from "react";

export default function Ordering() {

  const [data, setData] = useState([]);

  const [status, setStatus] = useState(0);

  const [reload, setReload] = useState(false);

  useEffect(() => {
    setTimeout(
      fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/order")
        .then(async (res) => {
          setData(await res.json());
        })
        .catch((err) => console.log(err)),
      1000
    );
  }, [status]);

  // const [isActive, setIsActive] = useState(false);
  // const [selected, setSelected] = useState("All Bills");

  const [query, setQuery] = useState("");
  const keys = ["id", "createin"];

  const countQuantity = (value) => {
    let count = 0;
    for (const quantity in value) {
      count += value[quantity].quantity;
    }
    return count;
  };

  const updateState = (id, number) => {
    setStatus(number);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        status: number,
      }),
    };

    fetch(
      `https://hammerhead-app-7qhnq.ondigitalocean.app/api/order/${id}`,
      requestOptions
    ).catch((err) => console.log(err));
  };

  return (
    <div className="w3-container">
      <div className={styles.gridContainer}>
        <div className={styles.searchBar}>
          <input
            type="text"
            id={styles.mySearch}
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
          />
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
          <button className={styles.dropdownBtn} onClick={() => setReload(!reload)}>Reload Page</button>
        </div>
      </div>

      <div className={styles.orderList}>
        {data
          .filter((value) =>
            keys.some((key) =>
              value[key].toString().toLowerCase().includes(query)
            )
          )
          .map((value, index) => (
            <div className={styles.orderItem} key={index}>
              <h5>Order #{value.id}</h5>
              <h6>{value.createin}</h6>
              <h6>Table: {}</h6>

              <div style={{ overflowY: "scroll", height: "45%" }}>
                {data[index].foods.map((food, index) => (
                  <div
                    style={{
                      display: "flex",
                      marginTop: "0.8rem",
                    }}
                    key={index}
                  >
                    <img
                      src={`https://hammerhead-app-7qhnq.ondigitalocean.app/api/image/${food.cover}`}
                      alt=""
                    />
                    <div style={{ width: "100%" }}>
                      <h6 style={{ opacity: "1", fontWeight: "600" }}>
                        {food.name}
                      </h6>
                      {/* <h6 style={{textOverflow: 'ellipsis'}}>{food.}</h6> */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
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
              </div>

              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "91%",
                  marginBottom: "0.8rem",
                }}
              >
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
                    <h6>x{countQuantity(value.foods)} items</h6>
                    <h6 style={{ opacity: "1", fontWeight: "600" }}>
                      {value.total}đ
                    </h6>
                  </div>

                  <div>
                    <div style={{ display: "flex" }}>
                      <button
                        className={styles.rejectBtn}
                        style={{
                          marginRight: "1.6rem",
                          borderColor: "#E13428",
                        }}
                        onClick={() => updateState(value.id, 2)}
                      >
                        <img src={close} alt="" className={styles.iconBtn} />
                      </button>
                      <button
                        className={styles.completeBtn}
                        style={{ borderColor: "#2BC48A" }}
                        onClick={() => updateState(value.id, 1)}
                      >
                        <img src={tick} alt="" className={styles.iconBtn} />
                      </button>
                    </div>
                    {/* {value.status === 0 ? (
                      <div style={{ display: "flex" }}>
                        <button
                          className={styles.rejectBtn}
                          style={{
                            marginRight: "1.6rem",
                            borderColor: "#E13428",
                          }}
                          onClick={() => updateState(value.id, 2)}
                        >
                          <img src={close} alt="" className={styles.iconBtn} />
                        </button>
                        <button
                          className={styles.completeBtn}
                          style={{ borderColor: "#2BC48A" }}
                          onClick={() => updateState(value.id, 1)}
                        >
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
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
