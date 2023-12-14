import styles from './NavBar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BoyIcon from '@mui/icons-material/Boy';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import NavItem from '../../components/NavItems/NavItem';
import React from 'react';

export default function NavBar() {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <NavItem Icon={HomeIcon} span={'Home'}/>
                    <NavItem Icon={WorkIcon} span={'My Projects'}/>
                    <NavItem Icon={BoyIcon} span={'About Me'}/>
                    <NavItem Icon={ConnectWithoutContactIcon} span={'Contact Me'}/>
                </ul>
            </nav>
        </>
    )
}