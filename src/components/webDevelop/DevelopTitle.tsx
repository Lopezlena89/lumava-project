import { titleDevelop } from '@/utils/text/webDevelopData'
import React from 'react'

export const DevelopTitle = () => {
  return (
    <>
        {
            titleDevelop.map((text)=>(
                <div key={text.title}>
                    <div className=" w-full h-full relative  py-[10%] flex flex-col items-center justify-center">
                        <div 
                            className="text-gray-200  font-semibold  animation-title font-mono"
                        >
                            <div className="text-center text-5xl md:text-7xl flex flex-col "> 
                                    <h1 className="hover:text-violet-400 duration-700">{text.title}</h1> 
                            </div>
                        </div>
                        <div 
                            className=" text-gray-200 md:text-xl  animation-title-dos text-[0.9em] py-10 "
                        >
                            <p 
                            className="text-center text-[0.8em]"
                            >
                            {`"${text.subtitle}"`}
                            </p>
                        </div>
                    </div>
                </div>
            
            ))
        }
    </>
  )
}
