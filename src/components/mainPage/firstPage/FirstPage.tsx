import { ButtonModal } from "@/components/modal/ButtonModal"
import Image from "next/image"
import Link from "next/link"


export const FirstPage = () => {
  return (
    <>
        <div className=" w-full h-full relative  py-[10%] flex flex-col font-mono items-center justify-center">
            <div 
                className="text-gray-200  font-semibold  animation-title "
            >
                <h1 className="text-center text-5xl md:text-7xl flex flex-col "> 
                        <span className="hover:text-violet-400 duration-700">Bienvenidos a</span>
                        <span className="hover:text-violet-400 duration-700" >Lumava</span>
                </h1>
            </div>
        
            <Image 
                className="cloud-image my-2 md:my-1 w-[100px] h-[100px] md:w-[150px] md:h-[150px]" 
                src="/cloud.svg" 
                alt="nube--lumaba" 
                width={200} 
                height={200} 
            />
            <div 
                className=" text-gray-200 md:text-xl font-sans  animation-title-dos text-[0.9em]"
            >
                <p className="text-center text-[0.8em]">Empodérate con nuestros servicios </p>
                <p className="text-center text-[0.8em]"> y convierte tus deseos en adquisiciones</p>
            </div>
            
            <div className="w-full h-auto flex mt-5 font-sans justify-center">
                <Link 
                    href="/portfolio"
                    className="text-black w-32 md:w-40 h-10 flex text-[0.9em] justify-center items-center rounded-md   
                    m-5 animation-button backdrop-blur-sm  bg-blue-300 "
                >
                    Portafolio
                </Link>
                <ButtonModal/>
            </div>   
        </div>
    </>
  )
}
