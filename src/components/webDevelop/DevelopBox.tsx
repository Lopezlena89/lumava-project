import { serviceBox, servicioDevelop } from "@/utils/text/webDevelopData"
import { LinkModal } from "../modal/LinkModal"
import { DevelopBoxServices } from "./DevelopBoxServices"


export const DevelopBox = () => {
  return (
    <>
        {
            servicioDevelop.map(text =>(
                <div key={text.title}>
                    <div className="w-full flex justify-center">
                        <h2 className="text-2xl  hover:text-violet-400 duration-700 font-mono">{text.title}</h2>
                    </div>
                    <div className="w-full py-10">
                        <span className="text-md">{text.subtitle1}</span>
                        <span className="text-md font-semibold text-violet-400">{text.subtitle2}</span>
                    </div>
                </div>
            ))
        }
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {
                serviceBox.map(text=>(
                    <DevelopBoxServices key={text.boxtitle} text={text}/>
                ))
            }
        </div>
        <div className="w-full flex justify-center py-5">
            <LinkModal/>
        </div>
    </>
  )
}
