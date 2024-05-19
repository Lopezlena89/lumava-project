import { lumavatext } from "@/utils/text/webDevelopData"
import { LinkModal } from "../modal/LinkModal"


export const DevelopLumava = () => {
  return (
    <>
        {
            lumavatext.map(text =>(
                <div key={text.title2}>
                    <div className="w-[80%] ">
                        <h3 className="text-2xl  hover:text-violet-400 duration-700 font-mono">{text.title1}</h3>
                        <p className="py-5">{text.text1}</p>
                    </div>
                    <div className="w-[80%] py-5">
                        <h3 className="text-2xl  hover:text-violet-400 duration-700 font-mono">{text.title2}</h3>
                        <p className="py-3">{text.text2}</p>
                        <p className="py-3">{text.text3}</p>
                        <p className="py-3">{text.text4}</p>
                        <p className="py-3">{text.text5}</p>
                        <p className="py-3">{text.text6}</p>
                        <p className="py-3">{text.text7}</p>
                        <p className="py-3">{text.text8}</p>
                        <p className="py-3">{text.text9}</p>
                    </div>
                </div>
            ))
        }
        <div className="w-full flex justify-center py-5">
            <LinkModal/>
        </div>
    </>
  )
}
