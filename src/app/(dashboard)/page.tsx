
import { CardGrid } from "@/components/mainPage/card/CardGrid";
import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import { Footer } from '../../components/footer/Footer';
import { Modal } from "@/components/modal/Modal";
import { WhyLumava } from "@/components/mainPage/whyLumava/WhyLumava";
import { Characteristic } from "@/components/mainPage/characterist/Characteristic";
import { FirstPage } from "@/components/mainPage/firstPage/FirstPage";
import { UpdatesPage } from "@/components/mainPage/updatespage/UpdatesPage";


export default function HomePage() {

       
    
  return (
    <>
        <Modal/>
        <SvgComponent />
        <SvgComponent1/>
        <main className="principal overflow-hidden ">
            
            
            <section className=" w-full h-full flex ">
                <FirstPage/>
            </section>
            {/* <section className="w-full h-auto relative p-5 ">
                <UpdatesPage/>
            </section> */}
            <section className="w-full h-auto  flex flex-col relative " >
                <CardGrid/>
            </section>
            <section className="w-full h-auto pt-10 p-5 " >
                <WhyLumava/>
            </section>
            <section className="w-full min-h-[400px] pb-10 mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                <Characteristic/>
            </section>
        </main>
        
        <Footer/>
    </>
  );
}
