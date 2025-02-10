import { Button } from "@/src/components/ui/button";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative mx-auto flex flex-col items-left max-w-md w-auto gap-4">
        <h1 className="text-6xl font-bold">RANKING SALUD</h1>
        <h2 className="text-2xl">
          Rankeamos los servicios medicos de todo el mundo por diferentes
          parametros segun la valoracion de los usuarios para ayudarte a
          encontrar la mejor opcion.
        </h2>
        <p className="text-lg">
          Somos la plataforma opensourse que te permite opinar y obtener
          informacion basada en experiencias de otras personas sobre los
          servicios medicos para poder tomar mejores deciciones para tu salud y
          bolsillo.
        </p>
        <div className="flex flex-row gap-4">
          <Button>Registrarme</Button>
        </div>
      </div>
    </div>
  );
}
