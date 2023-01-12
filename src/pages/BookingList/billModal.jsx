import React from "react";
import style from "./BookingList.module.scss";
const { ipcRenderer } = require("electron");

const mapType = {
  std: "Standard Room (STD)",
  sup: "Superior Room (SUP)",
  dlx: "Deluxe Room (DLX)",
  sui: "Suite Room (SUT)"
}

export default function BillModal({ open, onClose, guestInfo }) {
  if (!open) return null;
  const sendData = () => {
    const token = ipcRenderer.sendSync("get-token");
    const requestOptions = {
      method: "PUT",
      headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
      body: JSON.stringify({
        action: "checkout"
      })
    };
    fetch(`https://hammerhead-app-7qhnq.ondigitalocean.app/api/reservation/${guestInfo.id}`, requestOptions
    )
      .then((res) => res.json())
      .then((res) => window.location.reload())
  }
  return (
    <div className={style.overlay}>
      <h3>Bill Details</h3>
      <hr style={{ margin: "0 -2rem 2rem -2rem", background: "#999" }} />
      <div className={style.modalContain}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label>Reservation id:</label>
          <label>Guest Name:</label>
          <label>Date In:</label>
          <label>Date Out:</label>
          <label>Stayover:</label>
          <label>Number of guest:</label>
          <label>Details:</label>
          <label className={style.special}>Total Money:</label>
        </div>

        <div>
          <p>{guestInfo.id}</p>
          <p>{guestInfo.fullname}</p>
          <p>{guestInfo.in}</p>
          <p>{guestInfo.out}</p>
          <p>{guestInfo.status !== "so" ? "No" : "Yes"}</p>
          <p>{guestInfo.guestcount}</p>

          {guestInfo.rooms.map((value) => (
            <p>
              {mapType[value.type]} (Room {value.number})
            </p>
          ))}
          <p>{guestInfo.total}</p>
        </div>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <button className={style.confirmBtn} onClick={sendData}>Confirm</button>

        <button className={style.cancleBtn} onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
