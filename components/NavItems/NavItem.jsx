import styles from './NavItem.module.css'
import React from 'react'

export default function NavItem({ Icon, span, name, setPage, activeItem, setActiveItem }) {
    const handleClick = () => {
        const updatedPageState = {
            home: false,
            contact: false,
            about: false,
            projects: false,
        }
        updatedPageState[name] = true;
        setPage(updatedPageState)
        localStorage.setItem('pageState', JSON.stringify(updatedPageState))
        localStorage.setItem('currentPage', name)
        setActiveItem(name)
    }
    return (
        <>
            <li className={`${styles.li} ${activeItem === name ? styles.active : ''}`} onClick={handleClick}>
                <Icon fontSize={'large'} />
                <span className={styles.span}>{span}</span>
            </li>
        </>
    )
}