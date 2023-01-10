import styles from "./Menu.module.scss";
import update from "../../assets/pencil.png";
import bin from "../../assets/bin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
// import settings from "electron-settings";
const { ipcRenderer } = require("electron");

export default function Menu() {
  const [data, setData] = useState([]);
  
  const [updated, setUpdated] = useState(false);

  const removeFood = (id) => {
    fetch(`https://hammerhead-app-7qhnq.ondigitalocean.app/api/food/${id}`, {
      method: "DELETE",
    })
      .then(async (response) => {
        setUpdated(!updated);
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
  }, [updated]);

  const [list, setList] = useState(data);
  const [clicked,setCliked] = useState(false);

  const dropdownItem = ["All Status", "Unavailable", "Available"];
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("All Status");

  const [query, setQuery] = useState("");
  const keys = ["name"];

  const [itemOffset, setItemOffset] = useState(0); 
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;

  const filtered = (clicked === true ? list : data).filter((values) =>
    keys.some((key) => values[key].toLowerCase().includes(query))
  );

  const [filter, setFilter] = useState([]);

  const filterBaseOnCate = (value) => {
    if(value === "Available") {
      setList(data.filter((x) => x.status === 1));
      setFilter([...data, filter])
    }
    else if(value === "Unavailable") {
      setList(data.filter((x) => x.status === 0));
      setFilter([...data, filter])
    }
    else {
      setCliked(false);
      return;
    }
    setCliked(true);
  }

  const currentItems = filtered.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filtered.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filtered.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="w3-container">
      <div>
        <div className={styles.gridContainer}>
          <div className={styles.gridItem1}>
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
          </div>

          {/* nút filter */}
          <div className={styles.dropdown} onClick={(e) => setIsActive(!isActive)} >
            <div className={styles.dropdownBtn} style={{fontWeight: '500'}}>
              {selected}
              {!isActive ? (
                <FontAwesomeIcon icon={faChevronDown} />
              ) : (
                <FontAwesomeIcon icon={faChevronUp} />
              )}
            </div>

            {isActive && (
              <div className={styles.dropdownContent}>
                {dropdownItem.map((value, index) => (
                  <>
                    <div 
                      key={index}
                      className={styles.dropdownItem}
                      onClick={(e) => {
                        setSelected(value);
                        setIsActive(false);
                        filterBaseOnCate(value);
                      }}
                    >
                      <p style={{fontWeight: '500'}}>{value}</p> 
                    </div>
                  </>
                ))}
              </div>
            )}
          </div>

          {/* Nút adding food */}
          <div style={{ display: "flex" }}>
            <Link className={styles.buttonAction} to="/foodAdding" style={{fontWeight: '500'}}>
              <img src="/src/assets/more.png" className={styles.icon} />
              New Food
            </Link>
          </div>
        </div>

        {/* Danh sách food */}
        <div className={styles.gridFood}>
          <div style={{ height: "51.7rem" }}>
            <div className={styles.titleBarGridFood}>
              <h5 className={styles.titleNameGridFood}>Food Name</h5>
              <h5 className={styles.titleNameGridFood}>Group</h5>
              <h5 className={styles.titleNameGridFood}>Price</h5>
              {/* <h5 className={styles.titleNameGridFood}>Quantity</h5> */}
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
            {currentItems &&
              currentItems.map((value, index) => (
                <div style={{ padding: "0 1.6rem" }} key={index}>
                  <div className={styles.itemInListFood}>
                    <div style={{ display: "flex" }}>
                      <img
                        src={`https://hammerhead-app-7qhnq.ondigitalocean.app/api/image/${value.cover}`}
                        alt=""
                        className={styles.roundedAva}
                      />
                      <h6 className={styles.foodInfo}>{value.name}</h6>
                    </div>
                    <h6
                      className={styles.foodInfo}
                      style={{ textTransform: "capitalize" }}
                    >
                      {value.category === "mainmeal"
                        ? "Main meal"
                        : value.category}
                    </h6>
                    <h6 className={styles.foodInfo}>{value.price}đ</h6>
                    {/* <h6 className={styles.foodInfo}>{value.quantity}</h6> */}

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {value.status === 0 ? (
                        <div className={styles.statusTagUnavai}>
                          <p className={styles.statusTextUnavai}>Unavailable</p>
                        </div>
                      ) : (
                        <div className={styles.statusTagAvai}>
                          <p className={styles.statusTextAvai}>Available</p>
                        </div>
                      )}

                      <Link
                        className={styles.actionBtn}
                        to="/formUpdate"
                        state={{
                          foodInfo: value,
                        }}
                      >
                        <img src={update} alt="" style={{ width: "2.4rem" }} />
                      </Link>
                      <button
                        className={styles.actionBtn}
                        onClick={() => removeFood(value.id)}
                      >
                        <img src={bin} alt="" style={{ width: "2.4rem" }} />
                      </button>
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
                </div>
              ))}
          </div>
        </div>

        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.pageItem}
          previousLinkClassName={styles.pageLink}
          nextClassName={styles.pageItem}
          nextLinkClassName={styles.pageLink}
          breakLabel="..."
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.pageLink}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}
