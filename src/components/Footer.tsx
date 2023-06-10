import Image from "next/image"

import styles from "./styles/Footer.module.css"

export default function Footer() {
    return(
        <footer className={styles.footer_container}>
            <p><span className={styles.help}>Want to help?</span> feel free.</p>

            <div className={styles.socials}>
                <a href="https://github.com/DevChaudhary78"><Image className={styles.icon} src="/icons/github.svg" alt="Github" height={40} width={40} /></a>
                <a href="https://twitter.com/devchaudhary78"><Image className={styles.icon} src="/icons/twitter.svg" alt="Twitter" height={40} width={40} /></a>
                <a href="https://www.instagram.com/devchaudhary.78/?next=%2F"><Image className={styles.icon} src="/icons/instagram.svg" alt="Instagram" height={40} width={40} /></a>
                <a href="https://github.com/DevChaudhary78/personal-portfolio"><Image className={styles.icon} src="/icons/code.png" alt="Code" height={40} width={40} /></a>
                {/* <a href="https://discord.gg/2GBPzayu"><Image className={styles.icon} src="/icons/discord.svg" alt="Discord" height={40} width={40} /></a> */}
            </div>
        </footer>
    )
}