import Image from "next/image"
import Blog from '../../../app/(dashboard)/blog/page';
import { PageProps } from '../../../../.next/types/app/layout';


export const UpdatesPage = () => {
  return (
    <>
        <div className="w-full h-full ">
            <div className="w-full flex flex-col justify-center">
                <h2 className="relative font-mono text-4xl md:text-6xl text-gray-300 hover:text-violet-400 duration-700 bg-clip-text text-center ">Actualizaciones</h2>
                <h3 className="pt-5 text-center text-[1em] text-violet-200">Pronto se encontraran nuevas actualizaciones asi como nuevos productos para potenciar tu negocio.</h3>

            </div>
            <div className="w-full h-auto flex flex-col text-gray-200 py-10">
                  
                  <div className="w-full h-auto p-[3%]">
                    <div className="w-[300px] h-[300px] bg-black border-[1px] border-solid border-gray-800 rounded-xl flex flex-col items-center p-5">
                        <h3 className="py-4 text-xl text-violet-400">Blog</h3>
                        <p>En este blog tu puedes encontrar articulos acerca de emprendimientos, buenas practicas para sitios web, herramientas, etc</p>
                    </div>

                  </div>
                  <div className="w-full h-auto p-[3%] flex justify-end">
                    <div className="w-[300px] h-[300px] bg-black border-[1px] border-solid border-gray-800 rounded-xl flex flex-col items-center p-5">
                        <h3 className="py-4 text-xl text-violet-400">Nuevos paquetes redes sociales</h3>
                        <p>Les presentaremos nuestro nuevo producto de redes sociales con diferentes planes para estar al dia en Instagram y Facebook </p>
                    </div>

                  </div>
                  <div className="w-full h-auto p-[3%]">
                    <div className="w-[300px] h-[300px] bg-black border-[1px] border-solid border-gray-800 rounded-xl flex flex-col items-center p-5">
                        <h3 className="py-4 text-xl text-violet-400">Ingresar con usuario y contraseña, realizar pagos</h3>
                        <p>Para facilidad de clientes podras tener tu propio Usuario y Contraseña de Lumava para estar al pendiente de nuevas actualizaciones y realizar pagos de tus pedidos</p>
                    </div>

                  </div>
                  <div className="w-full h-auto p-[3%] flex justify-end">
                    <div className="w-[300px] h-[300px] bg-black border-[1px] border-solid border-gray-800 rounded-xl flex flex-col items-center p-5">
                        <h3 className="py-4 text-xl text-violet-400">Nuevo paquete emprendedores</h3>
                        <p>Este plan se basara solo en los nuevos emprendedores que no tienen un sitio web, ayudandolos con facilidades de pago, manejo de diseños, redes sociales y administracion de sitios web</p>
                    </div>

                  </div>

            </div>
        </div>
    </>
  )
}
