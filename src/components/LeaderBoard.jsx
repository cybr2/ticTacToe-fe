import Table from "./Table"
import  Header  from "./Header"

const LeaderBoard = () => {
  return (
    <>
        <div className="h-full w-full ">
          <Header />    
          <div className="flex  flex-col items-center justify-center rounded-lg button-morph pt-[4rem] px-4 text-slate-400 md:px-10 md:py-20  ">
            <div className="flex flex-col flex-1 items-center w-[90%] md:w-[80%] lg:w-[80%] ">
              <h1 className="mb-10 text-center capitalize ">game history : </h1>
              <Table/>
            </div>
          </div>
      </div>
    </>
  )
}
export default LeaderBoard