import SvgComponent from "@/components/svg/ImageSvg"
import SvgComponent1 from "@/components/svg/ImageSvgG1"


export default function  Blog (){
  return (
    <>
        <main className="principal w-full h-full ">
            <SvgComponent />
            <SvgComponent1/>
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <p className="text-sm text-purple-200">Estamos actualizando esta seccion</p>
                <p className="text-sm text-purple-200">Esperela pronto</p>
            </div>
        </main>
    </>
  )
}
