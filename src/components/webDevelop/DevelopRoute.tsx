import { routeWebPage } from "@/utils/text/webDevelopData"


export const DevelopRoute = () => {
  return (
    <>
        {
            routeWebPage.map(text =>(
                <div key={text.title}>
                    <h3 className="text-2xl w-[80%] self-center hover:text-violet-400 duration-700 font-mono">{text.title}</h3>
                    <div className="w-full h-auto py-10 grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                        {
                            text.littleBox.map(littlebox =>(
                                <div key={littlebox.title} className="w-full h-full  flex flex-col justify-start items-center py-3 px-[5%]">
                                    <span className="text-gray-100 opacity-10 hover:opacity-40 duration-700 text-7xl">{littlebox.number}</span>
                                    <span className="text-violet-400 py-2 font-mono">{littlebox.title}</span>
                                    <span >{littlebox.text}</span>
                                </div>
                            ))
                        }
                        {
                            text.littleBox5.map(littlebox5=>(
                                <div key={littlebox5.title} className="w-full h-full  col-span-2 md:col-span-4 lg:col-span-1 flex flex-col justify-start items-center py-3 px-[25%] md:px-[35%] lg:px-[5%]">
                                    <span className="text-gray-100 opacity-10 hover:opacity-40 duration-700  text-7xl">{littlebox5.number}</span>
                                    <span className="text-violet-400 py-2 font-mono">{littlebox5.title}</span>
                                    <span >{littlebox5.text}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </>
  )
}
