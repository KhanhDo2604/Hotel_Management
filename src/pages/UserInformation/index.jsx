import { useState } from "react";
import styles from "./UserInformation.module.scss";
import { DatePicker } from "antd";

export default function UserInformation() {
    const [stateGender, setStateGender] = useState("")
    const dateFormat = "DD/MM/YYYY";

    return (
        <>
            <h3 style={{ fontWeight: "bold" }}>User Information</h3>
            <div className={styles.gridContainer}>
                <form action="" className={styles.gridContent}>
                    <div>
                        <label>Name:</label>
                    </div>
                    <div >
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Gender:</label>
                    </div>
                    <div>
                        <select
                            style={{ padding: "0.8rem", fontWeight: "bold" }}
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
                        <label>Create In:</label>
                    </div>
                    <div>
                        <DatePicker
                            className={styles.datePicker}
                            format={dateFormat}
                        />
                    </div>
                    <div>
                        <label>Contact:</label>
                    </div>
                    <div>
                        <input type="text" name="name" placeholder="Email" />
                        <input style={{ marginTop: "2rem" }} type="text" name="name" placeholder="Phone Number" />
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