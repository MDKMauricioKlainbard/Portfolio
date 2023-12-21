import styles from './PersonalPresentation.module.css'
import React from 'react'

export default function PersonalPresentation() {
    return (
        <>
            <div className={styles.card}>
                <h1>Hello, I'm Mauricio Klainbard!</h1>
                <div className={styles.writer}>
                    <p className={styles.fullstack}>A FullStack Developer</p>
                </div>
            </div>
        </>

    )
}