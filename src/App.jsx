
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GameBoard from './components/GameBoard.jsx';
import Home from "./components/Home.jsx";
import LeaderBoard from "./components/LeaderBoard.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/gameboard",
    element: <GameBoard/>,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
]);


function App() {

  return (
    <>
      {/* for the background grid design  */}
      <div className="h-screen w-screen px-[10px] sm:px-[4rem] py-[2rem] dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative overflow-auto">
        {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]">
            </div>
            <div className="w-full h-full z-10 ">
                <div className="w-full h-full text-4xl sm:text-5xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
                    <RouterProvider router={router}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
