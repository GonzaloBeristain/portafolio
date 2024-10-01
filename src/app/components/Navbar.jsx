"use client";
import { useState } from 'react';
import Link from "next/link";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openNav = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="bg-white shadow-lg md:fixed md:top-0 md:w-full md:z-50">
            <nav id='nav' className="flex flex-col pb-2 border-b border-slate-800 text-slate-100 bg-slate-950 md:p-5 md:flex-row md:justify-around">
                <section>
                    {/* Logo NAV Normal */}
                    <span className="hidden md:block ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-10 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </span>
                    {/* Logos NAV Mobile */}
                    <span className="pl-4 block md:hidden hover:text-slate-500 transition-colors duration-300">
                        <div className='flex pt-3 pb-1 justify-between'>
                            <button onClick={openNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="size-7 border border-slate-400 rounded-sm">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                            <span className='pr-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-10 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                </svg>
                            </span>
                        </div>
                    </span>
                </section>
                {/* NAV Mobile */}
                <section className={`${isOpen ? 'block' : 'hidden'} pl-4 py-2`}>
                    <ul className="font-semibold flex flex-col gap-y-3 md:pr-60 md:gap-y-0 text-lg md:gap-x-6 md:flex-row md:text-xl md:hidden">
                        <li className="hover:text-slate-500 hidden transition-all md:block md:hover:translate-x-1 duration-300">
                            <Link href={"#inicio"}>Inicio</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-all md:hover:translate-x-1 duration-300">
                            <Link href={"#sobremi"}>Sobre mi</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-all md:hover:translate-x-1 duration-300">
                            <Link href={"#tecnologias"}>Tecnologías</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-all md:hover:translate-x-1 duration-300">
                            <Link href={"#proyectos"}>Proyectos</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-all md:hover:translate-x-1 duration-300">
                            <Link href={"#contacto"}>Contacto</Link>
                        </li>
                    </ul>
                </section>
                {/* NAV Normal */}
                <section className={`hidden md:block pl-4`}>
                    <ul className="font-semibold flex flex-col gap-y-2 text-md md:text-xl md:gap-y-0 md:gap-x-6 md:flex-row">
                        <li className="hover:text-slate-500 hidden transition-all md:block md:hover:translate-x-1 duration-300">
                            <Link href={"#inicio"}>Inicio</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-all md:hover:translate-x-1 duration-300">
                            <Link href={"#sobremi"}>Sobre mi</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-all md:hover:translate-x-1 duration-300">
                            <Link href={"#tecnologias"}>Tecnologías</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-all md:hover:translate-x-1 duration-300">
                            <Link href={"#proyectos"}>Proyectos</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-all md:hover:translate-x-1 duration-300">
                            <Link href={"#contacto"}>Contacto</Link>
                        </li>
                    </ul>
                </section>
            </nav>
            <div className="fixed bottom-6 right-6 z-10 pb-16 md:pb-8 md:hidden">
                <button className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-4 px-4 rounded-full shadow-md">
                    <Link href={"#nav"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </Link>
                </button>
            </div>
        </div>
    )
};