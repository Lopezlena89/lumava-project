'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiInstagram,CiMail } from 'react-icons/ci'
import { PiWhatsappLogoThin } from 'react-icons/pi'


export const Navbar = () => {
    const path = usePathname()
    
   
  return (
    <>
        <nav 
            className="z-20 w-full h-16 hidden fixed md:flex justify-between items-center list-none 
            font-sans backdrop-blur-sm bg-black/70 px-10"
        >
           
            <Link href="/" className="flex justify-center items-center">
                <Image
                    src="/logo01.webp"
                    width={130}
                    height={130}
                    alt="Lumava Agency"
                />
            </Link>
            <li className="hidden md:flex items-center justify-evenly lg:justify-end md:text-[13px] lg:text-base w-[88%] text-purple-200">
                <Link
                    className={`pr-3 hover:text-violet-500 hover:duration-300 ${path==="/" ?"text-violet-500 " :""}`}
                    href='/'
                >
                    Nosotros
                </Link>
                
                <Link
                    className={`pr-3 hover:text-violet-500 hover:duration-300 ${path==="/portfolio" ?"text-violet-500 " :""}`}
                    href='/portfolio'
                >
                    Portafolio
                </Link>
                
                <Link
                    className={`pr-3 hover:text-violet-500 hover:duration-300 ${path==="/web-developmen" ?"text-violet-500 " :""}`}
                    href='/web-developmen'
                >
                    Desarrollo Web
                </Link>
                
                {/* <Link
                    className={`pr-3 hover:text-violet-500 hover:duration-300 ${path==="/design-and-branding" ?"text-violet-500 " :""}`}
                    href='/design-and-branding'
                >
                    Diseño & Branding
                </Link> */}
                
                <Link
                className={`hover:text-violet-500 hover:duration-300 ${path==="/offers" ?"text-violet-500 " :""}`}
                    href='/offers'
                >
                    Paquetes
                </Link>
                
                <div className="flex items-center text-purple-200 ml-10">
                    <Link
                        href='https://www.instagram.com/lumava_agency/'
                    >
                        <CiInstagram  className="p-2 cursor-pointer hover:text-violet-500 hover:duration-300" size={40}/>
                    </Link>

                    <Link
                        href='mailto:lumavaagency@gmail.com'
                    >
                        <CiMail  className="p-2 cursor-pointer hover:text-violet-500 hover:duration-300" size={40}/>
                    </Link>
                    <Link href="https://wa.me/523315753378"  >
                        <PiWhatsappLogoThin className='p-2 cursor-pointer hover:text-violet-500 hover:duration-300' size={40}/>
                    </Link>
              
                    

                </div>
            </li>
           
            
            
            
        </nav>
    </>
  )
}
