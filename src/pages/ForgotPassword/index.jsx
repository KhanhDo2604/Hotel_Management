import styles from "./ForgotPassword.module.scss";
import background from '../../assets/scenery.png';
import hotel from '../../assets/hotel.png';
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
export default function ForgotPassword() {
    const [typePassword, setTypePassword] = useState("password")
    const [inputPassword, setInputPassword] = useState("")
    const [typeConfirmPassword, setTypeConfirmPassword] = useState("password")
    const [inputConfirmPassword, setInputConfirmPassword] = useState("")

    const handleChange = () => {
        if (typePassword === "password") {
            setTypePassword("text")
        } else {
            setTypePassword("password")
        }
    }

    const handleChangeType = () => {
        if (typeConfirmPassword === "password") {
            setTypeConfirmPassword("text")
        } else {
            setTypeConfirmPassword("password")
        }
    }
    return (
        <div className={styles.forgotPassword}>
            <div className={styles.left}>
                <img className={styles.image} src={background} />
            </div>
            <div className={styles.right}>
                <img className={styles.image} src={hotel} />
                <h2>WELCOME</h2>
                <form action="" className={styles.form}>
                    <div>
                        <input id="trick1" style={{ fontSize: "2rem" }} className={styles.inputOne} placeholder=" " type="text" name="staffid" required />
                        <label for="trick1" style={{ fontSize: "1.6rem" }} className={styles.labelOne}>STAFFID
                        </label>
                    </div>
                    <div className={styles.password}>
                        <input id="trick2" style={{ fontSize: "2rem" }} className={styles.inputOne} placeholder=" " type={typePassword} value={inputPassword} name="password" required onChange={(e) => { setInputPassword(e.target.value) }} />
                        <label for="trick2" style={{ fontSize: "1.6rem" }} className={styles.labelOne}>NEW PASSWORD
                        </label>
                    </div>
                    <div className={styles.reTypePassword}>
                        <input id="trick3" style={{ fontSize: "2rem" }} className={styles.inputOne} placeholder=" " type={typeConfirmPassword} name={typePassword} value={inputConfirmPassword} required onChange={(e) => { setInputConfirmPassword(e.target.value) }} />
                        <label for="trick3" style={{ fontSize: "1.6rem" }} className={styles.labelOne}>RETYPE PASSWORD
                        </label>
                    </div>
                </form>
                <button onClick={handleChange}>
                    {
                        typePassword === "password" ? (
                            <FontAwesomeIcon icon={faEyeSlash} style={{ position: "absolute", right: "7.5%", top: "61%" }} />

                        ) :
                            (
                                <FontAwesomeIcon icon={faEye} style={{ position: "absolute", right: "7.5%", top: "61%" }} />

                            )
                    }
                </button>

                <button onClick={handleChangeType}>
                    {
                        typeConfirmPassword === "password" ? (
                            <FontAwesomeIcon icon={faEyeSlash} style={{ position: "absolute", right: "7.5%", top: "71%" }} />

                        ) :
                            (
                                <FontAwesomeIcon icon={faEye} style={{ position: "absolute", right: "7.5%", top: "71%" }} />

                            )
                    }
                </button>
                <button className={styles.btnConfirm}>CONFIRM</button>
            </div>
        </div>
    )
}

