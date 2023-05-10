import Image from "next/image"

import styles from "./styles/Card.module.css";
import {cards, Card} from "../assets/cards"

export default function Container() {
    return (
        <div className={styles.card_container}>
            <a href="#"><Image className={styles.arrows} src="/imgs/arrow-left.png" alt="This is just a left arrow" width={40} height={40} /></a>
            <Card  height={400} width={500} backgroundColor={"bisque"} title={"This is just a testing title"} emoji={"🚀"} text={"This is just a sample text to check whether the card is working or not and let's be honest it is not working for god damn reason I don't know why it isn't working!"} />

            <Card height={200} width={300} backgroundColor={"yellow"} title={"This is just a testing title"} emoji={"🚀"} text={"This is just a sample text to check whether the card is working or not and let's be honest it is not working for god damn reason I don't know why it isn't working!"} />

            <a href="#" ><Image className={styles.arrows} src="/imgs/arrow-right.png" alt="This is just a right arrow" width={40} height={40} /></a>
        </div>
    );
}

function Card({height, width, backgroundColor, title, emoji, text}: {height: number, width: number, backgroundColor: string, title: string, emoji: string, text: string}) {
    return(
        <div className={styles.card} style={{ height, width, backgroundColor }}>
            <h2 className={styles.card_title}>{title} {emoji}</h2>
            <p className={styles.card_text}>{text}</p>
        </div>
    )
}
