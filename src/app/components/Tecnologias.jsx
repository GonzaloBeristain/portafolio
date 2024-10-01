import Image from "next/image";

export const Tecnologias = () => {
    return (
        <div id="tecnologias" className="flex flex-col justify-center container mx-auto px-4 md:pt-20 xl:w-1/2 xl:px-2 xl:pt-24 xl:h-[calc(100vh-rem)]">
            <h1 className="text-slate-100 text-2xl font-bold py-6 md:text-4xl">Tecnologías</h1>
            <section className="shadow rounded-lg bg-slate-500 pb-5 flex justify-center items-center">
                <ul className="grid grid-cols-2 gap-y-3 gap-x-3 pl-4 pt-5 md:grid-cols-4 md:gap-y-10 md:pl-10">
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/HTML5.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40}/>HTML5</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/CSS.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />CSS</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/JavaScript.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300 rounded-lg" width={40} height={40} />JavaScript</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/React.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />React</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Node.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Node.js</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Next.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Next.js</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/NETcore.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />.NET Core</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/C.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />C#</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Angular.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Angular</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Postgre.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />PostgreSQL</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Mysql.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300 rounded-lg" width={40} height={40} />MySQL</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Typescript.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300 rounded-lg" width={40} height={40} />TypeScript</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Git.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Git</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Github.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />GitHub</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Prisma.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Prisma</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Sequelize.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Sequelize</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Tailwind.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Tailwind</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/MUI.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Material UI</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Bootstrap.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Bootstrap</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/EntityFramework.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300 rounded-lg" width={40} height={40} />Entity Framework</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Express.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Express</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Vite.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Vite</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/ASP.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />ASP.Core</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Jsonwebtoken.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />JWT</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/VisualStudioCode.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />VS Code</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/VS2022.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />VS 2022</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/SQLserver.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />SQL Server</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/PS.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300 rounded-sm" width={40} height={40} />Photoshop</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Figma.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Figma</li>
                    <li className="flex text-white font-semibold items-center justify-start"><Image src="/images/logos/Handlebars.png" alt="foto" className="mx-2 hover:scale-150 transition-transform duration-300" width={40} height={40} />Handlebars</li>
                </ul>
            </section>
        </div>
    )
};