'use client'

import {  FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Swal from "sweetalert2";



export const Form = () => {
  const { register, handleSubmit,formState: {errors},setValue } = useForm();

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
        setValue("lastName","")
        setValue("enterprise","")
        setValue("corporateEmail","")
        setValue("city","")
        setValue("phone","")
        setValue("textarea","")
    } catch (error) {
      console.log(error)
    }

   
  }
  return (
    <>
        <div className='w-full h-full flex flex-col border   border-gray-800 bg-gradient-to-r from-black to-gray-950 rounded-xl p-5'>
          <div className='w-full min-h-[100px] flex flex-col'>
            <h2 className='text-purple-200 text-4xl'>Contáctanos</h2>
            <span className='text-purple-500 text-xl mt-2'>Cuentanos como podemos ayudarte</span>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}  className='w-full h-full grid grid-cols-1  md:grid-cols-2' >
            <div className='w-full h-[110px]  flex flex-col'>
              <span className='text-purple-200 text-2xl'>Nombre</span>
              <input 
                type="text"
                className={`mt-5 outline-none text-left  md:w-[80%] font-medium h-[35px] rounded-sm p-2 ${errors.name?'bg-red-300':'bg-purple-100'}`}
                { ...register('name',{required:true,minLength:5} )}
                name='name'
              />
              {
              errors.name && <span className='text-red-300'>El nombre es requerido</span>
             }
            </div>
            <div className='w-full h-[110px]  flex flex-col'>
              <span className='text-purple-200 text-2xl'>Apellido</span>
              <input 
                type="text"
                className=" mt-5 outline-none text-left bg-purple-100  md:w-[80%] font-medium  h-[35px] rounded-sm p-2"
                { ...register('lastName' )}
                name='lastName'
              />
            </div>
            <div className='w-full h-[110px]  flex flex-col'>
              <span className='text-purple-200 text-2xl'>Nombre de la empresa</span>
              <input 
                type="text"
                className=" mt-5 outline-none text-left bg-purple-100 md:w-[80%] font-medium  h-[35px] rounded-sm p-2"
                { ...register('enterprise' )}
                name='enterprise'
              />
            </div>
            <div className='w-full h-[110px]  flex flex-col'>
              <span className='text-purple-200 text-2xl'>Email</span>
              <input 
                type="email"
                className={`mt-5 outline-none text-left  md:w-[80%] font-medium  h-[35px] rounded-sm p-2 ${errors.corporateEmail?'bg-red-300':'bg-purple-100'}`}
                { ...register('corporateEmail',{required:true} )}
                name='corporateEmail'
              />
              {
              errors.corporateEmail && <span className='text-red-300'>El email es requerido</span>
             }
            </div>
            <div className='w-full h-[110px]  flex flex-col'>
              <span className='text-purple-200 text-2xl'>Ciudad</span>
              <input 
                type="text"
                className=" mt-5 outline-none text-left bg-purple-100 md:w-[80%] font-medium  h-[35px] rounded-sm p-2"
                { ...register('city' )}
                name='city'
              />
            </div>
            <div className='w-full h-[110px]  flex flex-col'>
              <span className='text-purple-200 text-2xl'>Teléfono</span>
              <input 
                type="tel"
                className={`mt-5 outline-none text-left md:w-[80%] font-medium  h-[35px] rounded-sm p-2 ${errors.phone?'bg-red-300':'bg-purple-100'}`}
                { ...register('phone',{required:true,minLength:8}  )}
                name='phone'
              />
              {
              errors.phone && <span className='text-red-300'>El teléfono es requerido</span>
             }
            </div>
            <div className='w-full h-auto flex flex-col md:col-span-2'>
              <span className='text-purple-200 text-2xl'>¿Como podemos ayudarte?</span>
              <textarea 
                typeof="text"
                className={`mt-5 outline-none text-left  md:w-[90%] h-[100px] rounded-sm p-2 ${errors.textarea?'bg-red-300':'bg-purple-100'}`}
                { ...register('textarea',{required:true,minLength:10}  )}
                name='textarea'
              />
              {
                errors.textarea && <span className='text-red-300'>El texto es requerido</span>
               }
            </div>
            <button
              type='submit'
              className='w-[100px] h-[30px] bg-purple-200 mt-5 rounded-sm  active:bg-purple-400'
            >
              Enviar
            </button>
          </form>
        </div>
    </>
  )
}
