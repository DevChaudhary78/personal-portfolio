import Image from "next/image"
import React, {useRef} from "react"

import styles from "./Header.module.css"

export default function Header(): JSX.Element {

    const containerRef = useRef<HTMLDivElement>(null)

    function handleMouseOver() {
        if (containerRef.current) {
            containerRef.current.textContent = "Hello 👋"
        }
    }

    return(
        <header className={styles.header}>
            <div>
                <div className={styles.title} ref={containerRef} onMouseOver={handleMouseOver}>
                    नमस्ते 🙏🏻
                </div>
                <div>
                    Hello, my name is Dev Chaudhary, and I am gonna be "King of the Pirates" 👑
                </div>
            </div>
            <div>
                <Image className={styles.profile_pic} src="/personal-pic.jpg" alt="This is just my personal portfolio personal pic (:" height={250} width={250} />
            </div>
        </header>
    );
}
