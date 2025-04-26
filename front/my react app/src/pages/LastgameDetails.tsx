import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { LastgameType } from "../types/lastgameTypes";
import { getLastgame } from "../api/lastgame";
import "../styling/lastgame.css";

const LastgameDetails = () => {

    const [lastgame, setLastgame] = useState<LastgameType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchLastgame() {
            try {
                const data = await getLastgame();
                console.log(data);
                setLastgame(data);
            } catch (err) {
                console.error("Error fetching lastgame:", err);
                setError("Failed to load lastgame. Please try again later.");
            }
        }
        fetchLastgame();
    }, []);

    if (error) return <h1>{error}</h1>;
    if (!lastgame) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (
        <div className="lastgames-container">
            <div className="players-bond">
                <p className="players-bond-text">Last Games</p>
            </div >

            <div className="lastgame-div">
                {lastgame.map((lastgame, index) => (
                    <div className="lastgame-card" key={index}>
                        <p className="game-title">{lastgame.title}</p>
                        <p className="game-score">{lastgame.score}</p>
                        <p className="game-date">{lastgame.date}</p>
                    </div>

                ))}
            </div>

        </div>
    );
};

export default LastgameDetails;