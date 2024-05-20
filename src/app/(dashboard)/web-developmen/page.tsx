import { Footer } from "@/components/footer/Footer";
import { Modal } from "@/components/modal/Modal";
import SvgComponent from "@/components/svg/ImageSvg";
import SvgComponent1 from "@/components/svg/ImageSvgG1";
import { DevelopBox } from "@/components/webDevelop/DevelopBox";
import { DevelopLumava } from "@/components/webDevelop/DevelopLumava";
import { DevelopRoute } from "@/components/webDevelop/DevelopRoute";
import { DevelopTitle } from "@/components/webDevelop/DevelopTitle";



export default function WebPage() {
  return (
    <>
      <Modal/>
      <SvgComponent />
      <SvgComponent1/>
      <main className="principal w-full h-full   ">
        
       
        <section className="w-full h-auto px-[10%]">
          <section className="w-full h-full flex flex-col items-center ">
            <DevelopTitle/>
          </section>
          <section className="w-full h-auto text-gray-200 relative">
            <DevelopBox/>
          </section>
          <section className="w-full h-auto text-gray-200 flex flex-col py-10 relative">
            <DevelopRoute/>
          </section>
          <section className="w-full h-auto flex flex-col items-center justify-start py-5 text-gray-200 relative">
            <DevelopLumava/>
          </section>
        </section>
      </main>
      <Footer/>
    </>
  )
}
