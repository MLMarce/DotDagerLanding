import { useState } from "react"
import ConfirmRedirect from "./ConfirmRedirect"

export default function RedirectSection({ page, linkPage, pathLogo, vBox }: { page: string, linkPage: string, pathLogo: string, vBox: string }) {
    const [redirect, setRedirect] = useState(false)

    const handleClick = () => {
        setRedirect(!redirect)
    }


    return (
        <div>
            {redirect && <ConfirmRedirect page={page} linkPage={linkPage} setRedirect={setRedirect} svg={pathLogo} vBox={vBox} />}
            <button
                type="button"
                onClick={handleClick}
                className=" p-2 w-full font-semibold border border-primary/50 hover:border-secondary/50 hover:shadow-sm hover:shadow-primary backdrop-blur-lg rounded-md bg-gradientcolor bg-clip-text text-transparent hover:text-primary"
            >{page}</button>
        </div>
    )
}