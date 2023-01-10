import styles from "./RoomList.module.scss";
import standard from '../../assets/StandardRoom.jpg';
import superior from '../../assets/SuperiorRoom.jpg';
import dulexe from '../../assets/DulexeRoom.jpg';
import suite from '../../assets/SuiteRoom.jpg';
import sofa from '../../assets/sofaBed.png';
import balcony from '../../assets/balcony.png';
import ac from '../../assets/ac.png';
import single from '../../assets/singleBed.png';
import twin from '../../assets/doubleBed.png';
import wifi from '../../assets/wifi.png';
import family from '../../assets/family.png';
import couple from '../../assets/couple.png';
import UpdateRooms from "../../comps/UpdateRooms";
import { useEffect, useState } from "react";
const { ipcRenderer } = require("electron");

export default function RoomList() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const token = ipcRenderer.sendSync("get-token");
        const requestOptions = {
            method: "GET",
            headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
        };

        fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/roomprice", requestOptions)
            .then((res) => res.json())
            .then((res) => {
                setData(res.reduce((pre, cur) => (
                  {
                    ...pre,[cur.id]:cur.price
                  }
            ), {}))
            })
            .catch((err) => console.log(err));
    }, []);
    const roomList = [
        {
            id: "std",
            img: standard,
            name: "Standard Room (STD)",
            detailOne: {
                imgBed: single,
                nameBed: "2 single bed"
            },
            detailTwo: {
                imgTwin: twin,
                typeTwin: "2 twin bed"
            },
            detailThree: {
                imgWifi: wifi,
                typeWifi: "Free wifi"
            },
            detailFour: {
                imgAc: ac,
                typeAc: "AC"
            },

            detailFive: {
                imgFamily: family,
                typeFamily: "Family Room"
            },

            detailSix: {
                imgCouple: couple,
                typeCouple: "Couple Room"
            },
        },
        {
            id: "sup",
            img: superior,
            name: "Superior Room (SUP)",
            detailOne: {
                imgBed: single,
                nameBed: "2 single bed"
            },
            detailTwo: {
                imgTwin: twin,
                typeTwin: "1 twin bed"
            },
            detailThree: {
                imgWifi: wifi,
                typeWifi: "Free wifi"
            },
            detailFour: {
                imgAc: ac,
                typeAc: "AC"
            },
            detailFive: {
                imgFamily: family,
                typeFamily: "Family Room"
            },

            detailSix: {
                imgCouple: couple,
                typeCouple: "Couple Room"
            },
        },
        {
            id: "dlx",
            img: dulexe,
            name: "Deluxe Room (DLX)",
            detailOne: {
                sofaBed: sofa,
                typeSofa: "1 sofa bed"
            },
            detailTwo: {
                imgTwin: twin,
                typeTwin: "1 twin bed"
            },
            detailThree: {
                imgWifi: wifi,
                typeWifi: "Free wifi"
            },
            detailFour: {
                imgAc: ac,
                typeAc: "AC"
            },
            detailFive: {
                imgFamily: family,
                typeFamily: "Family Room"
            },

            detailSix: {
                imgCouple: couple,
                typeCouple: "Couple Room"
            },
        },
        {
            id: "sui",
            img: suite,
            name: "Suite Room (SUT)",
            detailOne: {
                queenBed: single,
                typeBed: "1 queen bed"
            },
            detailTwo: {
                imgBalcony: balcony,
                typeBalcony: "balcony"
            },
            detailThree: {
                imgWifi: wifi,
                typeWifi: "Free wifi"
            },
            detailFour: {
                imgAc: ac,
                typeAc: "AC"
            },
            detailFive: {
                imgFamily: family,
                typeFamily: "Family Room"
            },

            detailSix: {
                imgCouple: couple,
                typeCouple: "Couple Room"
            },
        }
    ]

    return (
        <>
            {
                roomList.map((value, index) => (
                    <div className={styles.roomList} key={index} style={{ margin: '1.2rem 0' }}>
                        <img className={styles.standard} src={value.img} />
                        <div className={styles.roomMiddle}>
                            <p style={{ fontWeight: "bold", fontSize: "2.2rem" }}>{value.name}</p>
                            <div style={{ display: "flex", marginTop: "0.8rem" }}>
                                {
                                    index === 0 ? (
                                        <>
                                            <img style={{ height: "24px" }} src={value.detailOne.imgBed} />
                                            <p className={styles.singleBed}>{value.detailOne.nameBed}</p>
                                        </>
                                    ) : index === 1 ? (
                                        <>
                                            <img style={{ height: "24px" }} src={value.detailOne.imgBed} />
                                            <p className={styles.singleBed}>{value.detailOne.nameBed}</p>
                                        </>
                                    ) : index === 2 ? (
                                        <>
                                            <img style={{ height: "24px" }} src={value.detailOne.sofaBed} />
                                            <p className={styles.singleBed}>{value.detailOne.typeSofa}</p>
                                        </>
                                    ) : (
                                        <>
                                            <img style={{ height: "24px" }} src={value.detailOne.queenBed} />
                                            <p className={styles.singleBed}>{value.detailOne.typeBed}</p>
                                        </>
                                    )
                                }
                                {
                                    index === 0 ? (
                                        <>
                                            <img style={{ height: "24px", marginLeft: "0.4rem" }} src={value.detailTwo.imgTwin} />
                                            <p className={styles.singleBed}>{value.detailTwo.typeTwin}</p>
                                        </>
                                    ) : index === 1 ? (
                                        <>
                                            <img style={{ height: "24px", marginLeft: "0.4rem" }} src={value.detailTwo.imgTwin} />
                                            <p className={styles.singleBed}>{value.detailTwo.typeTwin}</p>
                                        </>
                                    ) : index === 2 ? (
                                        <>
                                            <img style={{ height: "24px", marginLeft: "1.6rem" }} src={value.detailTwo.imgTwin} />
                                            <p className={styles.singleBed}>{value.detailTwo.typeTwin}</p>
                                        </>
                                    ) : (
                                        <>
                                            <img style={{ height: "24px", marginLeft: "0.4rem" }} src={value.detailTwo.imgBalcony} />
                                            <p className={styles.singleBed}>{value.detailTwo.typeBalcony}</p>
                                        </>
                                    )
                                }
                            </div>
                            <div style={{ display: "flex" }}>
                                <img style={{ height: "24px" }} src={value.detailThree.imgWifi} />
                                <p style={{ marginLeft: "0.4rem" }}>{value.detailThree.typeWifi}</p>
                                <img style={{ height: "24px", marginLeft: "6.2rem" }} src={value.detailFour.imgAc} />
                                <p style={{ marginLeft: "0.4rem" }}>{value.detailFour.typeAc}</p>
                            </div>
                            <div style={{ display: "flex" }}>
                                <img style={{ height: "24px" }} src={value.detailFive.imgFamily} />
                                <p style={{ marginLeft: "0.4rem" }}>{value.detailFive.typeFamily}</p>
                                {
                                    index === 0 ? (
                                        <>
                                            <img style={{ height: "24px", marginLeft: "2.8rem" }} src={value.detailSix.imgCouple} />
                                            <p style={{ marginLeft: "0.4rem" }}>{value.detailSix.typeCouple}</p>
                                        </>
                                    ) : index === 1 ? (
                                        <div></div>
                                    ) : index === 2
                                        ? (
                                            <>
                                                <img style={{ height: "24px", marginLeft: "2.8rem" }} src={value.detailSix.imgCouple} />
                                                <p style={{ marginLeft: "0.4rem" }}>{value.detailSix.typeCouple}</p>
                                            </>
                                        )
                                        : (
                                            <>
                                                <img style={{ height: "24px", marginLeft: "2.8rem" }} src={value.detailSix.imgCouple} />
                                                <p style={{ marginLeft: "0.4rem" }}>{value.detailSix.typeCouple}</p>
                                            </>
                                        )
                                }
                            </div>
                        </div>
                        <UpdateRooms price={data[value.id]} callback={(price) => { setData({...data,[value.id]:price}) }} id={value.id}/>
                    </div>
                ))
            }

        </>
    );
}