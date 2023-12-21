import NavBar from "../../containers/NavBar/NavBar";
import styles from './Landing.module.css';
import React from "react";
import { useState } from "react";
import PersonalPresentation from "../../containers/PersonalPresentation/PersonalPresentation";

export default function Landing() {
    const [page, setPage] = useState({
        home: true,
        projects: false,
        about: false,
        contact: false,
    })
    return (
        <>
            <header className={styles.header}>
                <NavBar setPage={setPage} />
            </header>
            <main className={styles.main}>
                <section className={styles.section}>
                    {page.home && <PersonalPresentation />}
                    {page.projects && <PersonalPresentation/>}
                </section>
            </main>
        </>
    )
}