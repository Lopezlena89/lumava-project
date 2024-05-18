import { Footer } from "@/components/footer/Footer";
import { LinkModal } from "@/components/modal/LinkModal";
import { Modal } from "@/components/modal/Modal";
import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import Image from "next/image";
import Link from "next/link";
import { CiGlobe,CiShoppingBasket } from "react-icons/ci";


export default function WebPage() {
  return (
    <>
      <Modal/>
      <main className="principal w-full h-full   ">
        <SvgComponent />
        <SvgComponent1/>
       
        <section className="w-full h-auto px-[10%]">
          <section className="w-full h-full flex flex-col items-center ">
            <div className=" w-full h-full relative  py-[10%] flex flex-col items-center justify-center">
              <div 
                  className="text-gray-200  font-semibold  animation-title font-mono"
              >
                  <div className="text-center text-5xl md:text-7xl flex flex-col "> 
                          <h1 className="hover:text-violet-400 duration-700">Desarrollo Web</h1> 
                  </div>
              </div>
          
              <div 
                  className=" text-violet-200 md:text-xl  animation-title-dos text-[0.9em] py-10 "
              >
                  <p 
                    className="text-center text-[0.8em]"
                  >
                    {`"Diseñamos y creamos webs creativas y diseñadas a la medida del cliente para darles
                    una ventaja competitiva con respecto a sus competidores."`}
                  </p>
              </div>
            </div>
          </section>
          <section className="w-full h-auto text-gray-200 relative">
            <div className="w-full flex justify-center">
                <h2 className="text-2xl  hover:text-violet-400 duration-700 font-mono">Cuales son nuestros servicios en Desarrollo Web?</h2>
            </div>
            <div className="w-full py-10">
                <span className="text-md">El Desarrollo Web abarca una amplia gama de servicios, que incluyen la </span>
                <span className="text-md font-semibold text-violet-400"> entrega de sitios web o aplicaciones web,
                  soluciones de ciberseguridad, diseño UX/UI, soluciones de E-Commerce, arquitectura de sitios web , pruebas 
                  de control de calidad, mantenimiento, consultoria e incluso CMS</span>
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="w-full h-auto  flex flex-col items-center justify-start border-solid border-[1px] border-gray-800 p-4 rounded-xl">
                <div className='relative h-10 w-10 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 text-sm  backdrop-blur-3xl'>
                      <CiGlobe size={25} className="text-white"/>
                    </div>
                </div>
                <div className="w-full text-gray-200 text-sm py-5 flex flex-col items-center">
                  <span className="text-violet-400 py-1 text-md">Websites</span>
                  <p>Un sitio web bien diseñado es una poderosa herramienta de marketing y comunicación que ayuda 
                    a generar confianza y generar clientes potenciales.</p>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col items-center justify-start border-solid border-[1px] border-gray-800 p-4 rounded-xl">
                <div className='relative h-10 w-10 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 text-sm  backdrop-blur-3xl'>
                      <CiShoppingBasket size={25} className="text-white"/>
                    </div>
                    
                </div>
                <div className="w-full text-gray-200 text-sm py-5 flex flex-col items-center">
                  <span className="text-violet-400 py-1 text-md">Ecommerce</span>
                  <p>Con las soluciones de comercio electrónico, las empresas pueden operar las 24 horas del día, los 7 días de la semana y llegar a clientes en cualquier zona horaria.</p>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col items-center justify-start border-solid border-[1px] border-gray-800 p-4 rounded-xl">
                <div className='relative h-10 w-10 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 text-sm  backdrop-blur-3xl'>
                      <CiGlobe size={25} className="text-white"/>
                    </div>
                </div>
                <div className="w-full text-gray-200 text-sm py-5 flex flex-col items-center">
                  <span className="text-violet-400 py-1 text-md">Web Applications</span>
                  <p>Las aplicaciones web pueden llegar a una audiencia global. Son interactivos y atractivos, por lo que pueden captar fácilmente la atención de los usuarios.</p>
                </div>
              </div>
              <div className="w-full h-auto flex flex-col items-center justify-start border-solid border-[1px] border-gray-800 p-4 rounded-xl">
                <div className='relative h-10 w-10 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
                    <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                    <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 text-sm  backdrop-blur-3xl'>
                      <CiGlobe size={25} className="text-white"/>
                    </div>
                </div>
                <div className="w-full text-gray-200 text-sm py-5 flex flex-col items-center">
                  <span className="text-violet-400 py-1 text-md">Content Management System</span>
                  <p>Un CMS dedicado diseñado para las necesidades específicas de su empresa ahorrará tiempo y dinero al optimizar los flujos de trabajo internos.</p>
                </div>
              </div>

            </div>
            <div className="w-full flex justify-center py-5">
                <LinkModal/>
            </div>
          </section>
          <section className="w-full h-auto text-gray-200 flex flex-col py-10 relative">
            <h3 className="text-2xl w-[80%] self-center hover:text-violet-400 duration-700 font-mono">Aprovecha nuestro probado proceso de desarrollo web y haz que tu proyecto sea un éxito</h3>
            <div className="w-full h-auto py-10 grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                <div className="w-full h-full  flex flex-col justify-start items-center py-3 px-[5%]">
                  <span className="text-gray-100 opacity-10 hover:opacity-40 duration-700 text-7xl">01</span>
                  <span className="text-violet-400 py-2 font-mono">Consulta tu idea</span>
                  <span className="text-center">Consultando las mejores estrategias para tu pagina web</span>
                </div>
                <div className="w-full h-full  flex flex-col justify-start items-center py-3 px-[5%]">
                  <span className="text-gray-100 opacity-10 hover:opacity-40 duration-700  text-7xl">02</span>
                  <span className="text-violet-400 py-2 font-mono">Elige una tecnología</span>
                  <span className="text-center">Definir la tecnologia ideal para tu proyecto</span>
                </div>
                <div className="w-full h-full  flex flex-col justify-start items-center py-3 px-[5%]">
                  <span className="text-gray-100 opacity-10 hover:opacity-40 duration-700  text-7xl">03</span>
                  <span className="text-violet-400 py-2 font-mono">Diseño</span>
                  <span className="text-center">Creando una solución web hermosa y fácil de usar con nuestros especialistas en diseño</span>
                </div>
                <div className="w-full h-full  flex flex-col justify-start items-center py-3 px-[5%]">
                  <span className="text-gray-100 opacity-10 hover:opacity-40 duration-700  text-7xl">04</span>
                  <span className="text-violet-400 py-2 font-mono">Desarrollo</span>
                  <span className="text-center">Codificando tu desarrollo web</span>
                </div>
                <div className="w-full h-full  col-span-2 md:col-span-4 lg:col-span-1 flex flex-col justify-start items-center py-3 px-[25%] md:px-[35%] lg:px-[5%]">
                  <span className="text-gray-100 opacity-10 hover:opacity-40 duration-700  text-7xl">05</span>
                  <span className="text-violet-400 py-2 font-mono">Llegar al mercado</span>
                  <span className="text-center">Lanzar su producto y mantenerlo en buen estado con soporte y mantenimiento.</span>
                </div>
            </div>
            
          </section>
          <section className="w-full h-auto flex flex-col items-center justify-start py-5 text-gray-200 relative">
                <div className="w-[80%] ">
                  <h3 className="text-2xl  hover:text-violet-400 duration-700 font-mono">Porque crear tu Pagina Web con Lumava?</h3>
                  <p className="py-5">Ya sea que sea un emprendedor o el líder de una nueva empresa o de una gran empresa, habrá importantes objetivos 
                    estratégicos vinculados al éxito de su futuro producto digital. El socio de desarrollo web adecuado debe actuar
                    como guía y consejero durante este proceso crucial. Con nosotros, puede estar seguro de que el producto final 
                    cumplirá con sus expectativas y las de sus clientes.
                  </p>
                </div>
                <div className="w-[80%] py-5">
                  <h3 className="text-2xl  hover:text-violet-400 duration-700 font-mono">Desarrollo Web</h3>
                  <p className="py-3">Cada miembro del equipo es cuidadosamente seleccionado, lo que garantiza que brinden un valor significativo en la
                   creación de su producto. Tenemos la experiencia para ofrecer todos los aspectos del desarrollo web.
                  </p>
                  <p className="py-3">Los diseñadores de UI son responsables de crear hermosas interfaces de usuario.</p>
                  <p className="py-3">Los diseñadores de UX se aseguran de que todos los aspectos visuales e interactivos de una aplicación sean 
                  fáciles de entender, prácticos y eficientes para retener la atención de los usuarios.</p>
                  <p className="py-3">Los desarrolladores de frontend ofrecen aplicaciones receptivas, flexibles, rápidas, seguras y 
                    fáciles de usar en cooperación con los equipos de diseño y backend.</p>
                  <p className="py-3">Los desarrolladores de backend trabajan para hacer que las aplicaciones sean rápidas y escalables. 
                  También ayudan a optimizar los costos de infraestructura.</p>
                  <p className="py-3">Los ingenieros de DevOps ayudan a desarrollar la aplicación y administrar la infraestructura de TI.</p>
                  <p className="py-3">Los especialistas en control de calidad garantizan que el código de una aplicación sea de la más alta 
                  calidad y que sus usuarios disfruten de una experiencia de usuario de primer nivel.</p>
                  <p className="py-3">El director del proyecto se asegura de que el proyecto avance sin problemas, completando las tareas a 
                  tiempo y alineando el producto con los objetivos comerciales.</p>
                </div>
                <div className="w-full flex justify-center py-5">
                  <LinkModal/>
                </div>
          </section>
          
        </section>

      </main>
      <Footer/>
    </>
  )
}
