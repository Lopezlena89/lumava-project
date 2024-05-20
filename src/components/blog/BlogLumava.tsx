import Image from "next/image"
import Link from "next/link"
import { CiInstagram,CiLinkedin,CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


interface Props{
    blog:{
        category: string;
        categoryLink:string;
        title: string;
        subtitle: string;
        date: string;
        imagePost: string;
        postby: string;
        position: string;
        text: {
            paragraph1: string;
            paragraph2: string;
            paragraph3: string;
            paragraph4: string;
        }
    }
}

export const BlogLumava = ({blog}:Props) => {
    const {category,categoryLink,title,subtitle,date,imagePost,postby,position,text} = blog;
  return (
    <div className="w-full h-auto border border-solid text-gray-200 border-gray-800 rounded-xl relative">
        <section className="w-full h-auto  relative">
          <div className="w-full h-[100px] flex items-center p-10 ">
            <span >{date}</span>
          </div>
          <div className="w-full h-full p-10">
            <h2 className=" text-4xl  flex flex-col text-gray-200"> 
                <span className="hover:text-violet-400 duration-700">{title}</span>
            </h2>
            <p className="pt-4 text-lg  flex flex-col text-gray-500"> 
                <span >{subtitle}</span>
            </p>
          </div>
        </section>
        <section className="w-full h-full px-10 flex flex-col md:flex-row ">
          <div className="w-auto h-auto flex flex-col  md:hidden">
            <p className="text-gray-500">Posted by</p>
            <div className="w-full h-auto py-5 flex justify-start items-center ">
              <div className="w-auto h-full flex justify-center items-center">
                <Image alt={position} width={100} height={100} className=" w-[40px] h-[40px] rounded-full bg-cover bg-center" src={imagePost}/>
              </div>
              <div className="w-auto h-full pl-5 flex flex-col justify-center items-start ">
                <p>{postby}</p>
                <p className="text-gray-500">{position}</p>
              </div>
              
             
            </div>
            <div className="w-full flex pb-5">
                <Link
                    href='https://www.instagram.com/luism.dev/'
                    className='p-1'
                >
                    <CiInstagram  className="cursor-pointer hover:text-violet-400 hover:duration-300" size={25}/>
                </Link>
                <Link
                    href='https://www.linkedin.com/in/luis-mariano-lopez-lena-valdivieso-a514073a/'
                    className='p-1'
                >
                    <CiLinkedin  className="cursor-pointer hover:text-violet-400 hover:duration-300" size={25}/>
                </Link>
                <Link
                    href='https://github.com/Lopezlena89'
                    className='p-1'
                >
                    <FaGithub  className="cursor-pointer hover:text-violet-400 hover:duration-300" size={25}/>
                </Link>
                
            </div>

          </div>
          <div className="md:w-[70%] h-full md:border-r-[1px] border-solid border-gray-700">
            <p className="pb-5">{text.paragraph1}</p>
            <p className="py-5">{text.paragraph2}</p>
            <p className="py-5">{text.paragraph3}</p>
            <p className="py-5">{text.paragraph4}</p>
          </div>
          <div className="w-[30%] h-full px-5 hidden md:block">
            <p className="text-gray-500">Posted by</p>
            <div className="w-full h-24 flex items-center ">
              <div className="w-[80px] h-full flex justify-start items-center">
                <Image alt={position} width={100} height={100} className=" w-[40px] h-[40px] rounded-full bg-cover bg-center " src={imagePost}/>
              </div>
              <div className="w-auto h-full flex flex-col justify-center items-start ">
                <p >{postby}</p>
                <p className="text-gray-500">{position}</p>

              </div>
            </div>
            <div className="w-full flex ">
                <Link
                    href='https://www.instagram.com/luism.dev/'
                    className='p-1'
                >
                    <CiInstagram  className="cursor-pointer hover:text-violet-400 hover:duration-300" size={25}/>
                </Link>
                <Link
                    href='https://www.linkedin.com/in/luis-mariano-lopez-lena-valdivieso-a514073a/'
                    className='p-1'
                >
                    <CiLinkedin  className="cursor-pointer hover:text-violet-400 hover:duration-300" size={25}/>
                </Link>
                <Link
                    href='https://github.com/Lopezlena89'
                    className='p-1'
                >
                    <FaGithub  className="cursor-pointer hover:text-violet-400 hover:duration-300" size={25}/>
                </Link>
                
            </div>

          </div>

        </section>
    </div>
  )
}
