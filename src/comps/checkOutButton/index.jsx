import React from "react";
import { useState } from "react";
import BillModal from "../../pages/BookingList/billModal";
import style from "./CheckOutBtn.module.scss";

export default function CheckOutBtn({ guestInfo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({

      }),
    };
    fetch(
      `https://hammerhead-app-7qhnq.ondigitalocean.app/api/reservation${id}`,
      requestOptions
    )
      .then(async (res) => {
        setData(await res.json());
      })
      .catch((err) => console.log(err));
  }

  const handleShow = () => setShow(true);
  return (
    <div>
      <button className={style.checkOut} onClick={handleShow}>
        Check Out
      </button>
      <BillModal open={show} onClose={handleClose} guestInfo={guestInfo} />
    </div>
  );
}
