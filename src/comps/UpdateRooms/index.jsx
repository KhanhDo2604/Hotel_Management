import { useState } from "react"
import styles from "./UpdateRooms.module.scss"
const { ipcRenderer } = require("electron");

export default function UpdateRooms({ price, callback ,id}) {
    const [update,setUpdate] = useState(false)
    const saveData = () =>{
        const token = ipcRenderer.sendSync("get-token");
        const requestOptions = {
            method: "PUT",
            headers: { "Accept": "application/json",'Content-Type' : 'application/json','Authorization': 'Bearer ' + token },
            body :JSON.stringify({
                price:price
            })
        };
        fetch(`https://hammerhead-app-7qhnq.ondigitalocean.app/api/roomprice/${id}`, requestOptions)
            .then((res) => res.json())
            .then((res) => console.log(res) )
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className={styles.roomRight}>
                <div>
                    {
                        !update ?
                            <input type="text" disabled value={price} />
                            :
                            <input type="text" value={price} onChange={(e) => callback(e.target.value)} />
                    }
                </div>
                <div className={styles.btnClick}>
                    <button className={styles.btnLeft} onClick={() => {setUpdate(!update);update && saveData()}}>
                        {!update ? "Update" : "Save"}
                    </button>
                </div>
            </div>

        </>
    )
}

