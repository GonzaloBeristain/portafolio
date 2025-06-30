//Componentes
import { Inicio } from "@/app/components/Inicio.jsx";
import { SobreMi } from "@/app/components/SobreMi.jsx";
import { Tecnologias } from "@/app/components/Tecnologias.jsx";
import { Proyectos } from "@/app/components/Proyectos.jsx";
import { Contacto } from "@/app/components/Contacto.jsx";

export default function Home() {
  return (
    <main>
      <section id="inicio">
        <Inicio />
      </section>
      <section id="sobremi">
        <SobreMi />
      </section>
      <section id="tecnologias">
        <Tecnologias />
      </section>
      <section id="proyectos">
        <Proyectos />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
    </main>
  );
};