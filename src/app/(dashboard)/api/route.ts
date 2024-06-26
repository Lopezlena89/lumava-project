
import { Resend } from 'resend';
import * as React from 'react';
import EmailTemplate from '@/components/form/EmailTemplate';


 


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request) {

  const res = await request.json()
 
  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['luismllv89@gmail.com'],
      subject: "Formulario clientes Lumava",
      react: EmailTemplate({
        name:res.name,
        email:res.email,
        phone:res.phone,
        time:res.time,
        dateTime:res.dateTime,
        contact:res.contact,
        
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}