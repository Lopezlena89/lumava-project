import { CiGlobe } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiPaintBrushThin } from "react-icons/pi";
import { FiTrendingUp } from "react-icons/fi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { useCallback } from "react";

export const LittleSquare = ({icon}:{icon:string}) => {
  
   const ComponentRender = useCallback(() =>{
  
    switch (icon) {
      case "Accesibilidad":
        return <CiGlobe size={25} className="text-white"/>
      case "Credibilidad":
        return <PiPaintBrushThin size={25} className="text-white"/>
      case "Interaccion con cliente":
        return <HiOutlineUserGroup size={25} className="text-white"/>
      case "Marketing y Promocion":
        return <FiTrendingUp size={25} className="text-white"/>
      case "Presencia en linea":
        return <LiaLaptopCodeSolid size={25} className="text-white"/>
      case "Venta en linea":
        return <GiReceiveMoney size={25} className="text-white"/>
       
      default:""
        return ""
       
    }
    
  },[icon])

  return (
   <>
        <div className='relative h-10 w-10 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
            <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
            <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 text-sm  backdrop-blur-3xl'>
             {
               <ComponentRender/>
             }
            </div>
        </div>
   </>
  )
}
