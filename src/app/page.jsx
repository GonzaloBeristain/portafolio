//Componentes
import { Inicio } from "@/app/components/Inicio.jsx";
import { SobreMi } from "@/app/components/SobreMi.jsx";
import { Tecnologias } from "@/app/components/Tecnologias.jsx";
import { Proyectos } from "@/app/components/Proyectos.jsx";
import { Contacto } from "@/app/components/Contacto.jsx";

export default function Home() {
  return (
    <main>
      <div>
        <Inicio />
      </div>
      <div>
        <SobreMi />
      </div>
      <div>
        <Tecnologias />
      </div>
      <div>
        <Proyectos />
      </div>
      <div>
        <Contacto />
      </div>
    </main>
  );
};