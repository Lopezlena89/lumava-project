'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiBrightnessDown,CiDark,CiViewList,CiGrid42,CiHome,CiBadgeDollar,CiDesktop  } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";


export const NavbarMovil = () => {
  const path = usePathname()
  return (
    <>
      <div className='w-full h-[45px] flex fixed md:hidden justify-evenly items-center backdrop-blur-sm bg-black/70  bottom-0  z-20'>
          <Link href="/">
            <CiHome size={25} className={` ${path === "/"?"text-violet-500":"text-zinc-200"}`}/>
          </Link>
          <Link href="/portfolio" >
            <CiGrid42 size={25} className={` ${path === "/portfolio"?"text-violet-500":"text-zinc-200"}`}/>
          </Link>
          <Link href="/web-developmen">
            <CiDesktop size={25} className={` ${path === "/web-developmen"?"text-violet-500":"text-zinc-200"}`}/>
          </Link>
          <Link href="/blog">
            <CiViewList size={25} className={` ${path === "/blog"?"text-violet-500":"text-zinc-200"}`}/>
          </Link>
          <Link href="/offers">
            <CiBadgeDollar size={25} className={` ${path === "/offers"?"text-violet-500":"text-zinc-200"}`}/>
          </Link>
          <Link href="https://wa.me/523315753378" >
            <PiWhatsappLogoThin size={25} className={`text-zinc-200 hover:text-violet-500`}/>
          </Link>
          
      </div>
    </>
  )
}
