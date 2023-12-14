import NavBar from "../../containers/NavBar/NavBar";
import styles from './Landing.module.css';
import React from "react";

export default function Landing() {
    return (
        <>
            <header className={styles.header}>
                <NavBar/>
            </header>
            <main className={styles.main}>
            </main>
            <footer className={styles.footer}>
            </footer>
        </>
    )
}