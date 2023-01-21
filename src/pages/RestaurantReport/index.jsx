import styles from "./RestaurantReport.module.scss";
import BarChart from "../../comps/BarChart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const { ipcRenderer } = require("electron");

export default function RestaurantReport() {
    const user = ipcRenderer.sendSync("get-user");

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

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

    const [sale, setSale] = useState([]);
    const remain = 12 - sale.length;

    useEffect(() => {
        const token = ipcRenderer.sendSync("get-token");

        const requestOptions = {
            method: "GET",
            headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
        };

        fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/report/restaurant/2023", requestOptions)
            .then((res) =>
                res.json()
            )
            .then(res => setSale(res.data.bill))
            // .then(res => console.log(res))
            .catch((err) => console.log(err))

    }, []);


    const [data, setData] = useState({
        labels: array.map((value) => value.name),
        datasets: [{
            label: "Profitability Revenue",
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

    useEffect(() => {
        if (sale.length > 0) {
            setData(pre => ({ ...pre, datasets: [{ ...pre.datasets[0], data: sale.sort((a, b) => a.month - b.month).map((value) => parseInt(value.price) - 100000).concat(Array(remain).fill(0)) }] }))
        }
    }, [sale])

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 style={{ fontWeight: "normal" }}>RESTAURANT SALES REPORT</h2>
                <Link
                    to="/dashboard"
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
                    <p>Restaurant OOAD</p>
                    <p>{user.fullname}</p>
                    <p>{date}</p>
                </div>
            </div>

            <div style={{display: 'flex'}}>
                <h4 style={{ paddingLeft: "10.5rem", marginTop: "3rem" }}>SALES REPORT </h4>
                <p style={{fontStyle: 'italic', marginTop: "3.4rem", paddingLeft: "0.8rem", color: '#f72323'}}>(* Unit: VND)</p>
            </div>

            <div className={styles.format}>
                <div>
                    <p style={{ marginTop: "6.4rem" }}>Monthly Sales *</p>
                    <p style={{ marginTop: "3rem" }}>Profitability *</p>
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
                            sale.map((value, index) => (
                                <td key={index}>{value.price}</td>
                            ))
                        }
                        {
                            Array(remain).fill(0).map((index) => (
                                <td key={index + 1}>0</td>
                            ))
                        }
                    </tr>

                    <tr>
                        {
                            sale.map((value, index) => (
                                <td key={index}>{parseInt(value.price) - 100000}</td>
                            ))
                        }
                        {
                            Array(remain).fill(0).map((index) => (
                                <td key={index + 1}>0</td>
                            ))
                        }
                    </tr>

                </table>
            </div>

            <div style={{ display: "flex", width: "100%", paddingLeft: "10.5rem", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
                    <div>
                        <h4 style={{ marginTop: "3rem" }}>TOTAL PROFITABILITY *</h4>
                        <p className={styles.elementp}>
                            {
                                sale.reduce((prev, cur) => (parseInt(prev) + (parseInt(cur.price) - 100000)), 0)
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