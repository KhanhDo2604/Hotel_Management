import styles from "./Menu.module.scss";
import miquang from "../../assets/spicyUdonNoodle.jpg";
import update from "../../assets/pencil.png";
import bin from "../../assets/bin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Menu() {
  const dropdownItem = ["All Status", "Unavailable", "Available"];

  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("All Status");

  return (
    <div className="w3-container">
      <div className={styles.gridContainer}>
        <div className={styles.gridItem1}>
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
        <div style={{ display: "flex" }}>
          <button className={styles.buttonAction}>
            <img src="/src/assets/more.png" className={styles.icon} />
            New Food
          </button>
        </div>
      </div>

      <div className={styles.gridFood}>
        <div>
          <div className={styles.titleBarGridFood}>
            <h5 className={styles.titleNameGridFood}>Food Name</h5>
            <h5 className={styles.titleNameGridFood}>Group</h5>
            <h5 className={styles.titleNameGridFood}>Price</h5>
            <h5 className={styles.titleNameGridFood}>Quantity</h5>
            <h5 className={styles.titleNameGridFood}>Status</h5>
          </div>

          <hr
            style={{
              width: "100%",
              background: "#e4e4e4",
              height: "1px",
              marginTop: "0px",
              marginBottom: "1.6rem",
            }}
          />

          <div style={{ padding: "0 1.6rem" }}>
            <div className={styles.itemInListFood}>
              <div style={{ display: "flex" }}>
                <img src={miquang} alt="" className={styles.roundedAva} />
                <h6 className={styles.foodInfo}>Spicy Udon Noodles</h6>
              </div>
              <h6 className={styles.foodInfo}>Main meal</h6>
              <h6 className={styles.foodInfo}>30000đ</h6>
              <h6 className={styles.foodInfo}>100</h6>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.statusTagUnavai}>
                  <p className={styles.statusTextUnavai}>Unavailable</p>
                </div>

                <button className={styles.actionBtn}>
                  <img src={update} alt="" style={{ width: "2.4rem" }} />
                </button>
                <button className={styles.actionBtn}>
                  <img src={bin} alt="" style={{ width: "2.4rem" }} />
                </button>
              </div>
            </div>
          </div>

          <hr
            style={{
              width: "100%",
              background: "#e4e4e4",
              height: "1px",
              marginTop: "0px",
              marginBottom: "1.6rem",
            }}
          />

          <div style={{ padding: "0 1.6rem" }}>
            <div className={styles.itemInListFood}>
              <div style={{ display: "flex" }}>
                <img src={miquang} alt="" className={styles.roundedAva} />
                <h6 className={styles.foodInfo}>Spicy Udon Noodles</h6>
              </div>
              <h6 className={styles.foodInfo}>Main meal</h6>
              <h6 className={styles.foodInfo}>30000đ</h6>
              <h6 className={styles.foodInfo}>100</h6>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.statusTagAvai}>
                  <p className={styles.statusTextAvai}>Available</p>
                </div>

                <button className={styles.actionBtn}>
                  <img src={update} alt="" style={{ width: "2.4rem" }} />
                </button>
                <button className={styles.actionBtn}>
                  <img src={bin} alt="" style={{ width: "2.4rem" }} />
                </button>
              </div>
            </div>
          </div>

          <hr
            style={{
              width: "100%",
              background: "#e4e4e4",
              height: "1px",
              marginTop: "0px",
              marginBottom: "1.6rem",
            }}
          />

          <div style={{ padding: "0 1.6rem" }}>
            <div className={styles.itemInListFood}>
              <div style={{ display: "flex" }}>
                <img src={miquang} alt="" className={styles.roundedAva} />
                <h6 className={styles.foodInfo}>Spicy Udon Noodles</h6>
              </div>
              <h6 className={styles.foodInfo}>Main meal</h6>
              <h6 className={styles.foodInfo}>30000đ</h6>
              <h6 className={styles.foodInfo}>100</h6>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.statusTagAvai}>
                  <p className={styles.statusTextAvai}>Available</p>
                </div>

                <button className={styles.actionBtn}>
                  <img src={update} alt="" style={{ width: "2.4rem" }} />
                </button>
                <button className={styles.actionBtn}>
                  <img src={bin} alt="" style={{ width: "2.4rem" }} />
                </button>
              </div>
            </div>
          </div>

          <hr
            style={{
              width: "100%",
              background: "#e4e4e4",
              height: "1px",
              marginTop: "0px",
              marginBottom: "1.6rem",
            }}
          />

          <div style={{ padding: "0 1.6rem" }}>
            <div className={styles.itemInListFood}>
              <div style={{ display: "flex" }}>
                <img src={miquang} alt="" className={styles.roundedAva} />
                <h6 className={styles.foodInfo}>Spicy Udon Noodles</h6>
              </div>
              <h6 className={styles.foodInfo}>Main meal</h6>
              <h6 className={styles.foodInfo}>30000đ</h6>
              <h6 className={styles.foodInfo}>100</h6>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.statusTagAvai}>
                  <p className={styles.statusTextAvai}>Available</p>
                </div>

                <button className={styles.actionBtn}>
                  <img src={update} alt="" style={{ width: "2.4rem" }} />
                </button>
                <button className={styles.actionBtn}>
                  <img src={bin} alt="" style={{ width: "2.4rem" }} />
                </button>
              </div>
            </div>
          </div>

          <hr
            style={{
              width: "100%",
              background: "#e4e4e4",
              height: "1px",
              marginTop: "0px",
              marginBottom: "1.6rem",
            }}
          />

          <div style={{ padding: "0 1.6rem" }}>
            <div className={styles.itemInListFood}>
              <div style={{ display: "flex" }}>
                <img src={miquang} alt="" className={styles.roundedAva} />
                <h6 className={styles.foodInfo}>Spicy Udon Noodles</h6>
              </div>
              <h6 className={styles.foodInfo}>Main meal</h6>
              <h6 className={styles.foodInfo}>30000đ</h6>
              <h6 className={styles.foodInfo}>100</h6>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.statusTagAvai}>
                  <p className={styles.statusTextAvai}>Available</p>
                </div>

                <button className={styles.actionBtn}>
                  <img src={update} alt="" style={{ width: "2.4rem" }} />
                </button>
                <button className={styles.actionBtn}>
                  <img src={bin} alt="" style={{ width: "2.4rem" }} />
                </button>
              </div>
            </div>
          </div>

          <hr
            style={{
              width: "100%",
              background: "#e4e4e4",
              height: "1px",
              marginTop: "0px",
              marginBottom: "1.6rem",
            }}
          />

          <div style={{ padding: "0 1.6rem" }}>
            <div className={styles.itemInListFood}>
              <div style={{ display: "flex" }}>
                <img src={miquang} alt="" className={styles.roundedAva} />
                <h6 className={styles.foodInfo}>Spicy Udon Noodles</h6>
              </div>
              <h6 className={styles.foodInfo}>Main meal</h6>
              <h6 className={styles.foodInfo}>30000đ</h6>
              <h6 className={styles.foodInfo}>100</h6>

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.statusTagAvai}>
                  <p className={styles.statusTextAvai}>Available</p>
                </div>

                <button className={styles.actionBtn}>
                  <img src={update} alt="" style={{ width: "2.4rem" }} />
                </button>
                <button className={styles.actionBtn}>
                  <img src={bin} alt="" style={{ width: "2.4rem" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
