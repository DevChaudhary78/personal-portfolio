import Image from "next/image"

import styles from "./styles/Card.module.css";
import {cards, Card} from "../assets/cards"

export default function Container() {
    return (
        <div className={styles.card_container}>
            <a href="#"><Image className={styles.arrows} src="/imgs/arrow-left.png" alt="This is just a left arrow" width={40} height={40} /></a>
            {
                cards.map((card: Card) => (
                    <CardContainer key={`${card.title}-${card.emoji}`}
                        backgroundColor={card.backgroundColor}
                        title={card.title}
                        emoji={card.emoji}
                        text={card.text}
                    />
                ))
            }
            <a href="#" ><Image className={styles.arrows} src="/imgs/arrow-right.png" alt="This is just a right arrow" width={40} height={40} /></a>
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
