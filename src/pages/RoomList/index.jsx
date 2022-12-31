import styles from "./RoomList.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faPencil } from "@fortawesome/free-solid-svg-icons";
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
import { useEffect, useState } from "react";
import { useRef } from "react";

export default function RoomList() {
    const roomList = [
        {
            id: 1,
            img: standard,
            name: "Standard Room (STD)",
            price: "3000000Đ",
            status: "Update",
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
            id: 2,
            img: superior,
            name: "Superior Room (SUP)",
            price: "4000000Đ",
            status: "Update",
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
            id: 3,
            img: dulexe,
            name: "Deluxe Room (DLX)",
            price: "5000000Đ",
            status: "Update",
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
            id: 4,
            img: suite,
            name: "Suite Room (SUT)",
            price: "6000000Đ",
            status: "Update",
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

    //Set Update
    const [convertButton, setConvertButton] = useState(roomList)
    const handleChange = (id) => {
        const temp = convertButton.map(item => {
            if (item.id === id) {
                item.status === "Update" ?
                    (item.status = "Save") :
                    (item.status = "Update")
            }
            return item;
        })
        setConvertButton(temp)
    }

    return (
        <>
            {
                convertButton.map((value, index) => (
                    <div className={styles.roomList} key={index}>
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
                        <div className={styles.roomRight}>
                            <div>
                                {
                                    value.status === "Update" ? (
                                        <input type="text" />
                                    ) :
                                        (
                                            <input type="text" disabled/>
                                        )
                                }
                            </div>
                            <div className={styles.btnClick}>
                                <button className={styles.btnLeft} onClick={() => handleChange(value.id)}>
                                    {value.status}
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }

        </>
    );
}