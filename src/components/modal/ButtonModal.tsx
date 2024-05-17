"use client"
import { useModalStore } from "@/store/modal/storeModal";

export const ButtonModal = () => {
    const {openSideModal} = useModalStore((state) => state);
    return (
    <>
        <button
            onClick={()=>openSideModal()}
            className=" text-black w-32 md:w-40 h-10 flex justify-center items-center rounded-md   
            m-5 animation-button-agendar backdrop-blur-sm text-[0.9em] bg-violet-400 "
        >
            Agendar Cita
        </button>
        
    </>
  )
}
