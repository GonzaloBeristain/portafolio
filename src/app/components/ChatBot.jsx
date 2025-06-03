"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, X } from "lucide-react";

const questions = [
    { question: "¿Qué tecnologías manejo?", answer: "Domino JavaScript, TypeScript, React, Next.js, .NET, Angular, SQL, Python, R, entre otros." },
    { question: "¿En qué áreas tengo experiencia?", answer: "Tengo experiencia en desarrollo web full stack." },
    { question: "¿Dónde puedo ver tu trabajo?", answer: "Puedes ver mi código en mi GitHub y mis proyectos en este portafolio, seleccionando la pestaña 'Proyectos' en el menú superior." },
    { question: "¿Puedo descargar tu CV?", answer: "Sí, puedes descargar mi CV desde la pestaña 'Inicio', y haciendo click en el botón 'Descargar CV'" },
    { question: "¿Como puedo contactarte?", answer: "Puedes contactarme por Linkedin o directamente en mi correo eléctronico, el cual se encuentra en la pestaña 'Contacto'." }
];

export default function ChatBot() {
    const [open, setOpen] = useState(false);
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    return (
    <div className="fixed bottom-5 right-5 z-50 mb-32 mr-1 lg:mb-0 lg:mr-0">
        {!open && (
        <button
            className="bg-slate-700 text-white p-3 rounded-full shadow-lg hover:bg-slate-900 transition-all duration-500"
            onClick={() => setOpen(true)}
        >
            <Bot size={35} />
        </button>
        )}

        {open && (
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="bg-white shadow-xl rounded-xl p-4 w-80 border border-gray-200"
        >
            <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold">🤖 Pregúntame</h3>
            <button onClick={() => setOpen(false)}>
                <X size={20} />
            </button>
            </div>
            <div className="space-y-2">
            {questions.map((q, index) => (
                <button
                key={index}
                className="w-full text-left p-2 bg-gray-100 rounded-md hover:bg-gray-200 transition"
                onClick={() => setSelectedQuestion(q.answer)}
                >
                {q.question}
                </button>
            ))}
            </div>
            {selectedQuestion && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
                <p>{selectedQuestion}</p>
            </div>
            )}
        </motion.div>
        )}
    </div>
    );
}
