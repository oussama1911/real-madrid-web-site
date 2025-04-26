import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { NextgameType } from "../types/nextgameTypes";
import { getNextgame } from "../api/nextgame";
import "../styling/nextgame.css";


const NextgameDetails = () => {

    const [nextgame, setNextgame] = useState<NextgameType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchNextgame() {
            try {
                const data = await getNextgame();
                console.log(data);
                setNextgame(data);
            } catch (err) {
                console.error("Error fetching nextgame:", err);
                setError("Failed to load nextgame. Please try again later.");
            }
        }
        fetchNextgame();
    }, []);

    if (error) return <h1>{error}</h1>;
    if (!nextgame) return <h1>Loading... If this takes too long, please check your connection.</h1>;

    return (



        <div className="nextgame-container">
            <p className="nextgame-title">NEXT GAMES</p>
            <div className="nextgames-div">
                {nextgame.map((nextgame, index) => (
                    <div className="nextgame-div" key={index}>
                        <div className="nextgame-info">
                            <p className="nextgame-team">{nextgame.team}</p>
                            <p className="nextgame-time">{nextgame.time}</p>
                            <p className="nextgame-category">{nextgame.category}</p>
                        </div>
                        <img className="nextgame-img" src={nextgame.imageUrl} alt={nextgame.team} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NextgameDetails;