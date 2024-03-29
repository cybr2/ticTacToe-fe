import { useState, useEffect } from 'react';
// import { dataSample } from '../../dummy-data/data';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import axios from 'axios';
import { Skeleton } from "./ui/skeleton"


const Table = () => {
  const [dataSample, setDataSample] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    // Make axios GET request to fetch data
    axios.get('https://tictactoe-be-cybr2.onrender.com/getRecords')
      .then(response => {
        setDataSample(response.data);
        console.log(response.data);
        setIsLoading(false); // Assuming response.data is an array of records
        // Assuming response.data is an array of records
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {
        isLoading  ? (
            
            <div className='flex flex-col w-full items-center pb-5'>
                <div className='flex flex-col w-[90%] sm:w-[80%] lg:w-[60%] items-center gap-2 sm:gap-4 lg-gap-6'>
                  <Skeleton className="h-[40px] sm-h-[50px] lg-h-[60px] w-full  rounded-xl bg-slate-400" />
                  <div className="w-full space-y-2 mt-5 flex flex-col items-center">
                    <Skeleton className="h-8 w-[70%]  bg-slate-400 " />
                    <Skeleton className="h-8 w-[70%] bg-slate-400" />
                  </div>
                  <Skeleton className="h-[40px] sm-h-[50px] lg-h-[60px] w-full  rounded-xl bg-slate-400" />
                  <Skeleton className="h-[40px] sm-h-[50px] lg-h-[60px] w-full  rounded-xl bg-slate-400" />
                  <Skeleton className="h-[40px] sm-h-[50px] lg-h-[60px] w-full  rounded-xl bg-slate-400" />
                </div>

              </div>
          
        ) : (
           <ul className="mb-4 flex w-full lg:w-[70%] items-center  justify-center gap-10  text-sm flex-col  text-center text-neutral-800">
            {
              dataSample.map((data) => (
                <li key={data._id} className="w-full hover:translate-y-[-5px] transition-transform duration-300 cursor-pointer hover:text-white transition-text">
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
        )
      }
          
        
    </>
  )
}

export default Table