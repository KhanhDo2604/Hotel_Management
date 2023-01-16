import styles from "./modal.module.scss"
import React from "react";


export default function NoticeModal(props) {
    const modalState = props.toggle;
    const hide = props.hide;

  return (
      <div className={`${styles.container} ${modalState ? styles.active : null}`}>
        <div className={styles.modal}>
            <h4 style={{fontWeight:'500'}}>{props.title}</h4>
            <div className={styles.close} onClick={hide}></div>
            <div className={styles.content}>
                <p>{props.content}</p>
            </div>

            <div className={styles.buttonLayer}>
                <button style={{ marginRight: "0.4rem", background: "#F9D410" }} onClick={props.action}>Confirm</button>
                <button style={{ marginLeft: "0.4rem", background: "#bfbfbf" }} onClick={hide}>Cancle</button>
            </div>
        </div>
    </div>
  );
}
