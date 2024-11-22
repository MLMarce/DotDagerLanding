import { useState } from "react"
import RedirectSection from "./RedirectSection";

export default function NavMenu() {
    const [isVisible, setIsVisible] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const visibility = isVisible ? '-top-1 shadow-md shadow-primary ' : 'top-[-500px]'
    const topBar = isMenuOpen ? 'rotate-45 translate-y-2 bg-primary/60 shadow-sm shadow-primary' : '';
    const botBar = isMenuOpen ? '-rotate-45 -translate-y-2 bg-primary/60 shadow-sm shadow-primary' : '';
    const hideBar = isMenuOpen ? 'hidden -translate-y-2' : '';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsVisible(!isVisible)
    }

    return (
        <section className="z-50 fixed w-screen h-50px top-0 left-0 flex flex-col items-end p-2">

            <nav
                id="nav"
                className={`${visibility} p-4 md:px-28 flex md:flex-row flex-col w-full h-[60vh] md:h-max overflow-hidden left-0 justify-between gap-6 absolute transition-all bg-dark`}
            >
                <div className="bg-logo bg-cover rounded-lg w-14 h-14 content-center relative">
                    <a
                        href="#hero"
                        className="w-14 h-14 flex"
                    ></a>
                </div>

                <div className="flex md:flex-row flex-col gap-2 h-[60vh] md:h-max">
                    <a
                        href="#about"
                        className="p-2 font-semibold border border-primary/50 hover:border-secondary/50 hover:shadow-sm hover:shadow-primary rounded-md bg-gradientcolor bg-clip-text text-transparent hover:text-primary backdrop-blur-lg text-center"
                    >Sobre Mí</a>
                    <a
                        href="/projects"
                        className="p-2 font-semibold border border-primary/50 hover:border-secondary/50 hover:shadow-sm hover:shadow-primary rounded-md bg-gradientcolor bg-clip-text text-transparent hover:text-primary backdrop-blur-lg text-center"
                    >Proyectos</a>
                    <a
                        href="#game"
                        className="p-2 font-semibold border border-primary/50 hover:border-secondary/50 hover:shadow-sm hover:shadow-primary rounded-md bg-gradientcolor bg-clip-text text-transparent hover:text-primary backdrop-blur-lg text-center"
                    >Juguemos</a>
                    <h4
                        className="pt-2 font-bold text-lg md:hidden bg-primary bg-clip-text text-transparent text-center"
                    >Redes</h4>
                    <RedirectSection
                        page="GitHub"
                        linkPage="https://github.com/MarianoVilla"
                        pathLogo="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
                        vBox="0 0 16 16"
                    />

                    <RedirectSection
                        page="LinkedIn"
                        linkPage="https://www.linkedin.com/in/mariano-luis-villa/"
                        pathLogo="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
                        vBox="1 1 22 22"
                    />
                </div>
            </nav>
            <button
                onClick={toggleMenu}
                className="w-14 h-14 rounded-full bg-black shadow-inner shadow-primary p-2 py-3 flex flex-col justify-around z-50"
            >
                <div id="topBar" className={`w-full h-1 bg-white rounded-sm transition-all ${topBar}`}>
                </div>
                <div id="botBar" className={`w-full h-1 bg-white rounded-sm transition-all ${botBar}`}>
                </div>
                <div id="hiddenBar" className={`w-full h-1 bg-white rounded-sm transition-all duration-500 ${hideBar}`}>
                </div>
            </button>
        </section>
    )
}