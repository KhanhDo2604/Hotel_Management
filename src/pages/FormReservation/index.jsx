import { useState } from "react";
import styles from "./FormReservation.module.scss";

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
                        <label>Gender:</label>
                    </div>
                    <div>
                        <select
                        style={{padding:"0.8rem", fontWeight:"bold"}} 
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
                    <div>
                        <div>
                            <input style={{ width: "6%", marginRight: "1.5rem" }} type="text" name="name" />
                            <label>Standard Room (STD)</label>
                        </div>
                        <div style={{ marginTop: "1rem" }}>
                            <input style={{ width: "6%", marginRight: "1.5rem" }} type="text" name="name" />
                            <label>Superior Room (SUP)</label>
                        </div>
                        <div style={{ marginTop: "1rem" }}>
                            <input style={{ width: "6%", marginRight: "1.5rem" }} type="text" name="name" />
                            <label>Duluxe Room (DLX)</label>
                        </div>
                        <div style={{ marginTop: "1rem" }}>
                            <input style={{ width: "6%", marginRight: "1.5rem" }} type="text" name="name" />
                            <label>Suite Room (SUT)</label>
                        </div>
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