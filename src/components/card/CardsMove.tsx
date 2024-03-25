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
                 <div className='w-full h-full p-5 text-purple-200'>
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
            <div className='w-full h-auto p-5 '>
                <p className='font-semibold  bg-gradient-to-r from-purple-300 via-purple-500  to-purple-900
                                text-transparent bg-clip-text'>{data.titulo}</p>
                <p className='mt-3 text-4xl font-semibold text-purple-200'>{data.precio} <span className='text-sm'>mxn</span></p>
                <p className='mt-2 text-sm text-purple-200'>{data.subtitulo}</p>
            </div>
            <div className='w-[90%] h-[1px]  bg-white/10'/>
           <ListCard/>
           <Link href="https://wa.me/523315753378" className="m-5">
                <button className="w-[100px] h-[40px] border border-solid border-violet-500 duration-700 rounded-2xl  text-purple-200 z-20 ">
                    Comprar
                </button>
            </Link>
        </div>
        

    </div>
  )
}
