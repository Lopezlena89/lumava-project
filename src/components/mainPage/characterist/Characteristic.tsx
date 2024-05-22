import Link from "next/link"


export const Characteristic = () => {
  return (
    <>
        <div className="w-full h-full flex flex-col justify-center items-center text-gray-200">
            <div className="w-[80%] h-[50px] flex justify-center items-center border-b-2 opacity-85 border-solit border-gray-200">
                    <h3><Link href="/web-developmen" className=" text-2xl text-center hover:text-violet-500  duration-1000">Desarrollo web</Link></h3>
            </div>
            <div className="w-[70%] h-full  p-5">
                <ul className="w-full list-disc">
                    <li>Planificación</li>
                    <li>Diseño</li>
                    <li>Desarrollo</li>
                    <li>Contenido</li>
                    <li>Pruebas y revisión</li>
                    <li>Lanzamiento</li>
                    <li>Mantenimiento</li>
                </ul>
            </div>
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center text-gray-200">
            <div className="w-[80%] h-[50px] flex justify-center items-center border-b-2 opacity-85 border-solit border-gray-200">
                    <h3><Link href="#" className=" text-2xl text-center hover:text-violet-500  duration-1000">Diseño & Branding</Link></h3>
            </div>
            <div className="w-[70%] h-full  p-5">
                <ul className="w-full list-disc">
                    <li>Investigación y análisis</li>
                    <li>Definición de la estrategia de branding</li>
                    <li>Diseño del logotipo</li>
                    <li>Desarrollo de la identidad visual</li>
                    <li>Creación de materiales de marketing y comunicación</li>
                    <li>Implementación y lanzamiento</li>
                    <li>Evaluación y ajuste</li>
                </ul>
            </div>
        </div>
    </>
  )
}
