import { useEffect } from "react";
import Square from "./Square"
import { calculateWinner } from "../../lib/utils/calculateWinner";
import { gameOverStore } from "../../store/gameOverStore";
import { winnerStore } from "../../store/winnerStore";
import { playerStore } from "../../store/playerStore";
import { tileStore } from "../../store/tileStore";
import { checkPlayerStore } from "../../store/checkPlayerStore";
import { isDrawStore } from "../../store/isDrawStore";
import useRoundStore from "../../store/roundStore";
import useWinLoseStore from "../../store/winLoseStore";
import useDrawStore from "../../store/drawStore";

const rowTile = [0,1,2];
const columnTile = [0,1,2];

const Board = () => {
    const { setStatus } = winnerStore();
    const { setIsDraw } = isDrawStore();
    const { playerOne, playerTwo } = playerStore();
    const { setIsGameOver } = gameOverStore()
    const { squares, setSquares }  =  tileStore();
    const { isX, setIsX }  = checkPlayerStore();
    const { incrementRoundCount } = useRoundStore(); 
    const { incrementPlayerOneWinCount, incrementPlayerTwoWinCount, incrementPlayerOneLoseCount, incrementPlayerTwoLoseCount } = useWinLoseStore();
    const { incrementDrawCount } = useDrawStore();

    const handleOnClick = (pos) => {
       if(calculateWinner(squares) || squares[pos]) {
            return;
        } 
        squares[pos] = isX ? 'X' : '0'
        setSquares(squares)
        setIsX(!isX)
    }

    const winner = calculateWinner(squares)

    
   
    
    useEffect(() => {
        if (winner) {
            setIsGameOver(true);
            incrementRoundCount();
            if(winner === 'X'){
                setStatus(`player one : ${playerOne} wins... better luck next time player two : ${playerTwo}`);
                incrementPlayerOneWinCount();
                incrementPlayerTwoLoseCount();
            }else{
                setStatus(`player two : ${playerTwo} wins... better luck next time player one : ${playerOne}`);
                incrementPlayerTwoWinCount();
                incrementPlayerOneLoseCount();
            }
        } else if (squares.every((square) => square !== null)) {
            setIsGameOver(true);
            setIsDraw(true);
            incrementRoundCount();
            incrementDrawCount();
            setStatus('It\'s a draw!');
        } else {
            setStatus(`turn: ${isX? 'player one' : 'player two'}`);
        }

    }, [winner, isX, setStatus, playerOne, playerTwo, setIsGameOver, setIsDraw, squares, incrementRoundCount, incrementPlayerOneWinCount, incrementPlayerTwoLoseCount, incrementPlayerTwoWinCount, incrementPlayerOneLoseCount, incrementDrawCount ])



    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleOnClick(i)} />
      }

    
    
  return (
    <>
        {rowTile.map((row) => (
            <div key={row} className="flex items-center justify-center gap-4">
                {columnTile.map((col) => (
                    <div key={row * 3 + col}>
                        {renderSquare(row * 3 + col)}
                    </div>
                ))}
            </div>
        ))}
    </>
  )
}

export default Board