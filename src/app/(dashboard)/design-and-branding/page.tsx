import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import { CiCircleChevDown } from "react-icons/ci";

export default function DesignAndBranding() {
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
                    
                    <div className="w-full h-full   flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">1.Investigación y análisis</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full  absolute px-5 flex flex-col justify-center rounded-lg  text-[13px] md:text-[10px] lg:text-[13px] ">
                      <p className="text-purple-200 ">1.-Comienzar por comprender la empresa, su industria, su público objetivo y su competencia.</p>
                      <p className="text-purple-200 ">2.-Realizar análisis de mercado y tendencias para identificar oportunidades y desafíos.</p>
                      <p className="text-purple-200 ">3.-Conducir entrevistas con los stakeholders para comprender sus objetivos y valores.</p>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2 row-span-1 md:row-span-2 col-span-2 relative  order-4 md:order-none">
                  
                  <div  className="h-full w-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">2.Definición de la estrategia de branding</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute px-5 flex flex-col justify-center rounded-lg  text-[13px] md:text-[10px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Establece la misión, visión y valores de la marca.</p>
                      <p className="text-purple-200 ">2.-Define la personalidad de la marca, incluyendo su tono de voz, estilo y atributos clave.</p>
                      <p className="text-purple-200 ">3.-Desarrolla una propuesta de valor única que diferencie a la marca de la competencia.</p>
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
                                      text-transparent bg-clip-text">Desarrollo de Diseño & Branding</span>
                                    
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
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">7.Evaluación y ajuste</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex px-5 flex-col justify-center rounded-lg text-[13px] md:text-[10px] lg:text-[13px] ">
                      <p className="text-purple-200 ">1.-Realiza seguimiento de la recepción de la nueva identidad visual por parte de los clientes y stakeholders.</p>
                      <p className="text-purple-200 ">2.-Recopila comentarios y métricas clave para evaluar el éxito de la nueva marca.</p>
                      <p className="text-purple-200 ">3.-Realiza ajustes según sea necesario para mejorar y mantener la consistencia de la identidad visual de la marca a lo largo del tiempo.</p>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2 col-span-2 relative order-5 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">3.Diseño del logotipo</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex px-5 flex-col justify-center rounded-lg text-[13px] md:text-[10px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Crea un logotipo que refleje la identidad y los valores de la marca.</p>
                      <p className="text-purple-200 ">2.-Experimenta con diferentes conceptos, colores, tipografías y estilos.</p>
                      <p className="text-purple-200 ">3.-Realiza iteraciones basadas en la retroalimentación de los stakeholders.</p>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2   col-span-2 relative order-8 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">6.Implementación y lanzamiento</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex flex-col px-5 justify-center  rounded-lg text-[13px] md:text-[10px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Aplica la nueva identidad visual a todos los puntos de contacto de la marca, incluyendo el sitio web, redes sociales, productos y embalajes.</p>
                      <p className="text-purple-200 ">2.-Lanza la nueva identidad visual con una campaña de comunicación integrada para generar conciencia y compromiso con la marca.</p>
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2 col-span-2 relative order-7 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg   border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">5.Creación de materiales de marketing y comunicación</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex flex-col px-5 justify-center rounded-lg text-[13px] md:text-[10px] lg:text-[13px]">
                      <p className="text-purple-200 ">1.-Diseña materiales de marketing, como tarjetas de presentación, papelería, folletos, banners y anuncios, siguiendo las pautas de la identidad visual de la marca.</p>
                      <p className="text-purple-200 ">2.-Desarrolla plantillas para presentaciones, documentos y otros materiales corporativos.</p>
               
                    </div>
                  </div>

                </div>
                <div className="w-full h-[200px] md:h-full p-2 col-span-2 relative order-6 md:order-none">
                  
                  <div  className="w-full h-full top-2  flex flex-col  justify-center items-center  rounded-lg border border-purple-400 ">
                    
                    <div className="w-full h-full  flex flex-col  justify-center items-center rounded-lg  card hover:opacity-0 duration-1000 z-10">
                      <h3 className="text-xl text-center text-purple-200  font-semibold ">4.Desarrollo de la identidad visual</h3>
                      <div className="w-full flex justify-center">
                        <CiCircleChevDown size={25} className="text-purple-500 "/>
                      </div>
                    </div>

                    <div className="w-full  h-full absolute flex flex-col px-5 justify-center rounded-lg text-[13px] md:text-[10px] lg:text-[13px] ">
                      <p className="text-purple-200 ">1.-Diseña elementos visuales adicionales, como paletas de colores, tipografías secundarias, patrones y gráficos complementarios.</p>
                      <p className="text-purple-200 ">2.-Crea una guía de estilo de marca que establezca pautas para el uso consistente de la identidad visual en todos los materiales de la marca.</p>
             
                    </div>
                  </div>

                </div>
            </div>
           
            
        </section>

      </main>
    </>
  )
}
