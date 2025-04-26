import {PlayersType } from "../types/playersTypes"
import { Link } from "react-router-dom"



const Players = ({ players }: { players: PlayersType }) => {


    return (
        <div className="players-item">
            <Link to={`/players/${players._id}`}>
                <p>{players.position}</p>
                <img src={players.imageUrl} alt="poster" />
                <p>{players.number}</p>
                
            </Link>
            

        </div>
    )
}

export default Players