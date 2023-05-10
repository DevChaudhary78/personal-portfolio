import Image from "next/image"

import styles from "./styles/Footer.module.css"

export default function Footer() {
    return(
        <footer className={styles.footer_container}>
            <p><span className={styles.help}>Want to help?</span> feel free.</p>

            <div className={styles.socials}>
                <a href="#"><Image src="/icons/github.svg" alt="Github" height={40} width={40} /></a>
                <a href="#"><Image src="/icons/twitter.svg" alt="Twitter" height={40} width={40} /></a>
                <a href="#"><Image src="/icons/instagram.svg" alt="Instagram" height={40} width={40} /></a>
                <a href="#"><Image src="/icons/code.png" alt="Code" height={40} width={40} /></a>
                <a href="#"><Image src="/icons/discord.svg" alt="Discord" height={40} width={40} /></a>
            </div>
        </footer>
    )
}