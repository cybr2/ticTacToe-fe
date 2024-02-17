import { winningPatterns } from "./winningPatterns";

export const calculateWinner = (squares) =>{
    return winningPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    }) ? squares[winningPatterns.find(pattern => {
      const [a, b, c] = pattern;
      return squares[a] && squares[a] === squares[b] && squares[a] === squares[c];
    })[0]] : null;
  }