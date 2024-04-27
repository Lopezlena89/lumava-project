import Image from "next/image"
import Link from "next/link"

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
    <>
        <section className="w-full h-full ">
              <div className="w-full h-[100px] flex items-center p-10 ">
                <Link href={categoryLink} className="z-10 bg-black w-24 h-8 rounded-full button-blog flex justify-center items-center">
                  <span className="text-purple-200">{category}</span>
                </Link>
                <span className="text-purple-200 pl-6">{date}</span>
              </div>
              <div className="w-full h-full p-10">
                <h2 className=" text-4xl  flex flex-col text-purple-200"> 
                    <span >{title}</span>
                </h2>
                <p className="pt-4 text-lg  flex flex-col text-gray-500"> 
                    <span >{subtitle}</span>
                </p>
              </div>
            </section>
            <section className="w-full h-full text-purple-200 flex flex-col md:flex-row ">
              <div className="w-auto h-full px-10  flex flex-col  md:hidden">
                <p className="text-gray-500">Posted by</p>
                <div className="w-full h-24 flex justify-start items-center ">
                  <div className="w-auto h-full flex justify-center items-center">
                    <Image alt={position} width={100} height={100} className="z-10 w-[40px] h-[40px] rounded-full bg-cover bg-center" src={imagePost}/>
                  </div>
                  <div className="w-auto h-full pl-5 flex flex-col justify-center items-start ">
                    <p className="text-purple-200">{postby}</p>
                    <p className="text-gray-500">{position}</p>
                  </div>
                </div>

              </div>
              <div className="md:w-[70%] h-full px-10 border-r-[1px] border-solid border-gray-700">
                <p className="pb-5">{text.paragraph1}</p>
                <p className="py-5">{text.paragraph2}</p>
                <p className="py-5">{text.paragraph3}</p>
                <p className="py-5">{text.paragraph4}</p>
              </div>
              <div className="w-[30%] h-full px-5 hidden md:block">
                <p className="text-gray-500">Posted by</p>
                <div className="w-full h-24 flex items-center ">
                  <div className="w-auto h-full flex justify-center items-center">
                    <Image alt={position} width={100} height={100} className="z-10 w-[40px] h-[40px] rounded-full bg-cover bg-center" src={imagePost}/>
                  </div>
                  <div className="w-auto pl-5  h-full flex flex-col justify-center items-start ">
                    <p className="text-purple-200">{postby}</p>
                    <p className="text-gray-500">{position}</p>

                  </div>
                </div>

              </div>

            </section>
    </>
  )
}
