import styles from './NavItem.module.css'

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