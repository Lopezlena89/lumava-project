'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiInstagram,CiMail } from 'react-icons/ci'
import { PiWhatsappLogoThin } from 'react-icons/pi'
import { IoMenuOutline,IoCloseOutline } from "react-icons/io5";
import { useUIStore } from '@/store/menu/store'

export const Navbar = () => {
    const path = usePathname()
    const {isSideMenuOpen,openSideMenu,closeSideMenu} = useUIStore((state) => state);
    
  return (
    <>
        <header className='w-full z-20 fixed h-auto flex flex-col'>
            <nav 
                className="z-10 w-full h-16  flex justify-between items-center list-none 
                bg-black/90 px-[7%] md:px-[5%] border-b-[0.1px] border-gray-800"
            >
            
                <Link href="/"  onClick={()=>closeSideMenu()} className="flex justify-center items-center ">
                    <h2 className='font-poppins text-violet-200 text-2xl hover:duration-300 hover:text-violet-400 pr-3'>Lumava</h2>
                    <Image
                        src="/cloud.svg"
                        width={40}
                        height={40}
                        alt="cloud"
                    />
                </Link>
                
                <li className="hidden lg:flex items-center justify-evenly lg:justify-end md:text-[13px] lg:text-base w-[88%] text-violet-200">
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

                <IoMenuOutline 
                    onClick={()=>openSideMenu()} 
                    className={`text-purple-200 lg:hidden ${isSideMenuOpen ? "hidden":"block"}`}
                    size={35}
                />
                <IoCloseOutline 
                    onClick={()=>closeSideMenu()} 
                    className={`text-purple-200  lg:hidden ${isSideMenuOpen ? "block":"hidden"}`}
                    size={35}
                />
            </nav>
            <div onClick={()=>closeSideMenu()}  className={` fixed w-full h-full bg-black/50 backdrop-blur-sm ${isSideMenuOpen ? "":"hidden"}`}/>

            
            <div className={` w-full h-screen  flex-col  ${isSideMenuOpen?"flex":"hidden"}`} data-state="true">
                <nav 
                    className='w-full h-auto overflow-hidden  z-10 flex flex-col items-center justify-center bg-black/90'
                >
                    
                    <div 
                        className='w-[95%] h-[70px] border-b-[0.1px] border-solid border-gray-800 flex items-center '
                    >
                        <Link
                            onClick={()=>closeSideMenu()}
                            className={`px-5  hover:text-violet-400 hover:duration-300    ${path==="/" ?"text-violet-400 " :"text-violet-200"}`}
                            href='/'
                        >
                            Nosotros
                        </Link>
                    </div>
                    <div className='w-[95%] h-[70px]  border-b-[0.1px] border-solid border-gray-800 flex items-center '>
                        <Link
                            onClick={()=>closeSideMenu()}
                            className={`px-5  hover:text-violet-400 hover:duration-300    ${path==="/portfolio" ?"text-violet-400 " :"text-violet-200"}`}
                            href='/portfolio'
                        >
                            Portafolio
                        </Link>
                    </div>
                    <div className='w-[95%] h-[70px]  border-b-[0.1px] border-solid border-gray-800 flex items-center '>
                        <Link
                            onClick={()=>closeSideMenu()}
                            className={`px-5  hover:text-violet-400 hover:duration-300    ${path==="/web-developmen" ?"text-violet-400 " :"text-violet-200"}`}
                            href='/web-developmen'
                        >
                            Desarrollo Web
                        </Link>
                    </div>
                    <div className='w-[95%] h-[70px]  border-b-[0.1px] border-solid border-gray-800 flex items-center '>
                        <Link
                            onClick={()=>closeSideMenu()}
                            className={`px-5  hover:text-violet-400 hover:duration-300    ${path==="/blog" ?"text-violet-400 " :"text-violet-200"}`}
                            href='/blog'
                        >
                            Blog
                        </Link>
                    </div>
                    <div className='w-[95%] h-[70px]  border-b-[0.1px] border-solid border-gray-800 flex items-center '>
                        <Link
                            onClick={()=>closeSideMenu()}
                            className={` px-5 hover:text-violet-400 hover:duration-300   ${path==="/offers" ?"text-violet-400 " :"text-violet-200"}`}
                            href='/offers'
                        >
                            Paquetes
                        </Link>
                    </div>
                    <div className='w-[95%] h-[100px]  text-purple-200 flex justify-start'>
                        <Link
                            href='https://www.instagram.com/lumava_agency/'
                           className='py-4 pl-4 pr-2'
                        >
                            <CiInstagram  className="cursor-pointer hover:text-violet-400 hover:duration-300" size={25}/>
                        </Link>

                        <Link
                            href='mailto:lumavaagency@gmail.com'
                            className='py-4 px-2'
                        >
                            <CiMail  className="cursor-pointer hover:text-violet-400 hover:duration-300" size={25}/>
                        </Link>
                        <Link 
                            href="https://wa.me/523315753378" 
                            className='py-4 px-2' >
                            <PiWhatsappLogoThin className=' cursor-pointer hover:text-violet-400 hover:duration-300' size={25}/>
                        </Link>
                    </div>
                  
                </nav>
            </div>
        </header>
    </>
  )
}
