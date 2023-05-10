import styles from "./styles/Card.module.css";

export default function Container() {
    return (
        <div className={styles.card_container}>
            <Card height={300} width={400} backgroundColor={"bisque"} title={"This is just a testing title"} emoji={"🚀"} text={"This is just a sample text to check whether the card is working or not and let's be honest it is not working for god damn reason I don't know why it isn't working!"} />

            <Card height={200} width={300} backgroundColor={"yellow"} title={"This is just a testing title"} emoji={"🚀"} text={"This is just a sample text to check whether the card is working or not and let's be honest it is not working for god damn reason I don't know why it isn't working!"} />
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
