import { PicsType } from "../types/picsTypes"
import { Link } from "react-router-dom"



const Pics = ({ pics }: { pics: PicsType }) => {


    return (
        <div className="pics-item">
            <Link to={`/pics/${pics._id}`}>
                <p>{pics.category}</p>
                <img src={pics.imageUrl} alt="poster" />
                
            </Link>
            

        </div>
    )
}

export default Pics