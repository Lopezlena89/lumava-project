"use client"
import { useModalStore } from "@/store/modal/storeModal";
import Link from "next/link"


export const LinkModal = () => {
    const {openSideModal} = useModalStore((state) => state);
  return (
    <>
        <span 
            onClick={()=>openSideModal()}
            className="cursor-pointer z-10 underline text-violet-300 hover:text-violet-200 font-mono"
        >Agendar una cita</span>
    </>
  )
}
