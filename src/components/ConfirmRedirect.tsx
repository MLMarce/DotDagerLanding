import type { Dispatch, SetStateAction } from "react"

export default function ConfirmRedirect({ page, linkPage, setRedirect, svg, vBox }: { page: string, linkPage: string, setRedirect: Dispatch<SetStateAction<boolean>>, svg: string, vBox: string }) {
    const handleClick = () => {
        setRedirect(false)
    }
    return (
        <section className="w-full max-w-[1200px] md:w-[60%] h-3/4 fixed left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] backdrop-blur-lg backdrop-brightness-50 before:shadow-md shadow-secondary rounded-lg flex flex-col justify-around items-center p-4 z-[100] text-colortext">
            <svg viewBox={vBox} fill="currentColor" width="40" height="40" focusable="false">
                <path d={svg}></path>
            </svg>
            <h2 className="text-3xl font-bold drop-shadow-lg">¡Atención!</h2>
            <p className="text-md font-semibold text-pretty text-center drop-shadow-md">Estás a punto de dirigirte a {page}</p>
            <span>¿Deseas continuar?</span>
            <div className="w-full flex justify-around items-center">
                <a onClick={handleClick} href={linkPage} target="_blank" className="w-2/4 md:w-1/3 py-1 text-center font-bold backdrop-blur-xl hover:bg-white hover:text-dark border-2 border-gray-300 hover:border-dark  rounded-lg">Si</a>
                <button onClick={handleClick} className="w-2/4 md:w-1/3 py-1 text-center font-bold backdrop-blur-xl hover:bg-white hover:text-dark border-2 border-gray-300 hover:border-dark  rounded-lg">No</button>
            </div>
        </section>
    )
}