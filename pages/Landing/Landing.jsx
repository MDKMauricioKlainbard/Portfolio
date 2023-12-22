import NavBar from "../../containers/NavBar/NavBar";
import styles from './Landing.module.css';
import React from "react";
import { useState } from "react";
import PersonalPresentation from "../../containers/PersonalPresentation/PersonalPresentation";
import AboutMe from "../../containers/AboutMe/AboutMe";
import Projects from "../../containers/Projects/Projects";

export default function Landing() {
    const initialConfig = {
        home: true,
        projects: false,
        about: false,
        contact: false
    }
    const [page, setPage] = useState(()=>{
        const configStored = localStorage.getItem('pageState');
        return configStored ? JSON.parse(configStored) : initialConfig
    })
    return (
        <>
            <header className={styles.header}>
                <NavBar setPage={setPage} />
            </header>
            <main className={styles.main}>
                <section className={styles.section}>
                    {page.home && <PersonalPresentation />}
                    {page.projects && <Projects/>}
                    {page.about && <AboutMe/>}
                </section>
            </main>
        </>
    )
}