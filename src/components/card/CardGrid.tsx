import { getDataWeb } from "@/utils/text/data"
import { Card } from "./Card"


export const CardGrid = () => {
  return (
   <>
        <h2 className=" w-full h-[200px] px-5 bg-black flex flex-col justify-center items-center">
            <p className="text-4xl md:text-6xl bg-gradient-to-r from-white via-purple-400  to-blue-400
                    text-transparent bg-clip-text text-center ">Tu presencia en linea</p>
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
