import * as React from "react";

interface EmailTemplateProps {
  
  name: string
  email: string
  phone: string
  time:string
  dateTime:string
  contact:string

}

export const EmailTemplate = ({
  name,
  email,
  phone,
  time,
  dateTime,
  contact
 
 
}:EmailTemplateProps) => (
 
  <div className="w-full h-auto">
    <p className="text-3xl text-purple-200">Formulario de cliente</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Nombre:</p>
    <p className=" text-purple-200 mt-2">{name}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Email:</p>
    <p className=" text-purple-200 mt-2">{email}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Telefono:</p>
    <p className=" text-purple-200 mt-2">{phone}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Horario:</p>
    <p className=" text-purple-200 mt-2">{time}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Fecha:</p>
    <p className=" text-purple-200 mt-2">{dateTime}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Preferencia de contacto:</p>
    <p className=" text-purple-200 mt-2">{contact}</p>
   
  </div>
);

export default EmailTemplate;