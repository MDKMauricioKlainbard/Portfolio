import styles from './NavItem.module.css'
import React from 'react'

export default function NavItem({ Icon, span }) {
    return (
        <>
            <li className={styles.li}>
                <Icon fontSize={'large'} />
                <span className={styles.span}>{span}</span>
            </li>
        </>
    )
}