
import { useModalPreviewStore } from "@/store/moda-preview/storeModalPreview";
import { useModalStore } from "@/store/modal/storeModal";
import { IoChevronBackOutline } from "react-icons/io5";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Image from "next/image";
import { PiUserCircleThin } from "react-icons/pi";


export const ModalLow = () => {
    const {closeSideModal} = useModalStore((state) => state);
    const {isSideModalPreview,openSideModalPreview,closeSideModalPreview} = useModalPreviewStore((state) => state);
 
    const { register, handleSubmit,formState: {errors},setValue,watch } = useForm();
   
    const onSubmit:SubmitHandler<FieldValues> = async(data) =>{
       
        try {
            fetch("/api",{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(data)
            })
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Tu mensaje ha sido enviado",
              showConfirmButton: false,
              timer: 1500
            });
            setValue("name","")
            setValue("email","")
            setValue("phone","")
            setValue("time","")
            setValue("date-time","")
            setValue("phone","")
            setValue("textarea","")
            closeSideModal();
        } catch (error) {
          console.log(error)
        }
    
       
      }
  
    return (
    <>
        <div className={` w-full h-full shadow-2xl flex flex-col p-5 `}>
            <div className="w-full h-auto flex flex-col border-b-[0.1px] border-solid border-gray-400 ">
                <div className="w-full h-auto flex justify-between">
                    <div onClick={()=>closeSideModal()} className="cursor-pointer  p-3 flex items-center">
                        <IoChevronBackOutline size={20}/>
                        <button className="pl-1 underline" >Cancelar</button>
                    </div>
                    <div>
                        <Image
                            src="/cloud.svg"
                            width={100}
                            height={100}
                            alt="cloud"
                            className="m-5 w-[50px]"
                        />
                    </div>
                </div>
                <div className=" flex lg:hidden w-full  px-5 py-2">
                    <span 
                        className={`cursor-pointer text-blue-600 ${isSideModalPreview && 'underline'}`}
                        onClick={()=>openSideModalPreview()}
                    >
                        Editar
                    </span>
                    <span 
                        className={`cursor-pointer text-blue-600 pl-5 ${isSideModalPreview ? '':'underline'}`}
                        onClick={()=>closeSideModalPreview()}
                    >
                        Preview
                    </span>
                </div>
            </div>
            {
                isSideModalPreview 
                ? 
                <div className="w-full h-full p-5  overflow-auto">
                    <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col ">
                        <div className="name w-full h-auto flex flex-col justify-start">
                                <h3 className="font-medium text-xs">Nombre:</h3>
                                <input 
                                    type="text" 
                                    className={`w-full font-light text-xs h-[30px] border-[0.1px] border-solid
                                    border-gray-800 rounded-lg mt-2 p-2 ${errors.name?'bg-red-300':'bg-white'}`} 
                                    { ...register('name',{required:true,minLength:5} )}
                                    name='name'
                                />
                                {
                                    errors.name && <span className='text-red-300 text-xs'>El nombre es requerido</span>
                                }
                        </div>
                        <div className="email mt-5 w-full h-auto flex flex-col justify-start">
                                <h3 className="font-medium text-xs">Email:</h3>
                                <input 
                                    type="email" 
                                    className={`w-full font-light text-xs h-[30px] border-[0.1px] border-solid
                                    border-gray-800 rounded-lg mt-2 p-2 ${errors.email?'bg-red-300':'bg-white'}`} 
                                    { ...register('email',{required:true} )}
                                    name='email'
                                />
                                {
                                    errors.email && <span className='text-red-300 text-xs'>El email es requerido</span>
                                }
                        </div>
                        <div className="phone mt-5 w-full h-auto flex flex-col justify-start">
                                <h3 className="font-medium text-xs">Telefono:</h3>
                                <input 
                                    type="text" 
                                    className={`w-full font-light text-xs h-[30px] border-[0.1px] border-solid
                                    border-gray-800 rounded-lg mt-2 p-2 ${errors.phone?'bg-red-300':'bg-white'}`} 
                                    { ...register('phone',{required:true,minLength:8}  )}
                                    name='phone'
                                />
                                {
                                    errors.phone && <span className='text-red-300 text-xs'>El teléfono es requerido</span>
                                }
                        </div>
                        <div className="phone mt-5 w-full h-auto flex flex-col justify-start">
                                <h3 className="font-medium text-xs">Horario:</h3>
                                <input 
                                    type="time" 
                                    className="w-full font-light text-xs h-[30px] border-[0.1px] border-solid
                                    border-gray-800 rounded-lg mt-2 p-2" 
                                    { ...register('time',{required:false}  )}
                                    name='time'
                                />
                        </div>
                        <div className="phone mt-5 w-full h-auto flex flex-col justify-start">
                                <h3 className="font-medium text-xs">Fecha preferida:</h3>
                                <input 
                                    type="date"
                                    className="w-full font-light text-xs h-[30px] border-[0.1px] border-solid
                                    border-gray-800 rounded-lg mt-2 p-2" 
                                    { ...register('dateTime',{required:false}  )}
                                    name="dateTime"
                                />
                        </div>
                        <div className="phone mt-5 w-full h-auto flex flex-col justify-start">
                                <h3 className="font-medium text-xs">Preferencia de contacto:</h3>
                                <select 
                                    className="border-[0.1px] border-solid
                                    border-gray-800 rounded-lg mt-2 p-2 text-xs"
                                    id="contact"
                                    { ...register('contact',{required:false}  )}
                                    name="contact"
                                >
                                    <option className="font-light" value=""></option>
                                    <option className="font-light" value="Whatsapp">Whatsapp</option>
                                    <option className="font-light" value="Correo">Correo</option>
                                    <option className="font-light" value="Telefono">Llamada Telefonica</option>
                                </select>
                        </div>
                        <div className="w-full mt-5 p-3 flex justify-end">
                            
                            <button  className="w-[100px] h-[35px] text-xs bg-blue-400 rounded-lg hover:bg-blue-500">Enviar</button>
                        </div>
                    </form>
                </div> 
                :
                <div className="w-full h-full shadow-lg  rounded-xl flex flex-col overflow-auto">
                    <div className="w-full h-auto p-2 rounded-t-xl bg-gray-900 text-white">
                        <span className="text-xs">Esto es solo una vista previa</span>
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

            }
        </div>
    </>
  )
}
