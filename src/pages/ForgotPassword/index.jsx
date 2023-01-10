import styles from "./ForgotPassword.module.scss";
import background from '../../assets/scenery.png';
import hotel from '../../assets/hotel.png';

export default function ForgotPassword() {
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
                        <input style={{fontSize:"2rem"}} className={styles.inputOne} placeholder=" " type="text" name="staffid" required />
                        <label style={{fontSize:"1.6rem"}} className={styles.labelOne}>STAFFID
                        </label>
                    </div>
                    <div className={styles.password}>
                        <input style={{fontSize:"2rem"}} className={styles.inputOne} placeholder=" " type="password" name="password" required />
                        <label  style={{fontSize:"1.6rem"}} className={styles.labelOne}>NEW PASSWORD
                        </label>
                    </div>
                    <div className={styles.reTypePassword}>
                        <input style={{fontSize:"2rem"}} className={styles.inputOne} placeholder=" " type="password" name="password" required />
                        <label  style={{fontSize:"1.6rem"}} className={styles.labelOne}>RETYPE PASSWORD
                        </label>
                    </div>
                </form>
                <button className={styles.btnConfirm}>CONFIRM</button>
            </div>
        </div>
    )
}

