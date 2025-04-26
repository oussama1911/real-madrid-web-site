
import '../styling/ranking.css';

const Ranking = () => {
  const teams = [
    { position: 1, name: 'Barcelona', points: 76, played: 33, wins: 24, draws: 4, losses: 5, goalDiff: '+57' },
    { position: 2, name: 'Real Madrid', points: 72, played: 33, wins: 22, draws: 6, losses: 5, goalDiff: '+35' },
    { position: 3, name: 'Atlético Madrid', points: 66, played: 33, wins: 19, draws: 9, losses: 5, goalDiff: '+29' },
    { position: 4, name: 'Athletic Club', points: 60, played: 33, wins: 16, draws: 12, losses: 5, goalDiff: '+24' },
    { position: 5, name: 'Real Betis', points: 54, played: 33, wins: 15, draws: 9, losses: 9, goalDiff: '+9' },
    { position: 6, name: 'Villarreal', points: 52, played: 32, wins: 14, draws: 10, losses: 8, goalDiff: '+10' },
    { position: 7, name: 'Celta de Vigo', points: 46, played: 33, wins: 13, draws: 7, losses: 13, goalDiff: '+1' },
    { position: 8, name: 'Osasuna', points: 44, played: 33, wins: 10, draws: 14, losses: 9, goalDiff: '-6' },
    { position: 9, name: 'Mallorca', points: 44, played: 33, wins: 12, draws: 8, losses: 13, goalDiff: '-7' },
    { position: 10, name: 'Real Sociedad', points: 42, played: 33, wins: 12, draws: 6, losses: 15, goalDiff: '-5' },
    { position: 11, name: 'Rayo Vallecano', points: 41, played: 33, wins: 10, draws: 11, losses: 12, goalDiff: '-7' },
    { position: 12, name: 'Getafe', points: 39, played: 33, wins: 10, draws: 9, losses: 14, goalDiff: '+1' },
    { position: 13, name: 'Espanyol', points: 39, played: 32, wins: 10, draws: 9, losses: 13, goalDiff: '-6' },
    { position: 14, name: 'Valencia', points: 39, played: 33, wins: 9, draws: 12, losses: 12, goalDiff: '-12' },
    { position: 15, name: 'Sevilla', points: 37, played: 33, wins: 9, draws: 10, losses: 14, goalDiff: '-9' },
    { position: 16, name: 'Girona', points: 35, played: 33, wins: 9, draws: 8, losses: 16, goalDiff: '-12' },
    { position: 17, name: 'Deportivo Alavés', points: 34, played: 33, wins: 8, draws: 10, losses: 15, goalDiff: '-11' },
    { position: 18, name: 'Las Palmas', points: 32, played: 33, wins: 8, draws: 8, losses: 17, goalDiff: '-15' },
    { position: 19, name: 'Leganés', points: 30, played: 33, wins: 6, draws: 12, losses: 15, goalDiff: '-19' },
    { position: 20, name: 'Real Valladolid', points: 16, played: 33, wins: 4, draws: 4, losses: 25, goalDiff: '-57' }
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
    </div>
  );
};

export default Ranking;