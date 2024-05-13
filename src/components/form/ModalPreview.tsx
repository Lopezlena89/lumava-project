import Image from "next/image";
import { useForm } from "react-hook-form";
import { PiUserCircleThin } from "react-icons/pi";


export const ModalPreview = () => {
    const { watch } = useForm();
   
  return (
    <>
        <div className="w-full h-full shadow-lg  rounded-xl flex flex-col overflow-auto">
            <div className="w-full h-auto p-2 rounded-t-xl bg-gray-900 text-white">
                <span className="text-xs">Esto es solo una vista previa</span>
            </div>
            <div className="w-full  h-[100px] border-b-[0.1px] border-solid border-gray-400 flex justify-center items-center">
                
                <Image
                    src="/logo-lumava.svg"
                    width={200}
                    height={200}
                    alt="cloud"
                    className="pt-3"
                />
            </div>
            <div className="w-full h-auto py-10 border-b-[0.1px] border-solid border-gray-400 flex flex-col justify-center items-center ">
                <div className="">
                    <PiUserCircleThin size={70}/>
                </div>
                {
                    watch().name 
                    ? <span className="py-2">{watch().name}</span>
                    : <span className="py-2 text-gray-400 italic">Nombre</span>
                }
                {
                    watch().email 
                    ? <span>{watch().email}</span>
                    : <span className="text-gray-400 italic">Email</span>
                }
                
            </div>
            <div className="w-full h-full p-5  flex flex-col justify-start">
                {
                    watch().phone 
                    ? <span className="py-1">Telefono: {watch().phone}</span>
                    : <span className="py-1 text-gray-400 italic">Telefono: {watch().phone}</span>
                }
                {
                    watch().time 
                    ? <span className="py-1">Horario: {watch().time}</span>
                    : <span className="py-1 text-gray-400 italic">Horario: {watch().time}</span>
                }
                {
                    watch().dateTime
                    ? <span className="py-1">Fecha: {watch().dateTime}</span>
                    : <span className="py-1 text-gray-400 italic">Fecha: {watch().dateTime}</span>
                }                                   
                {
                    watch().contact 
                    ? <span className="py-1">Preferencia de contacto: {watch().contact}</span>
                    : <span className="py-1 text-gray-400 italic">Preferencia de contacto: {watch().contact}</span>
                }
            </div>
        </div>
    </>
  )
}
