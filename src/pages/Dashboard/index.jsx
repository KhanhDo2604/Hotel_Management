import styles from "./DashBoard.module.scss";
import BarChart from "../../comps/BarChart";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const { ipcRenderer } = require("electron");

export default function DashBoard() {
    const array = [
        {
            id: 1,
            name: "JAN",
            nor: 100,
            in: 100,
            tr: 30
        },
        {
            id: 2,
            name: "FEB",
            nor: 100,
            in: 100,
            tr: 20
        },
        {
            id: 3,
            name: "MAR",
            nor: 100,
            in: 100,
            tr: 90
        },
        {
            id: 4,
            name: "APR",
            nor: 100,
            in: 100,
            tr: 2
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

    const user = ipcRenderer.sendSync("get-user");

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const [rooms, setRooms] = useState([]);
    const [bill, setBill] = useState([])
    const remain = 12 - rooms.length;
    useEffect(() => {
        const token = ipcRenderer.sendSync("get-token");

        const requestOptions = {
            method: "GET",
            headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
        };

        fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/report/hotel/2023", requestOptions)
            .then((res) =>
                res.json()
            )
            .then(res => {
                setRooms(res.data.rooms)
                setBill(res.data.bill)
            })
            // .then(res => console.log(res))
            .catch((err) => console.log(err))

    }, []);

    const [data, setData] = useState({
        labels: array.map((data) => data.name),
        datasets: [{
            label: "Monthly Revenue",
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
        if (bill.length > 0) {
            setData(pre => ({ ...pre, datasets: [{ ...pre.datasets[0], data: bill.sort((a, b) => a.month - b.month).map((value) => parseInt(value.price) - 100000).concat(Array(remain).fill(0)) }] }))
        }
    }, [bill])
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h2 style={{ fontWeight: "normal" }}>HOTEL SALES REPORT</h2>
                <Link
                    to="/restaurantReport"
                >
                    <button className={styles.btnConvert}>Restaurant</button>
                </Link>
            </div>
            <div className={styles.gridGeneral}>
                <div className={styles.gridContainer}>
                    <h5>HOTEL NAME</h5>
                    <h5>MANAGER</h5>
                    <h5>DATE OF LAST UPDATE</h5>
                </div>
                <div className={styles.gridItem}>
                    <p>Hotel OOAD</p>
                    <p>{user.fullname}</p>
                    <p>{date}</p>
                </div>
            </div>

            <h4 style={{ paddingLeft: "10.5rem", marginTop: "2rem" }}>SALES REPORT</h4>
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
                            rooms.map((value, index) => (
                                <td key={index}>{value.count}</td>
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
                            bill.map((value, index) => (
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
                            bill.map((value, index) => (
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
                        <h4 style={{ marginTop: "3rem" }}>TOTAL REVENUE</h4>
                        <p className={styles.elementp}>
                            {
                                bill.reduce((prev, cur) => (parseInt(prev) + (parseInt(cur.price) - 100000)), 0)
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