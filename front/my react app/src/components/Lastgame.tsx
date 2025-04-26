import { LastgameType } from "../types/lastgameTypes";
import { Link } from "react-router-dom";

const Lastgame = ({ lastgame }: { lastgame: LastgameType }) => {
    return (
        <div className="lastgame-item">
            <Link to={`/lastgame/${lastgame._id}`}>
                <p>{lastgame.title}</p>
                <p>{lastgame.score}</p>
                <p>{lastgame.date}</p>
            </Link>
        </div>
    );
};
export default Lastgame;
