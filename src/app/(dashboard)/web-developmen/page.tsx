import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import { CiCircleChevDown } from "react-icons/ci";

export default function WebPage() {
  return (
    <>
      <main className="principal w-full h-auto md:h-screen md:pt-16  overflow-hidden  ">
        <SvgComponent />
        <SvgComponent1/>
       
        <section className="w-full h-full flex flex-col items-center mb-10 md:mb-0">
            <div className="w-full h-full grid sm:grid-cols-4 md:grid-cols-6 md:grid-rows-4">
                <div className="w-full h-[300px] md:h-full p-2  row-span-2 col-span-2 relative order-1 md:order-none">
                  
                    <div className="w-full h-full flex flex-col card items-center justify-center  rounded-lg border border-purple-400">
                        
                    </div> 

                </div>
               
                <div className="w-full h-[200px] md:h-full p-2  row-span-1 col-span-2 relative order-3 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full   flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000  z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">1.Planificacion</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full  absolute px-5 flex flex-col justify-center rounded-lg text-[13px] md:text-[10px] lg:text-[13px]  ">
                      <p className="text-purple-200 ">1.-Define el propósito y los objetivos de la página web.</p>
                      <p className="text-purple-200 ">2.-Identifica a tu audiencia objetivo y sus necesidades.</p>
                      <p className="text-purple-200 ">3.-Realiza una investigación de mercado y análisis de la competencia.</p>
                      <p className="text-purple-200 ">4.-Elabora un plan de proyecto que incluya presupuesto, cronograma y recursos necesarios.</p>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2 row-span-1 md:row-span-2 col-span-2 relative  order-4 md:order-none">
                  
                  <div  className="h-full w-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">2.Diseño</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute px-5 flex flex-col justify-center rounded-lg text-[12px] md:text-[13px] lg:text-md ">
                      <p className="text-purple-200 ">1.-Crea un esquema o wireframe de la página para visualizar la estructura y disposición de los elementos.</p>
                      <p className="text-purple-200 ">2.-Diseña el aspecto visual de la página web, incluyendo el diseño de la interfaz de usuario (UI) y la experiencia del usuario (UX).</p>
                      <p className="text-purple-200 ">3.-Desarrolla un diseño responsivo que se adapte a diferentes dispositivos y tamaños de pantalla.</p>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[300px] md:h-full  px-2 flex justify-center items-center row-span-2 col-span-2 relative order-2 md:order-none">
                  
                    <div className="w-full h-[97%] flex flex-col p-5 card items-center justify-center  rounded-lg border border-purple-400">
                        <div 
                            className="text-purple-200 font-sans font-semibold animation-title "
                        >
                            <h3 className="text-center text-4xl flex flex-col"> 
                                    <span className="bg-gradient-to-r from-purple-200 via-purple-400  to-purple-800
                                      text-transparent bg-clip-text">Desarrollo de tu pagina web</span>
                                    
                            </h3>
                        </div>
                        <div 
                            className="text-purple-200 font-sans font-semibold text-sm  mt-5 animation-title-dos"
                        >
                            <p className="text-center">{`"Transforma tu Visión en Realidad Digital:`} </p>
                            <p className="text-center">{` Tu Sitio Web, Tu Éxito. ¡El Futuro Online Comienza Aquí!"`}</p>
                        </div>
                    </div> 
                  
                </div>
                <div className="w-full h-[200px] md:h-full p-2  col-span-2 relative order-9 md:order-none">
                  
                  <div  className="w-full h-full  top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">7.Mantenimiento</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex px-5 flex-col justify-center rounded-lg  text-[13px] md:text-[10px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Realiza copias de seguridad periódicas del sitio web y su base de datos.</p>
                      <p className="text-purple-200 ">2.-Monitorea el rendimiento y la seguridad del sitio web, aplicando actualizaciones y parches según sea necesario.</p>
                      <p className="text-purple-200 ">3.-Agrega nuevo contenido y funcionalidades según evolucionen las necesidades del negocio o la audiencia.</p>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2 col-span-2 relative order-5 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">3.Desarrollo</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex px-5 flex-col justify-center rounded-lg text-[10px] md:text-[0.5em]">
                      <p className="text-purple-200 ">1.-Elige la tecnología y las herramientas adecuadas para el desarrollo web (por ejemplo, HTML, CSS, JavaScript, etc.).</p>
                      <p className="text-purple-200 ">2.-Codifica la página web según los diseños y especificaciones previamente establecidos.</p>
                      <p className="text-purple-200 ">3.-Implementa funcionalidades interactivas y dinámicas, como formularios de contacto, carritos de compra, etc.</p>
                      <p className="text-purple-200 ">4.-Realiza pruebas de compatibilidad para garantizar que la página se vea bien y funcione correctamente en diferentes navegadores y dispositivos.</p>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2   col-span-2 relative order-8 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">6.Lanzamiento</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex flex-col px-5 justify-center  rounded-lg text-[13px] md:text-[10px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Prepara el servidor y configura el dominio para alojar la página web.</p>
                      <p className="text-purple-200 ">2.-Sube todos los archivos y contenido al servidor.</p>
                      <p className="text-purple-200 ">3.-Realiza pruebas finales para asegurarte de que todo funcione correctamente en el entorno de producción.</p>
                      
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2 col-span-2 relative order-7 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">5.Pruebas y revisión</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex flex-col px-5 justify-center rounded-lg text-[13px] md:text-[10px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Realiza pruebas exhaustivas para identificar y corregir errores de funcionalidad y diseño.</p>
                      <p className="text-purple-200 ">2.-Solicita retroalimentación de usuarios beta si es posible y realiza ajustes según sea necesario.</p>
               
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2 col-span-2 relative order-6 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">4.Contenido</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex flex-col px-5 justify-center rounded-lg text-[13px] md:text-[10px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Crea o recopila el contenido que se mostrará en la página web, como texto, imágenes, videos, etc.</p>
                      <p className="text-purple-200 ">2.-Optimiza el contenido para SEO (Search Engine Optimization) para mejorar la visibilidad en los motores de búsqueda.</p>
             
                    </div>
                  </div>

                </div>
            </div>
           
            
        </section>

      </main>
    </>
  )
}
