import { useState } from "react";
import styles from "./FormReservation.module.scss";
import { DatePicker } from "antd";
import { useLocation } from "react-router-dom";
const { RangePicker } = DatePicker;

export default function FormReservation() {
    const [stateGender, setStateGender] = useState("")
    const location = useLocation()
    const table = location.state.table

    const sendData = () => {
        fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/reservation",
            {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: {
                    guestid: "20521331",
                    agentid: "20521333",
                    in: "2023-01-11",
                    out: "2023-01-23",
                    count: 3,
                    rooms: [
                        "001",
                        "002",
                        "003"
                    ]
                }
            }
        )
        .then((res) => console.log(res))
    }

    return (
        <div style={{ padding: "1rem" }}>
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
                        <input type="text" name="name" />
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
                                <input defaultValue={table.filter(value => value.type === 1).length} style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" readOnly />
                                <label>Standard Room (STD)</label>
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <input defaultValue={table.filter(value => value.type === 2).length} style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" readOnly />
                                <label>Superior Room (SUP)</label>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "1rem" }}>
                                <input defaultValue={table.filter(value => value.type === 3).length} style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" readOnly />
                                <label>Duluxe Room (DLX)</label>
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <input defaultValue={table.filter(value => value.type === 4).length} style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" readOnly />
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
                            format={"DD/MM/YYYY"}
                            style={{ height: '32.4px', border: '0.2rem solid #999' }}
                        />
                    </div>
                    <div>
                        <label>Number Of Guest:</label>
                    </div>
                    <div>
                        <input type="text" name="name" />
                    </div>
                </form>
                <div className={styles.format}>
                    <button className={styles.btnConfirm} onClick={sendData}>Confirm</button>
                    <button className={styles.btnCancel} onClick={() => location.href = "/bookingList"}>Cancel</button>
                </div>
            </div>

        </div>
    );
}