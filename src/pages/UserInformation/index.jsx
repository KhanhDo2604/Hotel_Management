import { useState } from "react";
import styles from "./UserInformation.module.scss";
import { DatePicker, Form } from "antd";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UserInformation() {
    const location = useLocation();
    const [stateGender, setStateGender] = useState(location.state.userInfo.gender)

    const groupGender = ["Male", "Female"]
    const navigate = useNavigate();

    return (
        <div style={{ height: "98%", position: 'relative' }}>
            <h3 style={{ fontWeight: "bold" }}>User Information</h3>
            <div className={styles.gridContainer}>
                <form action="" className={styles.gridContent}>
                    <div>
                        <label>Name:</label>
                    </div>
                    <div >
                        <input defaultValue={location.state.userInfo.fullname} type="text" name="name" />
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
                                setStateGender(selectedGender)
                            }}>
                            <option value={1}>Male</option>
                            <option value={0}>Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Create In:</label>
                    </div>
                    <div>
                        <DatePicker className={styles.datePicker} format={'DD/MM/YYYY'} />
                    </div>
                    <div>
                        <label>Contact:</label>
                    </div>
                    <div>
                        <input defaultValue={location.state.userInfo.email} type="text" name="name" placeholder="Email" />
                        <input defaultValue={location.state.userInfo.phone} style={{ marginTop: "2rem" }} type="text" name="name" placeholder="Phone Number" />
                    </div>
                </form>
                <div className={styles.format}>
                    <button className={styles.btnConfirm} onClick={() => {
                        navigate("/guests")
                    }}>Confirm</button>
                    <button className={styles.btnCancel} onClick={() => {
                        navigate("/guests")
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}