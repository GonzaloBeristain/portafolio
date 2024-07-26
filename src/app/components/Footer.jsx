import Link from "next/link";

export const Footer = () => {
    return (
        <div className="h-20 bg-slate-950 flex items-center border-t pl-2 md:pl-0 border-slate-800 md:justify-around">
            <section className="pr-2 md:pr-0">
                <p className="text-slate-100 font-normal">© 2024 Gonzalo Beristain</p>
            </section>
            <section className="text-white flex gap-x-2">

                <Link href={"https://www.linkedin.com/in/gonzalo-beristain"} className="hover:text-slate-600 transition-colors duration-300"> 
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> 
                    </svg> 
                </Link>

                <Link href={"https://github.com/GonzaloBeristain"} className="hover:text-slate-600 transition-colors duration-300"> 
                    <svg width="2rem" height="2rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> 
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path> 
                    </svg> 
                </Link>

                <Link href={"mailto:ga_beristainn@hotmail.com"} className="hover:text-slate-600 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="2rem" height="2rem">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </Link>
            </section>
        </div>
    )
};