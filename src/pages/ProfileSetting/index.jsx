import { useState } from "react";
import styles from "./ProfileSetting.module.scss";
import { DatePicker } from "antd";
import { useLocation } from "react-router-dom";
const { RangePicker } = DatePicker;
export default function ProfileSetting() {
    const location = useLocation()
    //const groupTypeRoom = ["Standard Room (STD)","Superior Room (SUP)","Deluxe Room (DLX)","Suite Room (SUT)"]
    const groupState = ["OC", "EA", "SO"];
    //Format Date
    const dateFormat = "DD/MM/YYYY";
    const [typeRoom, setTypeRoom] = useState("")
    const [state, setState] = useState("")
    return (
        <>
            <h3 style={{ fontWeight: "bold" }}>Profile Setting</h3>
            <div className={styles.gridContainer}>
                <form action="" className={styles.gridContent}>
                    <div>
                        <label>Room:</label>
                    </div>
                    <div >
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Type Of Room:</label>
                    </div>
                    <div>
                        <select
                            value={typeRoom}
                            onChange={(e) => {
                                const room = e.target.value;
                                setTypeRoom(room)
                            }}
                        >
                            <option value="std">Standard Room (STD)</option>
                            <option value="sup">Superior Room (SUP)</option>
                            <option value="dlx">Deluxe Room (DLX)</option>
                            <option value="sut">Suite Room (SUT)</option>
                        </select>
                    </div>
                    <div>
                        <label>Customer Name:</label>
                    </div>
                    <div >
                        <input defaultValue={location.state.profileInfo.nameCustomer} type="text" />
                    </div>
                    <div>
                        <label>Date:</label>
                    </div>
                    <div>
                        <RangePicker
                            className={styles.rangPicker}
                            format={dateFormat}
                        />
                    </div>
                    <div>
                        <label>Number Of Guest:</label>
                    </div>
                    <div >
                        <input defaultValue={location.state.profileInfo.guests} type="text" />
                    </div>
                    <div>
                        <label>Status:</label>
                    </div>
                    <div>
                        <select
                            value={state}
                            onChange={(e) => {
                                const st = e.target.value;
                                console.log(st)
                                setState(st)
                            }}
                        >
                            <option>{location.state.profileInfo.state}</option>
                            {
                                groupState.map((value, index) => {
                                    if (value !== location.state.profileInfo.state) {
                                        return <option key={index}>{value}</option>

                                    }
                                })
                            }

                        </select>
                    </div>
                </form>
                <div className={styles.format}>
                    <button className={styles.btnConfirm}>Confirm</button>
                    <button className={styles.btnCancel}>Cancel</button>
                </div>
            </div>
        </>
    )
}