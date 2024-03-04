import { getDataWeb } from "@/utils/text/data"
import { Card } from "./Card"


export const CardGrid = () => {
  return (
   <>
         <h2 className="w-full h-[300px] bg-black flex flex-col justify-center items-center">
                <p className=" text-6xl bg-gradient-to-r from-white via-purple-400  to-blue-400
                        text-transparent bg-clip-text">Presencia en linea</p>
            </h2>

            <div className="w-[95%] h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-10">
                {
                    getDataWeb.map((text,index)=>(
                        <Card key={index} data={text}/>
                    ))
                }

            </div>
   </>
  )
}
