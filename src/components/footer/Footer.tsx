import Link from 'next/link'

export const Footer = () => {
  return (
   <>
    <div className='w-full h-full flex justify-between items-center pb-10 md:pb-0'>
      <Link href={"mailto:lumavaagency@gmail.com"}>
          <h3 className={` text-sm font-light text-purple-200 `} >Lumava <span className="opacity-0 sm:opacity-100">-</span> Agency</h3>
      </Link>
      <Link href='/portfolio'>
          <span className={`text-sm font-light text-purple-200 `} >Portfolio </span>
          <span className={` text-sm font-light text-purple-200 `} > © { new Date().getFullYear() }</span>
      </Link>
    </div>
   </>
  )
}
