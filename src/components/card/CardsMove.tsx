'use client'
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
        <div className='w-[87%] h-auto card rounded-xl flex flex-col items-center imagen-2'>
            <div className='w-full h-[100px p-5'>
                <p className='font-semibold  bg-gradient-to-r from-purple-300 via-purple-500  to-purple-900
                                text-transparent bg-clip-text'>{data.titulo}</p>
                <p className='mt-3 text-4xl font-semibold text-purple-200'>{data.precio} <span className='text-sm'>mxn</span></p>
                <p className='mt-2 text-sm text-purple-200'>{data.subtitulo}</p>
            </div>
            <div className='w-[90%] h-[1px]  bg-white/10'/>
           <ListCard/>
            
        </div>

    </div>
  )
}
