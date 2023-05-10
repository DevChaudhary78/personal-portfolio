// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import quotes from "../../assets/quotes"

type Quote = {
    quote: String
    speaker: String
    anime: String
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Quote>
) {
    const randomIndex = Math.floor(Math.random() * quotes.length)

    const randomQuote = quotes[randomIndex]

    res.status(200).json(randomQuote)
}
