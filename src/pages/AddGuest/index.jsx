import styles from "./AddGuest.module.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const { ipcRenderer } = require("electron");
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddGuest() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [identification, setIdentification] = useState("")
    const [gender, setGender] = useState("Male")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const addGuest = () => {
        if (name === "" || gender === "" || email === "" || phone === "") {
            toast.warn("Please fill in information")
        }
        else {
            const token = ipcRenderer.sendSync("get-token");
            const userId = ipcRenderer.sendSync("get-user").id;

            const requestOptions = {
                method: "POST",
                headers: { "Accept": "application/json", 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },
                body: JSON.stringify({
                    id: identification,
                    fullname: name,
                    gender: gender,
                    phone: phone,
                    email: email
                })
            };
            fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/guest", requestOptions
            )
                .then(res => res.json())
                // .then(navigate("/guests"))
                .then(() => {
                    window.location.replace("/guests")
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div style={{ height: "98%", position: 'relative' }}>
            <ToastContainer />
            <h3 style={{ fontWeight: "bold" }}>Add Guest</h3>
            <div className={styles.gridContainer}>
                <form action="" className={styles.gridContent}>
                    <div>
                        <label>Identification:</label>
                    </div>
                    <div >
                        <input value={identification} onChange={(e) => setIdentification(e.target.value)} type="text" name="name" />
                    </div>
                    <div>
                        <label>Name:</label>
                    </div>
                    <div >
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" />
                    </div>
                    <div>
                        <label>Gender:</label>
                    </div>
                    <div>
                        <select
                            style={{ padding: "0.8rem", fontWeight: "bold" }}
                            onChange={
                                (e) => setGender(e.target.value)
                            }
                        >
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
                    <button className={styles.btnConfirm} onClick={addGuest}>Confirm</button>
                    <button className={styles.btnCancel} onClick={() => {
                        navigate("/guests")
                    }}>Cancel</button>
                </div>
            </div>
        </div>
    )
}