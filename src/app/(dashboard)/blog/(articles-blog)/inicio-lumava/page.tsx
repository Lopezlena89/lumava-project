import { BlogLumava } from '@/components/blog/BlogLumava'
import { Footer } from '@/components/footer/Footer'
import SvgComponent from '@/components/svg/ImageSvg'
import SvgComponent1 from '@/components/svg/ImageSvgG1'
import { blogData } from '@/utils/text/blog'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
        <SvgComponent />
        <SvgComponent1/>
        <main className="principal w-full h-auto p-[5%]  overflow-hidden ">
            <div className='w-full py-10 z-10 relative'>
                <Link className='border border-solir hover:border-violet-400 duration-700 border-gray-800 rounded-3xl text-gray-200 py-2 px-10 cursor-pointer ' href="/blog">Blog</Link>

            </div>
            {
            blogData.map((blog,index)=>(
                <BlogLumava key={blog.title} blog={blog}/>
            ))
            }
        </main>
      
    </>
  )
}

export default page;


