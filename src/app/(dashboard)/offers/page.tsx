import { CardsMove } from "@/components/mainPage/card/CardsMove";
import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import {  offersWeb } from "@/utils/text/data";
import { Footer } from '../../../components/footer/Footer';

export default function Offers() {
    return (
      <>
        <SvgComponent />
        <SvgComponent1/>
        <main className="principal w-full h-full text-gray-200">
            <section className=" w-full h-auto flex flex-col  overflow-hidden">
              <div className="w-full min-h-[250px]   flex flex-col items-center justify-end px-5 ">
                  <div 
                      className="animation-title relative"
                  >
                      <h3 className="text-center text-4xl md:text-6xl flex flex-col"> 
                              <span className="font-semibold text-gray-200 font-mono hover:text-violet-400 duration-700">Paquetes a tu medida </span>
                              
                      </h3>
                  </div>
                  <div 
                      className="font-sans  text-lg md:text-xl mt-5 animation-title-dos"
                  >
                      <p className="text-center">{`Tu visión, nuestra creación`} </p>
                      <p className="text-center">{`¡El Futuro Online Comienza Aquí!`}</p>
                  </div>
              </div> 
            </section>
            <section className="w-[100%]  mt-10 flex flex-col items-center relative">
                
                <p className="text-center text-2xl md:text-3xl font-mono hover:text-violet-400 duration-700">Paquetes Sitios Web </p>

                <div className="w-full min-h-[450px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                      offersWeb.map((data,index)=>(
                       
                          <div key={`${data}-${index}`}>
                            <CardsMove  data={data}/>
                          </div>
                       
                      ))
                    }
                    
                </div>
                  
            </section>
           
        </main>
        <Footer/>
      </>
    )
  }
  