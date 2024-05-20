
import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import Image from "next/image";
import Link from "next/link";






export default function  Blog (){
  return (
    <>
        <SvgComponent />
        <SvgComponent1/>
        <main className="principal w-full h-screen p-[5%] text-gray-200 overflow-hidden ">
            <div className="w-full h-[auto] py-[5%]  md:px-[15%] lg:px-[20%] relative ">
                <div className="w-full h-auto flex flex-col relative border border-solid border-gray-800 bg-black/30 rounded-xl">
                  <Link href="/blog/inicio-lumava" className="w-full h-full absolute"></Link>
                  <div className="w-full h-[300px] rounded-t-xl bg-[url('/inicio-lumava.webp')] bg-cover bg-left-top md:bg-center"/>
                  <div className="w-full h-auto flex ">
                    <div className="w-[20%] flex justify-center items-center p-3">
                      <Image src="/logo_lumava_max.webp" className="rounded-full" alt="logo lumava" width={50} height={50}></Image>
                    </div>
                    <div className="w-full h-full flex flex-col font-mono justify-around p-3">
                        <h3 className="text-lg md:text-3xl">Inicios Lumava</h3>
                        <span className="text-xs sm:text-sm md:text-base">Luis Mariano Lopez Lena, Equipo Lumava, Abr 2024</span>
                    </div>
                  </div>
                </div>
               
            </div>
            
        </main>
        
    </>
  )
}
