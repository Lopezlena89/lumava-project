import Image from "next/image"


export const WhyLumava = () => {
  return (
    <>
        <div className="w-full h-auto flex flex-col   md:flex-row rounded-xl border border-solid border-gray-800">
            <Image
                alt="data-image" 
                src={"/data.webp" } 
                loading="lazy" 
                width={400} 
                height={400} 
                style={{width:"auto",height:"auto"}}
                className="rounded-xl relative" 
            />
            <div className="w-full h-auto flex flex-col p-10 z-10 bg-black rounded-xl">
                    <div className="w-full h-[50px] flex justify-center items-center text-center">
                        <h3 className="text-purple-200 text-4xl ">Porque elegir a Lumava?</h3>
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
    </>
  )
}
