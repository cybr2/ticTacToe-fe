import Header from './Header';

const About = () => {
  return (
    <>
        <div className="h-full w-full">
            <Header />
            <div className="h-[90%] w-full flex flex-col sm:flex-row   text-neutral-400 gap-5 ">
                <div className='flex flex-col gap-5 text-4xl'>
                    <div className='button-morph h-full w-full flex flex-col justify-center items-center px-5 py-2'>
                        <h1 className=' mt-4'>history : </h1>
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              Ancient Origins :
                              <span className='font-light'>
                                  While evidence remains inconclusive, some say the game traces back to ancient Egypt or Rome, played with stones or pebbles.
                              </span>
                          </p>
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              Ancient Origins :
                              <span className='font-light'>
                                  While evidence remains inconclusive, some say the game traces back to ancient Egypt or Rome, played with stones or pebbles.
                              </span>
                        </p> 
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              Ancient Origins :
                              <span className='font-light'>
                                  While evidence remains inconclusive, some say the game traces back to ancient Egypt or Rome, played with stones or pebbles.
                              </span>
                        </p>   
                    </div>
                    <div className='button-morph h-full w-full flex flex-col justify-center items-center px-5 py-2'>
                        <h1 className=' mt-4'>how to play : </h1>
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              <span className='font-light'>
                                Two players take turns marking X or O on a 3x3 grid.
                                The first player to achieve three of their marks in a row (horizontal, vertical, or diagonal) wins.
                              </span>
                        </p>
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              <span className='font-light'>
                                The game can also end in a draw if all squares are filled without either player having three in a row.
                              </span>
                        </p> 
                    </div>
                </div>
                <div className='flex flex-col gap-5 text-4xl'>
                    <div className='button-morph h-full w-full flex flex-col justify-center items-center px-5 py-2'>
                        <h1 className=' mt-4'>tactics : </h1>
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              Defense First :
                              <span className='font-light'>
                                  Prioritize blocking your opponent potential winning moves.
                              </span>
                        </p>
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              Fork Play :
                              <span className='font-light'>
                                  Aim to create two winning threats simultaneously, forcing your opponent to defend one, leaving you open to win the other.
                              </span>
                        </p> 
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              Center Control :
                              <span className='font-light'>
                                  Occupying the center square gives you more options for creating lines.
                              </span>
                        </p>   
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                            Think Ahead :
                            <span className='font-light'>
                                Plan your moves, considering your opponent possible responses.
                            </span>
                        </p> 
                        <h1 className=' mt-4'>trivia : </h1>
                        <p className='text-sm mb-[20px] md:w-[70%]'>
                              First Video Game :
                              <span className='font-light'>
                                   In 1952, OXO a digital Tic Tac Toe, became the first video game ever played on a computer.
                              </span>
                        </p>  
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
