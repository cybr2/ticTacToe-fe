import { dataSample } from '../../dummy-data/data';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";

const Table = () => {
            
  return (
    <>
           <ul className="mb-4 flex w-full items-center  justify-center gap-10  text-sm flex-col  text-center text-neutral-800">
            {
              dataSample.map((data) => (
                <li key={data.dateTime} className="w-full hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer hover:text-white transition-text">
                  <Accordion type='single' collapsible className='w-full'>
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="flex w-full items-center justify-center rounded-md border-2 border-solid border-slate-400 hover:border-red-600 p-3 sm:p-3 md:p-4 hover:no-underline text-neutral-400 ">
                        <p className='text-sm md:w-[70%]'>
                            <span className='font-light'>
                              {data.dateTime}
                            </span>
                         </p>  
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col  justify-center gap-2 py-5 items-center text-neutral-400">
                        <p className='text-sm  md:w-[70%] flex items-center justify-center  '>
                                Round : {data.roundCount}
                                <span className='font-light p-2 bg-slate-200 ml-4'>
                                     draw : {data.drawCount} 
                                </span>
                                
                        </p>  
                        <div
                            className="flex max-lg:w-[90%] w-[80%] items-center justify-center rounded-md border-2 border-solid border-slate-400 hover:border-red-600 max-sm:p-3 sm:p-3 md:p-4"
                        >
                            <p className='text-sm  md:w-[70%] flex items-center justify-center  '>
                                player 1 : {data.playerOne}
                                <span className='font-light p-2 bg-green-200 m-4'>
                                    {data.playerOneWinCount} 
                                </span>
                                |
                                <span className='font-light p-2 bg-red-200 m-4'>
                                    {data.playerOneLoseCount} 
                                </span>
                            </p>  
                        </div>
                            <div
                              className="flex max-lg:w-[90%] w-[80%] items-center justify-center rounded-md border-2 border-solid border-slate-400 hover:border-red-600 max-sm:p-3 sm:p-3 md:p-4"
                            >
                                <p className='text-sm  md:w-[70%] flex items-center justify-center  '>
                                    player 2 : {data.playerTwo}
                                    <span className='font-light p-2 bg-green-200 m-4'>
                                        {data.playerTwoWinCount} 
                                    </span>
                                          |
                                    <span className='font-light p-2 bg-red-200 m-4'>
                                        {data.playerTwoLoseCount} 
                                    </span>
                                </p> 
                            </div>
                            
                         
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              ))
            }
          </ul>
          
        
    </>
  )
}

export default Table