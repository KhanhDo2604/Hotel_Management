import React from 'react'
import { useState } from 'react';
import BillModal from '../../pages/BookingList/billModal';
import style from './CheckOutBtn.module.scss'

export default function CheckOutBtn({guestInfo}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <button className={style.checkOut} onClick={handleShow}>Check Out</button>   
        <BillModal open={show} onClose={handleClose} guestInfo={guestInfo}/>
    </div>
  )
}
