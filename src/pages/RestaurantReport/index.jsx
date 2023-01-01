import styles from "./RestaurantReport.module.scss";
import BarChart from "../../comps/BarChart";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RestaurantReport() {
    const array = [
        {
            id: 1,
            name: "JAN",
            nor: 100,
            in: 100,
        },
        {
            id: 2,
            name: "FEB",
            nor: 100,
            in: 100,
        },
        {
            id: 3,
            name: "MAR",
            nor: 100,
            in: 100,
        },
        {
            id: 4,
            name: "APR",
            nor: 100,
            in: 100,
        },
        {
            id: 5,
            name: "MAY",
            nor: 100,
            in: 100,
        },
        {
            id: 6,
            name: "JUN",
            nor: 100,
            in: 100,
        },
        {
            id: 7,
            name: "JUL",
            nor: 100,
            in: 100,
        },
        {
            id: 8,
            name: "AUG",
            nor: 100,
            in: 100,
        },
        {
            id: 9,
            name: "SEP",
            nor: 100,
            in: 70,
        },
        {
            id: 10,
            name: "OCT",
            nor: 100,
            in: 80,
        },
        {
            id: 11,
            name: "NOV",
            nor: 100,
            in: 90,
        },
        {
            id: 12,
            name: "DEC",
            nor: 100,
            in: 100,
        }
    ]
    const [data, setData] = useState({
        labels: array.map((data) => data.name),
        datasets: [{
            label: "Profitability Revenue",
            data: array.map((data) => data.in),
            backgroundColor: [
                "#FFFF66",
                "#FFFF33",
                "#FFFF00",
                "#FFCC66",
                "#FFCC33",
                "#FFCC00",
                "#FF9966",
                "#FF9933",
                "#FF9900",
                "#FF6633",
                "#FF6600",
                "#FF3300"
            ]
        }]
    })

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 style={{ fontWeight: "normal" }}>RESTAURANT SALES REPORT</h2>
                <Link
                    to="/"
                >
                    <button className={styles.btnConvert}>Hotel</button>
                </Link>
            </div>
            <div className={styles.gridGeneral}>
                <div className={styles.gridContainer}>
                    <h5>RESTAURANT NAME</h5>
                    <h5>MANAGER</h5>
                    <h5>DATE OF LAST UPDATE</h5>
                </div>
                <div className={styles.gridItem}>
                    <p>Restaurant Anton</p>
                    <p>Nara W.Glenn</p>
                    <p>27/03/2023</p>
                </div>
            </div>
            <h4 style={{ paddingLeft: "10.5rem", marginTop: "3rem" }}>SALES REPORT</h4>
            <div className={styles.format}>
                <div>
                    <p style={{ marginTop: "6.4rem" }}>Monthly Sales</p>
                    <p style={{ marginTop: "3rem" }}>Profitability</p>
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
                                <td key={index}>${value.nor}</td>
                            ))
                        }
                    </tr>
                    <tr>
                        {
                            array.map((value, index) => (
                                <td key={index}>${value.in}</td>
                            ))
                        }
                    </tr>

                </table>
            </div>

            <div style={{ display: "flex", width: "100%", paddingLeft: "10.5rem", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                    <div>
                        <h4 style={{ marginTop: "3rem" }}>TOTAL PROFITABILITY</h4>
                        <p className={styles.elementp}>
                            {
                                "$" + array.reduce((prev, cur) => (prev + cur.in), 0)
                            }
                        </p>
                    </div>

                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "space-between" }}>
                    <h4 style={{ marginLeft: "10.8rem", marginTop: "3rem", textAlign: "center" }}>PROFITABILITY REVENUE</h4>
                    <div style={{ width: "100%" }} className={styles.formatCanvas}>
                        <BarChart chartData={data} />
                    </div>
                </div>
            </div>

        </>
    );

}