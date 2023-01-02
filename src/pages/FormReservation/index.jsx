import { useState } from "react";
import styles from "./FormReservation.module.scss";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

export default function FormReservation() {
    const [stateGender,setStateGender] = useState("")

    return (
        <div style={{padding:"1rem"}}>
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
                    <div style={{borderRadius: '8px'}}>
                        <select
                        style={{padding:"0.8rem", fontWeight:"bold", borderRadius: '0.6rem'}} 
                        value={stateGender}
                        onChange={(e) => {
                            const selectedGender= e.target.value
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
                    <div style={{display: 'flex'}}>
                        <div>
                            <div>
                                <input style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" />
                                <label>Standard Room (STD)</label>
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <input style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" />
                                <label>Superior Room (SUP)</label>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "1rem" }}>
                                <input style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" />
                                <label>Duluxe Room (DLX)</label>
                            </div>
                            <div style={{ marginTop: "1rem" }}>
                                <input style={{ width: "8%", marginRight: "1.5rem" }} type="text" name="name" />
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
                            style={{height: '32.4px', border: '0.2rem solid #999'}}
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
                    <button className={styles.btnConfirm}>Confirm</button>
                    <button className={styles.btnCancel}>Cancel</button>
                </div>
            </div>

        </div>
    );
}