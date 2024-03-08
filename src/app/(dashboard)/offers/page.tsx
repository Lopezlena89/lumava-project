import { CardsMove } from "@/components/card/CardsMove";
import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import { offersDesign, offersWeb } from "@/utils/text/data";
import { Footer } from '../../../components/footer/Footer';

export default function Offers() {
    return (
      <>
        <main className="principal  w-full h-auto overflow-hidden">
            <SvgComponent />
            <SvgComponent1/>
            <section className=" w-full h-auto   flex flex-col  overflow-hidden">
              <div className="w-full min-h-[250px]   flex flex-col items-center justify-end px-5 ">
                  <div 
                      className="text-purple-200 font-sans font-semibold animation-title"
                  >
                      <h3 className="text-center text-4xl md:text-6xl flex flex-col"> 
                              <span className="bg-gradient-to-r from-purple-200 via-purple-400  to-purple-800
                                text-transparent bg-clip-text">Precios simples y fáciles</span>
                              
                      </h3>
                  </div>
                  <div 
                      className="text-purple-200 font-sans font-semibold text-lg md:text-xl mt-5 animation-title-dos"
                  >
                      <p className="text-center">{`"Transforma tu Visión en Realidad Digital:`} </p>
                      <p className="text-center">{` Tu Sitio Web, Tu Éxito. ¡El Futuro Online Comienza Aquí!"`}</p>
                  </div>
              </div> 
            </section>
            <section className="w-[100%]  mt-10 flex flex-col items-center ">
                
                <p className="text-center text-2xl md:text-3xl bg-gradient-to-r from-purple-200 via-purple-400  to-purple-800
                                text-transparent bg-clip-text">Paquetes Sitios Web </p>

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
            <section className="w-[100%]  mt-10 flex flex-col items-center ">
                
                <p className="text-center text-2xl md:text-3xl bg-gradient-to-r from-purple-200 via-purple-400  to-purple-800
                                text-transparent bg-clip-text">Paquetes Diseño & Branding </p>

                <div className="w-full min-h-[450px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {
                      offersDesign.map((data,index)=>(
                        
                        <div key={`${data}-${index}`}>
                          <CardsMove  data={data}/>
                        </div>
                        
                      ))
                    }
                    
                </div>
                  
            </section>
        </main>
        <footer className="w-full h-[100px] px-10 relative">
            <Footer/>
        </footer>
      </>
    )
  }
  