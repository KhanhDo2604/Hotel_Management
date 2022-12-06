import React, { useState } from "react";

import styles from "./Menu.module.scss";

export default function Pagination ({
    totalPosts,
    postsPerPage,
    setCurrentPage,
    currentPage,
}) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className={styles.pagination}>
            {pages.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page == currentPage ? styles.active : ""}>
                        <p>{page}</p>
                    </button>
                );
            })}
        </div>
    );
};
