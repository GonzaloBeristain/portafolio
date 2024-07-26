import Image from "next/image";

export const Tecnologias = () => {
    return (
        <div id="tecnologias" className="flex flex-col justify-center container mx-auto px-4 pb-5 md:w-1/2 md:px-2 md:pb-96 md:pt-40 md:h-[calc(100vh-rem)]">
            <h1 className="text-slate-100 text-2xl font-bold py-6 md:text-4xl">Tecnologías</h1>
            <section className="shadow rounded-lg md:h-96 bg-slate-500 pb-5">
                <ul className="grid grid-cols-2 gap-y-3 gap-x-3 pl-4 pt-5 md:pr-12 md:pt-7 md:grid-cols-4 md:gap-8">
                    <li className="flex text-white font-semibold items-center md:pr-2"><Image src="/images/logos/html5.svg" alt="foto" className="md:m-auto mx-2 md:hover:scale-150" width={40} height={40}/>HTML5</li>
                    <li className="flex text-white font-semibold items-center md:pr-7"><Image src="/images/logos/css3.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Css</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/javascript.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />JavaScript</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/react.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />React</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/nodedotjs.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Node.Js</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/nextdotjs.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Next.Js</li>
                    <li className="flex text-white font-semibold items-center md:pl-2"><Image src="/images/logos/handlebarsdotjs.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Handlebars</li>
                    <li className="flex text-white font-semibold items-center md:pl-12"><Image src="/images/logos/postgresql.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />PostgreSQL</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/mysql.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />MySQL</li>
                    <li className="flex text-white font-semibold items-center md:pl-7"><Image src="/images/logos/typescript.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />TypeScript</li>
                    <li className="flex text-white font-semibold items-center md:pr-5"><Image src="/images/logos/angular.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Angular</li>
                    <li className="flex text-white font-semibold items-center md:pr-5"><Image src="/images/logos/git.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Git</li>
                    <li className="flex text-white font-semibold items-center"><Image src="/images/logos/github.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />GitHub</li>
                    <li className="flex text-white font-semibold items-center md:pr-2"><Image src="/images/logos/prisma.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Prisma</li>
                    <li className="flex text-white font-semibold items-center md:pr-1"><Image src="/images/logos/sequelize.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Sequelize</li>
                    <li className="flex text-white font-semibold items-center md:pl-6"><Image src="/images/logos/tailwindcss.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Tailwind</li>
                    <li className="flex text-white font-semibold items-center md:pl-6"><Image src="/images/logos/mui.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Material UI</li>
                    <li className="flex text-white font-semibold items-center md:pl-4"><Image src="/images/logos/bootstrap.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Bootstrap</li>
                    <li className="flex text-white font-semibold items-center md:pl-1"><Image src="/images/logos/adobephotoshop.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />Photoshop</li>
                    <li className="flex text-white font-semibold items-center md:pl-1"><Image src="/images/logos/net.svg" alt="foto" className="md:m-auto mx-2 hover:scale-150" width={40} height={40} />.NET</li>
                </ul>
            </section>
        </div>
    )
};