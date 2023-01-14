import styles from "./RestaurantReport.module.scss";
import BarChart from "../../comps/BarChart";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const { ipcRenderer } = require("electron");

export default function RestaurantReport() {
    const user = ipcRenderer.sendSync("get-user");

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    const array = [
        {
            name: "JAN",
            in: 100,
        },
        {
            name: "FEB",
            in: 100,
        },
        {
            name: "MAR",
            in: 100,
        },
        {
            name: "APR",
            in: 100,
        },
        {
            name: "MAY",
            in: 100,
        },
        {
            name: "JUN",
            in: 100,
        },
        {
            name: "JUL",
            in: 100,
        },
        {
            name: "AUG",
            in: 100,
        },
        {
            name: "SEP",
            in: 70,
        },
        {
            name: "OCT",
            in: 80,
        },
        {
            name: "NOV",
            in: 90,
        },
        {
            name: "DEC",
            in: 100,
        }
    ]

    const [sale, setSale] = useState([]);

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
        //   .then(res => console.log(res))
          .catch((err) => console.log(err))

      }, []);

    const remain = 12 - sale.length;
    const [data, setData] = useState({
        labels: array.map((data) => data.name),
        datasets: [{
            label: "Profitability Revenue",
            // data: array.map((data) => data.in),
            data: sale.sort((a, b) => a.month - b.month).map((value) => parseInt(value.price) - 100000).concat(Array(remain).fill(0)),
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

    console.log(array.map((data) => data.in))
    console.log(sale.sort((a, b) => a.month - b.month).map((value) => parseInt(value.price) - 100000).concat(Array(remain).fill(0)))

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
                        <h4 style={{ marginTop: "3rem" }}>TOTAL PROFITABILITY</h4>
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