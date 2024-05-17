import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";


export const metadata: Metadata = {
  title: "Lumava Agency",
  description: "Lumava es una Agencia de Desarrollo Web y diseño, establecidos en Guadalajara, nos enfocamos en impulsar a nuevos emprendedores",
  generator: 'Next.js',
  authors:[{name:'Luis Mariano Lopez Lena Valdivieso',url:'https://lumava.dev'}],
  abstract:'Page Lumava Agency',
  category:'Web services',
  keywords:["lumava","web design","diseño web","desarrollo apps"],
  metadataBase:new URL("https://lumava.site"),
  alternates:{
    canonical: '/',
    languages: {
      'es-MX': '/es-MX',
    },
  },
  openGraph: {
    title: 'Lumava Agency',
    description: 'Lumava es una Agencia de Desarrollo Web y diseño, establecidos en Guadalajara, nos enfocamos en impulsar a nuevos emprendedores',
    url: 'https://lumava.site',
    siteName: 'Lumava Agency',
    images: [
      {
        url: '/logo_lumava_max.webp', // Must be an absolute URL
        width: 800,
        height: 600,
        alt:"Lumava Agency"
      },
      
    ],
    locale: 'es_MX',
    type: 'website'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${GeistSans.variable} ${GeistMono.variable}  bg-black`} >
      <body >
          {children}
      </body>
    </html>
  );
}
