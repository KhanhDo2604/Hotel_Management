import styles from "./GuestList.module.scss";
import update from "../../assets/pencil.png";
import bin from "../../assets/bin.png";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const guestList = [
    {
        id: 1,
        name: "Võ Đình Vân",
        gender: "Male",
        createIn: "08/01/2023",
        contact: {
            email: "van2k@yahoo.com",
            phoneNumber: "0342578371"
        }
    },
    {
        id: 3,
        name: "Đỗ Phạm Huy Khánh",
        gender: "Male",
        createIn: "08/01/2023",
        contact: {
            email: "khanhdo@hotgmail.com",
            phoneNumber: "03429454382"
        }
    },
]

export default function GuestList() {
    const [list, setList] = useState(guestList)
    //Search
    const [query, setQuery] = useState("")
    const keys = ["name"]

    //Pagination
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const filtered = list.filter((values) => keys.some((key) => values[key].toLowerCase().includes(query)))
    const currentItems = filtered.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filtered.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filtered.length;
        setItemOffset(newOffset);
    };

    //delete an item
    const handleDelete = (id) => {
        const newIds = list.filter((item) => item.id !== id)
        setList(newIds)
    }
    return (
        <div style={{marginTop: '2rem'}} className="w3-container">
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
                                <p style={{ display: "flex", alignItems: "center" }}>{value.name}</p>
                                <p style={{ display: "flex", alignItems: "center" }}>{value.gender}</p>
                                <p style={{ display: "flex", alignItems: "center" }}>{value.createIn}</p>
                                <div>
                                    <p>{value.contact.email}</p>
                                    <p>{value.contact.phoneNumber}</p>
                                </div>
                                <div className={styles.flexItem}>
                                    <button className={styles.actionBtn}>
                                        <Link
                                            to="/userInformation"
                                            state={{
                                                userInfo :value
                                            }}
                                        >
                                            <img src={update} alt="" style={{ width: "2.4rem" }} />
                                        </Link>
                                    </button>
                                    <button className={styles.actionBtn} onClick={() => handleDelete(value.id)}>
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
        </div>
    );
}




