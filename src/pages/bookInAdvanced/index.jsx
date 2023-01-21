import styles from "./bookInAdvanced.module.scss";
import { useState } from "react";
import { DatePicker } from "antd";
import { useLocation } from "react-router-dom";
const { RangePicker } = DatePicker;
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
const { ipcRenderer } = require("electron");
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BookInAdvanced() {
  const navigate = useNavigate();

  const [guestid, setguestId] = useState("");
  const [count, setCount] = useState("");
  const [date, setDate] = useState({
    start: moment(),
    end: moment().add(1, "d"),
  });
  const [check, setCheck] = useState(false);
  return (
    <div style={{ height: "98%", position: "relative" }}>
      {/* <ToastContainer /> */}
      <h3 style={{ fontWeight: "bold" }}>Book In Advanced</h3>
      <div className={styles.flexItem}>
        <form action="" className={styles.gridItem}>
          <div>
            <label>Identification:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(e) => setguestId(e.target.value)}
              value={guestid}
            />
          </div>
          <div>
            <label>Guest Name:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(e) => setguestId(e.target.value)}
              value={guestid}
            />
          </div>
          <div>
            <label>Type Of Room:</label>
          </div>
          <div>
            <div>
              <div>
                <input
                  style={{ width: "8%", marginRight: "1.5rem" }}
                  type="text"
                  name="name"
                  readOnly
                />
                <label>Standard Room (STD)</label>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <input
                  style={{ width: "8%", marginRight: "1.5rem" }}
                  type="text"
                  name="name"
                  readOnly
                />
                <label>Superior Room (SUP)</label>
              </div>
            </div>
            <div>
              <div style={{ marginTop: "1rem" }}>
                <input
                  style={{ width: "8%", marginRight: "1.5rem" }}
                  type="text"
                  name="name"
                  readOnly
                />
                <label>Duluxe Room (DLX)</label>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <input
                  style={{ width: "8%", marginRight: "1.5rem" }}
                  type="text"
                  name="name"
                  readOnly
                />
                <label>Suite Room (SUT)</label>
              </div>
            </div>
          </div>
          <div>
            <label>Date in and out:</label>
          </div>
          <div>
            <RangePicker
              className={styles.rangPicker}
              format={"YYYY-MM-DD"}
              style={{
                height: "32.4px",
                border: "0.2rem solid #999",
                width: "100%",
              }}
              onChange={(e) => {
                setDate({
                  start: e[0].format("YYYY-MM-DD"),
                  end: e[1].format("YYYY-MM-DD"),
                });
                setCheck(true);
              }}
            />
          </div>
          
          <div>
            <label>Number Of Adults:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(e) => setCount(e.target.value)}
              value={count}
            />
          </div>

          <div>
            <label>Number Of Children:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(e) => setCount(e.target.value)}
              value={count}
            />
          </div>

          <div>
            <label>Car park requirement:</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="name"
              onChange={(e) => setCount(e.target.value)}
              value={count}
                style={{width: '2.8rem', height: '2.8rem', borderRadius: '0.5rem', border: '0.2rem solid #999'}}
            />
          </div>
        </form>

        <div className={styles.format}>
          <button className={styles.btnConfirm}>Confirm</button>
          <button className={styles.btnCancel} onClick={() => navigate('/bookingList')}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
