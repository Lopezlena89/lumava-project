import { getDataWeb } from "@/utils/text/data"
import { Card } from "./Card"


export const CardGrid = () => {
  return (
   <>
        <h2 className=" w-full h-[200px] z-10 px-5 flex flex-col justify-center items-center font-mono">
            <p className="text-4xl md:text-6xl text-gray-300 hover:text-violet-400 duration-700 text-center ">Tu presencia en linea</p>
        </h2>

        <div className=" w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  px-10  ">
            {
                getDataWeb.map((text,index)=>(  
                    <Card key={index} data={text}/>
                ))
            }
        </div>
           
   </>
  )
}
