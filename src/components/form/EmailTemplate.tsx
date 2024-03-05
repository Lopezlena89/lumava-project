import * as React from "react";

interface EmailTemplateProps {
  
  name: string
  lastName: string
  enterprise: string
  corporateEmail: string
  city: string
  phone: string
  textarea: string

}

export const EmailTemplate = ({
  name,
  lastName,
  enterprise,
  corporateEmail,
  city,
  phone,
  textarea,
}:EmailTemplateProps) => (
 
  <div className="w-full h-auto">
    <p className="text-3xl text-purple-200">Formulario de cliente</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Nombre:</p>
    <p className=" text-purple-200 mt-2">{name}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Apellido:</p>
    <p className=" text-purple-200 mt-2">{lastName}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Nombre de empresa:</p>
    <p className=" text-purple-200 mt-2">{enterprise}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Correo:</p>
    <p className=" text-purple-200 mt-2">{corporateEmail}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Ciudad:</p>
    <p className=" text-purple-200 mt-2">{city}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Telefono:</p>
    <p className=" text-purple-200 mt-2">{phone}</p>
    <p className="text-lg font-bold text-purple-200 mt-5">Peticion:</p>
    <p className=" text-purple-200 mt-2">{textarea}</p>
  </div>
);

export default EmailTemplate;