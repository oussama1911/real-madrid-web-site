import { NextgameType } from "../types/nextgameTypes";
import { Link } from "react-router-dom";

const Nextgame = ({ nextgame }: { nextgame: NextgameType }) => {
    return (
        <div className="nextgame-item">
            <Link to={`/nextgame/${nextgame._id}`}>
                <p>{nextgame.team}</p>
                <img src={nextgame.imageUrl} alt="poster" />
                <p> {nextgame.time}</p>
                <p>{nextgame.category}</p>
            </Link>
        </div>
    );
};

export default Nextgame;