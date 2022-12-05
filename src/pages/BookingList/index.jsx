import styles from "./BookingList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import penCil from '../../assets/pencil.png'
import moment from "moment";
import { DatePicker } from "antd";
import { useState } from "react";
const { RangePicker } = DatePicker;


export default function BookingList() {
    const [dates, setDates] = useState(new Date())
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
                <div className={styles.middles}>
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "1rem" }} />
                    <div>
                        <p>1 Room</p>
                        <p style={{ fontWeight: "bold" }}>2 Guests</p>
                    </div>
                </div>
                <div>
                    <button>Search</button>
                </div>
            </div>
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
            <div style={{ fontWeight: "bold", marginTop: "2.2rem" }}>
                <p>List: <span>4</span> results</p>
            </div>
            <div className={styles.contentGrid}>
                <div>
                    <p style={{fontWeight:"bold"}}>Room 666</p>
                    <p>In: <span style={{fontWeight:"bold"}}>Sat,11/26/22</span></p>
                </div>
                <div>
                    <p>Superior Room (SUP)</p>
                    <p>Out: <span  style={{fontWeight:"bold"}}>Tue,11/29/22</span></p>
                </div>
                <div>
                    <p>Nguyễn Huỳnh Tuấn Khang</p>
                    <p style={{fontWeight:"bold"}}>2 Guests</p>
                </div>
                <div className={styles.end}>
                    <button className={styles.oc}>OC</button>
                    <button className={styles.checkOut}>Check Out</button>
                    <button className={styles.pencil}>
                        <img style={{ height: "2.8rem"}} src={penCil} />
                    </button>
                    <button className={styles.close}>
                        <FontAwesomeIcon style={{ color: "red" , height: "3.2rem"}} icon={faClose} />
                    </button>
                </div>
            </div>
        </>
    );
}