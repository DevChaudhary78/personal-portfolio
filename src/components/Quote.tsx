import {useState, useEffect} from "react"

type Quote = {
    speaker: String
    quote: String
    anime: String
}

export default function Quote() {
    const [quote, setQuote] = useState<Quote>()

    useEffect(() => {
        async function fetchQuotes() {
            const response = await fetch("/api/random_quote")
            const data = await response.json()
            console.log(data)
            setQuote(data)
        }

        fetchQuotes()
    }, [])

    return(
        <div>
            <div>
                <h2>{quote?.speaker}</h2>
                <p>{quote?.quote}</p>
                <p>{quote?.anime}</p>
            </div>
        </div>
    )
}