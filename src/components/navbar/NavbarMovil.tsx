'use client'

import { usePathname } from "next/navigation";
import { CiBrightnessDown,CiDark } from "react-icons/ci";
import { CiGrid42,CiHome,CiMail,CiDesktop,CiPen } from "react-icons/ci";

export const NavbarMovil = () => {
  const path = usePathname()
 
  return (
    <>
        <div className='w-full h-[45px] flex justify-evenly items-center md:hidden backdrop-blur-sm bg-black/70 fixed bottom-0 z-10'>
            <button >
              <CiHome size={25} className={` ${path === "/"?"text-violet-500":"text-zinc-200"}`}/>
            </button>
            <button >
              <CiGrid42 size={25} className="text-zinc-200"/>
            </button>
            <button >
              <CiDesktop size={25} className="text-zinc-200"/>
            </button>
            <button >
              <CiPen size={25} className="text-zinc-200"/>
            </button>
            <button >
              <CiMail size={25} className="text-zinc-200"/>
            </button>
            <button >
              <CiBrightnessDown size={25} className="text-white"/>
              {/* <CiDark size={25} className="text-white"/> */}
            </button>
        </div>
    </>
  )
}
