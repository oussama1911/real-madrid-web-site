import { useEffect, useState } from "react"
import { PlayersType } from "../types/playersTypes"
import { getPlayers } from "../api/players"
 import "../styling/players.css";

const PlayersDetails = () => {
    const [players, setPlayers] = useState<PlayersType[]>([]); 
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPlayers() {
            try {
                const data = await getPlayers();
                console.log(data);
                setPlayers(data);
            } catch (err) {
                console.error("Error fetching players:", err);
                setError("Failed to load players. Please try again later.");
            }
        }
        fetchPlayers();
    }, []);

    if (error) return <h1>{error}</h1>;
    if (players.length === 0) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="players-divs">
            <div className="players-bond">
                <p className="players-bond-text">Players of the team</p>
            </div>
            <div className="player-container">
            {players.map(player => (
                <div key={player._id} className="players-container">
                    <img className="players-img" src={player.imageUrl} alt={player.name} />
                    <div className="players-info">
                        <p className="players-name">{player.name}</p>
                        <p className="players-position">{player.position}</p>
                        <p className="players-number">{player.number}</p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}

export default PlayersDetails;