"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const Proyectos = () => {
    const [cambiarImagen, setCambiarImagen] = useState(true);
    const [cambiarImagen2, setCambiarImagen2] = useState(true);
    const [cambiarImagen3, setCambiarImagen3] = useState(true);
    const [cambiarImagen4, setCambiarImagen4] = useState(true);
    const [cambiarImagen5, setCambiarImagen5] = useState(true);
    const [cambiarImagen6, setCambiarImagen6] = useState(true);

    const handleClick = (setter) => () => {
        setter(prev => !prev);
    };
    
    return (
        <div id="proyectos" className="flex flex-col justify-center container mx-auto px-4 md:pt-20 xl:w-1/2 xl:px-2 xl:pb-40 xl:mt-11 xl:pt-20 xl:h-[calc(100vh-rem)]">
            <h1 className="text-slate-100 text-2xl font-bold py-6 md:text-4xl">Proyectos</h1>
            
            {/* Dragon Ball APP */}
            <section className="rounded-md pb-16 md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Dragon Ball App </h1>
                            <div className="flex gap-x-3">
                                <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800  md:text-lg md:bg-black transition-all duration-500 md:hover:-translate-x-2" href={"https://github.com/GonzaloBeristain/DragonBallAPP"}>
                                    Código
                                </Link>
                                <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-all duration-500 md:text-lg md:bg-black md:hover:-translate-x-2" href={"https://gonzaloberistain.github.io/DragonBallAPP/"}>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Proyecto creado en Angular 17 utilizando la API de DragonBall. Se añadieron diversas animaciones en botones e imágenes utilizando Tailwind.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-xs md:text-base md:-ml-2 md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-red-600 bg-black rounded-full w-16 font-semibold transition-transform duration-500 md:hover:scale-125">HTML5</p>
                        <p className="text-yellow-600 bg-black rounded-full w-24 font-semibold transition-transform duration-500 md:hover:scale-125">JavaScript</p>
                        <p className="text-red-400 bg-black rounded-full w-20 font-semibold transition-transform duration-500 md:hover:scale-125">Angular</p>
                        <p className="text-blue-600 bg-black rounded-full w-20 font-semibold transition-transform duration-500 md:hover:scale-125">Tailwind</p>
                        <p className="text-slate-100 bg-black rounded-full w-24 font-semibold transition-transform duration-500 md:hover:scale-125">GitHub-pg</p>
                    </div>
                </div>
                <div className="relative mb-7 mt-2">
                    <Image src={cambiarImagen ? "/images/proyectos/AppDragonBall1.jpg" : "/images/proyectos/AppDragonBall2.jpg"} alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick(setCambiarImagen)} type="button" className="text-slate-300 text-4xl absolute top-44 md:top-36 lg:top-52 right-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick(setCambiarImagen)} type="button" className="text-slate-300 text-4xl absolute top-44 md:top-36 lg:top-52 left-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* DonkeyKong APP */}
            <section className="rounded-md pb-16 md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Donkey Kong App </h1>
                            <div className="flex gap-x-3">
                                <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://github.com/GonzaloBeristain/AppDK-NextJS"}>
                                    Código
                                </Link>
                                <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://app-dk-next-js.vercel.app/"}>
                                    Visitar
                                </Link>
                            </div>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación orientada a contar la historia de este popular juego, además de mostrar sus personajes y todas las entregas que ha tenido a lo largo del tiempo.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-red-600 bg-black rounded-full logo-scale w-16 font-semibold">HTML5</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-20 font-semibold">Tailwind</p>
                        <p className="text-slate-400 bg-black rounded-full logo-scale w-20 font-semibold">Next.JS</p>
                        <p className="text-sky-500 bg-black rounded-full logo-scale w-28 font-semibold">PostgreSQL</p>
                        <p className="text-green-500 bg-black rounded-full logo-scale w-20 font-semibold">Prisma</p>
                    </div>
                </div>
                <div className="relative mb-6 mt-2">
                    <Image src={cambiarImagen2 ? "/images/proyectos/DonkeyKongApp.jpg" : "/images/proyectos/DonkeyKongApp2.jpg"} alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick(setCambiarImagen2)} type="button" className="text-slate-300 text-4xl absolute top-44 md:top-36 lg:top-52 right-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick(setCambiarImagen2)} type="button" className="text-slate-300 text-4xl absolute top-44 md:top-36 lg:top-52 left-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Futbol APP */}
            <section className="rounded-md pb-16 md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Futbol App</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://github.com/GonzaloBeristain/FutbolApp"}>
                                Código
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación orientada al mundo del futbol. La finalidad es realizar un CRUD utilizando VisualStudio 2022 con ASP-CORE y guardando la información en una base de datos. Se armó una base de datos con tablas relacionales a través de llaves foráneas.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-xs md:-ml-2 md:text-base md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-red-600 bg-black rounded-full logo-scale w-16 font-semibold">.NET</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-24 font-semibold">ASPCore</p>
                        <p className="text-slate-400 bg-black rounded-full logo-scale w-10 font-semibold">C#</p>
                        <p className="text-sky-500 bg-black rounded-full logo-scale w-24 font-semibold">SQLServer</p>
                        <p className="text-green-500 bg-black rounded-full logo-scale w-36 font-semibold">EntityFramework</p>
                        <p className="text-slate-400 bg-black rounded-full logo-scale w-14 font-semibold">MVC</p>
                    </div>
                </div>
                <div className="relative mb-6 mt-2">
                    <Image src={cambiarImagen3 ? "/images/proyectos/appfutbol1.jpg" : "/images/proyectos/appfutbol2.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick(setCambiarImagen3)} type="button" className="text-slate-300 text-4xl absolute top-44 md:top-36 lg:top-52 right-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick(setCambiarImagen3)} type="button" className="text-slate-300 text-4xl absolute top-44 md:top-36 lg:top-52 left-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Beristain Market */}
            <section className="rounded-md pb-16 md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">BERISTAIN Market</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://github.com/GonzaloBeristain/SuperMarketApp"}>
                                Código
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación orientada a la compra online de productos de supermercado. El objetivo es que los clientes agreguen sus productos y puedan pagar online. La app cuenta con registro y login.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-red-600 bg-black rounded-full logo-scale w-16 font-semibold">HTML5</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-20 font-semibold">Tailwind</p>
                        <p className="text-slate-400 bg-black rounded-full logo-scale w-20 font-semibold">Next.JS</p>
                        <p className="text-sky-500 bg-black rounded-full logo-scale w-28 font-semibold">PostgreSQL</p>
                        <p className="text-green-500 bg-black rounded-full logo-scale w-20 font-semibold">Prisma</p>
                    </div>
                </div>
                <div className="relative mb-6 mt-2">
                    <Image src={cambiarImagen4 ? "/images/proyectos/BeristainMarketApp.jpg" : "/images/proyectos/BeristainMarketApp2.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick(setCambiarImagen4)} type="button" className="text-white shadow-3xl text-4xl absolute top-44 md:top-36 lg:top-52 right-4 hover:text-yellow-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick(setCambiarImagen4)} type="button" className="text-white shadow-3xl text-4xl absolute top-44 md:top-36 lg:top-52 left-4 hover:text-yellow-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Login Asp/NextJS */}
            <section className="rounded-md pb-16 md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Login Asp/Nextjs</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://github.com/GonzaloBeristain/LoginAspNextjs.git"}>
                                Código
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Se realiza un proyecto orientado a un login con autenticación. Se trabaja el backend con .NET CORE, y el frontend con NextJs y Tailwind. Además, se agrega un formulario de registro. El login crea un token, y nos envía hacía la vista de perfil según la id del usuario guardado en una base de datos SQLServer. La constraseña fue hasheada con Bcrypt.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-xs md:-ml-2 md:text-base md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-slate-400 bg-black rounded-full logo-scale w-20 font-semibold">Next.JS</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-20 font-semibold">ASPCore</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-20 font-semibold">Tailwind</p>
                        <p className="text-sky-500 bg-black rounded-full logo-scale w-24 font-semibold">SQLServer</p>
                        <p className="text-red-400 bg-black rounded-full logo-scale w-20 font-semibold">JWToken</p>
                    </div>
                </div>
                <div className="relative mb-6 mt-2">
                    <Image src={cambiarImagen5 ? "/images/proyectos/login.png" : "/images/proyectos/perfil.png"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick(setCambiarImagen5)} type="button" className="text-slate-300 text-4xl absolute top-44 md:top-36 lg:top-52 right-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick(setCambiarImagen5)} type="button" className="text-slate-300 text-4xl absolute top-44 md:top-36 lg:top-52 left-4 hover:text-slate-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Presupuesto APP */}
            <section className="rounded-md md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Presupuesto APP</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://gonzaloberistain.github.io/AppCalcularPresupuesto/"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación de presupuesto. Orientada a agregar un presupuesto económico determinado, y organizar los diversos gastos que se puedan tener.</p>
                    </div>
                    <div className="p-1 text-center flex justify-center gap-x-2 text-sm md:-ml-2 md:text-base md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-red-600 bg-black rounded-full logo-scale w-16 font-semibold">HTML5</p>
                        <p className="text-yellow-600 bg-black rounded-full logo-scale w-24 font-semibold">JavaScript</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-20 font-semibold">CSS</p>
                    </div>
                </div>
                <div className="relative mb-6 mt-2">
                    <Image src={"/images/proyectos/AppPresupuesto.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                </div>
            </section>

            {/* CRUD Banderas APP */}
            <section className="rounded-md pb-16 md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">CRUD Banderas APP</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://github.com/GonzaloBeristain/CRUD-Login-React"}>
                                Código
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">CRUD realizado con React(front) y Node.js(back). Incluye login con JWT, Hash, y .env. Click en Visitar para ver el código en github.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-xs md:-ml-2 md:text-base md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-red-600 bg-black rounded-full logo-scale w-16 font-semibold">HTML5</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-20 font-semibold">CSS</p>
                        <p className="text-sky-600 bg-black rounded-full logo-scale w-16 font-semibold">React</p>
                        <p className="text-green-600 bg-black rounded-full logo-scale w-20 font-semibold">Node.Js</p>
                        <p className="text-orange-600 bg-black rounded-full logo-scale w-24 font-semibold">Sequelize</p>
                        <p className="text-sky-500 bg-black rounded-full logo-scale w-28 font-semibold">PostgreSQL</p>
                    </div>
                </div>
                <div className="relative mb-6 mt-2">
                    <Image src={cambiarImagen6 ? "/images/proyectos/Banderas1.jpg" : "/images/proyectos/Banderas2.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                    <button onClick={handleClick(setCambiarImagen6)} type="button" className="text-white md:text-yellow-400 shadow-3xl text-4xl absolute top-44 md:top-36 lg:top-52 right-4 hover:text-yellow-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </button>
                    <button onClick={handleClick(setCambiarImagen6)} type="button" className="text-white md:text-yellow-400 shadow-3xl text-4xl absolute top-44 md:top-36 lg:top-52 left-4 hover:text-yellow-500 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Temporizador APP */}
            <section className="rounded-md md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Temporizador con Alarma APP</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://gonzaloberistain.github.io/TemporizadorConAlarma/"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación de un temporizador con alarma. Se deben ingresar los segundos en el imput, y cuando el contador llegue a 0, sonará una alarma.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-red-600 bg-black rounded-full logo-scale w-16 font-semibold">HTML5</p>
                        <p className="text-yellow-600 bg-black rounded-full logo-scale w-24 font-semibold">JavaScript</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-20 font-semibold">CSS</p>
                        <p className="text-purple-600 bg-black rounded-full logo-scale w-24 font-semibold">Bootstrap</p>
                    </div>
                </div>
                <div className="relative mb-6 mt-2">
                    <Image src={"/images/proyectos/Temporizador.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                </div>
            </section>

            {/* Pizzería APP */}
            <section className="border-b border-b-slate-500 md:pb-0">
                <div className="p-2 border-t border-slate-500 md:flex md:justify-between md:items-center md:gap-x-8">
                    <div>
                        <div className="flex justify-between items-center py-1">
                            <h1 className="text-slate-300 font-semibold text-xl md:text-2xl">Pizzería APP</h1>
                            <Link className="text-base bg-black rounded-md px-2 text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 md:text-lg md:bg-black md:custom-transition" href={"https://gonzaloberistain.github.io/PedidoPizza/"}>
                                Visitar
                            </Link>
                        </div>
                        <p className="text-slate-400 font-semibold text-justify pb-1 md:text-lg">Aplicación de una pizzería. El objetivo es que puedas incluir ingredientes, y según más ingredientes sumes, la app te cobrará un extra por cada uno.</p>
                    </div>
                    <div className="p-1 text-center flex gap-x-2 text-sm md:-ml-2 md:text-base md:flex-col md:items-center md:gap-y-2 lg:items-start lg:gap-y-0 lg:flex-row">
                        <p className="text-red-600 bg-black rounded-full logo-scale w-16 font-semibold">HTML5</p>
                        <p className="text-yellow-600 bg-black rounded-full logo-scale w-24 font-semibold">JavaScript</p>
                        <p className="text-blue-600 bg-black rounded-full logo-scale w-20 font-semibold">CSS</p>
                        <p className="text-purple-600 bg-black rounded-full logo-scale w-24 font-semibold">Bootstrap</p>
                    </div>
                </div>
                <div className="relative mb-6 mt-2">
                    <Image src={"/images/proyectos/Pizzeria.jpg"}   alt="foto" className="m-auto rounded-md" width={1200} height={1200}/>
                </div>
            </section>

        </div>
    )
};