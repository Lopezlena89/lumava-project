import { BlogLumava } from "@/components/blog/BlogLumava";
import { Footer } from "@/components/footer/Footer";
import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import { blogData } from "@/utils/text/blog";
import Image from "next/image";
import Link from "next/link";




export default function  Blog (){
  return (
    <>
        <main className="principal w-full h-full md:pt-16  overflow-hidden">
            <SvgComponent />
            <SvgComponent1/>
            {
              blogData.map((blog,index)=>(
                  <BlogLumava key={blog.title} blog={blog}/>
              ))
            }
        </main>
        <Footer/>
        
    </>
  )
}
