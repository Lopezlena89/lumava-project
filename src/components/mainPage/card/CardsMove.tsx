'use client'
import Link from "next/link"
import { useCallback } from "react"

interface Props{
    data: {
        titulo: string
        precio:string
        subtitulo?:string
        contenido: string[]
    }
}



export const CardsMove = ({data}:Props) => {

    const ListCard = useCallback(()=>{
        return(
            <>
                 <div className='w-full h-full p-5'>
                    <ul className="w-full list-disc text-sm">
                    {
                        data.contenido.map((txt,index)=>(
                            
                            <li key={index}>{txt}</li>
                        
                        ))
                    }
                    </ul>
                </div>
            </>
        )
    },[data]);

  return (
    <div className='w-full h-auto flex justify-center items-center my-5'>
        <div className='w-[87%] min-h-[450px] card rounded-xl flex flex-col items-center imagen-2'>
            <div className='w-full h-auto p-5 font-semibold font-mono relative'>
                <p className='hover:text-violet-400 duration-700 '>{data.titulo}</p>
                <p className='mt-3 text-4xl '>{data.precio} <span className='text-sm'>mxn</span></p>
                <p className='mt-2 text-sm '>{data.subtitulo}</p>
            </div>
            <div className='w-[90%] h-[1px]  bg-white/10'/>
           <ListCard/>
           <Link href="https://wa.me/523315753378" className="m-5 relative">
                <button className="w-[100px] h-[40px] border border-solid border-gray-800 hover:border-violet-400 hover:text-violet-400 duration-700 rounded-2xl  ">
                    Comprar
                </button>
            </Link>
        </div>
        

    </div>
  )
}
