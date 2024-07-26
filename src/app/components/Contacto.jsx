export const Contacto = () => {
    return (
        <div id="contacto" className="flex flex-col justify-center container mx-auto px-2 pb-96 mt-24 md:w-1/2 md:pt-32 md:h-[calc(100vh-rem)]">
            <div className="pl-1">
                <h1 className="text-slate-100 text-4xl font-bold py-4">Contacto</h1>
                <p className="text-slate-400 font-semibold text-lg text-justify pb-1">Gonzalo Beristain Araya</p>
                <p className="text-slate-400 font-semibold text-lg text-justify pb-1">ga_beristainn@hotmail.com</p>
                <p className="text-slate-400 font-semibold text-lg text-justify pb-1">Santiago, Chile.</p>
            </div>
            <div className="w-40">
                <a href="mailto:ga_beristainn@hotmail.com" className="text-lg px-2 bg-black rounded-md text-purple-500 font-semibold hover:text-purple-800 transition-colors duration-200 text-center">
                Enviar correo
                </a>
            </div>
        </div>
    )
};