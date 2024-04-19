import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Portfolio() {

  return (
    <main className="principal w-full h-full md:pt-16 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  ">
      <SvgComponent />
      <SvgComponent1/>
      {/* Objeto 1 */}
      <section className="w-full h-full rounded-lg flex flex-col relative p-1">
        <div className="w-full h-[350px]  p-1 rounded-lg border border-gray-800  from-black to-gray-950 my-1">
          <div className="w-full h-[87%] p-1 rounded-lg ">
            <Image
              src={"/yoga.webp"}
              width={500}
              height={500}
              priority={true}
              alt="Yoga Page"
              className="first rounded-lg  w-full h-[100%] "
            />
           
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://yoga-page-mu.vercel.app/'}
              className="w-full h-full pt-1 rounded-lg "
              target="_black"
            >
              <div className="w-full h-full card rounded-lg flex justify-center items-center   ">
                <span className="font-medium text-purple-200">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 text-purple-200' />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-[350px] p-1  rounded-lg border border-gray-800  from-black to-gray-950 my-1">
          <div className="w-full h-[87%] p-1 rounded-lg ">
            <Image
              src={"/meme-shop.webp"}
              width={500}
              height={500}
              priority={true}
              alt="Meme shop"
              className="first rounded-lg w-full h-[100%] "
            />
           
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://01shopmeme.vercel.app/'}
              className="w-full h-full pt-1 rounded-lg "
              target="_black"
            >
              <div className="w-full card h-full rounded-lg flex justify-center items-center  ">
                <span className="font-medium text-purple-200">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 text-purple-200' />
              </div>
            </Link>
          </div>
        </div>
        
        <div className="w-full h-[350px] p-1  rounded-lg border border-gray-800  from-black to-gray-950  my-1">
          <div className="w-full h-[87%] p-1 rounded-lg ">
          <Image
            src={"/smart-nutrition.webp"}
            width={500}
            height={500}
            alt="Street Smart Nutrition"
            className="rounded-lg w-full h-[100%]"
          />
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://thriving-cactus-97f706.netlify.app/'}
           
              className="w-full h-full pt-1 rounded-lg   "
              target="_black"
            >
              <div className="w-full h-full card rounded-lg flex justify-center items-center  ">
                <span className="font-medium text-purple-200">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 text-purple-200' />
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* Objeto 2 */}
      <section className="w-full h-full rounded-lg flex flex-col relative p-1">
        <div className="w-full h-[300px] p-1  rounded-lg border border-gray-800  from-black to-gray-950 my-1">
          <div className="w-full h-[87%] p-1 rounded-lg ">
            
            <Image
              src={"/belafresh.webp"}
              width={500}
              height={500}
              priority={true}
              alt="Bela fresh"
              className="first rounded-lg  w-full h-[100%] "
            /> 
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://belafresh.com'}
              className="w-full h-full pt-1 rounded-lg  "
              target="_black"
            >
              <div className="w-full h-full card rounded-lg flex justify-center items-center   ">
                <span className="font-medium text-purple-200">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 text-purple-200' />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-[300px] p-1  rounded-lg border border-gray-800  from-black to-gray-950 my-1">
          <div className="w-full h-[87%] p-1 rounded-lg ">
            
            <Image
              src={"/pure-in-heart.webp"}
              width={500}
              height={500}
              priority={true}
              alt="Pure In Heart"
              className="first rounded-lg  w-full h-[100%] "
            /> 
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://genuine-duckanoo-ee72b4.netlify.app/'}
              className="w-full h-full pt-1 rounded-lg  "
              target="_black"
            >
              <div className="w-full h-full card rounded-lg flex justify-center items-center   ">
                <span className="font-medium text-purple-200">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 text-purple-200' />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-[300px] p-1  rounded-lg border border-gray-800  from-black to-gray-950 my-1">
          <div className="w-full h-[87%] p-1 rounded-lg">
            <Image
              src={"/calendar.webp"}
              width={500}
              height={500}
              priority={true}
              alt="Calendar-Time app"
              className="first rounded-lg  w-full h-[100%] "
            /> 
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://time-weather.vercel.app/'}
              className="w-full h-full pt-1 rounded-lg  "
              target="_black"
            >
              <div className="w-full h-full card rounded-lg flex justify-center items-center   ">
                <span className="font-medium text-purple-200">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 text-purple-200' />
              </div>
            </Link>
          </div>
        </div>
        
        

      </section>
      {/* Objeto 3 */}
      <section className="w-full h-full rounded-lg flex flex-col relative p-1">
        
        <div className="w-full h-[350px] p-1  rounded-lg border border-gray-800  from-black to-gray-950 my-1">
          <div className="w-full h-[87%] p-1 rounded-lg ">
            <Image
              src={"/lumava_dev.webp"}
              width={500}
              height={500}
              priority={true}
              alt="lumava"
              className="first rounded-lg w-full h-[100%] "
            />
           
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://lumava.dev'}
              className="w-full h-full pt-1 rounded-lg "
              target="_black"
            >
              <div className="w-full card h-full rounded-lg flex justify-center items-center  ">
                <span className="font-medium text-purple-200">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 text-purple-200' />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full h-[350px] p-1  rounded-lg border border-gray-800  from-black to-gray-950  my-1">
          <div className="w-full h-[87%] p-1 rounded-lg ">
          <Image
            src={"/questions-ai.webp"}
            width={500}
            height={500}
            alt="Questions-ai"
            className="rounded-lg  w-full h-[100%]"
          />
         
          </div>
          <div className="w-full h-[13%] pt-1  ">
            <Link
              href={'https://questions-ai.netlify.app/'}
           
              className="w-full h-full pt-1 rounded-lg bg-gray-100  "
              target="_black"
            >
              <div className="w-full h-full card rounded-lg flex justify-center items-center  ">
                <span className="font-medium text-purple-200">Go to project</span>
                <IoIosArrowRoundForward className='ml-2 text-purple-200' />
              </div>
            </Link>
          </div>
        </div>
        

      </section>


    </main>
  )
}
