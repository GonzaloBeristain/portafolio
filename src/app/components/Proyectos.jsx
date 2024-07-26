"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Proyectos = () => {
    const [cambiarImagen, setCambiarImagen] = useState(true);
    const [cambiarImagen2, setCambiarImagen2] = useState(true);

    const handleClick = () => {
        setCambiarImagen(!cambiarImagen);
    };

    const handleClick2 = () => {
        setCambiarImagen2(!cambiarImagen2);
    };
    
    return (
        <div id="proyectos" className="flex flex-col justify-center container mx-auto px-4 md:w-1/2 md:px-2 md:pb-40 md:mt-11 md:pt-24 md:h-[calc(100vh-rem)]">
            <h1 className="text-slate-100 text-2xl font-bold py-6 md:text-4xl">Proyectos</h1>
            <section className="rounded-md">
                <div className="p-2 border-b border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Donkey Kong App </h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black" href={"https://github.com/GonzaloBeristain/AppDK-NextJS"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación orientada a contar la historia de este popular juego, además de mostrar sus personajes y todas las entregas que ha tenido a lo largo del tiempo.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base">
                        <p className="text-red-600 bg-black rounded-full w-16 font-semibold">HTML5</p>
                        <p className="text-blue-600 bg-black rounded-full w-20 font-semibold">Tailwind</p>
                        <p className="text-slate-400 bg-black rounded-full w-20 font-semibold">Next.JS</p>
                        <p className="text-sky-500 bg-black rounded-full w-28 font-semibold">PostgreSQL</p>
                        <p className="text-green-500 bg-black rounded-full w-20 font-semibold">Prisma</p>
                    </div>
                </div>
                <div className="relative py-6">
                    <Image src={cambiarImagen ? "/images/proyectos/DonkeyKongApp.jpg" : "/images/proyectos/DonkeyKongApp2.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick} type="button" className="text-slate-300 text-4xl absolute top-52 right-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick} type="button" className="text-slate-300 text-4xl absolute top-52 left-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            <section className="rounded-md md:pt-14">
                <div className="p-2 border-b border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">BERISTAIN Market</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black" href={"https://github.com/GonzaloBeristain/SuperMarketApp"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación orientada a la compra online de productos de supermercado. El objetivo es que los clientes agreguen sus productos y puedan pagar online. La app cuenta con registro y login.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base">
                        <p className="text-red-600 bg-black rounded-full w-16 font-semibold">HTML5</p>
                        <p className="text-blue-600 bg-black rounded-full w-20 font-semibold">Tailwind</p>
                        <p className="text-slate-400 bg-black rounded-full w-20 font-semibold">Next.JS</p>
                        <p className="text-sky-500 bg-black rounded-full w-28 font-semibold">PostgreSQL</p>
                        <p className="text-green-500 bg-black rounded-full w-20 font-semibold">Prisma</p>
                    </div>
                </div>
                <div className="relative py-6">
                    <Image src={cambiarImagen2 ? "/images/proyectos/BeristainMarketApp.jpg" : "/images/proyectos/BeristainMarketApp2.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick2} type="button" className="text-yellow-400 shadow-3xl text-4xl absolute top-52 right-4 hover:text-yellow-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick2} type="button" className="text-yellow-400 shadow-3xl text-4xl absolute top-52 left-4 hover:text-yellow-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            <section className="rounded-md md:pt-14">
                <div className="p-2 border-b border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Presupuesto APP</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black" href={"https://gonzaloberistain.github.io/AppCalcularPresupuesto/"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación de presupuesto. Orientada a agregar un presupuesto económico determinado, y organizar los diversos gastos que se puedan tener.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base">
                        <p className="text-red-600 bg-black rounded-full w-16 font-semibold">HTML5</p>
                        <p className="text-yellow-600 bg-black rounded-full w-24 font-semibold">JavaScript</p>
                        <p className="text-blue-600 bg-black rounded-full w-20 font-semibold">CSS</p>
                    </div>
                </div>
                <div className="relative py-6">
                    <Image src={"/images/proyectos/AppPresupuesto.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                </div>
            </section>

            <section className="rounded-md md:pt-14">
                <div className="p-2 border-b border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">CRUD Banderas APP</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black" href={"https://github.com/GonzaloBeristain/CRUD-Login-React"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">CRUD realizado con React(front) y Node.js(back). Incluye login con JWT, Hash, y .env. Click en Visitar para ver el código en github.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base">
                        <p className="text-red-600 bg-black rounded-full w-16 font-semibold">HTML5</p>
                        <p className="text-yellow-600 bg-black rounded-full w-24 font-semibold">JavaScript</p>
                        <p className="text-blue-600 bg-black rounded-full w-20 font-semibold">CSS</p>
                        <p className="text-sky-600 bg-black rounded-full w-16 font-semibold">React</p>
                        <p className="text-green-600 bg-black rounded-full w-20 font-semibold">Node.Js</p>
                        <p className="text-orange-600 bg-black rounded-full w-24 font-semibold">Sequelize</p>
                        <p className="text-sky-500 bg-black rounded-full w-28 font-semibold">PostgreSQL</p>
                    </div>
                </div>
                <div className="relative py-6">
                    <Image src={cambiarImagen2 ? "/images/proyectos/Banderas1.jpg" : "/images/proyectos/Banderas2.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick2} type="button" className="text-yellow-400 shadow-3xl text-4xl absolute top-52 right-4 hover:text-yellow-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick2} type="button" className="text-yellow-400 shadow-3xl text-4xl absolute top-52 left-4 hover:text-yellow-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            <section className="rounded-md md:pt-14">
                <div className="p-2 border-b border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Temporizador con Alarma APP</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black" href={"https://gonzaloberistain.github.io/TemporizadorConAlarma/"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación de un temporizador con alarma. Se deben ingresar los segundos en el imput, y cuando el contador llegue a 0, sonará una alarma.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base">
                        <p className="text-red-600 bg-black rounded-full w-16 font-semibold">HTML5</p>
                        <p className="text-yellow-600 bg-black rounded-full w-24 font-semibold">JavaScript</p>
                        <p className="text-blue-600 bg-black rounded-full w-20 font-semibold">CSS</p>
                        <p className="text-purple-600 bg-black rounded-full w-24 font-semibold">Bootstrap</p>
                    </div>
                </div>
                <div className="relative py-6">
                    <Image src={"/images/proyectos/Temporizador.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                </div>
            </section>

            <section className="rounded-md md:pt-14">
                <div className="p-2 border-b border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Pizzería APP</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black" href={"https://gonzaloberistain.github.io/PedidoPizza/"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación de una pizzería. El objetivo es que puedas incluir ingredientes, y según más ingredientes sumes, la app te cobrará un extra por cada uno.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base">
                        <p className="text-red-600 bg-black rounded-full w-16 font-semibold">HTML5</p>
                        <p className="text-yellow-600 bg-black rounded-full w-24 font-semibold">JavaScript</p>
                        <p className="text-blue-600 bg-black rounded-full w-20 font-semibold">CSS</p>
                        <p className="text-purple-600 bg-black rounded-full w-24 font-semibold">Bootstrap</p>
                    </div>
                </div>
                <div className="relative py-6">
                    <Image src={"/images/proyectos/Pizzeria.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                </div>
            </section>
        </div>
    )
};