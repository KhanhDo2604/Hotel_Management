import { useState } from "react";
import styles from "./FormReservation.module.scss";
import { DatePicker } from "antd";
import { useLocation } from "react-router-dom";
const { RangePicker } = DatePicker;
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
const { ipcRenderer } = require("electron");
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function FormReservation() {
    const location = useLocation()
    const table = location.state.table
    const navigate = useNavigate();
    
    const [guestid, setguestId] = useState("")
    const [count, setCount] = useState("")
    const [date, setDate] = useState({
        start: moment(),
        end: moment().add(1, "d")
    });
    const [check,setCheck] = useState(false)

    const sendData = () => {
        if(guestid === "" || check===false || count === ""){
            toast.warn("Please fill all information")
        }
        else {
            const token = ipcRenderer.sendSync("get-token");
            const userId = ipcRenderer.sendSync("get-user").id;
    
            const requestOptions = {
                method: "POST",
                headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                body: JSON.stringify({
                    guestid: guestid,
                    agentid: userId,
                    in: date.start,
                    out: date.end,
                    count: count,
                    rooms: table.map((value) => value.roomnumber)
                })
            };
            fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/reservation", requestOptions
            )
                .then((res) => navigate("/bookinglist"))
        }
    }

    const navigatePage = () => {
        navigate("/bookinglist")
    }


    return (
        <div style={{ padding: "1rem", position: 'relative', height: "98%" }}>
             <ToastContainer />
            <h3 style={{ fontWeight: "bold" }}>Form Reservation</h3>
            <div className={styles.flexItem}>
                <form action="" className={styles.gridItem}>
                    <div>
                        <label>Identification:</label>
                    </div>
                    <div>
                        <input type="text" name="name" onChange={(e) => setguestId(e.target.value)} value={guestid} />
                    </div>
                    <div>
                        <label>Type Of Room:</label>
                    </div>
                    <div>
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
                            style={{ height: '32.4px', border: '0.2rem solid #999',width:"100%" }}
                            onChange={(e) => {
                                setDate({
                                    start: e[0].format("YYYY-MM-DD"),
                                    end: e[1].format("YYYY-MM-DD")
                                })
                                setCheck(true)
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