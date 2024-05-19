
import React, { useCallback } from 'react'
import { CiGlobe, CiMobile3, CiMonitor, CiShoppingBasket } from 'react-icons/ci';

interface textBox {
    text: { 
        boxtitle: string; 
        boxtext: string; 
    }; 
}

export const DevelopBoxServices = ({text}:textBox) => {

    const RenderBox = useCallback(()=>{
        switch (text.boxtitle){
            case "Websites":
                return <CiGlobe size={25} className="text-white"/>
                break;
            case "Ecommerce":
                return <CiShoppingBasket size={25} className="text-white"/>
                break;
            case "Web Applications":
                return <CiMobile3 size={25} className="text-white"/>
                break;
            case "Content Management System":
                return <CiMonitor size={25} className="text-white"/>
                break;
        }
    },[text])


  return (
    <>
        
        
        <div className="w-full h-auto  flex flex-col items-center justify-start bg-black border-solid border-[1px] border-gray-800 p-4 rounded-xl">
            <div className='relative h-10 w-10 overflow-hidden rounded-xl border border-gray-800 p-[1px] backdrop-blur-3xl'>
                <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                <div className='inline-flex h-full w-full items-center justify-center rounded-xl bg-gray-950 text-sm  backdrop-blur-3xl'>
                    <RenderBox/>
                </div>
            </div>
            <div className="w-full text-gray-200 text-sm py-5 flex flex-col items-center">
                <span className="text-violet-400 py-1 text-md">{text.boxtitle}</span>
                <p>{text.boxtext}</p>
            </div>
        </div>
        
       
    </>
  )
}
