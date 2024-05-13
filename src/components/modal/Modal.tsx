"use client"
import { useModalStore } from "@/store/modal/storeModal";
import { ModalHight } from "./ModalHight";
import { ModalLow } from "./ModalLow";

export const Modal = () => {
    const {isSideModal} = useModalStore((state) => state);
    
  return (
    <>
        {
            isSideModal &&
            <>
                <div 
                    className={`fixed z-20 flex justify-center items-center w-screen h-screen bg-black/50 backdrop-blur-sm`}
                >
                    <div className=" min-w-[340px] w-[80%] w-max-[1000px] min-h-[580px] h-[80%] rounded-xl flex  bg-white">
                        <div className="hidden lg:flex h-full w-full">
                            <ModalHight/>
                        </div>
                        <div className=" lg:hidden h-full w-full">
                            <ModalLow/>
                                    
                        </div>
                    </div>
                </div>
                
            </>
            
        }
    </>
  )
}
