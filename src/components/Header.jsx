import { Link } from "react-router-dom"
import { logoIcon } from "../assets/svgs"

const Header = () => {
  return (
    <>
        <div className="sm:h-20 sm:w-20 h-[8vh] w-[8vh]">
            <Link to='/' className=""><img src={logoIcon} alt=""  /></Link>
        </div>
    </>
  )
}

export default Header