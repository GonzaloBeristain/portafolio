import Image from "next/image";
import Link from "next/link";

export const Inicio = () => {
    return (
        <div id="inicio" className="flex flex-col justify-center items-center pb-56 pt-20 md:pt-64 md:pb-80 lg:pb-56 lg:pt-48 lg:flex-row xl:pb-72 xl:pt-52 xl:h-[calc(100vh-0rem)]">
            {/* Perfil */}
            <div className="px-2 gap-y-2 pt-8 flex flex-col md:pt-16 md:gap-y-0 md:mx-auto md:p-0 md:px-0 lg:pl-10">
                <section className="flex flex-col gap-y-1 py-1">
                    <h1 className="text-3xl font-bold text-slate-100 md:text-5xl">Gonzalo Beristain Araya</h1>
                    <h2 className="text-2xl font-bold text-slate-400 md:text-4xl">Desarrollador FullStack</h2>
                </section>
                <section className="flex gap-x-6 center text-white p-1 rounded-md bg-slate-600 w-64 items-center">
                    <div className="hover:bg-slate-800 duration-300 transition-colors shadow cursor-pointer rounded-full">
                        <Link href={"https://github.com/GonzaloBeristain"}>
                            <Image src="/images/logos/github.svg" alt="foto" className="m-auto" width={40} height={40}/>
                        </Link>
                    </div>
                    <div className="hover:bg-slate-800 duration-300 transition-colors shadow cursor-pointer">
                    <Link href={"https://www.linkedin.com/in/gonzalo-beristain"}>
                        <Image src="/images/logos/linkedin.svg" alt="foto" className="m-auto" width={40} height={40}/>
                    </Link>
                    </div>
                    <div>
                        <Link href={"https://docs.google.com/document/d/1CUUCm4xbvYxhEodzwTBaL-zo9XFb57zS/edit?usp=sharing&ouid=109881700263937680379&rtpof=true&sd=true"} className="text-base p-1 font-medium bg-slate-900 text-white rounded-xl hover:text-slate-700 duration-300 transition-colors shadow">
                            Descargar CV
                        </Link>
                    </div>
                </section>
            </div>
            {/* Imagen perfin */}
            <div className="pt-20 lg:pr-12 xl:pt-0 xl:mr-56">
                <Image src="/images/Img-inicio.jpg" alt="foto" className="m-auto rounded-full px-4 md:px-0" width={500} height={400} />
            </div>
        </div>
        
    )
};