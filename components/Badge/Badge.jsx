import styles from './Badge.module.css';
import React from 'react';

export default function Badge({ badge }) {
    return (
        <>
            <img src={badge} className={styles.badge}/>
        </>
    )
}