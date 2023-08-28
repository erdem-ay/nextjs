import React from "react";
import Link from "next/link";

import styles from "./style.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            Made with ❤️ by&nbsp;
            <Link href="https://erdemay.vercel.app/" target="_blank">
                Erdem AY
            </Link>
        </footer>
    );
}

export default Footer;