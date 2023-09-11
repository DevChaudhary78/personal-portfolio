export type Card = {
    backgroundColor: string
    title: string
    emoji: string
    text: string
}

export const cards: Card[] = [
    {
        backgroundColor: "bisque",
        title: "Web Development",
        emoji: "🕸️",
        text: "I started my journey as a Web Developer back in December of 2020; when I assembled my first PC with the help of my friend and started learning HTML, CSS first and then learned a bit of JavaScript. Later I decided to learn a Web Framework and I ended up going with the most popular React.JS from Facebook. However, when I learnt about Next.JS, I became fan of it and learned that and got a really good grasp on it. In fact, the website you are seeing is made using Next.JS. For back-end I later learned Node.JS with express and MongoDB as Database and became a MERN developer."
    },
    {
        backgroundColor: "yellow",
        title: "Rust",
        emoji: "🦀",
        text: "When I was bored with Web Development back in April 2021, I decided to learn some real fun language; a language which can do anything like C and is more performant than high-level languages like Python. Rust was my go to language for low-level concepts. Even though we can do a lot of things using Rust, my primary goal to learn Rust was to develop some low level concepts on how actually the computers works on hardware level. And frankly, I learned a lot of thing using Rust like memory-management, references, pointers and a relatively new concept known as Ownership & Borrowing."
    }, 
    {
        backgroundColor: "AliceBlue",
        title: "Android Development",
        emoji: "🤖",
        text: "This is just a testing card"
    }
]
