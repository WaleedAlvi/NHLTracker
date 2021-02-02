import React, { useEffect, useState } from 'react';
import { Container, Table } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import { IGames } from '../../app/models/games';
import { ITeam } from '../../app/models/team';
import { IGameStatus } from '../../app/models/gameStatus';
import { ITeamScore } from '../../app/models/teamScore';
import * as calculateStat from '../../app/shared/calculateTotal';
import { GameSchedule } from '../scores/GameSchedule';
import { TeamDetail } from './TeamDetail';
import { connect } from 'react-redux';

interface IProps {
  teams: ITeam[];
  teamName: string;
}

const TeamDashboard: React.FC<IProps> = ({ teams, teamName }) => {
  teams.sort((a, b) => b.points - a.points);
  let teamIds: number[] = [];
  let startDate: string = '2021-01-01';
  let endDate: string = '2021-01-31';

  const [games, setGames] = useState<IGames[]>([]);
  useEffect(() => {
    teams.map((team) => {
      teamIds.push(team.id);
    });

    agent.TeamGames(teamIds, startDate, endDate).then((response) => {
      console.log(response);
      setGames(
        response.dates.map((date: any) => {
          return {
            date: date.date,
            games: date.games.map((game: any) => {
              return {
                date: game.gameDate,
                status: game.status.detailedState,
                homeTeam: {
                  teamName: game.teams.home.team.name,
                  score: game.teams.home.score,
                },
                awayTeam: {
                  teamName: game.teams.away.team.name,
                  score: game.teams.away.score,
                },
              };
            }),
          };
        })
      );
      console.log(games);
    });
  }, []);

  return (
    <Container>
      <Container>
        <GameSchedule gameSchedule={games} />
      </Container>
      <Container>
        <Table style={{ overflowX: 'auto' }}>
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>{teamName}</Table.HeaderCell>
              <Table.HeaderCell>Team</Table.HeaderCell>
              <Table.HeaderCell>Games Played</Table.HeaderCell>
              <Table.HeaderCell>Wins</Table.HeaderCell>
              <Table.HeaderCell>Loses</Table.HeaderCell>
              <Table.HeaderCell>OT Loses</Table.HeaderCell>
              <Table.HeaderCell>Points</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <TeamDetail teams={teams} />

          <Table.Footer>
            <Table.Row textAlign="center">
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Totals</Table.HeaderCell>
              <Table.HeaderCell>
                {calculateStat.TotalGamesPlayed(teams)}
              </Table.HeaderCell>
              <Table.HeaderCell>
                {calculateStat.TotalWins(teams)}
              </Table.HeaderCell>
              <Table.HeaderCell>
                {calculateStat.TotalLoses(teams)}
              </Table.HeaderCell>
              <Table.HeaderCell>
                {calculateStat.TotalOTLoses(teams)}
              </Table.HeaderCell>
              <Table.HeaderCell>
                <b>{calculateStat.TotalPoints(teams)}</b>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state: ITeam) => {
  return {
    id: state.id,
    name: state.name,
    division: state.division,
    gamesPlayed: state.gamesPlayed,
    wins: state.wins,
    losses: state.losses,
    overTimeLoses: state.overTimeLoses,
    points: state.points,
    nhlURL: state.nhlURL,
    logo: state.logo,
  };
};

export default connect()(TeamDashboard);
