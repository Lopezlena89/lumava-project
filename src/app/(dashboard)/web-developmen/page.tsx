import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import Image from "next/image";
import Link from "next/link";
import { CiCircleChevDown } from "react-icons/ci";

export default function WebPage() {
  return (
    <>
      <main className="principal w-full h-screen  md:pt-16 mb-10 md:mb-0 overflow-auto  ">
        <SvgComponent />
        <SvgComponent1/>
       
        <section className="w-full h-full flex flex-col items-center mb-10 md:mb-0">
            <div className="w-full h-auto md:min-h-[750px] grid sm:grid-cols-4 md:grid-cols-6 md:grid-rows-4">
                <div className="w-full h-[300px] md:h-full p-2  row-span-2 col-span-2 relative order-1 md:order-none">
                  
                    <div className="w-full h-full flex flex-col card items-center justify-center  rounded-lg border border-purple-400">
                        <Image 
                          alt="web-develop" 
                          src={"/web-develop-image.webp" } 
                          loading="lazy" 
                          width={500} 
                          height={500} 
                          style={{width:"auto",height:"100%"}}
                          className="rounded-xl relative" 
                        />
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
                      <p className="text-purple-200 ">1.-Defininir el propósito y los objetivos de la página web.</p>
                      <p className="text-purple-200 ">2.-Identificar a tu audiencia objetivo y sus necesidades.</p>
                      <p className="text-purple-200 ">3.-Realizar una investigación de mercado y análisis de la competencia.</p>
                      <p className="text-purple-200 ">4.-Elaborar un plan de proyecto que incluya presupuesto, cronograma y recursos necesarios.</p>
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
                      <p className="text-purple-200 ">1.-Crear un esquema de la página para visualizar la estructura y disposición de los elementos.</p>
                      <p className="text-purple-200 ">2.-Diseñar el aspecto visual de la página web, incluyendo el diseño de la interfaz de usuario (UI) y la experiencia del usuario (UX).</p>
                      <p className="text-purple-200 ">3.-Desarrollar un diseño responsivo que se adapte a diferentes dispositivos y tamaños de pantalla.</p>
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
                                      text-transparent bg-clip-text">Desarrollo de tu página web</span>
                                    
                            </h3>
                        </div>
                        <div 
                            className="text-purple-200 font-sans font-semibold text-sm mt-5 animation-title-dos flex flex-col items-center"
                        >
                            <p className="text-center">{`Tu visión, nuestra creación:`} </p>
                            <p className="text-center">{`¡El Futuro Online Comienza Aquí!`}</p>
                            <Link href="https://wa.me/523315753378" className="mt-5">
                                <button className="w-[100px] h-[40px] border border-solid border-purple-400 hover:border-violet-500 duration-700 rounded-2xl  text-purple-200 z-20 ">
                                    Contáctanos
                                </button>
                            </Link>
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

                    <div className="w-full  h-full absolute flex px-5 flex-col justify-center rounded-lg  text-[12px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Realizar copias de seguridad periódicas del sitio web y su base de datos.</p>
                      <p className="text-purple-200 ">2.-Monitorear el rendimiento y la seguridad del sitio web, aplicando actualizaciones y parches según sea necesario.</p>
                      <p className="text-purple-200 ">3.-Agregar nuevo contenido y funcionalidades según evolucionen las necesidades del negocio o la audiencia.</p>
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

                    <div className="w-full  h-full absolute flex px-5 flex-col justify-center rounded-lg text-[12px] md:text-[0.7em]">
                      <p className="text-purple-200 ">1.-Eliger la tecnología y las herramientas adecuadas para el desarrollo web.</p>
                      <p className="text-purple-200 ">2.-Codificar la página web según los diseños y especificaciones previamente establecidos.</p>
                      <p className="text-purple-200 ">3.-Implementar funcionalidades interactivas y dinámicas, como formularios de contacto, carritos de compra, etc.</p>
                      <p className="text-purple-200 ">4.-Realizar pruebas de compatibilidad para garantizar que la página se vea bien y funcione correctamente.</p>
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
                      <p className="text-purple-200 ">1.-Preparar el servidor y configurar el dominio para alojar la página web.</p>
                      <p className="text-purple-200 ">2.-Subir todos los archivos y contenidos al servidor.</p>
                      <p className="text-purple-200 ">3.-Realizar pruebas finales para asegurarte de que todo funcione correctamente en el entorno de producción.</p>
                      
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
                      <p className="text-purple-200 ">1.-Realizar pruebas exhaustivas para identificar y corregir errores de funcionalidad y diseño.</p>
                      <p className="text-purple-200 ">2.-Solicitar retroalimentación de usuarios beta si es posible y realiza ajustes según sea necesario.</p>
               
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
                      <p className="text-purple-200 ">1.-Crear o recopilar el contenido que se mostrará en la página web, como texto, imágenes, videos, etc.</p>
                      <p className="text-purple-200 ">2.-Optimizar el contenido para SEO (Search Engine Optimization) para mejorar la visibilidad en los motores de búsqueda.</p>
             
                    </div>
                  </div>

                </div>
            </div>
           
            
        </section>

      </main>
    </>
  )
}
