import { useModalPreviewStore } from "@/store/moda-preview/storeModalPreview";
import { useModalStore } from "@/store/modal/storeModal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IoChevronBackOutline } from "react-icons/io5"
import Swal from "sweetalert2";


export const HeaderModal = () => {
    const {closeSideModal} = useModalStore((state) => state);
    const {isSideModalPreview,openSideModalPreview,closeSideModalPreview} = useModalPreviewStore((state) => state);
    const { register, handleSubmit,formState: {errors},setValue,watch,getValues } = useForm();
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
        } catch (error) {
          console.log(error)
        }
    
       
      }
    return (
    <>
        <div className="w-full h-auto flex flex-col border-b-[0.1px] border-solid border-gray-400">
            <div onClick={()=>closeSideModal()} className="cursor-pointer  p-3 flex items-center">
                <IoChevronBackOutline size={20}/>
                <button className="pl-5 underline" >Cancelar</button>
            </div>
            {/* <div className=" flex lg:hidden w-full  px-5 py-2">
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
            </div> */}
        </div>
        <div className="w-full h-full p-5  overflow-auto">
            <form onSubmit={handleSubmit(onSubmit)}  className="flex flex-col ">
                <div className="name w-full h-auto flex flex-col justify-start">
                        <h3 className="font-medium">Nombre:</h3>
                        <input 
                            type="text" 
                            className={`w-full font-light min-h-[35px] border-[0.1px] border-solid
                            border-gray-800 rounded-lg mt-2 p-2 ${errors.name?'bg-red-300':'bg-white'}`} 
                            { ...register('name',{required:true,minLength:5} )}
                            name='name'
                        />
                        {
                            errors.name && <span className='text-red-300 text-xs'>El nombre es requerido</span>
                        }
                </div>
                <div className="email mt-5 w-full h-auto flex flex-col justify-start">
                        <h3 className="font-medium">Email:</h3>
                        <input 
                            type="email" 
                            className={`w-full font-light min-h-[35px] border-[0.1px] border-solid
                            border-gray-800 rounded-lg mt-2 p-2 ${errors.email?'bg-red-300':'bg-white'}`} 
                            { ...register('email',{required:true} )}
                            name='email'
                        />
                        {
                            errors.email && <span className='text-red-300 text-xs'>El email es requerido</span>
                        }
                </div>
                <div className="phone mt-5 w-full h-auto flex flex-col justify-start">
                        <h3 className="font-medium">Telefono:</h3>
                        <input 
                            type="text" 
                            className={`w-full font-light min-h-[35px] border-[0.1px] border-solid
                            border-gray-800 rounded-lg mt-2 p-2 ${errors.phone?'bg-red-300':'bg-white'}`} 
                            { ...register('phone',{required:true,minLength:8}  )}
                            name='phone'
                        />
                        {
                            errors.phone && <span className='text-red-300 text-xs'>El teléfono es requerido</span>
                        }
                </div>
                <div className="phone mt-5 w-full h-auto flex flex-col justify-start">
                        <h3 className="font-medium">Horario:</h3>
                        <input 
                            type="time" 
                            className="w-full font-light min-h-[35px] border-[0.1px] border-solid
                            border-gray-800 rounded-lg mt-2 p-2" 
                            { ...register('time',{required:false}  )}
                            name='time'
                        />
                </div>
                <div className="phone mt-5 w-full h-auto flex flex-col justify-start">
                        <h3 className="font-medium">Fecha preferida:</h3>
                        <input 
                            type="date"
                            className="w-full font-light min-h-[35px] border-[0.1px] border-solid
                            border-gray-800 rounded-lg mt-2 p-2" 
                            { ...register('dateTime',{required:false}  )}
                            name="dateTime"
                        />
                </div>
                <div className="phone mt-5 w-full h-auto flex flex-col justify-start">
                        <h3 className="font-medium">Preferencia de contacto:</h3>
                        <select 
                            className="border-[0.1px] border-solid
                            border-gray-800 rounded-lg mt-2 p-2"
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
                    <button className="pr-5 font-light hover:underline" >Cancelar</button>
                    <button className="w-[100px] h-[40px]  bg-blue-400 rounded-lg hover:bg-blue-500">Enviar</button>
                </div>
            </form>
        </div>
    </>
  )
}
