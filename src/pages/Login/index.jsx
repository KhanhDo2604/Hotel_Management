import styles from "./Login.module.scss";
import background from '../../assets/scenery.png';
import hotel from '../../assets/hotel.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { ipcRenderer } = require("electron");

export default function Login() {
    const [checkEmail, setCheckEmail] = useState("");
    const [checkPass, setCheckPass] = useState("");
    const navigate = useNavigate();

    const authenication = () => {
        const formData = new FormData();

        formData.append("email", checkEmail);
        formData.append("password", checkPass);

        const requestOptions = {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: formData
        };

        fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/login", requestOptions)
        .then(response => response.json())
        .then(res => {
            if(res.user) {
                ipcRenderer.send("save-token", res.token, res.user)
                typeof(res) === "object" ? navigateFilter(res.user.role) : res;
            }
            else {
                toast.error("Login failed!");
            }
        })
        .catch((err) => console.log(err));
    };

    const navigateFilter = (role) => {
        switch (role) {
            case "r":
                navigate("/tables");
                break;
            case "h":
                navigate("/bookinglist");
                break;
            default:
                navigate("/dashboard");
                break;
        }
    }

    return (
        <div className={styles.login}>
            <div className={styles.left}>
                <img className={styles.image} src={background} />
            </div>
            <div className={styles.right}>
                <img className={styles.image} src={hotel} />
                <h2>WELCOME</h2>
                <form action="" className={styles.form}>
                    <div>
                        <input style={{fontSize:"2rem"}} className={styles.inputOne} placeholder=" " type="text" name="staffid" required onChange={(e) => setCheckEmail(e.target.value)}/>
                        <label style={{fontSize:"1.6rem"}} className={styles.labelOne}>EMAIL
                        </label>
                    </div>
                    <div className={styles.password}>
                        <input style={{fontSize:"2rem"}} className={styles.inputOne} placeholder=" " type="password" name="password" required onChange={(e) => setCheckPass(e.target.value)}/>
                        <label  style={{fontSize:"1.6rem"}} className={styles.labelOne}>PASSWORD
                        </label>
                    </div>
                </form>
                <div>
                    <a className={styles.forgotPassword} href="/forgotPassword">FORGOT PASSWORD?</a>
                </div>
                <div>
                    <button className={styles.btn} onClick={authenication}>LOGIN</button>
                    <ToastContainer/>
                </div>
            </div>
        </div>
    );
}