import {useState, useEffect} from "react"

type Quote = {
    speaker: String
    quote: String
    anime: String
}

export default function Quote() {
    const [quotes, setQuotes] = useState<Quote[]>([])

    useEffect(() => {
        async function fetchQuotes() {
            const response = await fetch("/api/quotes")
            const data = await response.json()
            console.log(data)
            setQuotes(data)
        }

        fetchQuotes()
    }, [])

    return(
        <div>
            {quotes.map((quote, index) => (
                <div key={index}>
                    <h2>{quote.speaker}</h2>
                    <p>{quote.quote}</p>
                    <p>{quote.anime}</p>
                </div>
            ))}
        </div>
    )
}