import NewsDetails from "../pages/NewsDetails"
import LastgameDetails from "../pages/LastgameDetails"
import NextgameDetails from "../pages/NextgameDetails"
import PicsDetails from "../pages/PicsDetails"
import Achievements from "./Achievements"
import "../styling/achievements.css"
import "../styling/home.css"
import Squad from "./Squad"
import { Link } from "react-router-dom"


const Ranking = () => {
    const teams = [
        { position: 1, name: 'Barcelona', points: 70, played: 31, wins: 22, draws: 4, losses: 5, goalDiff: '+55' },
        { position: 2, name: 'Real Madrid', points: 63, played: 30, wins: 19, draws: 6, losses: 5, goalDiff: '+32' },
        { position: 3, name: 'Atlético Madrid', points: 60, played: 30, wins: 17, draws: 9, losses: 4, goalDiff: '+25' },
        { position: 4, name: 'Athletic Club', points: 54, played: 30, wins: 14, draws: 12, losses: 4, goalDiff: '+22' },
        { position: 5, name: 'Villarreal', points: 48, played: 29, wins: 13, draws: 9, losses: 7, goalDiff: '+12' },
       
    ];

    return (
        <div className="league-table">
            <h1>PRIMERA DIVISIÓN</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th>PT</th>
                        <th>PJ</th>
                        <th>V</th>
                        <th>E</th>
                        <th>D</th>
                        <th>DG</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map((team) => (
                        <tr key={team.name}>
                            <td>{team.position}</td>
                            <td className="team-name">{team.name}</td>
                            <td>{team.points}</td>
                            <td>{team.played}</td>
                            <td>{team.wins}</td>
                            <td>{team.draws}</td>
                            <td>{team.losses}</td>
                            <td>{team.goalDiff}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <button className="ranking-btn">
                    <Link to="/ranking" className="ranking-btn">  CHECK ALL THE RANKING </Link>
                </button>
        </div>
    );
};

const Home = () => {
    return (
        <div className="home">
            <NewsDetails />
            <LastgameDetails />
            <NextgameDetails />
            <button className="ranking-btn">
                    <Link to="/schedule" className="ranking-btn">  CHECK ALL THE SCHEDULE </Link>
                </button>
            <Ranking />
            <PicsDetails />
            <Squad/>
            <button className="ranking-btn">
                    <Link to="/players" className="ranking-btn">  CHECK ALL THE PLAYERS </Link>
                </button>
            <Achievements />
            <div className="history-home-container">
                <p className="history-home-title"> real madrid history</p>
                <div className='foundation'> On March 6, 1902, the Madrid Foot Ball Club is founded by a group of fans in Madrid, Spain. <br /> Later known as Real Madrid, the club would become the most successful European football (soccer) franchise of the 20th century. <br />

                    With its trademark blue-and-white uniforms (originally inspired by those of an English team), <br /> Madrid began to make a name for itself in Spain almost right away. From 1905 to 1908, with future coach Arthur Johnson on the roster, <br /> the team won four cup titles in a row. In 1932, Real Madrid won the first of (as of 2024) 36 championships in La Liga, <br /> the top Spanish soccer league, including an impressive five consecutive titles from 1986 to 1990.
                </div>
                <button className="history-btn">
                    <Link to="/history" className="history-btn">  read all the history </Link>
                </button>
            </div>
        </div>
    )
}

export default Home