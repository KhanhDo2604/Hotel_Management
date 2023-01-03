import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./PlaceToBook.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function PlaceToBook() {
  const std = [
    { number: 11, status: 0 },
    { number: 15, status: 0 },
    { number: 24, status: 0 },
    { number: 27, status: 0 },
    { number: 36, status: 0 },
    { number: 38, status: 0 },
    { number: 43, status: 0 },
    { number: 48, status: 0 },
  ];
  const sup = [
    { number: 13, status: 0 },
    { number: 17, status: 0 },
    { number: 22, status: 0 },
    { number: 25, status: 0 },
    { number: 33, status: 0 },
    { number: 36, status: 0 },
    { number: 41, status: 0 },
    { number: 44, status: 0 },
  ];
  const dlx = [
    { number: 12, status: 0 },
    { number: 14, status: 0 },
    { number: 21, status: 0 },
    { number: 26, status: 0 },
    { number: 32, status: 0 },
    { number: 37, status: 0 },
    { number: 42, status: 0 },
    { number: 47, status: 0 },
  ];
  const sut = [
    { number: 16, status: 0 },
    { number: 18, status: 0 },
    { number: 23, status: 0 },
    { number: 28, status: 0 },
    { number: 31, status: 0 },
    { number: 34, status: 0 },
    { number: 45, status: 0 },
    { number: 46, status: 0 },
  ];

  const [stdStatus, setStdStatus] = useState(std);
  const [supStatus, setSupStatus] = useState(sup);
  const [dlxStatus, setDlxStatus] = useState(dlx);
  const [sutStatus, setSutStatus] = useState(sut);
  const [tableStatus, setTableStatus] = useState(stdStatus);

  var temp = [];

  return (
    <div className="w3-container">
      <div className={styles.gridContainer}>
        <div>
          <div className={styles.searchBar}>
            <input type="text" id={styles.mySearch} placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              style={{ marginRight: "1.6rem", fill: "#F9D410" }}
            >
              <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
            </svg>
          </div>
        </div>
        <div>
          <Link
            to="/formReservation"
            state={{
              table: tableStatus.reduce((prev, cur, index) => {
                if (cur === 1) {
                  temp = [...prev, index + 1];
                  console.log(temp);
                  return [...prev, index + 1];
                } else return prev;
              }, []),
            }}
            className={temp.length !== 0 ? null : styles.unActive}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              style={{ marginRight: "0.8rem" }}
            >
              <path d="m17.275 20.25 3.475-3.45-1.05-1.05-2.425 2.375-.975-.975-1.05 1.075ZM6 9h12V7H6Zm12 14q-2.075 0-3.537-1.462Q13 20.075 13 18q0-2.075 1.463-3.538Q15.925 13 18 13t3.538 1.462Q23 15.925 23 18q0 2.075-1.462 3.538Q20.075 23 18 23ZM3 22V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v6.675q-.475-.225-.975-.375T19 11.075V5H5v14.05h6.075q.125.775.388 1.475.262.7.687 1.325L12 22l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5Zm3-5h5.075q.075-.525.225-1.025.15-.5.375-.975H6Zm0-4h7.1q.95-.925 2.212-1.463Q16.575 11 18 11H6Zm-1 6.05V5v14.05Z" />
            </svg>
            <p>Book rooms</p>
          </Link>
        </div>
      </div>

      <div>
        <Tabs>
          <TabList>
            <Tab>
              <h6 style={{fontWeight: '700'}}>Standard Room (STD)</h6>
            </Tab>
            <Tab>
              <h6 style={{fontWeight: '700'}}>Superior Room (SUP)</h6>
            </Tab>
            <Tab>
              <h6 style={{fontWeight: '700'}}>Deluxe Room (DLX)</h6>
            </Tab>
            <Tab>
              <h6 style={{fontWeight: '700'}}>Suite Room (SUT)</h6>
            </Tab>
          </TabList>

          <TabPanel>
            <div className={styles.tableList}>
              {std.map((value, index) => (
                <div
                  key={index}
                  className={
                    value.status === 1
                      ? styles.active
                      : value.status === 2
                      ? styles.disable
                      : styles.tableItem
                  }
                  onClick={() => {
                    // console.log(value.status)
                    if (value.status !== 2) {
                      setStdStatus((previous) => {
                        // console.log(value.status === 0)
                        previous[index] = value.status === 1 ? 0 : 1;
                        console.log(previous[index]);
                        return [...previous];
                      });
                      setTableStatus(stdStatus);
                    }
                  }}
                >
                  <h4>Room {value.number}</h4>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.tableList}>
              {sup.map((value, index) => (
                <div
                  key={index}
                  className={
                    value.status === 1
                      ? styles.active
                      : value.status === 2
                      ? styles.disable
                      : styles.tableItem
                  }
                  onClick={() => {
                    if (value.status !== 2) {
                      setSupStatus((previous) => {
                        previous[index] = value.status === 1 ? 0 : 1;
                        return [...previous];
                      });
                      setTableStatus(supStatus);
                    }
                  }}
                >
                  <h4>Room {value.number}</h4>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.tableList}>
              {dlx.map((value, index) => (
                <div
                  key={index}
                  className={
                    value.status === 1
                      ? styles.active
                      : value.status === 2
                      ? styles.disable
                      : styles.tableItem
                  }
                  onClick={() => {
                    if (value.status !== 2) {
                      setDlxStatus((previous) => {
                        previous[index] = value.status === 1 ? 0 : 1;
                        return [...previous];
                      });
                      setTableStatus(dlxStatus);
                    }
                  }}
                >
                  <h4>Room {value.number}</h4>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.tableList}>
              {sut.map((value, index) => (
                <div
                  key={index}
                  className={
                    value.status === 1
                      ? styles.active
                      : value.status === 2
                      ? styles.disable
                      : styles.tableItem
                  }
                  onClick={() => {
                    if (value.status !== 2) {
                      setSutStatus((previous) => {
                        previous[index] = value.status === 1 ? 0 : 1;
                        return [...previous];
                      });
                      setTableStatus(sutStatus);
                    }
                  }}
                >
                  <h4>Room {value.number}</h4>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
