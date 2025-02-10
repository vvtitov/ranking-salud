import { Button } from "./ui/button";
import Image from "next/image";
export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Image
        src="/chart-hero.png"
        alt="Hero"
        width={800}
        height={800}
        className="max-w-md rotate-180"
      />

      <div className="flex flex-col max-w-md gap-5">
        <h1 className="text-4xl font-bold">RANKING SALUD</h1>
        <h2 className="text-2xl">
          Rankeamos los servicios medicos de todo el mundo segun la valoracion
          de los usuarios para ayudarte a tomar mejores decisiones.
        </h2>
        <p className="text-md">
          Somos la plataforma opensource que te permite puntuar servicios,
          publicar tu opinion y obtener informacion transparente sobre servicios
          medicos basado en experiencias reales de otras personas.
        </p>
        <div className="flex flex-row gap-4">
          <Button variant="outline">Explorar</Button>
          <Button>Registrarme</Button>
        </div>
      </div>
    </div>
  );
}
