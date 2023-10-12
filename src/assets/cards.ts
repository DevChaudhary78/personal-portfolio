export type Card = {
    backgroundColor: string
    title: string
    emoji: string
    text: string
}

export const cards: Card[] = [
    {
        backgroundColor: "#219ebc",
        title: "Web Development",
        emoji: "🕸️",
        text: "I started my journey as a Web Developer back in December of 2020; when I assembled my first PC with the help of my friend and started learning HTML, CSS first and then learned a bit of JavaScript. Later I decided to learn a Web Framework and I ended up going with the most popular React.JS from Facebook. However, when I learnt about Next.JS, I became fan of it and learned that and got a really good grasp on it. In fact, the website you are seeing is made using Next.JS. For back-end I later learned Node.JS with express and MongoDB as Database and became a MERN developer."
    },
    {
        backgroundColor: "#f4a261",
        title: "Rust",
        emoji: "🦀",
        text: "When I was bored with Web Development back in April 2021, I decided to learn some real fun language; a language which can do anything like C and is more performant than high-level languages like Python. Rust was my go to language for low-level concepts. Even though we can do a lot of things using Rust, my primary goal to learn Rust was to develop some low level concepts on how actually the computers works on hardware level. And frankly, I learned a lot of thing using Rust like memory-management, references, pointers and a relatively new concept known as Ownership & Borrowing."
    }, 
    {
        backgroundColor: "#748cab",
        title: "Android Development",
        emoji: "🤖",
        text: "I started my Android Development journey as just a fun hobby to learn new things every single day and was really bored by doing Data Structures & Algorithms, and wanted to get back into Development once again, but not with Web (as it was boring) and not with Rust either (Because I was so much bad with it), so I started Android Dev using Android Studio and a great course from Udemy, and it was a fun journey."
    }
]
