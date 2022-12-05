import styles from "./BookingList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faUsers } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import penCil from '../../assets/pencil.png'
import moment from "moment";
import { DatePicker } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
const { RangePicker } = DatePicker;


export default function BookingList() {
    const bookingList = [
        {
            id: 1,
            numberRoom: "Room 666",
            typeRoom: "Superior Room (SUP)",
            nameCustomer: "Võ Đình Vân",
            startDate: "11/26/22",
            endDate: "12/23/22",
            guests: "2 guests",
            state: "OC"
        },
        {
            id: 2,
            numberRoom: "Room 777",
            typeRoom: "Superior Room (SUP)",
            nameCustomer: "Nguyễn Huỳnh Tuấn Khang",
            startDate: "11/26/22",
            endDate: "12/23/22",
            guests: "2 guests",
            state: "EA"
        },
        {
            id: 3,
            numberRoom: "Room 888",
            typeRoom: "Superior Room (SUP)",
            nameCustomer: "Nguyễn Văn Pháp",
            startDate: "11/26/22",
            endDate: "12/23/22",
            guests: "2 guests",
            state: "SO"
        }
    ]

    //Date
    const [dates, setDates] = useState(new Date())

    //Delete an item when click
    const [list, setList] = useState(bookingList);
    function handleDelete(id) {
        const newIds = list.filter((item) => item.id !== id)
        setList(newIds)
    }

    //Search
    const [query, setQuery] = useState("");
    const keys = ["nameCustomer", "numberRoom"];

    //Show Modal
    const [modal, setModal] = useState(false)
    let menuRef = useRef()

    useEffect(() => {
        let handler = (event) => {
            if (!menuRef.current.contains(event.target)) {
                setModal(false)
            }
        }
        document.addEventListener("click", handler)
        return () => {
            document.removeEventListener("click", handler)
        }
    })

    //Counter Number
    const [counter, setCounter] = useState(1)
     
    const increase = (e) => {
        e.stopPropagation()
        setCounter(count => count + 1)
    }
    const decrease = (e) => {
        e.stopPropagation()
        if (counter > 1) {
            setCounter(count => count - 1)
        }
    }

    //Reset Number
    const handleReset = (e) => {
        e.stopPropagation()
        setCounter(1)
    }

    //click out modal
    const handleModal = (e) => {
        e.stopPropagation()

    }

    return (
        <>
            <div style={{ marginTop: "2.2rem" }} className={styles.containerGrid}>
                <RangePicker
                    className={styles.rangPicker}
                    onChange={(values) => {
                        setDates(values.map((item) => {
                            return moment(item).format("DD/MM/YYYY")
                        }))
                    }}
                />
                <div className={styles.middles} ref={menuRef}>
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "1rem" }} />
                    <div className={styles.active} onClick={() => setModal(prev => !prev)}>
                        <p>1 Room</p>
                        <p style={{ fontWeight: "bold" }}>2 Guests</p>
                    </div>
                </div>
                <div>
                    <button>Search</button>
                </div>
            </div>
            <div className={styles.searchBar}>
                <input type="text" id={styles.mySearch} placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    style={{ marginRight: "1.6rem", fill: "#F9D410" }}
                >
                    <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
                </svg>
            </div>
            <div style={{ fontWeight: "bold", marginTop: "2.2rem" }}>
                <p>List: <span>{list.length}</span> results</p>
            </div>
            {
                list.filter((value) => keys.some((key) => value[key].toLowerCase().includes(query))).map((values, index) => (
                    <div className={styles.contentGrid} key={values.id}>
                        <div>
                            <p style={{ fontWeight: "bold" }}>{values.numberRoom}</p>
                            <p style={{ marginTop: "2rem" }}>In: <span style={{ fontWeight: "bold" }}>{values.startDate}</span></p>
                        </div>
                        <div>
                            <p>{values.typeRoom}</p>
                            <p style={{ marginTop: "2rem" }}>Out: <span style={{ fontWeight: "bold" }}>{values.endDate}</span></p>
                        </div>
                        <div>
                            <p>{values.nameCustomer}</p>
                            <p style={{ fontWeight: "bold", marginTop: "2rem" }}>{values.guests}</p>
                        </div>
                        <div className={styles.end}>
                            {
                                values.state === "OC" ? (
                                    <>
                                        <p className={styles.oc} style={{ backgroundColor: "#66FF99", color: "#057028" }}>{values.state}</p>
                                    </>
                                ) : values.state === "EA" ? (
                                    <>
                                        <p className={styles.oc} style={{ backgroundColor: "#B5DCFF", color: "#0000FF" }}>{values.state}</p>
                                    </>
                                ) : (
                                    <>
                                        <p className={styles.oc} style={{ backgroundColor: "var(--nav-item-hover-color)", color: "#FF0000" }}>{values.state}</p>
                                    </>
                                )
                            }
                            <button className={styles.checkOut}>Check Out</button>
                            <button className={styles.pencil}>
                                <img style={{ height: "2.8rem" }} src={penCil} />
                            </button>
                            <button className={styles.close} onClick={() => handleDelete(values.id)}>
                                <FontAwesomeIcon style={{ color: "red", height: "2.8rem" }} icon={faClose} />
                            </button>
                        </div>
                    </div>
                ))
            }

            {
                modal && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent} onClick={handleModal}>
                            <div>
                                <p style={{ fontWeight: "bold", display: "flex", alignItems: "center" }}>Rooms</p>
                                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                                    <button className={styles.reset} onClick={handleReset}>Reset</button>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <p className={styles.minus} onClick={decrease}>-</p>
                                    <p className={styles.number}>{counter}</p>
                                    <p className={styles.plus} onClick={increase}>+</p>
                                </div>
                                <div style={{ textAlign: "center", marginTop: "1rem" }}>
                                    <button className={styles.apply}>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}