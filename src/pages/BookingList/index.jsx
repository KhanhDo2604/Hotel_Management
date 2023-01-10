import styles from "./BookingList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import CheckOutBtn from "../../comps/checkOutButton";
const { RangePicker } = DatePicker;
const { ipcRenderer } = require("electron");

const mapType = {
    std: "Standard Room (STD)",
    sup: "Superior Room (SUP)",
    dlx: "Deluxe Room (DLX)",
    sui: "Suite Room (SUT)"
}

const mapState = ["OC", "EA", "SO"]

export default function BookingList() {
    //Fetch api
    const [data, setData] = useState([])

    useEffect(() => {
        const token = ipcRenderer.sendSync("get-token");
        const requestOptions = {
            method: "GET",
            headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
        };

        fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/reservation", requestOptions)
            .then(async (res) => {
                setData(await res.json());
            })
            .catch((err) => console.log(err));
    }, []);


    //Search
    const [query, setQuery] = useState("");
    const keys = ["fullname"];
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
    }, [])

    //Counter Number room
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

    // Counter Number guests
    const [counterGuest, setCounterGuest] = useState(1)
    const increaseGuests = (e) => {
        e.stopPropagation()
        setCounterGuest(count => count + 1)
    }
    const decreaseGuests = (e) => {
        e.stopPropagation()
        if (counterGuest > 1) {
            setCounterGuest(count => count - 1)
        }
    }

    //Reset Number
    const handleReset = (e) => {
        e.stopPropagation()
        setCounter(1)
        setCounterGuest(1)
    }

    //click out modal
    const handleModal = (e) => {
        e.stopPropagation()
    }

    // handleApply
    const [value, setValue] = useState(1)
    const [guest, setGuest] = useState(1)
    let valueRef = useRef()
    let guestRef = useRef()
    const handleApply = () => {
        valueRef.current.value = counter;
        guestRef.current.value = counterGuest;
        setValue(valueRef.current.value)
        setGuest(guestRef.current.value)
    }

    //opacity apply and minus if number === 1
    const opacity = counter === 1 ? 0.5 : 1;

    // convert page
    const converPage = () => {
        location.href = "/placeToBook"
    }

    //Format Date
    const dateFormat = "DD/MM/YYYY";

    return (
        <>
            <div style={{ marginTop: "2.2rem" }} className={styles.containerGrid}>
                <RangePicker
                    className={styles.rangPicker}
                    format={dateFormat}
                    style={{ border: '0.2rem solid #999' }}
                />
                <div className={styles.middles} ref={menuRef}>
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "1rem" }} />
                    <div className={styles.active} onClick={() => setModal(prev => !prev)}>
                        <p ref={valueRef}>{value} Room</p>
                        <p ref={guestRef} style={{ fontWeight: "bold" }}>{guest} Guests</p>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                    <button>Filter</button>
                    <button className={styles.btnLeft} onClick={converPage}>Book</button>
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
                <p>List: <span>{data.length}</span> results</p>
            </div>
            {
                data && data.filter((value) => keys.some((key) => value[key].toLowerCase().includes(query))).map((values, index) => (
                    <div className={styles.contentGrid} key={values.id}>
                        <div className={styles.alignItems}>
                            {
                                values.rooms.map((valueRoom) => (
                                    <span style={{ display: "flex" }}>Room:
                                        <p key={value.id} style={{ fontWeight: "bold", marginLeft: '0.4rem' }}>
                                            {valueRoom.number}
                                        </p>
                                    </span>
                                ))
                            }
                            <p>In: <span style={{ fontWeight: "bold" }}>{values.in}</span></p>
                        </div>
                        <div className={styles.alignItems}>
                            {
                                values.rooms.map((valueRoom) => (
                                    <span style={{ display: "flex" }}>Type:
                                        <p key={value.id} style={{ fontWeight: "bold" }}>
                                            {
                                                mapType[valueRoom.type]
                                            }
                                        </p>
                                    </span>
                                ))
                            }
                            <p>Out: <span style={{ fontWeight: "bold" }}>{values.out}</span></p>
                        </div>
                        <div className={styles.alignItems}>
                            <p>{values.fullname}</p>
                            <p style={{ fontWeight: "bold", marginTop: "4.3rem" }}>{values.guestcount} Guest(s)</p>
                        </div>
                        <div className={styles.end}>
                            {
                                values.status === 0 ? (
                                    <>
                                        <p className={styles.oc} style={{ backgroundColor: "#5BF551", color: "#2C7527" }}>{mapState[values.status]}</p>
                                    </>
                                ) : values.status === 1 ? (
                                    <>
                                        <p className={styles.oc} style={{ backgroundColor: "#B5DCFF", color: "#0000FF" }}>{mapState[values.status]}</p>
                                    </>
                                ) : (
                                    <>
                                        <p className={styles.oc} style={{ backgroundColor: "var(--nav-item-hover-color)", color: "#FF0000" }}>{mapState[values.status]}</p>
                                    </>
                                )
                            }
                            <CheckOutBtn guestInfo={values} />
                        </div>
                    </div>
                ))
            }

            {
                modal && (
                    <div className={styles.modal}>
                        <div className={styles.modalContent} onClick={handleModal}>
                            <div>
                                <p style={{ fontWeight: "bold", display: "flex", alignItems: "center", marginTop: "0.5rem" }}>Guests</p>
                                <p style={{ fontWeight: "bold", display: "flex", alignItems: "center", marginTop: "2rem" }}>Rooms</p>
                                <div style={{ textAlign: "center", marginTop: "2rem" }}>
                                    <button className={styles.reset} onClick={handleReset} style={{ opacity }}>Reset</button>
                                </div>
                            </div>
                            <div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <p className={styles.minus} onClick={decreaseGuests} style={{ opacity }}>-</p>
                                    <p className={styles.number}>{counterGuest}</p>
                                    <p className={styles.plus} onClick={increaseGuests}>+</p>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "1.2rem" }}>
                                    <p className={styles.minus} onClick={decrease} style={{ opacity }}>-</p>
                                    <p className={styles.number}>{counter}</p>
                                    <p className={styles.plus} onClick={increase}>+</p>
                                </div>
                                <div style={{ textAlign: "center", marginTop: "1.3rem" }}>
                                    <button className={styles.apply} onClick={handleApply}>Apply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}