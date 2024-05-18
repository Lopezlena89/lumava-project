
import { LittleSquare } from './LittleSquare';

interface Props{
    data:{
        title:string,
        text:string,
        
    }
}

export const Card = ({data}:Props) => {
   const {title,text} = data;
  return (
    <>
        <div
        className='flex  flex-col h-[270px] md:min-h-[300px] m-2 items-center justify-start 
        overflow-hidden rounded-xl border border-gray-800 bg-black z-10'
        >
            <div className='w-full h-[90px] flex justify-between items-center p-5'>
                <h3 className='text-purple-200  '>{title}:</h3>
                <LittleSquare icon={title}/>
            </div>
            <div className='w-full h-auto flex p-5 text-purple-200 '>
                <p>{text}</p>
            </div>
        </div>

    </>
  )
}
