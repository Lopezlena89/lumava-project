
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
       
        className=' flex flex-col h-[250px] md:h-[330px]   m-5 items-center justify-start overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-r from-black to-gray-950  '
        >
           
            <div className='w-full h-[90px] flex justify-between items-center p-5'>
               
                <h3 className='text-purple-200  '>{title}:</h3>
                <LittleSquare icon={title}/>
            </div>
            <div className='w-full h-auto flex p-5 text-purple-200 text-[13px] md:text-sm'>
                <p>{text}</p>
            </div>
            
          
        </div>

    </>
  )
}
