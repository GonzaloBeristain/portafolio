import Image from "next/image";
import Link from "next/link";

export const Inicio = () => {
    return (
        <div id="inicio" className="flex justify-center items-center pb-72 md:pt-52 md:h-[calc(100vh-0rem)]">
            <div className="px-2 gap-y-2 pt-16 flex flex-col md:gap-y-0 md:mx-auto md:p-0 md:px-0">
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
                        <Link href={"https://drive.google.com/file/d/1_IMCLJMUSwVIf6ZAoypsrQPQhPY8zfPT/view?usp=sharing"} className="text-base p-1 font-medium bg-slate-900 text-white rounded-xl hover:text-slate-700 duration-300 transition-colors shadow">
                            Descargar CV
                        </Link>
                    </div>
                </section>
            </div>
            <div className="mr-56 hidden md:block">
                <Image src="/images/Img-inicio.jpg" alt="foto" className="m-auto rounded-full" width={500} height={400} />
            </div>
        </div>
        
    )
};