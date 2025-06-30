// Icons
import { IoMdPerson, IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

export const Contacto = () => {
    return (
        <div id="contacto" className="flex flex-col justify-center container mx-auto px-2 mt-72 pb-72 md:mt-24 md:pb-96 md:w-1/2 md:pt-32 md:h-[calc(100vh-rem)]">
            <div className="text-center md:text-justify md:pl-1">
                <h1 className="text-slate-100 text-4xl font-bold py-4"><IoMdMail className='inline-block mb-1 mr-1' /> Contacto</h1>
                <p className="text-slate-400 font-semibold text-lg pb-1"><IoMdPerson className='inline-block mb-1 mr-1' /> Gonzalo Beristain Araya</p>
                <p className="text-slate-400 font-semibold text-lg pb-1"><IoMdMail className='inline-block mb-1 mr-1' /> ga_beristainn@hotmail.com</p>
                <p className="text-slate-400 font-semibold text-lg pb-1"><FaLocationDot className='inline-block mb-1 mr-1' /> Santiago, Chile.</p>
            </div>
            <div className="w-auto text-center transition-all md:w-36 md:text-justify md:hover:translate-x-1 duration-300">
                <a href="mailto:ga_beristainn@hotmail.com" className="text-lg px-2 bg-black rounded-md text-purple-500 font-semibold hover:text-purple-800 text-center transition-colors duration-300">
                Enviar correo
                </a>
            </div>
        </div>
    )
};