import Image from "next/image"

import styles from "../styles/Footer.module.scss"

export default function Footer() {
    return(
        <footer className={styles.footer_container}>
            <p><span className={styles.help}>Want to help?</span> feel free.</p>

            <div className={styles.socials}>
                <a href="https://github.com/DevChaudhary78"><Image className={styles.icon} src="/icons/github.png" alt="Github" height={45} width={45} /></a>
                <a href="https://twitter.com/devchaudhary78"><Image className={styles.icon} src="/icons/twitter.png" alt="Twitter" height={45} width={45} /></a>
                <a href="https://www.instagram.com/devchaudhary.78/?next=%2F"><Image className={styles.icon} src="/icons/instagram.png" alt="Instagram" height={45} width={45} /></a>
                <a href="https://github.com/DevChaudhary78/personal-portfolio"><Image className={styles.icon} src="/icons/rust.png" alt="Code" height={45} width={45} /></a>
                <a href="https://monkeytype.com/profile/KaKaShi__"><Image className={styles.icon} src="/icons/keyboard.png" alt="monkeytype" height={45} width={45} /></a>
            </div>
        </footer>
    )
}
