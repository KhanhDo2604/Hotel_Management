import styles from "./Login.module.scss";
import background from '../../assets/scenery.png';
import hotel from '../../assets/hotel.png';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
                ipcRenderer.send("save-token", res.token,res.user)
                typeof(res) === "object" ? navigateFilter(res.user.role) : res;
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
                navigate("/");
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
                        <input type="text" name="staffid" required onChange={(e) => setCheckEmail(e.target.value)}/>
                        <label>EMAIL
                        </label>
                    </div>
                    <div className={styles.password}>
                        <input type="password" name="password" required onChange={(e) => setCheckPass(e.target.value)}/>
                        <label>PASSWORD
                        </label>
                    </div>
                </form>
                <div>
                    <a className={styles.forgotPassword} href="/forgotPassword">FORGOT PASSWORD?</a>
                </div>
                <div>
                    <button className={styles.btn} onClick={authenication}>LOGIN</button>
                </div>
            </div>
        </div>
    );
}