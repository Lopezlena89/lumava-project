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
             bg-black/90 px-10 border-b-[0.1px] border-gray-800"
        >
           
            <Link href="/" className="flex justify-center items-center ">
                <h2 className='font-poppins text-violet-200 text-2xl hover:duration-300 hover:text-violet-400 pr-3'>Lumava</h2>
                <Image
                    src="/cloud.svg"
                    width={40}
                    height={40}
                    alt="cloud"
                />
                
            </Link>
            <li className="hidden md:flex items-center justify-evenly lg:justify-end md:text-[13px] lg:text-base w-[88%] text-violet-200">
                <Link
                    className={`pr-3  hover:text-violet-400 hover:duration-300 ${path==="/" ?"text-violet-400" :""}`}
                    href='/'
                >
                    Nosotros
                </Link>
                
                <Link
                    className={`pr-3  hover:text-violet-400 hover:duration-300 ${path==="/portfolio" ?"text-violet-400 " :""}`}
                    href='/portfolio'
                >
                    Portafolio
                </Link>
                
                <Link
                    className={`pr-3  hover:text-violet-400 hover:duration-300 ${path==="/web-developmen" ?"text-violet-400 " :""}`}
                    href='/web-developmen'
                >
                    Desarrollo Web
                </Link>
                
                <Link
                    className={`pr-3  hover:text-violet-400 hover:duration-300 ${path==="/blog" ?"text-violet-400 " :""}`}
                    href='/blog'
                >
                    Blog
                </Link>
                
                <Link
                className={` hover:text-violet-400 hover:duration-300 ${path==="/offers" ?"text-violet-400 " :""}`}
                    href='/offers'
                >
                    Paquetes
                </Link>
                
                <div className="flex items-center text-purple-200 ml-10">
                    <Link
                        href='https://www.instagram.com/lumava_agency/'
                    >
                        <CiInstagram  className="p-2 cursor-pointer hover:text-violet-400 hover:duration-300" size={40}/>
                    </Link>

                    <Link
                        href='mailto:lumavaagency@gmail.com'
                    >
                        <CiMail  className="p-2 cursor-pointer hover:text-violet-400 hover:duration-300" size={40}/>
                    </Link>
                    <Link href="https://wa.me/523315753378"  >
                        <PiWhatsappLogoThin className='p-2 cursor-pointer hover:text-violet-400 hover:duration-300' size={40}/>
                    </Link>
              
                    

                </div>
            </li>
           
            
            
            
        </nav>
    </>
  )
}
