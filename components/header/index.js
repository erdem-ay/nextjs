import React from 'react'
import Link from 'next/link'
import { FaPlayCircle } from 'react-icons/fa'

import styles from "./style.module.css"

const Header = () => {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href='/' className={styles.logo}>
                    <FaPlayCircle /> EAFİLMS
                </Link>
                <nav className={styles.navigationMenu}>
                    <Link href="/">Movies</Link>
                    <Link href="/">Series</Link>
                    <Link href="/">Kids</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header