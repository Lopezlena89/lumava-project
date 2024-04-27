import { Footer } from "@/components/footer/Footer"
import SvgComponent from "@/components/svg/ImageSvg"
import SvgComponent1 from "@/components/svg/ImageSvgG1"
import Image from "next/image"
import Link from "next/link"



export default function  Blog (){
  return (
    <>
        <main className="principal w-full h-full md:pt-16  overflow-hidden">
            <SvgComponent />
            <SvgComponent1/>
            <section className="w-full h-full ">
              <div className="w-full h-[100px] flex items-center p-10 ">
                <Link href="/blog" className="z-10 bg-black w-24 h-8 rounded-full button-blog flex justify-center items-center">
                  <span className="text-purple-200">Lumava</span>
                </Link>
                <span className="text-purple-200 pl-6">Viernes, 26 Abril 2024</span>
              </div>
              <div className="w-full h-full p-10">
                <h2 className=" text-4xl  flex flex-col text-purple-200"> 
                    <span >Blog Lumava</span>
                </h2>
                <p className="pt-4 text-lg  flex flex-col text-gray-500"> 
                    <span >Inicios Lumava</span>
                </p>
              </div>
            </section>
            <section className="w-full h-full text-purple-200 flex flex-col md:flex-row ">
              <div className="w-auto h-full px-10  flex flex-col  md:hidden">
                <p className="text-gray-500">Posted by</p>
                <div className="w-full h-24 flex justify-start items-center ">
                  <div className="w-auto h-full flex justify-center items-center">
                    <Image alt="Co-founder" width={100} height={100} className="z-10 w-[40px] h-[40px] rounded-full bg-cover bg-center" src="/cofounder.webp"/>
                  </div>
                  <div className="w-auto h-full pl-5 flex flex-col justify-center items-start ">
                    <p className="text-purple-200">Mariano</p>
                    <p className="text-gray-500">Co-Founder, Lumava</p>
                  </div>
                </div>

              </div>
              <div className="md:w-[70%] h-full px-10 border-r-[1px] border-solid border-gray-700">
                <p className="pb-5">Soy Mariano, Co-fundador de Lumava Agency Desarrollador de Software y Administrador
                   de Empresas, Lumava inicio porque simplemente el futuro es ahora y es digital, 
                   en mi experiencia me he encontrado con mucha gente emprendedora y simplemente no 
                   funciona por una simple razón, CLIENTES, para alguien que va empezando en este camino
                    tan difícil, encontrar a clientes fieles, proveedores o gente que te aporte a crecer
                      lleva mucho tiempo, dedicación, esfuerzo, tocar puertas, un camino de subida y 
                      bajada que pocos logran alcanzar.
                </p>
                <p className="py-5">Uno de nuestros objetivos es conocer y ayudar a esa gente emprendedora que quiera
                   hacer la diferencia, que quiera ayudar a su familia o a su comunidad con proyectos 
                   de valor, que aporten el día a día, claro este camino que hemos elegido es igual que 
                   muchos que tu conoces, pero me gustaría ser esa diferencia y convertirnos en agente
                    de cambio para bien.
                </p>
                <p className="py-5">Estamos dispuestos a dar ese plus a las empresas con una Pagina Web, Diseño y 
                  Branding, algo sencillo para empezar,  pero sumamente importante hoy en día, estamos 
                  capacitándonos constantemente en nuevas tecnologías, no se diga Inteligencia 
                  Artificial por que es lo de hoy en día cabe destacar una gran herramienta, pero me 
                  refiero a esas tecnologías que ya existen y para los pequeños emprendedores son 
                  difíciles de alcanzar , como automatizar algo importante como base de datos de tus
                   clientes, inventario de tu negocio, datos técnicos para desarrollar estrategias,
                    pagos fáciles y sencillos que no necesitas estar en ese momento para cobrar.
                </p>
                <p className="py-5">Me gustaría proponer que este inicio sea un aprendizaje o algo para meditar, 
                  estas seguro que obtener las mejores tecnologías, esas que vez en redes sociales 
                  son tan inalcanzables como crees?, claro que no y te podemos ayudar.
                </p>
                <p className="py-2">Desarrollador de Software </p>
                <p className="py-2">Co-Fundador Lumava </p>
                <p>Mariano Lopez Lena Valdivieso</p>
              </div>
              <div className="w-[30%] h-full px-5 hidden md:block">
                <p className="text-gray-500">Posted by</p>
                <div className="w-full h-24 flex items-center ">
                  <div className="w-auto h-full flex justify-center items-center">
                    <Image alt="Co-founder" width={100} height={100} className="z-10 w-[40px] h-[40px] rounded-full bg-cover bg-center" src="/cofounder.webp"/>
                  </div>
                  <div className="w-auto pl-5  h-full flex flex-col justify-center items-start ">
                    <p className="text-purple-200">Mariano</p>
                    <p className="text-gray-500">Co-Founder, Lumava</p>

                  </div>
                </div>

              </div>

            </section>
            
        </main>
        <Footer/>
        
    </>
  )
}
