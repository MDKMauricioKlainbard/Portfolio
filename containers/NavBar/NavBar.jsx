import styles from './NavBar.module.css';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import BoyIcon from '@mui/icons-material/Boy';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import NavItem from '../../components/NavItems/NavItem';
import React from 'react';
import { useState } from 'react';

export default function NavBar({ setPage }) {
    const [activeItem, setActiveItem] = useState('home')
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.ul}>
                    <NavItem Icon={HomeIcon} span={'Home'} name={'home'} setPage={setPage} setActiveItem={setActiveItem} activeItem={activeItem} />
                    <NavItem Icon={WorkIcon} span={'My Projects'} name={'projects'} setPage={setPage} setActiveItem={setActiveItem} activeItem={activeItem}/>
                    <NavItem Icon={BoyIcon} span={'About Me'} name={'about'} setPage={setPage} setActiveItem={setActiveItem} activeItem={activeItem}/>
                    <NavItem Icon={ConnectWithoutContactIcon} span={'Contact Me'} name={'contact'} setPage={setPage} setActiveItem={setActiveItem} activeItem={activeItem}/>
                </ul>

            </nav>
        </>
    )
}