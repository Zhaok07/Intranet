import { Link } from "react-router-dom"
import '../POP/LinkPop.css'
function LinkPop(){
    return(
        <nav className="POP">
        <Link to="/pop">POP</Link>
        </nav>
    )
}

export default LinkPop