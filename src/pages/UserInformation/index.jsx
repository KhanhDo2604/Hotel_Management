import { useState } from "react";
import styles from "./UserInformation.module.scss";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const { ipcRenderer } = require("electron");

export default function UserInformation() {
    const location = useLocation();
    const [fullname, setFullName] = useState(location.state.userInfo.fullname)
    const [gender, setGender] = useState(location.state.userInfo.gender)
    const [email, setEmail] = useState(location.state.userInfo.email)
    const [phone, setPhone] = useState(location.state.userInfo.phone)

    const navigate = useNavigate();

    //PUT
    const handleUpdate = () => {

        const token = ipcRenderer.sendSync("get-token");
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Accept": "application/json", 'Authorization': 'Bearer ' + token },
            body: JSON.stringify({
                fullname: fullname,
                gender: gender,
                email: email,
                phone: phone
            }),
        };
        fetch(
            `https://hammerhead-app-7qhnq.ondigitalocean.app/api/guest/${location.state.userInfo.id}`,
            requestOptions
        )
            .then(async (response) => {
                const data = await response.json();

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }
            })
            .then(() => {
                window.location.replace("/guests")
            })
            .catch((error) => {
                console.error("There was an error!", error);
            });

    }

    return (
        <div style={{ height: "98%", position: 'relative' }}>
            <h3 style={{ fontWeight: "bold" }}>User Information</h3>
            <div className={styles.gridContainer}>
                <form action="" className={styles.gridContent}>
                    <div>
                        <label>Name:</label>
                    </div>
                    <div >
                        <input value={fullname} onChange={(e) => setFullName(e.target.value)} type="text" name="name" />
                    </div>
                    <div>
                        <label>Gender:</label>
                    </div>
                    <div>
                        <select
                            style={{ padding: "0.8rem", fontWeight: "bold" }}
                            value={gender}
                            onChange={(e) => {
                                setGender(e.target.value)
                            }}>
                            <option value={1}>Male</option>
                            <option value={0}>Female</option>
                        </select>
                    </div>
                    <div>
                        <label>Contact:</label>
                    </div>
                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" name="name" placeholder="Email" />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} style={{ marginTop: "2rem" }} type="text" name="name" placeholder="Phone Number" />
                    </div>
                </form>
                <div className={styles.format}>
                    <button className={styles.btnConfirm} onClick={handleUpdate}>Confirm</button>
                    <button className={styles.btnCancel} onClick={()=> navigate("/guests")}>Cancel</button>
                </div>
            </div>
        </div>
    )
}