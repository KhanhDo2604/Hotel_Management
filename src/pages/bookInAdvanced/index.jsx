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

  const location = useLocation();
  const table = location.state.table;

  const [guestid, setguestId] = useState("");
  const [guestName, setGuestName] = useState("");

  const [countAdult, setCountAdult] = useState("");
  const [countChildren, setCountChildren] = useState("");

  const [parking, setParking] = useState(0);

  const [date, setDate] = useState({
    start: moment(),
    end: moment().add(1, "d"),
  });
  const [check, setCheck] = useState(false);

  const handleBooking = () => {
    if (
      guestid === "" ||
      check === false ||
      countAdult === "" ||
      countChildren === "" ||
      guestName === ""
    ) {
      toast.warn("Please fill all information");
    } else {
      const token = ipcRenderer.sendSync("get-token");
      const userId = ipcRenderer.sendSync("get-user").id;

      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify({
          guestid: guestid,
          agentid: userId,
          in: date.start,
          out: date.end,
          adults: countAdult,
          children: countChildren,
          parking: parking,
          rooms: table.map((value) => value.roomnumber),
        }),
      };
      fetch(
        "https://hammerhead-app-7qhnq.ondigitalocean.app/api/reservation",
        requestOptions
      )
        .then((res) => res.json())
        .then((res) => console.log(res))
        .then((res) => navigate("/bookinglist"));
    }
  };

  return (
    <div style={{ height: "98%", position: "relative" }}>
      <ToastContainer />
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
              onChange={(e) => setGuestName(e.target.value)}
              value={guestName}
            />
          </div>
          <div>
            <label>Type Of Room:</label>
          </div>
          <div>
            <div>
              <div>
                <input
                  defaultValue={
                    table.filter((value) => value.roomtype === "std").length
                  }
                  style={{ width: "8%", marginRight: "1.5rem", textAlign: 'center' }}
                  type="text"
                  name="name"
                  readOnly
                />
                <label>Standard Room (STD)</label>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <input
                  defaultValue={
                    table.filter((value) => value.roomtype === "sup").length
                  }
                  style={{ width: "8%", marginRight: "1.5rem", textAlign: 'center' }}
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
                  defaultValue={
                    table.filter((value) => value.roomtype === "dlx").length
                  }
                  style={{ width: "8%", marginRight: "1.5rem", textAlign: 'center' }}
                  type="text"
                  name="name"
                  readOnly
                />
                <label>Duluxe Room (DLX)</label>
              </div>
              <div style={{ marginTop: "1rem" }}>
                <input
                  defaultValue={
                    table.filter((value) => value.roomtype === "sui").length
                  }
                  style={{ width: "8%", marginRight: "1.5rem", textAlign: 'center' }}
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
              onChange={(e) => setCountAdult(e.target.value)}
              value={countAdult}
            />
          </div>

          <div>
            <label>Number Of Children:</label>
          </div>
          <div>
            <input
              type="text"
              name="name"
              onChange={(e) => setCountChildren(e.target.value)}
              value={countChildren}
            />
          </div>

          <div>
            <label>Car park requirement:</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="name"
              onChange={(e) => setParking(e.target.checked ? 1 : 0)}
              style={{
                width: "2.8rem",
                height: "2.8rem",
                borderRadius: "0.5rem",
                border: "0.2rem solid #999",
              }}
            />
          </div>
        </form>

        <div className={styles.format}>
          <button className={styles.btnConfirm} onClick={handleBooking}>
            Confirm
          </button>
          <button
            className={styles.btnCancel}
            onClick={() => navigate("/bookingList")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
