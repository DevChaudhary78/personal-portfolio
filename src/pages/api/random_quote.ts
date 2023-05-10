// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {quotes, Quote} from "../../assets/quotes"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Quote>
) {
    const randomIndex = Math.floor(Math.random() * quotes.length)

    const randomQuote = quotes[randomIndex]

    res.status(200).json(randomQuote)
}
