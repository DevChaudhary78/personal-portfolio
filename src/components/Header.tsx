import Image from "next/image";
import React, { useRef } from "react";

import styles from "./styles/Header.module.css";

export default function Header(): JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);

    function handleMouseOver() {
        if (containerRef.current) {
            containerRef.current.textContent = "Hello 👋";
        }
    }

    function handleMouseLeave() {
        if (containerRef.current) {
            containerRef.current.textContent = "नमस्ते 🙏🏻";
        }
    }

    return (
        <>
            <header className={styles.header}>
                <div>
                    <a
                        href="https://www.wikiwand.com/en/Namaste"
                        className={styles.title_link}
                    >
                        <div
                            className={styles.title}
                            ref={containerRef}
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave}
                        >
                            नमस्ते 🙏🏻
                        </div>
                    </a>
                    <div>
                        Hello, my name is Dev Chaudhary, and I am gonna be "King
                        of the Pirates" 👑
                    </div>
                </div>
                <div>
                    <Image
                        className={styles.profile_pic}
                        src="/imgs/dog-pic.jpg"
                        alt="This is just my personal portfolio personal pic (:"
                        height={180}
                        width={180}
                    />
                </div>
            </header>

            <div>
                <a href="#">
                <Image
                    className={styles.message_pic}
                    src="/imgs/telegram.png"
                    alt="Contact me"
                    height={64}
                    width={64}
                /></a>
            </div>
        </>
    );
}
