import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
import agent from '../../app/api/agent';
import { IGames } from '../../app/models/games';
import { ITeam } from '../../app/models/team';
import { IGameStatus } from '../../app/models/gameStatus';
import { ITeamScore } from '../../app/models/teamScore';
import * as calculateStat from '../../app/shared/calculateTotal';
import { GameSchedule } from '../scores/GameSchedule';
import { TeamDetail } from './TeamDetail';

interface IProps {
  teams: ITeam[];
  teamName: string;
}

export const TeamDashboard: React.FC<IProps> = ({ teams, teamName }) => {
  teams.sort((a, b) => b.points - a.points);
  let teamIds: number[] = [];
  let startDate: string = '2021-01-01';
  let endDate: string = '2021-01-31';

  // const [games, setgames] = useState<IGames>({
  //   date: '',
  //   games: [],
  // });
  // useEffect(() => {
  //   teams.map((team) => {
  //     teamIds.push(team.id);
  //   });

  //   agent.TeamGames(teamIds, startDate, endDate).then((response) => {
  //     console.log(response.dates);
  //     // response.dates.map((date: any) => {
  //     //   return setgames({
  //     //     date: date.date,
  //     //     games: [],
  //     //   });
  //     // });
  //     // console.log(games);
  //   });
  // });

  <GameSchedule />;

  return (
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
          <Table.HeaderCell>{calculateStat.TotalWins(teams)}</Table.HeaderCell>
          <Table.HeaderCell>{calculateStat.TotalLoses(teams)}</Table.HeaderCell>
          <Table.HeaderCell>
            {calculateStat.TotalOTLoses(teams)}
          </Table.HeaderCell>
          <Table.HeaderCell>
            <b>{calculateStat.TotalPoints(teams)}</b>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};
