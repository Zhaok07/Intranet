import { Link } from "react-router-dom"
import "../Home/LinkHome.css"
function LinkHome(){
    return(
        <div className="Home">
            <Link to="/home">INICIO</Link>
        </div>
    )
}

export default LinkHome