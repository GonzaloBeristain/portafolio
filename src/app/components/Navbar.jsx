"use client";
import { useState } from 'react';
import Link from "next/link";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const openNav = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className="bg-white shadow-lg md:fixed md:top-0 md:w-full md:z-50">
            <nav id='nav' className="flex justify-around text-slate-100 bg-slate-950 p-5 border-b border-slate-800">
                <section>
                    <span className="hidden md:block ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                        </svg>
                    </span>
                    <span className="pl-4 block md:hidden hover:text-slate-500 transition-colors duration-300">
                        <button className='text-7xl' onClick={openNav}>=</button>
                    </span>
                </section>
                <section className={`${isOpen ? 'block' : 'hidden'} pl-4`}>
                    <ul className="font-semibold pr-60 text-md md:gap-x-6 md:flex md:text-xl">
                        <li className="hover:text-slate-500 transition-colors duration-300">
                            <Link href={"#inicio"}>Inicio</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-colors duration-300">
                            <Link href={"#sobremi"}>Sobre mi</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-colors duration-300">
                            <Link href={"#tecnologias"}>Tecnologías</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-colors duration-300">
                            <Link href={"#proyectos"}>Proyectos</Link>
                        </li>
                        <li className="hover:text-slate-500 transition-colors duration-300">
                            <Link href={"#contacto"}>Contacto</Link>
                        </li>
                    </ul>
                </section>
            </nav>
            <div className="md:hidden fixed bottom-6 right-6 z-10">
                <button className="bg-slate-600 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded-full shadow-md">
                    <Link href={"#nav"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                        </svg>
                    </Link>
                </button>
            </div>
        </div>
    )
};