import { useState } from "react";
import styles from "./FormReservation.module.scss";
import { DatePicker } from "antd";
import { useLocation } from "react-router-dom";
const { RangePicker } = DatePicker;
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

export default function FormReservation() {
    const [stateGender, setStateGender] = useState("")
    const location = useLocation()
    const table = location.state.table
    const navigate = useNavigate();

    const [guestid, setguestId] = useState("")
    const [count, setCount] = useState("")
    const [date, setDate] = useState({
        start: moment(),
        end: moment().add(1, "d")
    });

    const sendData = () => {
        fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/reservation",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    guestid: guestid,
                    agentid: "20521330",
                    in: date.start,
                    out: date.end,
                    count: count,
                    rooms: table.map((value) => value.roomnumber)
                })
            }
        )
            .then((res) => {
                navigate("/bookinglist")
            })
    }

    const navigatePage = () => {
        navigate("/bookinglist")
    }


    return (
        <div style={{ padding: "1rem", position: 'relative' }}>
            <h3 style={{ fontWeight: "bold" }}>Form Reservation</h3>
            <div className={styles.flexItem}>
                <form action="" className={styles.gridItem}>
                    <div>
                        <label>Customer Name:</label>
                    </div>
                    <div >
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Identification:</label>
                    </div>
                    <div>
                        <input type="text" name="name" onChange={(e) => setguestId(e.target.value)} value={guestid} />
                    </div>
                    <div>
                        <label>Email:</label>
                    </div>
                    <div>
                        <input type="email" name="name" />
                    </div>
                    <div>
                        <label>Gender:</label>
                    </div>
                    <div style={{ borderRadius: '8px' }}>
                        <select
                            style={{ padding: "0.8rem", fontWeight: "bold", borderRadius: '0.6rem' }}
                            value={stateGender}
                            onChange={(e) => {
                                const selectedGender = e.target.value
                                console.log(selectedGender)
                                setStateGender(selectedGender)
                            }}>
                            <option value="male">Male</option>
                            <option value="female">FeMale</option>
                        </select>
                    </div>
                    <div>
                        <label>Phone Number:</label>
                    </div>
                    <div>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Type Of Room:</label>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <div>
                                <input defaultValue={table.filter(value => value.roomtype === "std").length} style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" readOnly />
                                <label>Standard Room (STD)</label>
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <input defaultValue={table.filter(value => value.roomtype === "sup").length} style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" readOnly />
                                <label>Superior Room (SUP)</label>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "1rem" }}>
                                <input defaultValue={table.filter(value => value.roomtype === "dlx").length} style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" readOnly />
                                <label>Duluxe Room (DLX)</label>
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <input defaultValue={table.filter(value => value.roomtype === "sui").length} style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" readOnly />
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
                            style={{ height: '32.4px', border: '0.2rem solid #999' }}
                            onChange={(e) => {
                                setDate({
                                    start: e[0].format("YYYY-MM-DD"),
                                    end: e[1].format("YYYY-MM-DD")
                                })
                            }}
                        />
                    </div>
                    <div>
                        <label>Number Of Guest:</label>
                    </div>
                    <div>
                        <input type="text" name="name" onChange={(e) => setCount(e.target.value)} value={count} />
                    </div>
                </form>
                <div className={styles.format}>
                    <button className={styles.btnConfirm} onClick={sendData}>Confirm</button>
                    <button className={styles.btnCancel} onClick={navigatePage}>Cancel</button>
                </div>
            </div>

        </div>
    );
}