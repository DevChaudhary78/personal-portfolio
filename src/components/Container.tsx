import Image from "next/image"

import styles from "../styles/Card.module.scss";
import {cards} from "../assets/cards"
import { useState } from "react";

export default function Container() {
    var [mainIdx, setMainIdx] = useState(0);
    var [secondIdx, setSecondIdx] = useState(mainIdx+1)
    return (
        <div className={styles.card_container}>
            <button className={styles.arrow_container} onClick={() => {
                if(mainIdx > 0) {
                    setMainIdx(mainIdx-1)
                } else {
                    setMainIdx(cards.length-1)
                }

                if(secondIdx > 0) {
                    setSecondIdx(secondIdx-1)
                } else {
                    setSecondIdx(cards.length-1)
                }
            }}><Image className={styles.arrows} src="/imgs/arrow-left.png" alt="This is just a left arrow" width={40} height={40} /></button>

            <CardContainer key={`${cards[mainIdx].title}-$${cards[mainIdx].emoji}`} backgroundColor={cards[mainIdx].backgroundColor} title={cards[mainIdx].title} emoji={cards[mainIdx].emoji} text={cards[mainIdx].text}  />
            
            <CardContainer key={`${cards[secondIdx].title}-$${cards[secondIdx].emoji}`} backgroundColor={cards[secondIdx].backgroundColor} title={cards[secondIdx].title} emoji={cards[secondIdx].emoji} text={cards[secondIdx].text} />

            <button className={styles.arrow_container} onClick={() => {
                if(mainIdx < cards.length - 1) {
                    setMainIdx(mainIdx+1)
                } else {
                    setMainIdx(0)
                }

                if(secondIdx < cards.length - 1) {
                    setSecondIdx(secondIdx+1)
                } else {
                    setSecondIdx(0)
                }

            }}><Image className={styles.arrows} src="/imgs/arrow-right.png" alt="This is just a right arrow" width={40} height={40} /></button>
        </div>
    );
}

function CardContainer({ backgroundColor, title, emoji, text}: {backgroundColor: string, title: string, emoji: string, text: string,}) {
    return(
        <div className={styles.card} style={{ backgroundColor }}>
            <h2 className={styles.card_title}>{title} {emoji}</h2>
            <p className={styles.card_text}>{text}</p>
        </div>
    )
}
