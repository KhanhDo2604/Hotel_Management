import { useState } from "react"
import styles from "./UpdateRooms.module.scss"
export default function UpdateRooms() {

    const [update, setUpdate] = useState(false)
    return (
        <>
            <div className={styles.roomRight}>
                <div>
                    {
                        !update ?
                            <input type="text" />
                            :
                            <input type="text" disabled />
                    }
                </div>
                <div className={styles.btnClick}>
                    <button className={styles.btnLeft} onClick={() => setUpdate(!update)}>
                        {!update ? "Update" : "Save"}
                    </button>
                </div>
            </div>

        </>
    )
}

