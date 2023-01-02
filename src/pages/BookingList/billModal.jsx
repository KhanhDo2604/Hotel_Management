import React from "react";
import style from "./BookingList.module.scss";
import { useState } from "react";

export default function BillModal({ open, onClose, guestInfo }) {
  if (!open) return null;
  console.log(guestInfo);
  return (
    <div className={style.overlay}>
      <h3>Bill Details</h3>
      <hr style={{ margin: "0 -2rem 2rem -2rem", background: "#999" }} />
      <div className={style.modalContain}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
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
              {value.type} (Room {value.number})
            </p>
          ))}

          <p>1 jack</p>
        </div>
      </div>

      <div style={{ justifyContent: "center", display: "flex" }}>
        <button className={style.confirmBtn} onClick={onClose}>Confirm</button>

        <button className={style.cancleBtn} onClick={onClose}>Cancle</button>
      </div>
    </div>
  );
}
