import Link from 'next/link'

export const Footer = () => {
  return (
   <>
    <div className='w-full h-full flex justify-between'>
      <Link href={"mailto:lumavaagency@gmail.com"}>
          <h3 className={` text-sm font-light text-gray-600 dark:text-zinc-400`} >Lumava <span className="opacity-0 sm:opacity-100">-</span> Agency</h3>
      </Link>
      <Link href='/portfolio'>
          <span className={`text-sm font-light text-gray-600 dark:text-zinc-400`} >Portfolio </span>
          <span className={` text-sm font-light text-gray-600 dark:text-zinc-400`} > © { new Date().getFullYear() }</span>
      </Link>
    </div>
   </>
  )
}
