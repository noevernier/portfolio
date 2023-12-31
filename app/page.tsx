import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import { Card } from "./components/card";

const navigation = [
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
    { name: "Resume", href: "https://cv.noevernier.vercel.app" },
];

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <nav className="my-16 animate-fade-in p-1 rounded-full overflow-hidden relative duration-700 border hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 backdrop-blur-sm hover:border-zinc-40   bg-gradient-to-tl from-zinc-600/20 via-zinc-600/10 to-black">
                <ul className="flex items-center justify-center gap-2 ">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300  px-2 py-1 rounded-full border border-transparent hover:border-zinc-700 hover:backdrop-blur-sm hover:backdrop-brightness-200 hover:bg-white/10"
                        >
                            {item.name}
                        </Link>
                    ))}
                </ul>
            </nav>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={100}
            />
            <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                Noé Vernier
            </h1>

            <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
            <div className="my-16 text-center animate-fade-in mx-32">
                <h2 className="text-sm text-zinc-500 hover:text-zinc-300 duration-500">
                    I am a student studying <b>Applied Mathematics</b>,{" "}
                    <b>Machine Learning</b>, and <b>Data Science</b> at{" "}
                    <Link
                        target="_blank"
                        href="https://www.telecom-paris.fr/"
                        className="underline duration-500 hover:text-zinc-300"
                    >
                        Télécom Paris
                    </Link>{" "}
                    in France.
                </h2>
            </div>
        </div>
    );
}
