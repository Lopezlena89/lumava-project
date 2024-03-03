'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



import { CiBrightnessDown,CiInstagram,CiMail,CiMenuBurger } from 'react-icons/ci'


export const Navbar = () => {
    const path = usePathname()
    
   
  return (
    <>
        <nav 
            className="z-10 w-full h-16  fixed flex justify-between items-center list-none 
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
                    href='#'
                >
                    Nosotros
                </Link>
                
                <Link
                    className="pr-3 hover:text-violet-500 hover:duration-300"
                    href='#'
                >
                    Portafolio
                </Link>
                
                <Link
                    className="pr-3 hover:text-violet-500 hover:duration-300"
                    href='#'
                >
                    Desarrollo Web
                </Link>
                
                <Link
                    className="pr-3 hover:text-violet-500 hover:duration-300"
                    href='#'
                >
                    Diseño & Branding
                </Link>
                
                <Link
                className='hover:text-violet-500 hover:duration-300'
                    href='#'
                >
                    Paquetes
                </Link>
                
                <div className="flex items-center text-purple-200 ml-10">
                    <Link
                        href='#'
                    >
                        <CiInstagram  className="p-2 cursor-pointer hover:text-violet-500 hover:duration-300" size={40}/>
                    </Link>

                    <Link
                        href='#'
                    >
                        <CiMail  className="p-2 cursor-pointer hover:text-violet-500 hover:duration-300" size={40}/>
                    </Link>
              
                    <button
                        
                    >
                        <CiBrightnessDown size={25} className="text-purple-200  hover:text-violet-500 hover:duration-300"/>
                        {/* <CiDark size={25} className="text-white"/> */}
                    </button>

                </div>
            </li>
            <button
            >
                <CiMenuBurger size={25} className="md:hidden text-purple-200  hover:text-violet-500 hover:duration-300"/>
               
            </button>
            
            
            
        </nav>
    </>
  )
}
