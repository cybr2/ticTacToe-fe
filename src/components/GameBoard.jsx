import Board from "./Board"
import Header from "./Header"
import { playerStore } from "../../store/playerStore";
import { handleWordOnScreen } from "../../lib/utils/wordOnScreen";
import { gameOverStore } from "../../store/gameOverStore";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { useNavigate  } from "react-router-dom";
import axios from "axios";
import { winnerStore } from "../../store/winnerStore";
import { tileStore } from "../../store/tileStore";
import { checkPlayerStore } from "../../store/checkPlayerStore";
import useRoundStore from "../../store/roundStore";
import useWinLoseStore from "../../store/winLoseStore";
import useDrawStore from "../../store/drawStore";
import { settingIcon, homeIcon, logoIcon } from "../assets/svgs";
import { playIcon } from "../assets/images";

const GameBoard = () => {
  const { status } = winnerStore();
  const { setSquares }  =  tileStore();
  const { setIsX }  = checkPlayerStore();
  const { isGameOver , setIsGameOver } = gameOverStore(); 
  const { playerOne , playerTwo } = playerStore();
  const { roundCount,setRoundCount } = useRoundStore();
  const { playerOneWinCount, playerTwoWinCount, playerOneLoseCount, playerTwoLoseCount, setPlayerOneWinCount, setPlayerTwoWinCount, setPlayerOneLoseCount, setPlayerTwoLoseCount } = useWinLoseStore();
  const { drawCount, setDrawCount } = useDrawStore();

  const navigate = useNavigate();

  const getGameData = () => {
    const currentDate = new Date().toLocaleDateString;
    const currentTime = new Date().toLocaleTimeString();

    const data = {
      dateTime: `${currentDate} ${currentTime}`,
      playerOneWinCount,
      playerTwoWinCount,
      playerOneLoseCount,
      playerTwoLoseCount,
      roundCount,
      drawCount
    };

    return data;
  }

  // const handleExit = () => {
  //   setRoundCount(1);
  //   setPlayerOneWinCount(0);
  //   setPlayerTwoWinCount(0);
  //   setPlayerOneLoseCount(0);
  //   setPlayerTwoLoseCount(0);
  //   setDrawCount(0);
  //   setIsGameOver(false);
  //   setIsX(true);
  //   setSquares(Array(9).fill(null));
  //   navigate('/');
  // };

  const handleExit = () => {
    // Check if there is data stored in localStorage
    const savedData = localStorage.getItem('savedData');
    if (savedData) {
        const data = JSON.parse(savedData);
        // Save data to the database
        saveDataToDatabase(data);
    }else{
      const data = getGameData();
      saveDataToDatabase(data);
    }
    // Reset the game state
    resetGameState();
};

const saveDataToDatabase = async (data) => {
    try {
        // Perform database operation to save data
        console.log('Data saved to the database:', data);
    } catch (error) {
        console.error('Error saving data to the database:', error);
    }
};

const resetGameState = () => {
    // Reset game state
    setRoundCount(1);
    setPlayerOneWinCount(0);
    setPlayerTwoWinCount(0);
    setPlayerOneLoseCount(0);
    setPlayerTwoLoseCount(0);
    setDrawCount(0);
    setIsGameOver(false);
    setIsX(true);
    setSquares(Array(9).fill(null));
    // Navigate to home page
    navigate('/');
};


  // const handleContinue = async (data) => {
  //   try{
  //     // const res = await axios.post('', data,{
  //     //   headers: {
  //     //     'Content-Type': 'application/json'
  //     //   },
  //     // });
  //     // console.log('Data saved successfully:', res.data);
  //     console.log('Data saved successfully:', data);
  //       setIsX(true)
  //       setSquares(Array(9).fill(null))
  //     setIsGameOver(false);
  //   } catch (error) {
  //     console.error('Error saving data:', error.message);
  //   }
  // }

  const handleContinue = async () => {
    try {
        // Save data to localStorage
        const data = getGameData();
        localStorage.setItem('savedData', JSON.stringify(data));
        // Continue the game
        continueGame();
    } catch (error) {
        console.error('Error saving data to localStorage:', error);
    }
};

const continueGame = () => {
    // Reset necessary game state
    setIsX(true);
    setSquares(Array(9).fill(null));
    setIsGameOver(false);
};

  return (
    <>
      <div className="h-full w-full flex flex-col justify-center">
              <div className="flex justify-between items-center ">
                <div className="sm:h-20 sm:w-20 h-[8vh] w-[8vh]">
                  <img src={logoIcon} alt=""  />
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger><img src={settingIcon} alt="" className="h-[30px] w-[30px]" /></DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col items-center w-[10px]">
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><button onClick={() => handleContinue()}><img src={playIcon} alt="" className="h-[30px] w-[30px]" /></button></DropdownMenuItem>
                        <DropdownMenuItem><button onClick={() => handleExit()}><img src={homeIcon} alt="" className="h-[30px] w-[30px]" /></button></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className=" flex w-full text-3xl mt-10 justify-center items-center">
                <div className="flex w-full sm:w-[80%] lg:w-[60%] text-3xl justify-between items-top ">
                  <div className="text-start  ">
                    <p className="uppercase text-sm sm:text-2xl mb-4 text-lime-400 tracking-wide">player one : </p>
                    <h6 className="text-sm sm:text-2x">{handleWordOnScreen(playerOne)}</h6>
                    <h6 className="text-sm sm:text-2x">win : {playerOneWinCount}</h6>
                    <h6 className="text-sm sm:text-2x">lose : {playerOneLoseCount}</h6>
                    <h6 className="text-sm sm:text-2x">draw : {drawCount}</h6>
                  </div>
                  <div className="text-center">
                      <p className="uppercase text-sm sm:text-2xl mb-4 text-yellow-500">round</p>
                      <h6 className="uppercase text-sm sm:text-2xl text-yellow-400">{roundCount}</h6>
                  </div>
                  <div className="text-end  ">
                      <p className=" uppercase text-sm sm:text-2xl mb-4 text-red-300 tracking-wide">player two: </p>
                      <h6 className="text-sm sm:text-2x">{handleWordOnScreen(playerTwo)}</h6>
                      <h6 className="text-sm sm:text-2x">{playerTwoWinCount} : win</h6>
                      <h6 className="text-sm sm:text-2x">{playerTwoLoseCount} : lose</h6>
                      <h6 className="text-sm sm:text-2x">{drawCount} : draw</h6>
                  </div>
                </div>
              </div>
              <div className="h-full w-full  flex flex-col items-center justify-center gap-4">
                <Dialog  open={isGameOver} onOpenChange={setIsGameOver}>
                    <DialogContent className='bg-slate-300 w-[90%]  rounded-md'>
                      <DialogHeader className="mb-5">
                        <DialogTitle className="text-center uppercase mb-2">game over...!</DialogTitle>
                        <DialogDescription className="text-center">
                            {/* player one : {playerOne} wins... better luck next time player two : {playerTwo} */}
                            {status}
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter className="flex flex-row gap-2">
                        <button onClick={() => handleExit()} className="bg-neutral-100 w-[50%] sm:w-[25%] py-4 rounded-md">stop</button>
                        <button onClick={() => handleContinue()} className="bg-green-400 w-[50%] sm:w-[45%] px-6 py-4 rounded-md">continue</button>
                      </DialogFooter>
                    </DialogContent>
                </Dialog>
                
                <Board/>
                <div className="text-2xl uppercase">
                  {status}
                </div>
              </div>
      </div>
    </>
  )
}



export default GameBoard