import Image from "next/image"

import styles from "./styles/Card.module.css";
import {cards, Card} from "../assets/cards"
import { useState } from "react";

export default function Container() {
    var [currentIdx, setCurrentIdx] = useState(0);
    return (
        <div className={styles.card_container}>
            <button className={styles.arrow_container} onClick={() => {
                if(currentIdx > 0) {
                    setCurrentIdx(currentIdx-1)
                } else {
                    setCurrentIdx(cards.length-1)
                }
            }}><Image className={styles.arrows} src="/imgs/arrow-left.png" alt="This is just a left arrow" width={40} height={40} /></button>

            <CardContainer key={`${cards[currentIdx].title}-$${cards[currentIdx].emoji}`} backgroundColor={cards[currentIdx].backgroundColor} title={cards[currentIdx].title} emoji={cards[currentIdx].emoji} text={cards[currentIdx].text} />
            
            <button className={styles.arrow_container} onClick={() => {
                if(currentIdx < cards.length - 1) {
                    setCurrentIdx(currentIdx+1)
                } else {
                    setCurrentIdx(0)
                }
            }}><Image className={styles.arrows} src="/imgs/arrow-right.png" alt="This is just a right arrow" width={40} height={40} /></button>
        </div>
    );
}

function CardContainer({ backgroundColor, title, emoji, text}: {backgroundColor: string, title: string, emoji: string, text: string}) {
    return(
        <div className={styles.card} style={{ backgroundColor }}>
            <h2 className={styles.card_title}>{title} {emoji}</h2>
            <p className={styles.card_text}>{text}</p>
        </div>
    )
}
