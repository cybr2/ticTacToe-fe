import Header from "./Header";
import { heroIcon } from "../assets/svgs";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    
  } from "./dialog"
import Button from "./Button";
import { playerStore } from "../../store/playerStore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const { playerOne, playerTwo, setPlayerOne, setPlayerTwo } = playerStore();
    const [playerOneError, setPlayerOneError] = useState(false);
    const [playerTwoError, setPlayerTwoError] = useState(false);
    const [playerOneBorder, setPlayerOneBorder] = useState('border-slate-400');
    const [playerTwoBorder, setPlayerTwoBorder] = useState('border-slate-400');


    useEffect(() => {
        setPlayerOneError(playerOne === '');
        setPlayerTwoError(playerTwo === '');
        setPlayerOneBorder(playerOne ? 'border-green-400' : 'border-slate-400');
        setPlayerTwoBorder(playerTwo ? 'border-green-400' : 'border-slate-400');
    }, [playerOne, playerTwo,playerOneError,playerTwoError]);

    const handleClickStart = () => {
        if (!playerOne) {
            setPlayerOneError(true);
            setPlayerOneBorder('border-red-400');
        }
        if (!playerTwo) {
            setPlayerTwoError(true);
            setPlayerTwoBorder('border-red-400');
        }
    }

    
  return (
    <>
        <div className="h-full w-full ">
            <Header />
            <div className="h-[90%] w-full  flex flex-col items-center justify-center ">
                <img src={heroIcon} alt="" className="h-[50%]  sm:h-[60%] mb-5 " />
                <Dialog>
                    <DialogTrigger>
                        <div className="mb-4 hover:scale-110 transform duration-200 text-neutral-500">new game</div> 
                    </DialogTrigger>
                    <DialogContent className="bg-slate-200 flex flex-col w-[80%] sm:w-full justify-center items-center rounded-lg">
                        <DialogHeader>
                        <DialogTitle className=" capitalize">enter player name</DialogTitle>
                        </DialogHeader>
                        <div className="w-full flex flex-col gap-4">
                            <input 
                                type="text"
                                value={playerOne}
                                onChange={(e) => setPlayerOne(e.target.value)} 
                                placeholder="player one" 
                                className={`rounded-lg px-4 py-2 uppercase shadow-m border border-solid  ${playerOneBorder} `} />
                            <input 
                                type="text" 
                                value={playerTwo}
                                onChange={(e) => setPlayerTwo(e.target.value)} 
                                placeholder="player two" 
                                className={`rounded-lg px-4 py-2 uppercase shadow-md border border-solid ${playerTwoBorder} `}  />
                        </div>
                        <DialogFooter className="w-full text-center ">
                            {
                                (playerOne.length > 0 && playerTwo.length > 0) ? (
                                    <Link to='/gameboard' className="bg-neutral-900 text-white tracking-wide p-2 rounded-lg cursor-pointer sm:px-10">Start</Link>
                                ) : (
                                    <button type="button" onClick={handleClickStart} className="bg-neutral-900 text-white tracking-wide p-2 rounded-lg cursor-pointer sm:px-10 capitalize">start</button>
                                )
                            }
                        </DialogFooter>
                    </DialogContent>   
                </Dialog>
                <Button title='leaderboard'/>
                <Button title='about'/>
            </div>
        </div>
    </>
    
  )
}

export default Home