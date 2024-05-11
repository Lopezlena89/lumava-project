
import { CardGrid } from "@/components/card/CardGrid";
import { Form } from "@/components/form/Form";
import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import Image from "next/image";
import Link from "next/link";
import { Footer } from '../../components/footer/Footer';
import { BsArrowDownCircle } from "react-icons/bs";


export default function HomePage() {
  return (
    <>
        <main className="principal overflow-hidden">
            <SvgComponent />
            <SvgComponent1/>
            <section className=" w-full h-full  ">
                <div className=" w-full h-full relative  py-[10%] flex flex-col items-center justify-center">
                    <div 
                        className="text-purple-200 font-sans font-semibold text-5xl animation-title"
                    >
                        <h1 className="text-center text-5xl md:text-8xl flex flex-col"> 
                                <span >Bienvenidos a</span>
                                <span className="bg-gradient-to-r from-white   to-violet-600
                            text-transparent bg-clip-text" >Lumava</span>
                        </h1>
                    </div>
                
                    <Image className="cloud-image my-2 md:my-1 w-[100px] h-[100px] md:w-[150px] md:h-[150px]" src="/cloud.svg" alt="nube--lumaba" width={200} height={200} />
                    <div 
                        className="text-purple-200 font-sans font-semibold  md:text-xl  animation-title-dos"
                    >
                        <p className="text-center">Empodérate con nuestros servicios </p>
                        <p className="text-center"> y convierte tus deseos en adquisiciones</p>
                    </div>
                    
                    <div className="w-full h-auto flex mt-5 justify-center">
                        <Link 
                            href="/portfolio"
                            className="text-black w-32 md:w-40 h-10 flex justify-center items-center rounded-md   
                            m-5 animation-button backdrop-blur-sm  bg-blue-300 "
                        >
                            Portafolio
                        </Link>
                        <Link 
                            href="https://wa.me/523315753378" 
                            className="text-black w-32 md:w-40 h-10 flex justify-center items-center rounded-md   
                            m-5 animation-button-agendar backdrop-blur-sm  bg-violet-400 "
                        >
                            Contactanos
                        </Link>
                    </div>       
                    <BsArrowDownCircle className="animate-bounce absolute bottom-[2%] right-[5%] text-white text-3xl"/>
                </div>
            </section>
            {/* <section
                className="w-full h-[1000px] flex flex-col "   
            >
                <div className="w-full h-[300px] bg-red-100"/>
                
            </section> */}
            <section
                className="w-full h-auto flex flex-col  "   
            >
                <CardGrid/>
            </section>
            <section className="w-full h-auto mt-16 p-5 " >
                <div className="w-full h-full flex flex-col   md:flex-row rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950">
                    <Image
                        alt="data-image" 
                        src={"/data.webp" } 
                        loading="lazy" 
                        width={400} 
                        height={400} 
                        style={{width:"auto",height:"auto"}}
                        className="rounded-xl relative" 
                    />
                    <div className="w-full max-h-full flex flex-col p-10 z-10 bg-black rounded-xl">
                            <div className="w-full h-[50px] mt-5 flex justify-center items-center text-center">
                                <h3 className="text-purple-200 text-4xl ">¿Porque elegir a <span className="bg-gradient-to-r from-white via-purple-400  to-blue-400
                                text-transparent bg-clip-text" >Lumava</span>?</h3>
                            </div>
                            <div className="w-full h- text-purple-200">
                                <p className="mt-10 text-xl">{`"Lealtad es de ambas partes, si lo pido de ti, lo recibirás de mí"`}</p>
                                <p className="mt-10 text-purple-200">
                                    Somos un equipo de profesionales, que tenemos tatuados nuestros valores, sabemos que tu negocio es muy importante, nosotros lo cuidamos y te ayudamos a crecer junto con el alta demanda que el mercado lo exige.
                                </p>
                                <p className="mt-10 text-purple-200">
                                    Garantizamos la comunicación en cada proceso de tu proyecto, además estamos capacitandonos constantemente con las nuevas tecnologías para entregarles un servicio de calidad. 
                                </p>
                            </div>
                    </div>
                </div>
            </section>
            <section className="w-full min-h-[400px] mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className="w-[80%] h-[50px] flex justify-center items-center border-b-2 opacity-85 border-solit border-purple-200">
                            <h3><Link href="/web-developmen" className="text-purple-200 text-2xl text-center hover:text-violet-500  duration-1000">Desarrollo web</Link></h3>
                    </div>
                    <div className="w-[70%] h-full text-purple-200 p-5">
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
                <div className="w-full h-full flex flex-col justify-start items-center">
                    <div className="w-[80%] h-[50px] flex justify-center items-center border-b-2 opacity-85 border-solit border-purple-200">
                            <h3><Link href="#" className="text-purple-200 text-2xl text-center hover:text-violet-500  duration-1000">Diseño & Branding</Link></h3>
                    </div>
                    <div className="w-[70%] h-full text-purple-200 p-5">
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
                
            </section>
        </main>
        <section className="w-full min-h-[500px]  relative p-10">
            <Form/>
        </section>
        <Footer/>
    </>
  );
}
