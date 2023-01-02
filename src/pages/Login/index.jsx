import styles from "./Login.module.scss";
// import background from '../../assets/login.webp';
import background from '../../assets/scenery.png';
import hotel from '../../assets/hotel.png';


export default function Login() {
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
                        <input type="text" name="staffid" required />
                        <label>STAFFID
                        </label>
                    </div>
                    <div className={styles.password}>
                        <input type="password" name="password" required />
                        <label>PASSWORD
                        </label>
                    </div>
                </form>
                <div>
                    <a className={styles.forgotPassword} href="/forgotPassword">FORGOT PASSWORD?</a>
                </div>
                <div>
                    <button className={styles.btn}>LOGIN</button>
                </div>
            </div>
        </div>
    );
}