import styles from "./DashBoard.module.scss";
import BarChart from "../../comps/BarChart";
import { useState } from "react";
export default function DashBoard() {
    const array = [
        {
            id: 1,
            name: "JAN",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 2,
            name: "FEB",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 3,
            name: "MAR",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 4,
            name: "APR",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 5,
            name: "MAY",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 6,
            name: "JUN",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 7,
            name: "JUL",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 8,
            name: "AUG",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 9,
            name: "SEP",
            nor: 100,
            in: 100,
            tr: 120
        },
        {
            id: 10,
            name: "OCT",
            nor: 100,
            in: 100,
            tr: 10
        },
        {
            id: 11,
            name: "NOV",
            nor: 100,
            in: 100,
            tr: 80
        },
        {
            id: 12,
            name: "DEC",
            nor: 100,
            in: 100,
            tr: 50
        }
    ]
    const [data, setData] = useState({
        labels: array.map((data) => data.name),
        datasets: [{
            label: "Monthly Revenue",
            data: array.map((data) => data.tr),
        }]
    })
    return (
        <>
            <h2 style={{ fontWeight: "normal" }}>HOTEL SALES REPORT</h2>
            <div className={styles.gridGeneral}>
                <div className={styles.gridContainer}>
                    <h5>HOTEL NAME</h5>
                    <h5>MANAGER</h5>
                    <h5>DATE OF LAST UPDATE</h5>
                </div>
                <div className={styles.gridItem}>
                    <p>Hotel Anton</p>
                    <p>Nara W.Glenn</p>
                    <p>27/03/2023</p>
                </div>
            </div>
            <h4 style={{ paddingLeft: "10.5rem", marginTop: "3rem" }}>SALES REPORT</h4>
            <div className={styles.format}>
                <div>
                    <p style={{ marginTop: "6.2rem" }}>Number of Room</p>
                    <p style={{ marginTop: "2rem" }}>Invoice Number</p>
                    <p style={{ marginTop: "2.4rem" }}>Total Revenue</p>
                </div>
                <table>
                    <tr>
                        {
                            array.map((value, index) => (
                                <td style={{ fontWeight: "bold" }} key={index}>{value.name}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            array.map((value, index) => (
                                <td key={index}>{value.nor}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            array.map((value, index) => (
                                <td key={index}>{value.in}</td>
                            ))
                        }

                    </tr>
                    <tr>
                        {
                            array.map((value, index) => (
                                <td key={index}>${value.tr}</td>
                            ))
                        }

                    </tr>
                </table>
            </div>

            <div style={{ display: "flex", width: "100%", paddingLeft: "10.5rem" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                    <div>
                        <h4 style={{ marginTop: "3rem" }}>TOTAL REVENUE</h4>
                        <p className={styles.elementp}>
                            {
                                "$" + array.reduce((prev, cur) => (prev + cur.tr), 0)
                            }
                        </p>
                    </div>
                    <div>
                        <h4 style={{ marginTop: "3rem" }}>TOTAL REVENUE</h4>
                        <p className={styles.elementp}>
                            {
                                "$" + array.reduce((prev, cur) => (prev + cur.tr), 0)
                            }
                        </p>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-between" }}>
                    <h4 style={{ marginLeft: "10.8rem", marginTop: "3rem", textAlign: "center" }}>MONTHLY REVENUE</h4>
                    <div style={{ width: "100%" }} className={styles.formatCanvas}>
                        <BarChart chartData={data} />
                    </div>
                </div>
            </div>

        </>
    );
}