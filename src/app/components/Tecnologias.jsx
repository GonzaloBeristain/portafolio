import Image from "next/image";

export const Tecnologias = () => {
    return (
        <div id="tecnologias" className="flex flex-col justify-center container mx-auto px-4 pb-5 md:w-1/2 md:px-2 md:pb-96 md:pt-40 md:h-[calc(100vh-rem)]">
            <h1 className="text-slate-100 text-2xl font-bold py-6 md:text-4xl">Tecnologías</h1>
            <section className="shadow rounded-lg md:h-auto bg-slate-500 pb-5">
                <ul className="grid grid-cols-2 gap-y-3 gap-x-3 pl-4 pt-5 md:pr-12 md:pt-7 md:grid-cols-4 md:gap-8">
                    <li className="flex text-white font-semibold items-center md:pr-2"><Image src="/images/logos/HTML5.png" alt="foto" className="md:m-auto mx-2 md:hover:scale-150" width={40} height={40}/>HTML5</li>
                    <li className="flex text-white font-semibold items-center md:pr-7"><Image src="/images/logos/CSS.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Css</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/JavaScript.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />JavaScript</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/React.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />React</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/Node.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Node.Js</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/Next.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Next.Js</li>
                    <li className="flex text-white font-semibold items-center md:pl-1"><Image src="/images/logos/NETcore.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />.NET Core</li>
                    <li className="flex text-white font-semibold items-center md:pl-1"><Image src="/images/logos/C.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />C sharp</li>
                    <li className="flex text-white font-semibold items-center md:pl-9"><Image src="/images/logos/Java.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Java (Básico)</li>
                    <li className="flex text-white font-semibold items-center md:pl-9"><Image src="/images/logos/Postgre.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />PostgreSQL</li>
                    <li className="flex text-white font-semibold items- md:pr-4"><Image src="/images/logos/Mysql.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />MySQL</li>
                    <li className="flex text-white font-semibold items-center md:pl-7"><Image src="/images/logos/Typescript.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />TypeScript</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/Angular.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Angular</li>
                    <li className="flex text-white font-semibold items-center md:pr-8"><Image src="/images/logos/Git.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Git</li>
                    <li className="flex text-white font-semibold items-center md:pr-5"><Image src="/images/logos/Github.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />GitHub</li>
                    <li className="flex text-white font-semibold items-center md:pr-2"><Image src="/images/logos/Prisma.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Prisma</li>
                    <li className="flex text-white font-semibold items-center md:pl-3"><Image src="/images/logos/Sequelize.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Sequelize</li>
                    <li className="flex text-white font-semibold items-center md:pl-3"><Image src="/images/logos/Tailwind.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Tailwind</li>
                    <li className="flex text-white font-semibold items-center md:pl-3"><Image src="/images/logos/MUI.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Material UI</li>
                    <li className="flex text-white font-semibold items-center md:pl-4"><Image src="/images/logos/Bootstrap.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Bootstrap</li>
                    <li className="flex text-white font-semibold items-center md:pl-1"><Image src="/images/logos/EntityFramework.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />EntityFr.</li>
                    <li className="flex text-white font-semibold items-center md:pl-1"><Image src="/images/logos/Express.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Express</li>
                    <li className="flex text-white font-semibold items-center md:pr-9"><Image src="/images/logos/Vite.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Vite</li>
                    <li className="flex text-white font-semibold items-center md:pl-4"><Image src="/images/logos/ASP.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />ASP.Core</li>
                    <li className="flex text-white font-semibold items-center md:pl-5"><Image src="/images/logos/Jsonwebtoken.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />J W Token</li>
                    <li className="flex text-white font-semibold items-center md:pl-7"><Image src="/images/logos/SpringBoot.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />SpringBoot</li>
                    <li className="flex text-white font-semibold items-center md:pl-1"><Image src="/images/logos/VisualStudioCode.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />VS Code</li>
                    <li className="flex text-white font-semibold items-center md:pl-1"><Image src="/images/logos/VS2022.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />VS 2022</li>
                    <li className="flex text-white font-semibold items-center md:pl-5"><Image src="/images/logos/SQLserver.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />SQL Server</li>
                    <li className="flex text-white font-semibold items-center md:pl-6"><Image src="/images/logos/PS.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Photoshop</li>
                    <li className="flex text-white font-semibold items-center md:pl-7"><Image src="/images/logos/Handlebars.png" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Handlebars</li>

                </ul>
            </section>
        </div>
    )
};