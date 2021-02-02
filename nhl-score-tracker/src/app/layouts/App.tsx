import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { ITeam } from '../models/team';
import NavBar from '../../features/nav/NavBar';
import { TeamDashboard } from '../../features/teams/teamDashboard';
import agent from '../api/agent';
import teams from '../api/teams';
import { HeadToHead } from '../../features/headtohead/HeadToHead';
import { Route } from 'react-router-dom';
import { HomePage } from '../../features/Home/HomePage';
import { IGameStatus } from '../models/gameStatus';
import { IGames } from '../models/games';

const App = () => {
  const [boysTeams, setBoysTeams] = useState<ITeam[]>([]);
  useEffect(() => {
    const boyTeamIDs: number[] = [
      teams.vegasID,
      teams.winnipegID,
      teams.pittsburghID,
      teams.carolinaID,
    ];
    agent.Teams(boyTeamIDs).then((response) => {
      setBoysTeams(
        response.teams.map((team: any) => {
          return {
            id: team.id,
            name: team.name,
            division: team.division.name,
            gamesPlayed: team.teamStats[0].splits[0].stat.gamesPlayed,
            wins: team.teamStats[0].splits[0].stat.wins,
            losses: team.teamStats[0].splits[0].stat.losses,
            overTimeLoses: team.teamStats[0].splits[0].stat.ot,
            points: team.teamStats[0].splits[0].stat.pts,
            nhlURL: team.officialSiteUrl,
            logo: '',
          };
        })
      );
    });
  }, []);

  // const [boysSchedule, setBoysSchedule] = useState<IGames[]>([]);
  // useEffect(() => {
  //   agent
  //     .TeamGames(
  //       [teams.carolinaID, teams.pittsburghID, teams.vegasID, teams.winnipegID],
  //       '2021-01-01',
  //       '2021-01-31'
  //     )
  //     .then((response) => {
  //       setBoysSchedule(
  //         response.dates.map((date: any) => {
  //           return {
  //             date: date.date,
  //             games: date.games.map((game: any) => {
  //               return {
  //                 date: game.gameDate,
  //                 status: game.status.detailedState,
  //                 homeTeam: {
  //                   teamName: game.teams.home.team.name,
  //                   score: game.teams.home.score,
  //                 },
  //                 awayTeam: {
  //                   teamName: game.teams.away.team.name,
  //                   score: game.teams.away.score,
  //                 },
  //               };
  //             }),
  //           };
  //         })
  //       );
  //     });
  // }, []);

  const [girlsTeams, setGirlsTeams] = useState<ITeam[]>([]);
  useEffect(() => {
    const girlsTeamIDs: number[] = [
      teams.bostonID,
      teams.coloradoID,
      teams.edmontonID,
      teams.tamptaBayID,
    ];
    agent.Teams(girlsTeamIDs).then((response) => {
      setGirlsTeams(
        response.teams.map((team: any) => {
          return {
            id: team.id,
            name: team.name,
            division: team.division.name,
            gamesPlayed: team.teamStats[0].splits[0].stat.gamesPlayed,
            wins: team.teamStats[0].splits[0].stat.wins,
            losses: team.teamStats[0].splits[0].stat.losses,
            overTimeLoses: team.teamStats[0].splits[0].stat.ot,
            points: team.teamStats[0].splits[0].stat.pts,
            nhlURL: team.officialSiteUrl,
            logo: '',
          };
        })
      );
    });
  }, []);

  return (
    <div className="App">
      <NavBar />

      <Container style={{ marginTop: '7em' }}>
        <Route exact path="/" component={HomePage} />
        <Route path="/boysdashboard">
          <TeamDashboard teams={boysTeams} teamName={'The Boys'} />
        </Route>
        <Route path="/girlsdashboard" component={TeamDashboard}>
          <TeamDashboard teams={girlsTeams} teamName={'The Girls'} />
        </Route>
        <Route path="/headtohead">
          <HeadToHead boysTeam={boysTeams} girlsTeam={girlsTeams} />
        </Route>
      </Container>
    </div>
  );
};

export default App;
