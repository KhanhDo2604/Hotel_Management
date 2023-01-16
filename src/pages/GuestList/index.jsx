import styles from "./GuestList.module.scss";
import update from "../../assets/pencil.png";
import bin from "../../assets/bin.png";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import NoticeModal from "../../comps/NoticeModal";
const { ipcRenderer } = require("electron");

const mapGender = ["Female", "Male"]
export default function GuestList() {
    const [list, setList] = useState([])
    const [getId, setId] = useState();
    const [modalState, setModalState] = useState(false);

    //Get
    useEffect(() => {
        const token = ipcRenderer.sendSync("get-token");
        const requestOptions = {
            method: "GET",
            headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
        };

        fetch("https://hammerhead-app-7qhnq.ondigitalocean.app/api/guest", requestOptions)
            .then((res) => res.json())
            .then((res) => setList(res))
            .catch((err) => console.log(err));
    }, []);

    //Delete
    const handleDelete = (id) => {
        const token = ipcRenderer.sendSync("get-token");
        const requestOptions = {
            method: "DELETE",
            headers: { "Accept": "application/json", 'Authorization': 'Bearer ' + token },
        };
        fetch(`https://hammerhead-app-7qhnq.ondigitalocean.app/api/guest/${id}`, requestOptions)
            .then(res => res.json())
            .then(window.location.replace("/guests"))
            .catch((err) => console.log(err));
    }

    //Search
    const [query, setQuery] = useState("")

    //Pagination
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const filtered = list.filter((values) => values.fullname.toLowerCase().includes(query))
    const currentItems = filtered.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filtered.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filtered.length;
        setItemOffset(newOffset);
    };

    const openModal = (id) => {
        setModalState(!modalState);
        setId(id);
    }

    return (
        <div style={{ marginTop: '2rem' }} className="w3-container">
            <div className={styles.containerGrid}>
                <div className={styles.searchBar}>
                    <input type="text" id={styles.mySearch} placeholder="Search name, email or etc." onChange={(e) => setQuery(e.target.value)} />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        style={{ marginRight: "1.6rem", fill: "#F9D410" }}
                    >
                        <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
                    </svg>
                </div>
                <div style={{ display: "flex", justifyContent:"end" }}>
                    <Link className={styles.buttonAction} to="/addGuest" style={{ fontWeight: "bold" }}>
                        <img src="/src/assets/more.png" className={styles.icon} />
                        New Guest
                    </Link>
                </div>
            </div>
            <div className={styles.gridGeneral}>
                <div className={styles.gridContainer}>
                    <h5>Name</h5>
                    <h5>Gender</h5>
                    <h5>Create In</h5>
                    <h5>Contact</h5>
                    <h5>Action</h5>
                </div>
                <hr
                    style={{
                        width: "100%",
                        background: "#e4e4e4",
                        height: "1px",
                        marginTop: "0px",
                        marginBottom: "0.8rem",
                    }}
                />
                {
                    currentItems && currentItems.map((value, index) => (
                        <div key={index}>
                            <div className={styles.gridItem}>
                                <p style={{ display: "flex", alignItems: "center" }}>{value.fullname}</p>
                                <p style={{ display: "flex", alignItems: "center" }}>{mapGender[value.gender]}</p>
                                <p style={{ display: "flex", alignItems: "center" }}>{value.createin.slice(0, 10)}</p>
                                <div>
                                    <p>{value.email}</p>
                                    <p>{value.phone}</p>
                                </div>
                                <div className={styles.flexItem}>
                                    <button className={styles.actionBtn}>
                                        <Link
                                            to="/userInformation"
                                            state={{
                                                userInfo: value
                                            }}
                                        >
                                            <img src={update} alt="" style={{ width: "2.4rem" }} />
                                        </Link>
                                    </button>
                                    <button className={styles.actionBtn} onClick={() => openModal(value.id)}>
                                        <img src={bin} alt="" style={{ width: "2.4rem" }} />
                                    </button>
                                </div>
                            </div>
                            <hr
                                style={{
                                    width: "100%",
                                    background: "#e4e4e4",
                                    height: "1px",
                                    marginTop: "0px",
                                    marginBottom: "0.8rem",
                                }}
                            />
                        </div>
                    ))
                }

            </div>
            <div style={{ marginTop: '2.4rem' }}>
                <ReactPaginate
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel="<"
                    pageClassName={styles.pageItem}
                    pageLinkClassName={styles.pageLink}
                    previousClassName={styles.pageItem}
                    previousLinkClassName={styles.pageLink}
                    nextClassName={styles.pageItem}
                    nextLinkClassName={styles.pageLink}
                    breakLabel="..."
                    breakClassName={styles.pageItem}
                    breakLinkClassName={styles.pageLink}
                    containerClassName={styles.pagination}
                    activeClassName={styles.active}
                    renderOnZeroPageCount={null}
                />
            </div>

            <NoticeModal toggle={modalState} hide={() => openModal(getId)} action={() => handleDelete(getId)} title={"Delete guest"} content={"Do you want to delete this guest ?"}/>
        </div>
    );
}




